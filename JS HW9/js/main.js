function tab () {
    let links = document.querySelectorAll('.tabs-title');
    let content = document.querySelectorAll('.tabs-content li');
    let active;
    links.forEach(item => {
        item.addEventListener('click', selectTab);
        }
    );
    function selectTab() {
        links.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        active = this.getAttribute('data-tab-name');
        showContent(active);
    }
    function showContent(active) {
        content.forEach(item => {
            item.classList.contains(active) ? item.classList.add('content-active') : item.classList.remove('content-active');
        })
    }

}

tab();