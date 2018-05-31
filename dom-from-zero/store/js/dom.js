'use strict';

function createElement(node) {
  if (node === undefined || node === null || node === false) {
    return document.createTextNode('');
  }
  if (typeof node === "string" || typeof node === 'number' ||  node === true) {
    return document.createTextNode(node);
  }
  if (Array.isArray(node)) {
    return node.reduce((f, el) => {
      f.appendChild(createElement(el));
      return f;
    }, document.createDocumentFragment());
  }
  const element = document.createElement(node.name);
  if (node.props) {
    Object.keys(node.props).forEach(key => element.setAttribute(key, node.props[key]));
  }
  element.appendChild(createElement(node.childs));
  return element;
}