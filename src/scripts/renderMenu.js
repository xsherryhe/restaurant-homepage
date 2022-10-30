import renderContentNone from './renderNone';
import renderResponsiveImage, { renderIcon } from './renderImage';
import renderMenuItem from './renderMenuItem';
import { contentElement } from './cacheDOM';

function setStyleClasses() {
  document.body.classList.add('menu');
  document.querySelector('.tab.menu').classList.add('current');
}

function renderHeading() {
  const headingElement = document.createElement('div'),
        headingTextElement = document.createElement('h1');
  headingElement.classList.add('menu', 'heading');
  renderResponsiveImage(headingElement,
                        require.context('../images/logo/', false, /\.png$/i),
                        '8rem');
  headingTextElement.textContent = 'Menu';
  headingElement.appendChild(headingTextElement);
  contentElement.appendChild(headingElement);
}

function renderAppetizers() {
  const appetizerDetails =
    [['Salmon Rolls', 'Creamy bite-sized pieces of fresh salmon inside soft crepe wrap.',
      require.context('../images/salmon-rolls/', false, /\.jpg$/i), 'Six salmon rolls'],
    ['Deviled Eggs', 'Eggs loaded with yolk paste, cheese, aioli and seasoned with paprika and white vinegar.',
      require.context('../images/deviled-eggs/', false, /\.jpg$/i), 'Plate of deviled eggs with yolk paste and paprika'],
    ["Chef's Salad", 'Avocados, cucumber, sweet corn, tomatoes, and mushrooms tossed with your choice of dressing.',
      require.context('../images/chefs-salad', false, /\.jpg$/i), 'Plate of salad with avocado and mushrooms']];

  renderSection('Appetizers', appetizerDetails);
}

function renderSavoryCrepes() {
  const savoryCrepesDetails =
    [['Classic Ham and Turkey Crepe', 'Ham, turkey, mushrooms, cheddar cheese, bell peppers, and melted butter',
      require.context('../images/classic-crepe', false, /\.jpg$/i), 'Two wrapped crepes drizzled with butter sauce'],
    ['Southwestern Crepe', 'Corn, tomatoes, black beans, bell peppers, sausage, and guacamole.',
      require.context('../images/southwestern-crepe', false, /\.jpg$/i), 'Crepe topped with avocado, tomatoes, and corn'],
    ['Pesto Chicken Crepe', 'Grilled chicken, mozzarella cheese, spinach, and pesto sauce.',
      require.context('../images/chicken-pesto-crepe', false, /\.jpg$/i), 'Chicken, spinach, and cheese wrapped in crepe'],
    ['Seaside Crepe', 'Smoked salmon, cream cheese, chives, spinach, and capers.',
      require.context('../images/seaside-crepe', false, /\.jpg$/i), 'Crepes topped with folded salmon slices and herb']];

  renderSection('Savory Crepes', savoryCrepesDetails);
}

function renderSweetCrepes() {
  const sweetCrepesDetails =
    [["Chocolate Lover's Crepe", 'Nutella, dark chocolate chips, brownie filling, and strawberries topped with whipped cream, chocolate flakes, and chocolate syrup.',
      require.context('../images/chocolate-lovers-crepe', false, /\.jpg$/i), 'Chocolate crepe topped with strawberries and chocolate syrup'],
     ["Go Bananas Crepe", 'Bananas, banana pudding, peanut butter, and chopped walnuts topped with powdered sugar, chocolate syrup, and caramel syrup.',
      require.context('../images/go-bananas-crepe', false, /\.jpg$/i), 'Bananas wrapped in crepe and topped with chocolate syrup'],
     ["Berry Red Crepe", 'Strawberries, raspberries, blueberries, watermelon, and cream topped with powdered sugar and honey.',
      require.context('../images/berry-red-crepe', false, /\.jpg$/i), 'Folded crepes topped with red berries']];

  renderSection('Sweet Crepes', sweetCrepesDetails);
}

function renderSides() {
  const sidesDetails = 
    [['French Fries', 'Made from fresh potatoes, served with your choice of dipping sauce.',
      require.context('../images/french-fries', false, /\.jpg$/i), 'Shoestring fries topped with green herb flakes'],
     ['Artichoke Dip', 'Crafted from our special house recipe, served with your choice of tortilla chips or potato chips.',
      require.context('../images/artichoke-dip', false, /\.jpg$/i), 'Bowl of artichoke dip surrounded by tortilla chips'],
     ['Chicken Wings', 'Baked crispy and spicy wings served on a lettuce bed and with your choice of dipping sauce.',
      require.context('../images/chicken-wings', false, /\.jpg$/i), 'Glazed chicken wings on a plate with lettuce']];
  renderSection('Sides', sidesDetails);
}

function renderBeverages() {
  const beveragesDetails =
    [['Milkshake', 'Smooth and sweet, made with fresh whole milk. Available flavors: chocolate, vanilla, strawberry, banana.',
      require.context('../images/milkshake', false, /\.jpg$/i), 'Four milkshakes of different flavors'],
     ['Fruit Smoothie', 'Cool and refreshing. Choose from one or more of the following fruits: strawberry, watermelon, banana, pineapple, coconut, apple, blueberry, raspberry, pear, kiwi.',
      require.context('../images/fruit-smoothies', false, /\.jpg$/i), 'Five colorful fruit smoothies surrounded by fruit'],
     ['Iced Tea', 'Our brew is a customer favorite! Flavored with sugar and your choice of fruit.',
      require.context('../images/iced-tea', false, /\.jpg$/i), 'Iced tea with lemon slices']];
  renderSection('Beverages', beveragesDetails);
}

function renderSection(headingText, details) {
  const sectionElement = document.createElement('div'),
        headingElement = renderSectionHeading(headingText),
        detailsElement = document.createElement('div');
  sectionElement.classList.add('menu-section');
  detailsElement.classList.add('menu-details');
  details.forEach(details => renderMenuItem(detailsElement, ...details));
  [headingElement, detailsElement].forEach(element => sectionElement.appendChild(element));
  contentElement.appendChild(sectionElement);
}

function renderSectionHeading(headingText) {
  const headingElement = document.createElement('div'),
        headingTextElement = document.createElement('h2');
  headingElement.classList.add('menu-section-heading');
  renderIcon(headingElement, 'cloud-font');
  headingTextElement.textContent = headingText;
  headingElement.appendChild(headingTextElement);
  renderIcon(headingElement, 'cloud-font');
  return headingElement;
}

export default function renderMenu() {
  renderContentNone();
  setStyleClasses();
  renderHeading();
  renderAppetizers();
  renderSavoryCrepes();
  renderSweetCrepes();
  renderSides();
  renderBeverages();
}
