import { contentElement } from './cacheDOM';

function unsetStyleClasses() {
  document.body.classList.remove('home', 'menu', 'contact');
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('current'));
}

export default function renderContentNone() {
  unsetStyleClasses();
  contentElement.textContent = '';
}
