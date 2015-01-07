QUnit.module( "FunctionTest" );

QUnit.test( "Module", function( assert ) {
    //We can make use of function and closure to create modules. modules defines an interface, but hides its state and implementation.
    //By using functions to produce module, we completely eliminate the use of global variable

    String.prototype['deentityfy'] = function() {
        var entity = {
            'quot': '"',
            '<': 'lt',
            '>': 'gt'
        };

        return function () {
          return this.replace(/&([^&;]+);/g,
              function (a, b) {
                  var r = entity[b];
                  return typeof r === 'string' ? r : a;
              }
          );
        };
    }();

    console.log('&lt;&quot;&gt;'.deentityfy( ));
    "hello".deentityfy();

    //add is init only once
    var add  = function(arg) {
        return arg;
    }(10);
    assert.deepEqual(add, 10);
    assert.deepEqual(add, 10);

    //add can be init any number of times
    var add  = function(arg) {
        return arg;
    };
    assert.deepEqual(add(8), 8);
    assert.deepEqual(add(9), 9);

    //returns another object literal and anon function is executed at once, and add is stored with return type of anon function
    var add = function() {
        var expensiveObject = "some expensive object";
        console.log('This statement is executed only once, ie expensiveObject is initialized only once');
        return {
          getValue : function() {
              return expensiveObject;
          }
        };

    }(); //<--
    assert.deepEqual(add.getValue(), "some expensive object");
    assert.deepEqual(add.getValue(), "some expensive object");

    // here add is stored with the function itself and not its return type.
    var add = function() {
        var expensiveObject = "some expensive object";
        console.log('This statement is executed only everytime add is called, ie expensiveObject is initialized many times');
        return {
            getValue : function() {
                return expensiveObject;
            }
        };
    }; //<--

    assert.deepEqual(add().getValue(), "some expensive object");
    assert.deepEqual(add().getValue(), "some expensive object");


});