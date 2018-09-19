var Queue = function () {
  var someInstance = {}
  var lastCount = 0
  var count = 0
  var int = 0
  // Use an object with numeric keys to store values
  var storage = {}

  // Implement the methods below

  someInstance.enqueue = function (value) {
    count++
    lastCount++
    storage[count] = value
  }

  someInstance.dequeue = function () {
    if (lastCount > 0) {
      lastCount--
      int++
      var intCount = storage[int]
      delete intCount[int]
      return intCount
    }
  }

  someInstance.size = function () {
    return lastCount
  }

  return someInstance
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue
  }
}
