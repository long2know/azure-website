$(function(){
   $(".flashcard-image-row img").click(onClickFlashcardImage);
    $("#correct,#wrong").click(onClickResult);

    function onClickFlashcardImage(){
        var image = $(this),
            isCorrect = image.attr("data-is-correct"),
            wrongImages = $(".flashcard-area img[data-is-correct='false']"),
            result = null;
        wrongImages.fadeTo(250,0.25);

        if (isCorrect === "true"){
            result = $(".correct")
        }else{
            result = $(".wrong");
        }

        result.removeClass("standby");
        result.delay(1000);
        result.fadeTo(1500,0.85);
    }

    function onClickResult(){
        location.reload(true);
    }
});