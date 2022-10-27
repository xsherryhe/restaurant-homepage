import { contentElement } from './selectFromDOM';

function renderNavTabs() {
  const navTabsElement = document.createElement('nav');
  navTabsElement.classList.add('tabs');
  ['Home', 'Menu', 'Contact'].forEach(text => renderTab(navTabsElement, text));
  document.body.insertBefore(navTabsElement, contentElement);
}

function renderTab(parentElement, text) {
  const tabElement = document.createElement('button');
  tabElement.classList.add('tab', text.toLowerCase());
  tabElement.textContent = text;
  parentElement.appendChild(tabElement);
}

export default function renderNav() {
  renderNavTabs();
}
