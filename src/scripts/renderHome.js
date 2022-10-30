import renderContentNone from './renderNone';
import renderResponsiveImage from './renderImage';
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
  renderHours(infoElement);
  renderReviews(infoElement);
  contentElement.appendChild(infoElement);
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
  const hoursElement = document.createElement('table');
  hoursElement.classList.add('hours');
  hoursElement.innerHTML = `
    <thead>
      <tr>
        <th colspan="2">Our Hours</th>
      </tr>
    </thead>
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

  parentElement.appendChild(hoursElement);
}

export default function renderHome() {
  renderContentNone();
  setStyleClasses();
  renderHeadings();
  renderCrepeMainImage();
  renderAttribution();
  renderInfo();
}
