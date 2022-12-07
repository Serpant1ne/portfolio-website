

let html = document.getElementById('html')
let button = document.getElementById('darkBtn')
let image = document.getElementById('image')
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    image.src='img/Sun.svg';
    button.mode = 'dark';
} else {
    html.classList.remove('dark');
    image.src='img/Moon.svg';
    button.mode = 'light';
}

button.addEventListener('click', function(){
    if(button.mode === 'light'){
        html.classList.add('dark');
        image.src='img/Sun.svg';
        button.mode = 'dark';
    }
    else if(button.mode === 'dark'){
        html.classList.remove('dark');
        image.src='img/Moon.svg';
        button.mode = 'light';
    }
})

