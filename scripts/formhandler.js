(function(window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function(fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            var data = {};
            $(this).serializeArray().forEach(function(item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };

    FormHandler.prototype.addInputHandler = function(fn) {
        console.log('Setting input handler for form');
        this.$formElement.on('change', '[name="emailAddress"]', function(event) {
            var emailAddress = event.target.value;
            var message = '';
            if (fn(emailAddress)) {
                event.target.setCustomValidity('');
            } else {
                message = emailAddress + ' is not an authorized email address!';
                event.target.setCustomValidity(message);
            }
        });
    };

    FormHandler.prototype.addOrderHandler = function(fn) {
        console.log('Setting decaf handler for form');
        this.$formElement.on('input', '[name="coffee"],[name="strength"]', function(event) {
            if (event.target.name == 'coffee') {
                var cofeeOrder = event.target.value;
                var cofeeStrength = document.getElementById('strengthLevel').value;
            } else {
                var cofeeStrength = event.target.value;
                var cofeeOrder = document.getElementById('coffeeOrder').value;
            }
            var message = '';
            if (fn(cofeeOrder, cofeeStrength)) {
                document.getElementById('coffeeOrder').setCustomValidity('');
                document.getElementById('strengthLevel').setCustomValidity('');
            } else {
                if (event.target.name == 'coffee') {
                    message = 'Coffee Order should not be ' + cofeeOrder;
                    document.getElementById('strengthLevel').setCustomValidity('');
                } else {
                    message = 'Caffeine Rating: ' + cofeeStrength + ' should be less than 20';
                    document.getElementById('coffeeOrder').setCustomValidity('');
                }
                event.target.setCustomValidity(message);
            }
        });
    };

    App.FormHandler = FormHandler;
    window.App = App;
})(window);
