QUnit.module( "ObjectTest" );

QUnit.test( "ObjectEnumerationTest", function( assert ) {
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

    var name;
    console.log("stooge");
    for (name in stooge) {
        console.log(name);
    }

    console.log("another_stooge");
    for (name in stooge) {
        console.log(name);
    }
    assert.deepEqual(undefined, undefined);
});