module.exports = function(req, res){
    var flashcardData = require("../data/flashcards.json");
    var model={languages: flashcardData.languages};
    res.clearCookie("flashcard-language");
    res.render("welcome.ejs",model);
};