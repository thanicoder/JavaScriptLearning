QUnit.module( "ObjectTest" );

QUnit.test( "ObjectDeleteTest", function( assert ) {
    if (typeof Object.create !== 'function') {
        Object.create = function (o) {
          var F = function() {};
          F.prototype = o;
          return new F();
        };
    }
    var stooge = {
        "first-name": "Thanigaivel",
        "last-name": "Mohan"
    };

    var another_stooge = Object.create(stooge);
    another_stooge["first-name"] = "Anitha";

    //Delete removes a property from an object, doesn't touch prototype linkage
    assert.deepEqual(another_stooge["first-name"], "Anitha");
    delete another_stooge["first-name"];
    assert.deepEqual(another_stooge["first-name"], "Thanigaivel");

});