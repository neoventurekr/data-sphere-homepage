// eslint-disable-next-line @typescript-eslint/no-require-imports
var en = require("./translations.En.json");
// eslint-disable-next-line @typescript-eslint/no-require-imports
var ko = require("./translations.Ko.json");

const  i18n  =  {
  translations : {
    en,
    ko
  },
  defaultLang : "en",
  useBrowserDefault : true,
};

module.exports = i18n;