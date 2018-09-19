var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {}
  someInstance.count = 0
  someInstance.lastCount = 0
  someInstance.count = 0
  someInstance.int = 0
  extend(someInstance, queueMethods)
  return someInstance
}

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key]
  }
}

var storage = {}
var queueMethods = {}

queueMethods.enqueue = function (value) {
  this.count++
  this.lastCount++

  storage[this.count] = value
}

queueMethods.dequeue = function () {
  if (this.lastCount > 0) {
    this.lastCount--
    this.int++

    var intCount = storage[this.int]
    delete intCount[this.int]
    return intCount
  }
}

queueMethods.size = function () {
  return this.lastCount
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue,
    queueMethods
  }
}
