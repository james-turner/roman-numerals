function RomanNumeralGenerator(){

    this.generate = function(i){
        // force i to an int (just in case we decide to use strings, probably more friendly!)
        // @todo check if this causes an issue with floats?
        i = parseInt(i);
        // break early if not a valid number.
        if(i < 1 || i > 3999){
            throw "OutOfBoundsException"
        }

        return convert(i);
    };

    var DIGITS   = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var TENS     = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var HUNDREDS = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var UNITS = [DIGITS, TENS, HUNDREDS];

    var convert = function(number){

        // initialise roman number.
        var romanNumber = "";
        var mod = 0;

        // for each units set, break the number down.
        for(var i=0; i < 3; i++){

            // create modulo
            mod = number % 10;
            // prepend roman character to current set
            romanNumber = UNITS[i][mod] + romanNumber;
            // flatten the number by a factor of 10
            number = Math.floor(number / 10);

        }

        // convert any remaining digits to M & M's
        for(var j=0;j<number;j++){
            romanNumber = "M" + romanNumber;
        }

        return romanNumber
    };

};