describe("RomanNumeralGenerator", function() {

    var generator;

    beforeEach(function(){
        generator = new RomanNumeralGenerator();
    });

    it("should convert 1 to 'I'", function(){
        expect(generator.generate(1)).toEqual("I");
    });

    it("should convert 5 to 'V'", function(){
        expect(generator.generate(5)).toEqual("V");
    });

    it("should convert 10 to 'X'", function(){
        expect(generator.generate(10)).toEqual("X");
    });

    it("should convert 20 to XX", function(){
        expect(generator.generate(20)).toEqual("XX");
    });

    it("should convert 49 to 'XLIX'", function(){
        expect(generator.generate(49)).toEqual("XLIX");
    });

    it("should convert 362 to 'CCCLXII'", function(){
        expect(generator.generate(362)).toEqual("CCCLXII")
    });

    it("should convert 2754 to 'MMDCCLIV'", function(){
        expect(generator.generate(2754)).toEqual("MMDCCLIV");
    });

    it("should convert 3999 to 'MMMCMXCIX'", function(){
        expect(generator.generate(3999)).toEqual("MMMCMXCIX");
    });

    it("should throw an OutOfBoundsException when a number less than 1 is given", function(){
        expect(function(){
            generator.generate(0);
        }).toThrow("OutOfBoundsException");
    });

    it("should throw an OutOfBoundsException when a number more than 3999 is given", function(){
        expect(function(){
            generator.generate(4000);
        }).toThrow("OutOfBoundsException");
    });
});