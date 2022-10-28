const distIcons = require.context('../images/icons/', false, /\.svg$/i),
      srcIcons = distIcons.keys();

export function renderIcon(parentElement, iconName) {
  const img = new Image();
  img.classList.add('icon');
  img.src = distIcons(srcIcons.find(filename => filename.includes(iconName)));
  parentElement.appendChild(img);
}

export default function renderResponsiveImage(parentElement, imgDistSet, sizes, alt = '') {
  const img = new Image(),
    imgSrcSet =
      imgDistSet.keys()
        .map(filename => [filename, +filename.match(/\d+/)[0]])
        .sort((a, b) => a[1] - b[1]);
  img.src = imgDistSet(imgSrcSet[0][0]);
  img.srcset = imgSrcSet.map(([filename, width]) => `${imgDistSet(filename)} ${width}w`).join(',');
  img.sizes = sizes;
  img.alt = alt;
  parentElement.appendChild(img);
}
