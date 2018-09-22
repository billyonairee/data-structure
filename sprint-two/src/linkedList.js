var LinkedList = function () {
  var list = {}
  list.head = null
  list.tail = null

  list.addToTail = function (value) {
    var node = Node(value)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.head.next = node
      this.tail = node
      // console.log(list)
    }
  }

  list.removeHead = function () {
    this.head = this.tail
    // console.log(list)
    return this.head.value
  }

  list.contains = function (target) {
    if (target === this.head.value || target === this.tail.value) {
      return true
    }
    return false
    // console.log(list)
  }

  return list
}

var Node = function (value) {
  var node = {}

  node.value = value
  node.next = null

  return node
}

/*
 * Complexity: What is the time complexity of the above function s?
 */
if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = LinkedList
}
