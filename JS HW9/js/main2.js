    const links = document.querySelectorAll('.tabs-title');
    const content = document.querySelectorAll('.tabs-content li');

    function tab () {
    links.forEach(item => {
        item.addEventListener('click', selectTab);
    });

    function selectTab() {
        links.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    }

    for (let i = 0; i < links.length; i++) {
        function onclick(i) {
            let link = links[i];
            link.onclick = function () {
                for (let j = 0; j < content.length; j++) {
                    let display = window.getComputedStyle(content[j]).display;
                    if (display === "block") {
                        content[j].style.display = "none";
                    }
                }
                content[i].style.display = "block";
            }
        }
        onclick(i);
    }
}
    tab ();