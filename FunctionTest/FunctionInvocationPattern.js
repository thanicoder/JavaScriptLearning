QUnit.module( "FunctionTest" );

QUnit.test( "FunctionInvocationPattern", function( assert ) {
    //When a function is stored as a property of an object we call it as a method
    var myObject = {
        value: 0,
        increment: function () {
            this.value++;
            return this.value;
        },
        getValue: function () {
            function helper() {
                //Here this points to global object, not myObject
                return this.value;
            }

            return helper();
        },
        getCorrectValue: function () {
            //Here this points to myObject, hence remember it
            var that = this;

            function helper() {
                //here that still point to myObject
                return that.value;
            }

            return helper();
        }
    };

    assert.deepEqual(myObject.getValue(), undefined);
    assert.deepEqual(myObject.getCorrectValue(), 0);
});