


let testImg = document.querySelector("img");

testImg.onclick = image_change;

function image_change() {
    let testImgSrc = testImg.getAttribute("src");
    if (testImgSrc === "images/hx-smile.png") {
        testImg.setAttribute("src", "images/hx-smile2.png");
    } else {
        testImg.setAttribute("src", "images/hx-smile.png");
    }
};


let testButton = document.querySelector("button");
let testPageNum = document.querySelector("#pageNum");

function set_pageNum() {
    let pageNum = prompt("请输入页码:");
    if (!pageNum) {
        set_pageNum();
    } else {
        localStorage.setItem("pageNum", pageNum);
        testPageNum.textContent = "第 " + pageNum +" 页";
        
    }
};


if (!localStorage.getItem("pageNum")) {
    set_pageNum();
} else {
    let pageNum = localStorage.getItem("pageNum");
    testPageNum.textContent = "第 " + pageNum +" 页";
};


testButton.onclick = function () {
    set_pageNum();
};
// let myHeading = document.querySelector("h1");
// myHeading.textContent = "YELLOW";


// let testStr_0;
// testStr_0 = "Hong Xia";


// document.querySelector("html").addEventListener("click", () => {
//     alert("别戳我，我怕疼。");
//   });
