var TEXT_ROBOT = "Je ne suis pas un robot";
var TEXT_POWERED = "Fournit par les Archives Nationales";
var TEXT_TOOLTIP_TITLE = 'Trouvez les occurences du mot : <span class="word_to_find">SOLDAT</span>';

$( document ).ready(function() {
    $captcha = $("#captcha");
    // THE CAPCHA FORM BOX
    $captcha.append('<div class="checkbox_div"><div class="checkbox_box"></div></div>');
    $captcha.append('<div class="text_robot">'+TEXT_ROBOT+'</div>');
    $captcha.append('<div class="text_powered">'+TEXT_POWERED+'</div>');

    // VERIFICATION TOOLTIP
    $captcha.append('<div class="verification_tooltip"></div>');
    createVerificationTooltip($captcha.children().last());

    addListeners();
});

function createVerificationTooltip($tooltip){
    $tooltip.append('<div class="tooltip_title">'+TEXT_TOOLTIP_TITLE+'</div>');
    $tooltip.append('<div class="tooltip_pictures_box"></div>');
    $pBox = $tooltip.children().last();
    for (let index = 0; index < 9; index++) {
        $pBox.append('<div class="tooltip_picture_box_'+index+'"><img src="" /></div>')
    }
}

function addListeners(){
    $(".tooltip_pictures_box>div").on("click", function(){
        $(this).toggleClass("selected");
    })
}
