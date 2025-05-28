const btntop = document.getElementById('btn-top');

window.onscroll = () => {
    if(scrollY >= 120) {
        btntop.style.display = 'block';
    }
    else {
        btntop.style.display = 'none'
    }
}

btntop.onclick = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
}

const btn1 = document.getElementById('btn1');

btn1.onclick = () => {
    scrollTo({
        top: 320,
        left: 0,
        behavior: "smooth",
    });
}
