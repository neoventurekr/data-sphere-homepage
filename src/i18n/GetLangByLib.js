// place in translate/index.js
const {GoogleSpreadsheet} = require('google-spreadsheet');
// const creds = require('./credentials/cyclubmobile-a32fa4c8afe7_for_exceldownload.json');
const creds = require('./credentials/datasphere-453302-6de01ef5e2b0.json');
const spreadsheetDocId = '1nKTvIOzvsbPMh8v8dCWMGnWROla7aWHX7mz7E1JTDQA';
const ns = 'translation';

const rePluralPostfix = new RegExp(/_plural|_[\d]/g);
const sheetId = 0; // your sheet id
const NOT_AVAILABLE_CELL = '_N/A';
const columnKeyToHeader = {
    key: '키',
    'ko-KR': '한글',
    'en-US': '영어',
    'ja-JP': '일본어',
    'zh-CN': '중국어',
};

/**
 * getting started from https://theoephraim.github.io/node-google-spreadsheet
 */
async function loadSpreadsheet() {
    // eslint-disable-next-line no-console
    console.info(
        '\u001B[32m',
        '=====================================================================================================================\n',
        '# i18next auto-sync using Spreadsheet\n\n',
        '  * Download translation resources from Spreadsheet and make /assets/locales/{{lng}}/{{ns}}.json\n',
        '  * Upload translation resources to Spreadsheet.\n\n',
        `The Spreadsheet for translation is here (\u001B[34mhttps://docs.google.com/spreadsheets/d/${spreadsheetDocId}/#gid=${sheetId}\u001B[0m)\n`,
        '=====================================================================================================================',
        '\u001B[0m'
    );

    // spreadsheet key is the long id in the sheets URL
    const doc = new GoogleSpreadsheet(spreadsheetDocId);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(); // loads document properties and worksheets

    return doc;
}

function getPureKey(key = '') {
    return key.replace(rePluralPostfix, '');
}

module.exports = {
    loadSpreadsheet,
    getPureKey,
    ns,
    sheetId,
    columnKeyToHeader,
    NOT_AVAILABLE_CELL,
};
