QUnit.module( "FunctionTest" );

QUnit.test( "Scope", function( assert ) {
    var foo = function () {
        var a = 1, b = 2;


        function bar() {
            var a = 3, c = 4;
            assert.deepEqual(a, 3);
            assert.deepEqual(b, 2);
            assert.deepEqual(c, 4);
            b = 5;
        }

        assert.deepEqual(a, 1);
        assert.deepEqual(b, 2);
        //assertEquals(c, undefined); //throws ReferenceError

        bar();

        assert.deepEqual(a, 1);
        assert.deepEqual(b, 5);
        try {
            assert.deepEqual(c, undefined); //throws exception
        } catch (e) {
            assert.deepEqual(e.name, 'ReferenceError');
        }

    };

    foo();
});