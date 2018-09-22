var Tree = function (value) {
  var newTree = {}
  newTree.value = value

  // your code here
  extend(newTree, treeMethods)
  newTree.children = [] // fix me
  return newTree
}

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key]
  }
}
var treeMethods = {}

treeMethods.addChild = function (value) {
  this.children.push(Tree(value))
}

treeMethods.contains = function (target) {
  var res = false
  var find = function (node) {
    if (node.children.value === target) {
      res = !res
    } else {
      for (var i = 0; i < node.children.length; i++) {
        if (node.children[i].value === target) {
          res = !res
        }
        find(node.children[i])
      }
    }
  }

  find(this)
  return res
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = Tree
}
