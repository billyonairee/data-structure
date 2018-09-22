var BinarySearchTree = function (value) {
  var bst = {}
  bst.value = value
  bst.left = null
  bst.right = null

  bst.insert = function (value) {
    var newTree = BinarySearchTree(value)

    var newNode = function (currentNode) {
      // console.log('currentNode:', currentNode)
      // console.log('currentNode.value:',currentNode.value)
      if (currentNode.value > value && currentNode.left === null) {
        currentNode.left = newTree
      } else if (currentNode.value > value) {
        newNode(currentNode.left)
      } else if (currentNode.value < value && currentNode.right === null) {
        currentNode.right = newTree
      } else if (currentNode.value < value) newNode(currentNode.right)
    }
    // console.log("this:", this)
    newNode(this)
  }
  bst.contains = function (target) {
    var flag = false
    var findchild = function (child) {
      // console.log("child.value:", child.value)
      if (child.value === null) {
      } else if (child.value === target) {
        flag = !flag
      } else if (child.value > target && child.left !== null) {
        findchild(child.left)
      } else if (child.value < target && child.right !== null) {
        findchild(child.right)
      }
      // console.log('this.value:',this.value)
    }
    findchild(this)
    return flag
  }

  bst.depthFirstLog = function (fuc) {
    fuc(this.value)
    var findAllChild = function (node) {
      if (node.left !== null) {
        fuc(node.left.value)
        findAllChild(node.left)
      } else if (node.right !== null) {
        fuc(node.right.value)
        findAllChild(node.right)
      }
    }
    findAllChild(this)
  }

  /*
    * Complexity: What is the time complexity of the above functions?
    */
  return bst
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = BinarySearchTree
}
