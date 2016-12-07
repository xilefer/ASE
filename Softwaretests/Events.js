var Controller = new ApplicationController(navigate);

function updateLoginButtonEnabled() {
    if (Controller.loginPossible()) {
        $('#Loginbutton').prop("disabled", false);
    } else {
        $('#Loginbutton').prop("disabled", true);
    }
}

$(document).on("pagebeforeshow", "#loginPage", function () {
    updateLoginButtonEnabled();
});
$(document).on("pagebeforeshow", "#welcomepage", function () {
    $('#welcomelabel').text("Willkommen: " + Controller.username);
});
$(function() {
    $('#Loginbutton').click(function(e) {
        e.preventDefault();
        Controller.login();
        navigate('#welcomepage');
    });
});
$(function() {
    $('#password').keyup(function () {
        Controller.password = $('#password').val();
        updateLoginButtonEnabled();
    });
});

$(function () {
    $('#username').keyup(function () {
        Controller.username = $('#username').val();
        updateLoginButtonEnabled();
    });
});

