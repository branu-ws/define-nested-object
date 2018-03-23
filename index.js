/**
 * Create an object with nested properties
 * @params {object} object- the object to set the nested properies. {}
 * @param {string} access - the property access. 'a.b.c'
 * @param {any} value - the value to set at the end of the nesting
 *
 * Example:
 *
 * const obj = {}
 * setValue(obj, 'foo.bar', 'qux' //=> 
 * obj = { 
 *   foo: { 
 *     bar: 'qux' 
 *   } 
 * }
 */
function setValue(obj, access, value) {
  if (typeof(access) === 'string') {
    access = access.split('.')
  }
  if (access.length > 1) {
    setValue(obj[access.shift()] = {} , access, value)
  } else {
    obj[access[0]] = value
  }
}

module.exports = setValue
