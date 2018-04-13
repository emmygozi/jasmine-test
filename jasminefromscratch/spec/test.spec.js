class Calculator {

	add(a,b){
		return a + b;
	}

	minus(a,b){
		return a - b;
	}

	description(){
		return 'this is a calculator class';
	}
}



describe('calculator addition', function(){

	var calculate = new Calculator();

	beforeAll(function () {
		console.log('beforeAll runs once "BEFORE ANY" statement is executed');
	});

	beforeEach(function () {
		console.log('beforeEach runs once "BEFORE EACH" statement is executed');
	});

	afterAll(function () {
		console.log('afterAll runs once "AFTER ALL" statement are executed');
	});

	afterEach(function () {
		console.log('afterEach runs once "AFTER EACH" statement are executed');
	});

	it('should be able to add two numbers and other functions', function(){
		expect(calculate.add(1,3)).toBe(4);
		expect(calculate.add(1,3)).not.toBe(5);
		expect(calculate.add(1,3)).toEqual(4);
		expect(calculate.add(1,3)).toBeLessThan(5);
		expect(calculate.add(1,3)).toBeGreaterThan(3);
	});

	it('should be able to check if addition of two numbers is greater than a given value',
	 function(){
		
		expect(calculate.add(1,3)).toBeGreaterThan(3);
	});

	it('should be able to subtract two numbers', function(){
		expect(calculate.minus(5,4)).toBe(1);
	});


	it('should be able to declare calculator class', function(){
		expect(calculate).toBeDefined();
		expect(calculate).not.toBeUndefined();//same thing with previous line
		expect(calculate).not.toBeNull();//for object instantiation
	});

	it('should be able to check the description of the class', function(){
		expect(calculate.description()).toMatch('class'); //matches substring class in 
		//description method 
		expect(calculate.description()).toContain('calculator');
	});


});


