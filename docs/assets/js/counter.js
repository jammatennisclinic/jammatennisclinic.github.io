const counters = document.querySelectorAll('.counter');
const controller = new AbortController();
const speed = 200;

window.addEventListener('scroll', () => {
    console.log("eventListener being fired")
    const firstNumber = document.getElementById('firstNumber');

    if (firstNumber.getBoundingClientRect().top >= 200 && firstNumber.getBoundingClientRect().bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        console.log("calling count function now");
        startCount();
        controller.abort();
    }
}, {signal: controller.signal})

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
                const roundedTarget = Math.round(target);
                counter.innerText = roundedTarget;
            }
        }
        updateCount();
    });
}

