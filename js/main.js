(() => {
    console.log('fired')


    let mobileNav = document.querySelector('.nav'),
        navPanel = document.querySelector('#burgerCon'),


        navLinks = navPanel.querySelectorAll('a');

    function toggleNav(event) {

        event.preventDefault();


        console.log('shoud show nav dropdown');


        if(this.nodeName == 'A') {
            debugger;
        }


        navPanel.classList.toggle('show-moblie-nav');
    }


    mobileNav.addEventListener('click', toggleNav);


    navLinks.forEach(link => link.addEventListener('click', toggleNav));
})();