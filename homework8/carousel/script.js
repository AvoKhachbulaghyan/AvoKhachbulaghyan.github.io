let slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
    let slides = document.getElementsByClassName("carousel-image");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[n].style.display = "block";
}
