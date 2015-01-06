QUnit.module( "ObjectTest" );

QUnit.test( "ObjectReferenceTest", function( assert ) {
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
    };

    //Object are passed around by reference, they are never copied
    var flight_new = flight;

    flight_new.departure = {
        IATA: "CAL",
        time: "2004-09-22 14:55",
        city: "Calcutta"
    };

    flight.make = "747";

    assert.deepEqual(flight.departure.IATA, "CAL");
    assert.deepEqual(flight_new.make, "747");
});