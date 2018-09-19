var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.count = 0
  this.lastCount = 0
  this.count = 0
  this.int = 0
  this.storage = {}
}

Queue.prototype.enqueue = function (value) {
  this.count++
  this.lastCount++

  this.storage[this.count] = value
}

Queue.prototype.dequeue = function () {
  if (this.lastCount > 0) {
    this.lastCount--
    this.int++

    var intCount = this.storage[this.int]
    delete intCount[this.int]
    return intCount
  }
}

Queue.prototype.size = function () {
  return this.lastCount
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue
  }
}
