(function(window) {
    'use strict';
    var App = window.App || {};

    // constructors should have their first letter capital
    function DataStore() {
      console.log('running the DataStore function')
        this.data = {};
    }

    //function to access information
    DataStore.prototype.add = function(key, val) {
        this.data[key] = val;
    };

    DataStore.prototype.get = function(key) {
        return this.data[key];
    };

    DataStore.prototype.getAll = function() {
        return this.data;
    };

    DataStore.prototype.remove = function(key) {
        delete this.data[key];
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);
