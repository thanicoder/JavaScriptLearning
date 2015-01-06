QUnit.module( "ArrayTest" );

QUnit.test( "Array Literal Tests", function( assert ) {
	//Array in javascript are just objects with special 'array' like properties and functions
	var empty = [];
	var numbers = ['zero', 'one', 'two', 'three'];

	assert.deepEqual(empty.length, 0, "arrayInstance.length of empty array is 0");
	assert.deepEqual(empty[0], undefined, "Accessing non-existing index of an array returns undefined");

	assert.deepEqual(numbers.length, 4, "array.length starts with index 0");
	assert.deepEqual(numbers[0], 'zero');
	assert.deepEqual(typeof numbers, 'object', "typeof array is object");

	//object literal which accessed similar to array
	var object_literal = {
	  0: 'zero', 1: 'one', 2: 'two', 3: 'three'
	};
    assert.deepEqual( object_literal[0], 'zero');
	assert.deepEqual(typeof object_literal, 'object');

	//No upper bound exception
	var myArray = [];
	myArray[1000000] = 'there';
	assert.deepEqual(myArray.length, 1000001);

	//Array Length
	var myArray = ['zero', 'one', 'two', 'three', 'four'];
	assert.deepEqual(myArray[4], 'four');
	myArray.length = 3;
	assert.deepEqual(myArray[3], undefined);
	assert.deepEqual(myArray[4], undefined);

	myArray[myArray.length] = 'three';
	assert.deepEqual(myArray[3], 'three');
	assert.deepEqual(myArray.length, 4);

	myArray.push('four');
	assert.deepEqual(myArray[myArray.length-1], 'four');

	//Delete and Splice
	var myArray = ['zero', 'one', 'two', 'three', 'four'];
	delete myArray[1];
	assert.deepEqual(myArray, ['zero', undefined, 'two', 'three', 'four'], "test array delete");

	var myArray = ['zero', 'one', 'two', 'three', 'four'];
	myArray.splice(1,3);
	assert.deepEqual(myArray, ['zero', 'four'], "test splice");

});
