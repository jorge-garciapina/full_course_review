function querySelectorAllEnhanced(selector, root = document) {
  const matches = [];
  const [parentSelector, childSelector] = selector.split(" < ");
  if (!parentSelector || !childSelector) {
    console.error("Invalid selector: ", selector);
    return matches;
  }
  const potentialParents = Array.from(root.querySelectorAll(parentSelector));
  potentialParents.forEach((parent) => {
    if (parent.querySelector(childSelector)) {
      matches.push(parent);
    }
  });
  return matches;
}

module.exports = querySelectorAllEnhanced;
