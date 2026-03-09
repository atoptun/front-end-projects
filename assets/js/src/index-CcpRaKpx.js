import "../../modulepreload-polyfill-COaX8i6R.js";
const title$4 = "English Excellence";
const preview$4 = "./project-preview.png";
const __vite_glob_0_0 = {
  title: title$4,
  preview: preview$4
};
const title$3 = "Simply chocolate";
const preview$3 = "./project-preview.jpg";
const __vite_glob_0_1 = {
  title: title$3,
  preview: preview$3
};
const title$2 = "Web studio";
const preview$2 = "./project-preview.jpg";
const __vite_glob_0_2 = {
  title: title$2,
  preview: preview$2
};
const title$1 = "Cat house";
const preview$1 = "./project-preview.jpg";
const __vite_glob_0_3 = {
  title: title$1,
  preview: preview$1
};
const title = "Cat CRM";
const preview = "./project-preview.jpg";
const __vite_glob_0_4 = {
  title,
  preview
};
const __vite_glob_1_0 = "/front-end-portfolio/assets/img/project-preview-DeMrkegx.png";
const __vite_glob_1_1 = "/front-end-portfolio/assets/img/project-preview-CZ7uCP-d.jpg";
const __vite_glob_1_2 = "/front-end-portfolio/assets/img/project-preview-D5o7DGK8.jpg";
const __vite_glob_1_3 = "/front-end-portfolio/assets/img/project-preview-BF97nXz_.jpg";
const __vite_glob_1_4 = "/front-end-portfolio/assets/img/project-preview-CaA63tpU.jpg";
const defaultPreview = "/front-end-portfolio/assets/img/preview-default-Bqb_KZJC.jpg";
const metaFiles = /* @__PURE__ */ Object.assign({
  "../projects/01-english-excellence/meta.json": __vite_glob_0_0,
  "../projects/02-simply-chocolate/meta.json": __vite_glob_0_1,
  "../projects/03-web-studio/meta.json": __vite_glob_0_2,
  "../projects/04-cat-house/meta.json": __vite_glob_0_3,
  "../projects/05-cat-crm/meta.json": __vite_glob_0_4
});
const previewImages = /* @__PURE__ */ Object.assign({
  "../projects/01-english-excellence/project-preview.png": __vite_glob_1_0,
  "../projects/02-simply-chocolate/project-preview.jpg": __vite_glob_1_1,
  "../projects/03-web-studio/project-preview.jpg": __vite_glob_1_2,
  "../projects/04-cat-house/project-preview.jpg": __vite_glob_1_3,
  "../projects/05-cat-crm/project-preview.jpg": __vite_glob_1_4
});
const listContainer = document.querySelector("#project-list");
const renderCatalog = () => {
  if (!listContainer) return;
  const html = Object.entries(metaFiles).map(([path, config]) => {
    const projectFolder = path.replace("/meta.json", "");
    const imagePath = config.preview ? `${projectFolder}/${config.preview.replace("./", "")}` : null;
    const previewUrl = imagePath && previewImages[imagePath] ? previewImages[imagePath] : defaultPreview;
    const projectUrl = `${projectFolder}/`.replace("../", "./");
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
  }).join("");
  listContainer.innerHTML = html;
};
renderCatalog();
//# sourceMappingURL=index-CcpRaKpx.js.map
