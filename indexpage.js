
// talk section......
const talk = document.querySelector('#talk_section');
const counters = document.querySelectorAll(".counter");
const speed = 1500;


counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    }
    talk.addEventListener('mouseenter', Event =>{
        updateCount();
    })
    
})
// talk section end.......

