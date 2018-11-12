
let mainNav= document.getElementById('main-nav');
let navbarToggle= document.getElementById('navbar-toggle');


navbarToggle.addEventListener('click',function(){

    if(this.classList.contains('active')){
        mainNav.style.display="none";
        this.classList.remove('active');
    }
    else{
        mainNav.style.display="flex";
        this.classList.add('active');

    }
});


if (screen.width < 991) {

    mainNav.addEventListener('click',function (event) {
    
        mainNav.style.display="none";
        navbarToggle.classList.remove('active');

    });

    document.onscroll = function(){
        mainNav.style.display="none";
        navbarToggle.classList.remove('active');
    };
}
