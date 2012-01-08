README FILE
@author James Turner
@link http://en.wikipedia.org/wiki/Roman_numerals

DIRECTORY STRUCTURE:

JS files:
/js
/js/src  -> Javascript source files for RomanNumeralGenerator
/js/test -> All test relevant files
/js/test/spec -> Spec files for use with Jasmine test framework
/js/test/lib -> Folder for all included libraries (Jasmine).

HTML files:
/tests.html -> The test runner, open this in a browser

RUNNING THE TESTS:

Open "test.html" in your favourite browser, the tests will run automatically
Check the "passed" and "skipped" checkboxes to see a more verbose output.

APPROACH:
- I decided to use a well known and well supported testing framework, Jasmine (BDD).

- All tests were written before the object code.

- Once the initial set of tests was complete, using the sample input/outputs from the supplied Test documentation,
 coding was performed, clearing off one test at a time until all tests passed.

- Additional tests for a couple of other random numbers were added, these included testing in the 100s range,
 and another additional test in the 1000s range, to ensure a reasonable number of test cases were covered.

- The RomanNumeralGenerator was created as an Object, this promotes code re-use and extensibility.

- Because the tests were already in place, it allowed me to perform refactoring of the code, once initially complete,
 whilst asserting that any changes were not breaking the functionality.

- As the caveats below explain, the boundaries for conversion are between 1 and 3999, I decided to
 throw an OutOfBoundsException for any argument that was outside of this boundary.

ASSUMPTIONS:
- Romans can't count above 3999, or below 1

CAVEATS:
- see assumptions