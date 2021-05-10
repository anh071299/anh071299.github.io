// 1. Thay đổi title trang thành Họ tên
document.title = "Nguyễn Thị Tú Anh";

// 2. Tách đoạn văn bản cho sẵn thành 2 (cắt chỗ từ 'nemo?'), đặt vào trong thẻ p
let para = document.body.firstChild;
let text = para.textContent;
let sliceIndex = text.indexOf("?") + 1;

let sdParaContent = text.slice(sliceIndex + 1);
let sdPara = document.createElement("p");
sdPara.appendChild(document.createTextNode(sdParaContent));

para.remove();

let fsPara = document.createElement("p");
let fsParaContent = text.slice(0, sliceIndex);
fsPara.appendChild(document.createTextNode(fsParaContent));

document.body.prepend(fsPara);
fsPara.insertAdjacentElement("afterend", sdPara);
// 3. Đếm xem có bao nhiêu từ có độ dài lớn hơn 8 ký tự, thêm mã HTML vào trang
function splitPara(para) {
  let p = para.replaceAll(",", "");
  p = p.replaceAll(".", "");
  p = p.replaceAll("?", "");
  p = p.replaceAll("\n", "");
  p = p
    .trim()
    .split(" ");
  return p;
}
function countWord(para) {
  let p = splitPara(para).filter(function (word) {
    return word.length > 8;
  });
  return p;
}
let txt = countWord(fsParaContent).concat(countWord(sdParaContent));
let countPara = document.createElement("p");
let countParaContent =
  "Số từ có độ dài lớn hơn 8: " +
  txt.length;
countPara.appendChild(document.createTextNode(countParaContent));
sdPara.insertAdjacentElement("afterend", countPara);
// <p>Số từ có độ dài lớn hơn 8: ...</p>
// bên dưới 2 đoạn văn bản bên trên

// 4. Highlight các từ đó, sử dụng thẻ <mark> hoặc thẻ <span class...>
txt.forEach(function (word) {
  fsPara.innerHTML = fsPara.innerHTML.replaceAll(word, "<mark>" + word + "</mark>");
  sdPara.innerHTML = sdPara.innerHTML.replaceAll(word, "<mark>" + word + "</mark>");
})


// 5. Thay thế nội dung các từ đó thành 'Thầy Ba đẹp trai 🧡'
Array.from(fsPara.children).forEach(function (el) {
  el.textContent = "Tú Anh 🧡";
})
Array.from(sdPara.children).forEach(function (el) {
  el.textContent = "Tú Anh 🧡";
})
// 6. Thêm src và alt cho thẻ img, sử dụng link ảnh bất kỳ
let imgTag = document.getElementsByTagName("img");
imgTag[0].src =
  "https://media-cdn.laodong.vn/Storage/NewsPortal/2020/5/2/802649/Bat-Cuoi-Truoc-Loat-.png";
imgTag[0].alt = "meogiangho";
