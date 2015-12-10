var _=require("underscore");
module.exports = function(req,res){
    var language = req.cookies["flashcard-language"];
    var flashcardData = require("../data/flashcards.json");
    var cards = getFourRandomCards(flashcardData.flashcards);
    var languageInfo = _.find(flashcardData.languages, function(item){return item.language === language});
    var pick = Math.floor(Math.random()*4);
    var model = {
        pick:pick,
        language:languageInfo,
        caption: _.find(cards[pick].card.captions, function(caption){return caption.language === language;}),
        cards:cards
    };
    res.render("flashcards.ejs",model);
};

function getFourRandomCards(cards){
    var result = [];
    while(result.length < 4) {
        var cardIndex = Math.floor(Math.random() * cards.length);
        if (!_.contains(result, cardIndex))
            result.push(cardIndex);
    }
    return _.map(result, function(cardIndex){return {"index":cardIndex,"card":cards[cardIndex]};})
}
