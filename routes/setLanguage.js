module.exports = function(req, res){
    var language = req.body.language;
    var cookieAge = 24*60*60*1000; // 1 day
    res.cookie("flashcard-language",language,{maxAge:cookieAge, httpOnly:true});
    res.redirect("/flashcard");
};