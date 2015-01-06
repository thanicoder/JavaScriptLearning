QUnit.module( "FunctionTest" );

QUnit.test( "FunctionLiteralTest", function( assert ) {
    //Function can be within another function
    var add = function (arg1, arg2) {
        var sum = arg1 + arg2;
        function inner() {
            return sum;
        }
        return inner();
    };

    //Inner function has access to outer function
    assert.deepEqual(add(2,4), 6);

});