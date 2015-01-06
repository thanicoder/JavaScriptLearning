QUnit.module( "InhertianceTest" );

QUnit.test( "PrototypalInheritance", function( assert ) {
    var Mammal = {
        name: 'Herb the mammal',
        get_name: function () {
            return this.name;
        },
        say_hello: function () {
            return this.saying || '';
        }
    };

    var newMammal = new Function();
    newMammal.prototype = Mammal;

    console.log(newMammal.get_name());
});