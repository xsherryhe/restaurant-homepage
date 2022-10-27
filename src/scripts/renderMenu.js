import renderContentNone from './renderNone';
import renderMenuItem from './renderMenuItem';
import { contentElement } from './selectFromDOM';

const menuSubheadingElements =
  ['Appetizers', 'Crepes', 'Sides', 'Beverages'].map(text => {
    const headingElement = document.createElement('h2');
    headingElement.textContent = text;
    return headingElement
  });

function renderMainHeading() {
  const menuHeadingElement = document.createElement('h1');
  menuHeadingElement.textContent = 'Menu';
  contentElement.appendChild(menuHeadingElement);
}

function renderAppetizers() {
  const headingElement = document.createElement('h2'),
        appetizersElement = document.createElement('div');
  headingElement.textContent = 'Appetizers';
  appetizerDetails().forEach(details => renderMenuItem(appetizersElement, ...details));
  [headingElement, appetizersElement].forEach(element => contentElement.appendChild(element));
}

function appetizerDetails() {
  return [['Salmon Rolls', 'Creamy bite-sized pieces of fresh salmon inside soft crepe wrap.',
           require.context('../images/salmon-rolls/', false, /\.jpg$/i), 'Six salmon rolls']];
}

function renderCrepes() {

}

function renderSides() {

}

function renderBeverages() {

}

export default function renderMenu() {
  renderContentNone();
  renderMainHeading();
  renderAppetizers();
  renderCrepes();
  renderSides();
  renderBeverages();
}
