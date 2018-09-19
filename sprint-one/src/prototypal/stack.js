var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods)
  someInstance.count = 0

  return someInstance
}

// Object.create(Object.prototype)

var storage = {}
var stackMethods = {}

stackMethods.push = function (value) {
  storage[this.count] = value
  this.count++
}

stackMethods.pop = function () {
  if (this.count > 0) {
    this.count--
    var lastCount = storage[this.count]
    delete storage[this.count]
  }
  return lastCount
}

stackMethods.size = function () {
  return this.count
}
if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack,
    stackMethods
  }
}
