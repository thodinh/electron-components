const computeType = (valueArr) => {
  const errorCount = valueArr.filter(item => item.type === 'error').length
  const warningCount = valueArr.filter(item => item.type === 'warning').length

  return {
    type: errorCount ? 'error' : warningCount ? 'warning' : 'default',
    count: errorCount || warningCount || -1
  }
}

const updateEachNode = (typeInfo, pathInfo, treeMap) => {
  const refreshNode = (cur, nodeValue, isLeaf) => {
    if (!nodeValue) {
      treeMap[cur] = {
        name: cur,
        type: typeInfo.type,
        isLeaf: isLeaf
      }
      if (isLeaf) {
        treeMap[cur]['count'] = typeInfo.count
      }
    } else {
      const oldDefault = nodeValue.type === 'default'
      const oldError = nodeValue.type === 'error'
      const oldWarning = !oldDefault && !oldError
      const newError = typeInfo.type === 'error'
      if (oldError) {
        return
      }
      if (oldWarning) {
        nodeValue.type = newError ? 'error' : 'warning'
        if (isLeaf) {
          nodeValue.count = newError ? typeInfo.count : nodeValue.count
        }
        return
      }
      if (oldDefault) {
        nodeValue.type = typeInfo.type
        if (isLeaf) {
          nodeValue.count = typeInfo.count
        }
      }
    }
  }

  pathInfo.forEach((cur, index) => {
    const isLeaf = index === pathInfo.length - 1
    const nodeValue = treeMap[cur]
    refreshNode(cur, nodeValue, isLeaf)
  })
}

const updateErrorInfo = (decorations, fileKey) => {
  const keyArr = Object.keys(decorations)

  return keyArr.reduce((prev, cur) => {
    const typeInfo = computeType(decorations[cur])
    const pathInfo = cur.replace(fileKey + '/', '').split('/')

    updateEachNode(typeInfo, pathInfo, prev)
    return prev
  }, {})
}

const travelTree = (treeData, fn, extraValue) => {
  const travel = (tree, fn) => {
    const shouldStop = fn(tree, extraValue)
    if (!tree.children || shouldStop) return
    for (let i = 0; i < tree.children.length; i++) {
      travel(tree.children[i], fn)
    }
  }
  travel(treeData, fn)
}

const checkFatherNode = (curNode, targetNode, fn) => {
  if (!curNode.children) return true
  const includesNode = curNode.children.filter(item => item.name === targetNode.name).length !== 0
  if (includesNode) {
    fn(curNode, targetNode)
    return true
  }
  return false
}

const findFather = (fn) => (curNode, targetName) => checkFatherNode(curNode, targetName, fn)

export {
  updateErrorInfo,
  travelTree,
  findFather
}
