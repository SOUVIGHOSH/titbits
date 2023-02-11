// get all nodes with step class
const steps = document.querySelectorAll('.step');
// get prev,next button & progressbar
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const bar = document.querySelector('.progressbar');
// initializing counter to 1
let counter =1;
// adds event listener
next.addEventListener('click',()=>{
    // increments counter till the max limit reached
    if(counter < steps.length) counter++;
    // updates dom
    updateDom();
});

prev.addEventListener('click',()=>{
    // dec counter till the min limit reached
    if(counter > 1) counter--;
    updateDom();
});

// traverse the step nodes and if the index is lex than equal counter then add active class, removes otherwise
// disables prev when counter==1 and disables next when counter has reached last node
// calculates the progress bar width dynamically
function updateDom(){
    for(let i=0;i<steps.length;i++){
        if(i+1 <= counter) steps[i].classList.add('active');
        else steps[i].classList.remove('active');
    }
    if(counter==1) prev.disabled=true;
    else if(counter==steps.length) next.disabled=true;
    else{
        prev.disabled = false;
        next.disabled = false;
    }

    bar.style.width=(counter-1)/(steps.length-1) * 100 +'%';

}