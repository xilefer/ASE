var Login = new Login();
var Controller = new ApplicationController(navigate);

$(document).on("pagebeforeshow", "#loginPage", function () {
    Login.updateLoginButtonEnabled();
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
        Login.updateLoginButtonEnabled();
    });
});

$(function () {
    $('#username').keyup(function () {
        Controller.username = $('#username').val();
        Login.updateLoginButtonEnabled();
    });
});

