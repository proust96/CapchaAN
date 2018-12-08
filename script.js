var TEXT_ROBOT = "Je ne suis pas un robot";
var TEXT_POWERED = "Fournit par les Archives Nationales";

$( document ).ready(function() {
    $captcha = $("#captcha");
    $captcha.append('<div class="checkbox_div"><div class="checkbox_box"></div></div>');
    $captcha.append('<div class="text_robot">'+TEXT_ROBOT+'</div>');
    $captcha.append('<div class="text_powered">'+TEXT_POWERED+'</div>');
});
