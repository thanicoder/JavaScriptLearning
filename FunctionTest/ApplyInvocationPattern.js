QUnit.module( "FunctionTest" );

QUnit.test( "Function Invocation Pattern Test", function( assert ) {
    //apply method take 2 args, 1-> this context, 2-> args array

    //Example 1-> pass args
    var add =  function (arg1, arg2) {
      return arg1 + arg2;
    };
    assert.deepEqual(add.apply(null, [1,2]), 3);


    //Example 2->pass this
    var Quo = function (string) {
        this.status = string;
    };
    // Give all instances of Quo a public method
    Quo.prototype.get_status = function() {
      return this.status;
    };

    var statusObject = {
        status: "A-Ok"
    };
    assert.deepEqual(Quo.prototype.get_status.apply(statusObject), "A-Ok");
});