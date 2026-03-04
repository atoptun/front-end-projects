const metaFiles = import.meta.glob('../projects/**/meta.json', { eager: true, import: 'default' });

const listContainer = document.querySelector('#project-list');

const createCardTemplate = ({ title, preview, url }) => {
  return `
  <li class="project-card">
    <a class="card-link" href="${url}">
      <div class="card-image">
        <img src="${preview}" alt="${title}" loading="lazy" width="300" height="300">
      </div>
      <div class="card-content">
        <h2 class="project-title">${title}</h2>
      </div>
    </a>
  </li>
  `;
};

const renderCatalog = () => {
  if (!listContainer) return;

  const cardList = [];

  Object.entries(metaFiles).forEach(([path, config]) => {
    const projectFolder = path.replace('/meta.json', '');
    const projectUrl = `${projectFolder}/index.html`.replace('../', './');
    let previewUrl = './img/preview-default.jpg';
    if (config.preview) {
      previewUrl = new URL(`${projectFolder}/${config.preview}`, import.meta.url).href;
    }
    cardList.push(
      createCardTemplate({
        title: config.title,
        preview: previewUrl,
        url: projectUrl,
      })
    );
  });

  listContainer.insertAdjacentHTML('beforeend', cardList.join(''));
};

renderCatalog();
