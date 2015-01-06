QUnit.module( "ObjectTest" );

QUnit.test( "ObjectRetrievalTest", function( assert ) {
    var flight = {
        airline: "JetAirways",
        number: 815,
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

    //Test retrieval
    assert.deepEqual(flight.airline, "JetAirways");
    assert.deepEqual(flight.departure.time, "2004-09-22 14:55");

    //Test default retrieval
    assert.deepEqual(flight.airline || "Air India", "JetAirways");
    assert.deepEqual(flight.make, undefined);
    assert.deepEqual(flight.make || "Boeing", "Boeing");

    //Will throw TypeError
    //assertEquals(flight.make.company, TypeError);

    //Avoid TypeError
    assert.deepEqual(flight.make && flight.make.company, undefined);
});