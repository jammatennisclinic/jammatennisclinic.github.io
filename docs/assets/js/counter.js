console.log("counter being called");

const counters = document.querySelectorAll('.counter');
const speed = 50;

window.addEventListener('scroll', () => {
    const firstNumber = document.getElementById('firstNumber');

    if (firstNumber.getBoundingClientRect().top >= 200 && firstNumber.getBoundingClientRect().bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        startCount();
    }

    // const scrolled = window.offsetTop;
    // const elementPosition = counters.offsetTop;
    
    // if(scrolled == elementPosition){
    //     startCount();
    // }
})

function startCount() {
    counters.forEach(counter => {
        const updateCount = () => {
            // console.log("inside counters function")
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            // console.log(target);
            // console.log(count);
            // console.log(inc);
            if(count < target) {
                const value = count + inc;
                counter.innerText = value;
                setTimeout(updateCount, 1);
            } else {
                count.innerText = parseInt(target);
            }
        }
        updateCount();
    });
}

