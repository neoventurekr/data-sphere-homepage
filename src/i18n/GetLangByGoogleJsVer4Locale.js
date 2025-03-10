const fs = require("fs");

/**
 최초만든이 : Lucas.choi
 생성일 : 2022-07-07
 */

const {loadSpreadsheet} = require("./GetLangByLib");
const filePath = "./public/locales/";
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
            const key = row['Key'];
            let value = row[lang];
            // 한글자짜리 key 이면서 value 가 없는 경우는 빈칸 처리
            if(!value && row['ko'].length === 1){ value = " ";}
            finalObj[lang][key] = value?.trim() || '';
        })
    });
    return finalObj;
}



const sheetId = '1694498330';
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
    console.log('res');
    console.log(res);
    langs.forEach(lang => {
        const fileName = filePath + `${lang}/common.json`;
        fs.writeFileSync(fileName, JSON.stringify(res[lang], null, "\t"), "utf8");
    })
}

loadInfo().then(()=>{
    console.log('complete');
});

