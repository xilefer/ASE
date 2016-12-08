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
        httpGetAsync("https://jsonplaceholder.typicode.com",
            function (XmlHttpResponseText) {
                $('#ResponseContent').innerHTML = XmlHttpResponseText;
            });
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

function httpGetAsync(theUrl, callback) {
    var XmlHttp = new XMLHttpRequest();
    XmlHttp.onreadystatechange = function () {
        if (XmlHttp.readyState === 4 && XmlHttp.status === 200) {
            callback(XmlHttp.responseText);
        }
    };
    XmlHttp.open("GET", theUrl, true);
    XmlHttp.send(null);
}

