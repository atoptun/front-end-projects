import"../modulepreload-polyfill-B5Qt9EMX.js";const n="English Excellence",p="./project-preview.png",a={title:n,preview:p},j="Simply chocolate",g="./project-preview.jpg",v={title:j,preview:g},_="/front-end-projects/assets/img/project-preview-DeMrkegx.png",d="/front-end-projects/assets/img/project-preview-CZ7uCP-d.jpg",m="/front-end-projects/assets/img/preview-default-Bqb_KZJC.jpg",w=Object.assign({"../projects/01-english-excellence/meta.json":a,"../projects/02-simply-chocolate/meta.json":v}),r=Object.assign({"../projects/01-english-excellence/project-preview.png":_,"../projects/02-simply-chocolate/project-preview.jpg":d}),s=document.querySelector("#project-list"),h=()=>{if(!s)return;const o=Object.entries(w).map(([i,e])=>{const c=i.replace("/meta.json",""),t=e.preview?`${c}/${e.preview.replace("./","")}`:null,l=t&&r[t]?r[t]:m;return`
      <li class="project-card">
        <a class="card-link" href="${`${c}/`.replace("../","./")}">
          <div class="card-image">
            <img src="${l}" alt="${e.title}" loading="lazy" width="300" height="300">
          </div>
          <div class="card-content">
            <h2 class="project-title">${e.title}</h2>
          </div>
        </a>
      </li>
    `}).join("");s.innerHTML=o};h();
//# sourceMappingURL=index-CbzYR_D8.js.map
