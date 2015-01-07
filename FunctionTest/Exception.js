QUnit.module( "FunctionTest" );

QUnit.test( "Exception", function( assert ) {
    var add = function (arg1, arg2) {
      if (arg1 instanceof Number && arg2 instanceof Number)  {
          return arg1 + arg2;
      }
        throw {
          name: 'TypeError',
          message: 'add needs numbers'
        };
    };

    try {
        //TODO: Test catching Exception
        add('a', 'b');
        assert.deepEqual(1,0);
    } catch (e) {
        assert.deepEqual(e.name, "TypeError");
    }
});