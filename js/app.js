const jobArray = ['Web Developer', 'JavaScript Learner', 'Food Scientist', 'Health Coach'];
const job = document.querySelector('.job');
const jobList = ['Full Stack Developer', 'React', 'Food Scientist',  'Dad', 'Lifelong learner' ];
var i = 0;

function nextItem() {
    i = i + 1; // increase i by one
    i = i % jobList.length; // if we've gone too high, start from `0` again
    return jobList[i]; // give us back the item of where we are now
}

function prevItem() {
    if (i === 0) { // i would become 0
        i = jobList.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    return jobList[i]; // give us back the item of where we are now
}

window.addEventListener('load', function () {
    job.textContent = jobList[0]; // initial value
    document.getElementById('left-arrow').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            job.textContent = prevItem();
        }
    );
    
    document.getElementById('right-arrow').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            job.textContent = nextItem();
        }
    );
});

const greeting = document.querySelector('.greeting');

document.querySelector('.name-title').addEventListener('click', e => {
    greeting.classList.remove("hidden");
    greeting.innerText = 'Please enjoy your trip through the nebula...';
});
