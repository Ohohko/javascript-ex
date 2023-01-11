const book1 = {
    name: "java book",
    author: "vladimir",
    year: 1988,
  };
  
  const book2 = {
    name: "c book",
    author: "martin",
    year: 1963,
  };
  
  const bookUtils = {
    setNewEdition: function (book, edtionYear) {
      book["latestEdition"] = edtionYear;
    },
  
    setLanguage: function (book, language) {
      book["language"] = language;
    },
    setTranslation: function (book, language, translator) {
      book["translation"] = { translator: translator, language: language };
    },
  };