(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@codermind\.com$/.test(email);
        },
        isDecafed: function(strinValue, IntValue) {
            if (strinValue == 'decaf' && IntValue > 20) {
                return false;
            } else {
                return true;
            }
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
