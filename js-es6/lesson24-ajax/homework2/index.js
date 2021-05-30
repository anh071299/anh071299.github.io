let xhr = new XMLHttpRequest();

let method = "GET";

let uri = "https://reqres.in/api/unknown";

xhr.open(method, uri);

xhr.responseType = 'json';



xhr.send(null);

xhr.onload = (e) => {
    let colors = xhr.response.data;
    console.log(colors);
    colors = colors.map((color) => {
        return ` <div class="col">
        <div class="color">
          <a href="single.html?colorId=${color.id}">
              <div class="color-main" style="background-color:${color.color}"><h1 class="color-year">${color.year}</h1></div>
              <div class="color-infor">
                  <h4>${color.name}</h4>
                  <span class = "color-value">${color.pantone_value}</span>
              </div>
          </a>
        </div>
      </div>`;
    }).join("");
    document.querySelector(".colors").innerHTML = colors;
};
