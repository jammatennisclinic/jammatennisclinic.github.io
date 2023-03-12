// create observer object, pass in a callback function to the constructor
// to fade / transition element inwards (class in CSS) and then unobserve it right afterwards 
// want to 
// 

document.addEventListener("DOMContentLoaded", function(){
    console.log("we are ready for action")
    let cards = document.querySelectorAll('.excellence');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    }, 
    {
        threshold: 0.5
    });

    cards.forEach(card => {
        observer.observe(card)
    })
  });








