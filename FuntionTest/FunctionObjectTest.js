QUnit.module( "FunctionTest" );

QUnit.test( "FunctionObjectTest", function( assert ) {
    var add = function (arg1, arg2) {
        return arg1 + arg2;
    };

    assert.deepEqual(typeof add, 'function');

    //Function can be passed as argument
    function another(addFun) {
         assert.deepEqual(addFun(2,4), 6);
    }
    another(add);

    //Function cab be returned from another function
    function addAnother() {
        return function(arg1, arg2) {
            return arg1 + arg2;
        }
    }
});