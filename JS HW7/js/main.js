
function displayList(array, parentDom) {
    const list = document.createElement("ul");
    array.map(
        function displayLi (currentValue) {
            const listLi = document.createElement("li");
            listLi.innerHTML = currentValue;
            list.append(listLi);
        }

    );
        if (parentDom) {
            parentDom.append(list);
        } else {
            document.body.append(list);
        }
    }
let arr = ["JavaScript", "JAVA", "HTML", "CSS", "C#", "C++", "Phyton", "PHP"];
displayList(arr, content);

