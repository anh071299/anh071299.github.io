let xhr = new XMLHttpRequest();

let uri = "https://reqres.in/api/users";
let method = "GET";

xhr.open(method, uri);

xhr.responseType = "json";

xhr.onload = (e) => {
  console.log("ok");
  let users = xhr.response;
  console.log(users);

  users = users.data
    .map((us) => {
      return `  <div class="col">
    <div class="user">
        <a href="single.html?userId=${us.id}">
          <h4 class="user-name"> ${us.first_name}  ${us.last_name}
          </h4>
          <p class="user-email">${us.email}</p>
          <img src="${us.avatar}" alt="userImg">
        </a>
    </div>
</div>`;
    })
    .join("");
  document.querySelector(".users").innerHTML = users;
};

xhr.send(null);
