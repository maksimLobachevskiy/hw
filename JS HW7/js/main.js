//1. С шаблонными строками
function displayList(array, parentDom = document.body) {
    const elements = array.map((item) => {
        return `<li>${item}</li>`;
    });
    parentDom.innerHTML = `<ul>${elements.join(" ")}</ul>`;
}
let arr = ["JavaScript", "JAVA", "HTML", "CSS", "C#", "C++", "Phyton", "PHP"];
displayList(arr, document.querySelector('#content'));

//2. Без шаблонных строк
/*function displayList(array, parentDom = document.body) {
    const elements = array.map((item) => {
            const listLi = document.createElement("li");
            listLi.innerHTML = item;
            return listLi;
        });

    const list = document.createElement("ul");
    list.append(...elements);
    parentDom.append(list);
}
let arr = ["JavaScript", "JAVA", "HTML", "CSS", "C#", "C++", "Phyton", "PHP"];
displayList(arr, document.querySelector('#content'));*/
