var TEXT_ROBOT = "Je ne suis pas un robot";
var TEXT_POWERED = '<img src="img/logo_small.png">';
var TEXT_TOOLTIP_TITLE = 'Trouvez les occurences du mot : <span class="word_to_find">CAPITAINE</span>';
var TEXT_VALIDER = 'VALIDER';
var TEXT_NEW = '<i class="fas fa-sync"></i>Recharger';

$( document ).ready(function() {
    $captcha = $("#captcha");
    // THE CAPCHA FORM BOX
    $captcha.append('<div class="checkbox_div"><div class="checkbox_box"><i class="fas fa-check" style="display: none;"></i></div></div>');
    $captcha.append('<div class="text_robot">'+TEXT_ROBOT+'</div>');
    $captcha.append('<div class="text_powered">'+TEXT_POWERED+'</div>');

    // VERIFICATION TOOLTIP
    $captcha.append('<div class="verification_tooltip" style="display: none;"></div>');
    createVerificationTooltip($captcha.children().last());

    addListeners();
});

function createVerificationTooltip($tooltip){
    $tooltip.append('<div class="loader" style="display: none;"></div>');
    $tooltip.append('<div class="tooltip_title">'+TEXT_TOOLTIP_TITLE+'</div>');
    $tooltip.append('<div class="tooltip_pictures_box"></div>');
    $pBox = $tooltip.children().last();
    for (let index = 0; index < 9; index++) {
        $pBox.append('<div class="tooltip_picture_box_'+index+'"><img src="img/metier/'+(index+1)+'.png" /></div>')
    }
    $tooltip.append('<div class="tooltip_buttons"></div>');
    $tooltip.children().last().append('<div></div>');
    $tooltip.children().last().append('<div class="tooltip_button_OK_box"><div class="btnOK">'+TEXT_VALIDER+'</div></div>');
    $tooltip.children().last().append('<div class="tooltip_link_new_box"><div class="linkNew">'+TEXT_NEW+'</div></div>');
}

function addListeners(){
    $(".checkbox_box").on("click", function(){
        if (!$(this).hasClass("opened")){
            $(this).addClass("opened");
            $(".verification_tooltip").fadeIn(200);
        }
        else{
            $(this).removeClass("opened");
            $(".verification_tooltip").fadeOut(200);
        }
    });
    $(".tooltip_pictures_box>div").on("click", function(){
        $(this).toggleClass("selected");
    });
    $(".tooltip_buttons .btnOK").on("click", function(){
        $(".loader").show();
        $(".verification_tooltip").addClass("validating");
        setTimeout(function(){
            $(".checkbox_box").removeClass("opened");
            $(".verification_tooltip").fadeOut(200);
            setTimeout(function(){
            $(".checkbox_box").addClass("active");
            $(".checkbox_box i").fadeIn(400);
            },300);
        },700);
    });
    $(".tooltip_buttons .linkNew").on("click", function(){
        alert("new");
    });
}
