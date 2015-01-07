QUnit.module( "FunctionTest" );

QUnit.test( "AugmentingTypes", function( assert ) {
    Function.prototype.method = function (name, func) {
        this.prototype[name] = func;
        return this;
    };

    Number.method("integer", function () {
        return Math[this < 0 ? 'ceiling' : 'floor'](this);
    });
    assert.deepEqual((10/3).integer(), 3);

    String.method("trim", function() {
       return this.replace(/^\s+|\s+$/g, '');
    });
    assert.deepEqual('     Hello, World    '.trim(), 'Hello, World');

});