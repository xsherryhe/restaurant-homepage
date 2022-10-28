import renderResponsiveImage from './renderImage';

export default function renderMenuItem(parentElement, name, description, 
                                       imgDistSet, imgAlt) {
  const menuItemContainer = renderMenuItemContainer();
  function renderMenuItemContainer() {
    const menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add('menu-item');
    parentElement.appendChild(menuItemContainer);
    return menuItemContainer;
  }

  function renderName() {
    const nameElement = document.createElement('h3');
    nameElement.textContent = name;
    menuItemContainer.appendChild(nameElement);
  }

  function renderDescription() {
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    menuItemContainer.appendChild(descriptionElement);
  }

  function renderMenuItemImage() {
    renderResponsiveImage(menuItemContainer, imgDistSet, '40vw', imgAlt);
  }

  function render() {
    renderName();
    renderDescription();
    renderMenuItemImage();
  }
  render();
}
