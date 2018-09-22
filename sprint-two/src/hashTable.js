if (typeof module === 'object' && typeof module.exports === 'object') {
  var { LimitedArray, getIndexBelowMaxForKey } = require('./hashTableHelpers')
}

var HashTable = function () {
  this._limit = 8
  this._storage = LimitedArray(this._limit)
  // console.log(this._storage)
}

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit)
  var obj = {}
  obj[k] = v
  // var checkStorage = this._storage.get(index)
  if (!this._storage.get(index)) {
    this._storage.set(index, obj)
  } else {
    var checkIndex = this._storage.get(index)
    checkIndex[k] = v
    console.log(checkIndex)
  }
}

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit)
  var res = this._storage.get(index)
  return res[k]
}

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit)
  // console.log(k,index)
  this._storage.get(index)
  // console.log(this._storage.get(index))
  delete this._storage.get(index)[k]
}

/*
 * Complexity: What is the time complexity of the above function  s?
 */

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = HashTable
}
