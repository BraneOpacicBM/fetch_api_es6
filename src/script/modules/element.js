export class Element {
    constructor(){}

    static createNode(element){
        return document.createElement(element);
    }

    static addClass(element, cssClass){
        return element.classList.add(cssClass);
    }

    static append(parent, el) {
        return parent.appendChild(el);
    }
}