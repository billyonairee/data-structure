var Stack = function () {
  var someInstance = {}

  // Use an object with numeric keys to store values
  var storage = {}
  var count = 0

  // Implement the methods below
  someInstance.push = function (value) {
    storage[count] = value
    count++
  }
  someInstance.pop = function () {
    if (count > 0) {
      count--
      var lastCount = storage[count]
      delete lastCount[count]
    }
    return lastCount
  }
  someInstance.size = function () {
    return count
  }

  return someInstance
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack
  }
}
