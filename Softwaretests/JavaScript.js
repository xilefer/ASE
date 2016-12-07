function ApplicationController(navigate) {
    this.username = "";
    this.password = "";
    this.loginPossible = function () {
        if (this.username.length === 0 || this.password.length === 0) {
            return false;
        }
        else return true;
    };
    this.login = function () {
        this.customer = {
            name: this.username
        };
        navigate("#welcomepage");
    };
}

var navigate = function(target) {
    $.mobile.changePage(target);
};


