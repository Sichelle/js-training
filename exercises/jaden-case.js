'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return jadenCase each words: "How are you ?" -> "How Are You ?"
 *
 */
const jadenCase = (str) => {
 	 str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
jadenCase("hello my name is sichelle");


//* Begin of tests
const assert = require('assert')


assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('str'), 'Str')
assert.strictEqual(jadenCase('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(jadenCase('STR'), 'Str')
assert.strictEqual(jadenCase('zapZAP'), 'Zapzap')

// assert.fail('You must write your own tests')
// End of tests */

