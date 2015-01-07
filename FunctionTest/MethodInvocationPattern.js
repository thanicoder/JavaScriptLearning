QUnit.module( "FunctionTest" );

QUnit.test( "MethodInvocationPattern", function( assert ) {
    //When a function is stored as a property of an object we call it as a method
    var myObject = {
        value: 0,
        increment: function() {
            this.value++;
            return this.value;
        }
    };

    assert.deepEqual(myObject.increment(), 1);
    assert.deepEqual(myObject.increment(), 2);

});