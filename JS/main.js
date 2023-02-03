const header = document.getElementById('nav');

window.addEventListener("scroll", function() {
    if (window.scrollY >= 160) {
        header.style.position = "fixed";
        header.style.top = "0";
    } else {
        header.style.position = "static";
    }
});

// вместо 160 написать, когда header дополз до конца то  