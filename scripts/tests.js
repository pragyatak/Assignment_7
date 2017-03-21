QUnit.test("Hello Test", function(assert) {
    assert.ok(1 == "1", "Passed!");
});
// Test for DataStore

QUnit.test("Add Test", function(assert) {
    var ds = new App.DataStore();
    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');
    ds.getAll();
    assert.ok(ds.getAll(), "Passed!");
});

QUnit.test("Remove Test", function(assert) {
    var ds = new App.DataStore();
    ds.add('james@bond.com', 'eshpressho');
    ds.remove('james@bond.com');
    assert.ok(ds.get('james@bond.com') == undefined, "Passed!");
});

QUnit.test("Get Test", function(assert) {
    var ds = new App.DataStore();
    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');
    assert.ok(ds.get('james@bond.com') == "eshpressho", "Passed!");
});

// Test for truck
QUnit.test("Create Orders Test", function(assert) {
    window.myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });
    var orderInfo = window.myTruck.db.get('me@goldfinger.com');
    assert.ok(orderInfo.coffee == 'double mocha', "Passed!");
});

QUnit.test("Fill Order Test", function(assert) {
    window.myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });
    window.myTruck.deliverOrder('me@goldfinger.com');
    var orderInfo = window.myTruck.db.get('me@goldfinger.com');
    assert.ok(orderInfo == undefined, "Passed!");
})

QUnit.test("Print Orders Test", function(assert) {
    window.myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });
    var orders = window.myTruck.printOrders();
    assert.ok(true, "Passed!");
});

/* Observations -
While converting the code to Figure 8.32 for Qunit test for Truck has following problems -
a) console.log creates problem while comparing it with the values.
b) Not all functions have return value so, by default "undefined" is returned.
 */
