QUnit.module( "ObjectTest" );

QUnit.test( "ObjectPrototypeTest", function( assert ) {
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

    //Prototype link used only for retrieval
    assert.deepEqual(stooge["first-name"], "Thanigaivel");
    assert.deepEqual(another_stooge["first-name"], "Thanigaivel");
    assert.deepEqual(another_stooge["last-name"], "Mohan");

    //When we make changes to the object its prototype is not touched
    another_stooge["first-name"] = "Anitha";
    assert.deepEqual(stooge["first-name"], "Thanigaivel");
    assert.deepEqual(another_stooge["first-name"], "Anitha");

    stooge["home"] = "Meenambakkam";
    another_stooge["office"] = "OMR";

    // property "home" is not available in another_stooge, retrieve from stooge
    assert.deepEqual(another_stooge["home"], "Meenambakkam");
    //property "office" is not available in stooge
    assert.deepEqual(stooge["office"], undefined);

    //Changing prototype immediately will be visible to all objects that are based on prototype
    assert.deepEqual(stooge["last-name"], "Mohan");

    var next_stooge = stooge;
    stooge["last-name"] = "Uma";
    assert.deepEqual(stooge["last-name"], "Uma");
    assert.deepEqual(another_stooge["last-name"], "Uma");
    assert.deepEqual(next_stooge["last-name"], "Uma");

});