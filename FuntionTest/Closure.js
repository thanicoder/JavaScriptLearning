QUnit.module( "FunctionTest" );

QUnit.test( "Closure", function( assert ) {
    //inner function has access to outer functions parameter and variable
    //inner function has longer lifetime than its outer function
    var myObject = function () {
        var value = 0;
        return {
            increment: function () {
                value++;
                return value;
            },

            getValue: function () {
                return value;
            }
        }
    }();
    assert.deepEqual(myObject.getValue(), 0);
    assert.deepEqual(myObject.increment(), 1);


    var quo = function (status) {
        return {
            get_status: function () {
                return status;
            }
        };
    };
    var cur = "amazed";
    var myQuo = quo(cur);
    assert.deepEqual(myQuo.get_status(), "amazed");

    cur = "amazed again";
    assert.deepEqual(myQuo.get_status(), "amazed");

    //Here fadeIt has access to the property level.
    var fade = function (node) {
        var level = 1;
        var fadeIt = function () {
            var hex = level.toString(16);
            node.style.backgroundColor = '#FFFF' + hex + hex;
            if (level < 15) {
                level += 1;
                setTimeout(fadeIt, 100);
            }
        };
        setTimeout(fadeIt, 100);
    };
    fade(document.body);


    //Register onclick on the wrong way. Here onclick always alerts node.length.
    document.write("<h1>Click Me 1</h1>");
    document.write("<h1>Click Me 2</h1>");
    var register = function (node) {
        var i;
        for (i = 0; i < node.length; i++) {
            node[i].onclick = function (e) {
                assert.deepEqual(i, 2);
                alert(i);
            };
        }
    };
    register($("h1"));

    document.write("<h2>Click Me 1</h2>");
    document.write("<h2>Click Me 2</h2>");
    var register2 = function (node) {
        var i;
        for (i = 0; i < node.length; i++) {
            node[i].onclick = function (k) {
                return function (e) {
                    alert(k);
                };
            }(i);
        }
    };
    register2($("h2"));
});