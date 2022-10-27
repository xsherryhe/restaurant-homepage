import renderContentNone from './renderNone';
import renderImage from './renderImage';
import { contentElement } from './selectFromDOM';

function renderHeadings() {
  const nameElement = document.createElement('h1'),
        bylineElement = document.createElement('h2');
  
  nameElement.textContent = 'Crepes on a Cloud';
  bylineElement.textContent = 'Eatery for Sweet and Savory Crepes';
  [nameElement, bylineElement].forEach(element => contentElement.appendChild(element));
}

function renderCrepeMainImage() {
  renderImage(contentElement, 
              require.context('../images/crepe-main/', false, /\.jpg$/i), 
              '60vw', 
              'Crepe topped with blueberries with small bowl of jam');
}

function renderReviews() {
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
  contentElement.appendChild(reviewElement);
}

function renderHours() {
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

  contentElement.appendChild(hoursElement);
}

export default function renderHome() {
  renderContentNone();
  renderHeadings();
  renderCrepeMainImage();
  renderReviews();
  renderHours();
}
