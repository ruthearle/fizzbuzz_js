describe('Fizzbuzz knows', function(){

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('that a number is divisible', function() {

    it('by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true)
    }); // close 'by 3'

    it('by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true)
    });

    it('by 15', function(){
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true)
    }); // close divisible by 15

  });

  describe('that a number is', function() {

    it('not divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false)
    });// close 'not divisible'

    it('not divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false)
    });

    it('not divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false)
    });
  }); // close describe


});
