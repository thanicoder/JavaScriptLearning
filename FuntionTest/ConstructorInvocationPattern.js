QUnit.module( "FunctionTest" );

QUnit.test( "ConstructorInvocationPattern", function( assert ) {
    //Javascript is a prototypical inheritance language, ie an object can directly inherit from any other object.
    // The language is class-free.

    // Create a constructor function called Quo.
    // It makes an object with a status property.
    var Quo = function (string) {
        this.status = string;
    };

    // Give all instances of Quo a public method
    Quo.prototype.get_status = function() {
      return this.status;
    };

    var myQuo = new Quo("confused");
    assert.deepEqual(myQuo.get_status(), "confused");

});