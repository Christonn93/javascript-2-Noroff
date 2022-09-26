export class Card {
 constructor(elementName = "", className = "", elementId = "", title, created, body, post_image, author, updated) {
  this.element = document.createElement(elementName);
  element.classList.add(className);
  element.id = elementId;
  element.innerHTML = ``;
 }
}

class LoopingCard {
 constructor(elementName, attributes = {}, template = {}) {
  this.element = document.createElement(elementName);
  this.addAttributes(attributes);
  this.addTemplate(template);
  return this.element;
 }
 addAttributes(attributes) {
  Object.entries(attributes).forEach(([key, value]) => {
   this.element.setAttribute(key, value);
  });
 }
 addTemplate(template) {
  this.element.innerHTML = `${template.greeting} ${template.name}`;
 }
}
