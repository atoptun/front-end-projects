const metaFiles = import.meta.glob('../projects/**/meta.json', {
  eager: true,
  import: 'default',
});

const previewImages = import.meta.glob(
  '../projects/**/project-preview.{png,jpg,jpeg,svg,webp,avif}',
  {
    eager: true,
    import: 'default',
  }
);

import defaultPreview from '../img/preview-default.jpg';

const listContainer = document.querySelector('#project-list');

const renderCatalog = () => {
  if (!listContainer) return;

  const html = Object.entries(metaFiles)
    .map(([path, config]) => {
      const projectFolder = path.replace('/meta.json', '');

      const imagePath = config.preview
        ? `${projectFolder}/${config.preview.replace('./', '')}`
        : null;

      const previewUrl =
        imagePath && previewImages[imagePath]
          ? previewImages[imagePath]
          : defaultPreview;

      const projectUrl = `${projectFolder}/`.replace('../', './');

      return `
      <li class="project-card">
        <a class="card-link" href="${projectUrl}">
          <div class="card-image">
            <img src="${previewUrl}" alt="${config.title}" loading="lazy" width="300" height="300">
          </div>
          <div class="card-content">
            <h2 class="project-title">${config.title}</h2>
          </div>
        </a>
      </li>
    `;
    })
    .join('');

  listContainer.innerHTML = html;
};

renderCatalog();
