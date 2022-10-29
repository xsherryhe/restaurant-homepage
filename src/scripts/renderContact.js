import renderContentNone from './renderNone';
import renderResponsiveImage, { renderIcon } from './renderImage';
import { contentElement } from './cacheDOM';

function setStyleClasses() {
  document.body.classList.add('contact');
  document.querySelector('.tab.contact').classList.add('current');
}

function renderRestaurantImage() {
  renderResponsiveImage(contentElement, 
                        require.context('../images/restaurant/', false, /\.jpg$/i), 
                        '60vw',
                        'Two wooden tables with four wooden chairs each outside a restaurant');
}

function renderVisitUs() {
  const headingElement = document.createElement('h1');
  headingElement.textContent = 'Visit Us!'
  contentElement.appendChild(headingElement);
  renderAddress();
}

function renderAddress() {
  const addressElement = document.createElement('div');
  ['123 Cloud Blvd.', 'Sky, Universe 54321'].forEach(addressLineText => {
    const addressLineElement = document.createElement('p');
    addressLineElement.textContent = addressLineText;
    addressElement.appendChild(addressLineElement);
  })
  contentElement.appendChild(addressElement);
}

function renderContactUs() {
  const headingElement = document.createElement('h1');
  headingElement.textContent = 'Contact Us!'
  contentElement.appendChild(headingElement);
  renderContactDetails();
}

function renderContactDetails() {
  [['restaurant', 'Crepes on a Cloud'], 
   ['phone', '(123) 456-7890'], 
   ['email', 'service@crepes-on-a-cloud.com']]
    .forEach(contactDetail => renderContactDetail(...contactDetail));
}

function renderContactDetail(type, content) {
  const contactDetailElement = document.createElement('div');
  renderIcon(contactDetailElement, type);
  const contactDetailTextElement = document.createElement('p');
  contactDetailTextElement.textContent = content;
  contactDetailElement.appendChild(contactDetailTextElement);
  contentElement.appendChild(contactDetailElement);
}

export default function renderContact() {
  renderContentNone();
  setStyleClasses();
  renderRestaurantImage();
  renderVisitUs();
  renderContactUs();
}
