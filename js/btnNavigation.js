let btnUp = document.getElementById('btn-down');
let btnDown = document.getElementById('btn-up');
let sections = document.getElementsByClassName('--section-scroll');
let currentSection = 1;
let totalSections = sections.length;
let sectionInView = document.getElementById(`section-${currentSection}`);

function changeViewUp(){
    if (currentSection != totalSections){
        currentSection ++;
    } else{
        currentSection = 1;
    }
    sectionInView = document.getElementById(`section-${currentSection}`);
    sectionInView.scrollIntoView({ behavior: 'smooth' });
};

function changeViewDown(){
    if (currentSection != 1){
        currentSection --;
    } else{
        currentSection = totalSections;
    }
    sectionInView = document.getElementById(`section-${currentSection}`);
    sectionInView.scrollIntoView({ behavior: 'smooth' });
};

btnUp.addEventListener('click',  function() {
    changeViewUp()
})

btnDown.addEventListener('click',  function() {
    changeViewDown()
})