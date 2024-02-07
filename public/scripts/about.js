const aboutUs= document.getElementById("about")

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.documentElement;
    window.addEventListener('scroll', function() {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        // console.log(scrollPercentage);
        root.style.setProperty('--scroll', `${scrollPercentage}%`);
      });
    });
