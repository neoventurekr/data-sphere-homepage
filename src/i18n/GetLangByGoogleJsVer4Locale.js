const fs = require("fs");

/**
 최초만든이 : Lucas.choi
 생성일 : 2022-07-07
 */

const {loadSpreadsheet} = require("./GetLangByLib");
const filePath = "./i18n/";
function getDefaultObj(langArr){
    const finalObj = {};
    langArr.forEach(lang => {
        finalObj[lang] = {};
    });
    return finalObj;
}

function parseArrDataToJsonByLangKey(googleDocArr, langArr) {
    const finalObj = getDefaultObj(langArr);
    googleDocArr.forEach(row => {
        langArr.forEach(lang => {
            const keyParent = row['key_parent'];
            const key = row['key_child'];
            let value = row[lang];
            let value2 = row[lang+"_싸이클럽글씨수정본"];
            // 싸이클럽 문구 대체 수정본 문구가 있는 경우, 수정본 텍스트로 대체
            value = value2 ? value2 : value;
            // 한글자짜리 key 이면서 value 가 없는 경우는 빈칸 처리
            if(!value && row['Ko'].length == 1){ value = " ";}
            if(!finalObj[lang][keyParent]){
                finalObj[lang][keyParent] = {};
            }
            finalObj[lang][keyParent][key] = value?.trim();
        })
    });
    return finalObj;
}



const sheetId = '0';
const langs = ['Ko', 'En'];

async function fetchTranslationsFromSheetToJson(doc) {
    const sheet = doc.sheetsById[sheetId];
    if (!sheet) {
        return {};
    }
    const rows = await sheet.getRows();
    return parseArrDataToJsonByLangKey(rows, langs);
}

async function loadInfo(){
    const doc = await loadSpreadsheet();
    const res = await fetchTranslationsFromSheetToJson(doc);
    langs.forEach(lang => {
        const fileName = filePath+"translations."+lang+".json";
        fs.writeFileSync(fileName, JSON.stringify(res[lang], null, "\t"), "utf8");
    })
}

loadInfo().then(()=>{
    console.log('complete');
});
