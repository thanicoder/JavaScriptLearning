QUnit.module( "FunctionTest" );

QUnit.test( "FunctionArguments", function( assert ) {
    //arguments provide access to all arguments passed to the function call. But arguments is not an array.
    // It is array like object with length property, but lacks all of the array methods

    var add = function() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    };

    assert.deepEqual(add(1,2,3,4,5), 15);
});