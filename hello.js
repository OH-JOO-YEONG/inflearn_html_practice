const something = document.querySelector("input");
const showing = document.querySelector(".insang");

function doSomething(){
    const name = something.value;
    showing.innerHTML = `안녕하세요 ${name} 님!`
}