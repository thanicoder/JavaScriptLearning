QUnit.module( "ObjectTest" );

QUnit.test( "ObjectReflectionTest", function( assert ) {
    var flight = {
        airline : "JetAirways",
        number : 815,
        confirmed: true,
        departure: {
            IATA: "MAA",
            time: "2004-09-22 14:55",
            city: "Chennai"
        },
        arrival: {
            IATA: "DEL",
            time: "2004-09-23 10:42",
            city: "Delhi"
        }
    }

    //typeof test
    assert.deepEqual(typeof flight.airline, "string");
    assert.deepEqual(typeof flight.number, "number");
    assert.deepEqual(typeof flight.departure, "object");
    assert.deepEqual(typeof flight.confirmed, "boolean");
    assert.deepEqual(typeof flight.make, "undefined");

    //Retrieved from prototype object
    assert.deepEqual(typeof flight.toString, "function");
    assert.deepEqual(typeof flight.constructor, "function");

    //hasOwnProperty method does not look at prototype chain
    assert.deepEqual(flight.hasOwnProperty('toString'), false);
    assert.deepEqual(flight.hasOwnProperty('airline'), true);

});