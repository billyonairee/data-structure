var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {}
  someInstance.count = 0

  extend(someInstance, stackMethods)
  return someInstance
}
var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key]
  }
}

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
