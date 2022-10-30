import renderContentNone from './renderNone';
import renderResponsiveImage, { renderIcon } from './renderImage';
import { contentElement } from './cacheDOM';

function setStyleClasses() {
  document.body.classList.add('contact');
  document.querySelector('.tab.contact').classList.add('current');
}

function renderHeading() {
  const headingElement = document.createElement('div'),
        headingTextElement = document.createElement('h1');
  headingElement.classList.add('contact', 'heading');
  renderResponsiveImage(headingElement,
                        require.context('../images/logo/', false, /\.png$/i),
                        '8rem');
  headingTextElement.textContent = 'Contact Us!'
  headingElement.appendChild(headingTextElement);
  contentElement.appendChild(headingElement);
}

function renderContactUs() {
  const contactElement = document.createElement('div');
  contactElement.classList.add('contact-content');
  renderResponsiveImage(contactElement,
                        require.context('../images/restaurant/', false, /\.jpg$/i),
                        '60vw',
                        'Two wooden tables with four wooden chairs each outside a restaurant');
  contentElement.appendChild(contactElement);
  renderContactDetails(contactElement);
}

function renderContactDetails(parentElement) {
  const contactDetailsElement = document.createElement('div');
  contactDetailsElement.classList.add('contact-details');
  parentElement.appendChild(contactDetailsElement);
  [['restaurant', 'Crepes on a Cloud'], 
   ['phone', '(123) 456-7890'], 
   ['email', 'service@crepes-on-a-cloud.com']]
    .forEach(contactDetail => renderContactDetail(contactDetailsElement, ...contactDetail));
}

function renderContactDetail(parentElement, type, content) {
  const contactDetailElement = document.createElement('div');
  contactDetailElement.classList.add('contact-detail');
  renderIcon(contactDetailElement, type);
  const contactDetailTextElement = document.createElement('p');
  contactDetailTextElement.textContent = content;
  contactDetailElement.appendChild(contactDetailTextElement);
  parentElement.appendChild(contactDetailElement);
}

export default function renderContact() {
  renderContentNone();
  setStyleClasses();
  renderHeading();
  renderContactUs();
}
