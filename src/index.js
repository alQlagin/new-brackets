module.exports = function check(str, bracketsConfig) {
  const config = new Map(bracketsConfig);
  const nodesStack = [];
  for (let i = 0; i < str.length; i++) {
    const currentSym = str[i];
    let currentNode = nodesStack[nodesStack.length - 1];
    if (currentNode && currentSym === currentNode.close) {
      nodesStack.pop();
      continue;
    }
    if (!config.has(currentSym)) return false;
    currentNode = {
      open: currentSym,
      close: config.get(currentSym)
    };
    nodesStack.push(currentNode);
  }
  return nodesStack.length === 0;
};
