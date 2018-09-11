'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 * and wrapped by `*`
 *
 */
const whisper = (str) => {
	return  '*' + str.toLowerCase() + '*'

}
//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')


assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper(' A B C '), '* a b c *')
assert.deepStrictEqual(whisper(' H O L A '), '* h o l a *')
assert.deepStrictEqual(whisper(' A 1 C D E F '),  '* a 1 c d e f *') 
// End of tests */
