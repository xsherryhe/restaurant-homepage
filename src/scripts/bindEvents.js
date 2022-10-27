import { selectTabsElement } from './selectFromDOM';
import renderHome from './renderHome';
import renderMenu from './renderMenu';
import renderContact from './renderContact';

export default function bindEvents() {
  const tabsElement = selectTabsElement();
  tabsElement.querySelector('.home').addEventListener('click', renderHome);
  tabsElement.querySelector('.menu').addEventListener('click', renderMenu);
  tabsElement.querySelector('.contact').addEventListener('click', renderContact);
}
