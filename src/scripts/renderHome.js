import renderContentNone from './renderNone';
import renderResponsiveImage, { renderIcon } from './renderImage';
import { contentElement } from './cacheDOM';

function setStyleClasses() {
  document.body.classList.add('home');
  document.querySelector('.tab.home').classList.add('current');
}

function renderHeadings() {
  const headingsElement = document.createElement('div'),
        nameElement = document.createElement('h1'),
        bylineElement = document.createElement('h2');
  
  headingsElement.classList.add('home', 'heading');
  renderResponsiveImage(headingsElement, 
                        require.context('../images/logo/', false, /\.png$/i),
                        '8rem');
  nameElement.textContent = 'Crepes on a Cloud';
  bylineElement.textContent = 'Eatery for Sweet and Savory Crepes';
  [nameElement, bylineElement].forEach(element => headingsElement.appendChild(element));
  contentElement.appendChild(headingsElement);
}

function renderCrepeMainImage() {
  renderResponsiveImage(contentElement, 
                        require.context('../images/crepe-main/', false, /\.jpg$/i), 
                        '100vw', 
                        'Crepe topped with blueberries with small bowl of jam');
}

function renderAttribution() {
  const attributionContainer = document.createElement('div'),
        attributionElement = document.createElement('div');
  attributionContainer.classList.add('attribution-container');
  attributionElement.classList.add('attribution');
  attributionElement.innerHTML =
    `<a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik - Flaticon</a>`
  attributionContainer.appendChild(attributionElement);
  contentElement.appendChild(attributionContainer);
}

function renderInfo() {
  const infoElement = document.createElement('div');
  infoElement.classList.add('info');
  renderLocation(infoElement);
  renderHours(infoElement);
  renderReviews(infoElement);
  contentElement.appendChild(infoElement);
}

function renderLocation(parentElement) {
  const locationElement = document.createElement('div');
  locationElement.classList.add('location');
  renderSubHeading(locationElement, 'Our Location');
  renderAddress(locationElement);
  parentElement.appendChild(locationElement);
}

function renderAddress(parentElement) {
  const addressElement = document.createElement('div');
  ['123 Cloud Blvd.', 'Sky, Universe 54321'].forEach(addressLineText => {
    const addressLineElement = document.createElement('p');
    addressLineElement.textContent = addressLineText;
    addressElement.appendChild(addressLineElement);
  })
  parentElement.appendChild(addressElement);
}

function renderReviews(parentElement) {
  const reviewElement = document.createElement('div'),
        reviewContentElement = document.createElement('p'),
        reviewAuthorElement = document.createElement('p');
  reviewElement.classList.add('review');
  reviewContentElement.classList.add('review-content');
  reviewContentElement.textContent = "This is my favorite place to go for crepes! \
                                      Whether it's for breakfast, lunch, or dinner, Crepes on a Cloud \
                                      has something for every day, mood, and occasion. \
                                      I really feel like I'm floating on top of the clouds each time \
                                      I get to taste one of their light, fluffy, and flavorful crepes."
  reviewAuthorElement.classList.add('review-author');
  reviewAuthorElement.textContent = 'Madeline from France';
  [reviewContentElement, reviewAuthorElement].forEach(element => reviewElement.appendChild(element));
  parentElement.appendChild(reviewElement);
}

function renderHours(parentElement) {
  const hoursElement = document.createElement('div'),
        hoursTableElement = document.createElement('table');
  hoursElement.classList.add('hours');
  renderSubHeading(hoursElement, 'Our Hours');
  hoursTableElement.innerHTML = `
    <tbody>
      <tr>
        <th>Monday</th>
        <td>Closed</td>
      </tr>
      <tr>
        <th>Tuesday</th>
        <td>9AM - 10PM</td>
      </tr>
      <tr>
        <th>Wednesday</th>
        <td>9AM - 10PM</td>
      </tr>
      <tr>
        <th>Thursday</th>
        <td>9AM - 10PM</td>
      </tr>
      <tr>
        <th>Friday</th>
        <td>11AM - 11PM</td>
      </tr>
      <tr>
        <th>Saturday</th>
        <td>10AM - 11PM</td>
      </tr>
      <tr>
        <th>Sunday</th>
        <td>10AM - 11PM</td>
      </tr>
    </tbody>
  `;

  hoursElement.appendChild(hoursTableElement);
  parentElement.appendChild(hoursElement);
}

function renderSubHeading(parentElement, headingText) {
  const headingElement = document.createElement('div'),
        headingTextElement = document.createElement('h3');
  
  headingElement.classList.add('sub-heading');
  renderIcon(headingElement, 'cloud-font');
  headingTextElement.textContent = headingText;
  headingElement.appendChild(headingTextElement);
  parentElement.appendChild(headingElement);
}

export default function renderHome() {
  renderContentNone();
  setStyleClasses();
  renderHeadings();
  renderCrepeMainImage();
  renderAttribution();
  renderInfo();
}
