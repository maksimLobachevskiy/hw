let changeButton = document.querySelector(".change_theme");
let currentTheme = true;
changeButton.addEventListener('click', () => {
    if (currentTheme) {
        document.getElementById('css_file').href = "css/green-theme.css";
        window.localStorage.setItem('theme', document.getElementById('css_file').href = "css/green-theme.css");
    }
    else{
        document.getElementById('css_file').href = "css/style.css";
        window.localStorage.setItem('theme', document.getElementById('css_file').href = "css/style.css");
    }
    currentTheme = !currentTheme;
});

let theme = window.localStorage.getItem('theme');
if (theme) document.getElementById('css_file').href = `${theme}`;