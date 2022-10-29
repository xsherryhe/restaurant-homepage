import renderHome from './renderHome';
import renderMenu from './renderMenu';
import renderContact from './renderContact';

export default function bindEvents() {
  const tabsElement = document.querySelector('.tabs');
  tabsElement.querySelector('.home').addEventListener('click', renderHome);
  tabsElement.querySelector('.menu').addEventListener('click', renderMenu);
  tabsElement.querySelector('.contact').addEventListener('click', renderContact);
}
