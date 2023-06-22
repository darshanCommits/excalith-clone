export default class ElementBuilder {
  constructor(elementName, innerText = "", properties = {}) {
    this.element = document.createElement(elementName);
    this.setProperties(properties);

    if (Array.isArray(innerText))
      this.addChildren(innerText);
    else if (typeof innerText === "object")
      this.addChild(innerText);
    else
      this.setTextContent(innerText)
  }

  addChild(childElement) {
    const child = this.element.append(childElement);
    return child;
  }

  addChildren(children) {
    this.addChild(...children);
    return this;
  }

  setProperties(properties) {
    Object.assign(this.element, properties);
    return this;
  }

  setTextContent(string) {
    this.element.innerText = string;
    return this;
  }

  multiply(times) {
    const fragment = document.createDocumentFragment();

    for (let i = 1; i < times; i++)
      fragment.appendChild(this.element.cloneNode(true));

    return this.element;
  }

  build() {
    return this.element;
  }
}