const navSlide = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu_content');
    const menu_items = document.querySelectorAll('.menu_content li');

    burger.addEventListener('click', () => {


        menu.classList.toggle('menu_active');

        // menu_items.forEach((link, index) => {
        //     if (link.style.animation) {
        //         link.style.animation = '';
        //     }   else {
        //         link.style.animation = 'menu_itemsFade 0.5s ease forwards ${index / 8 + 0.3}s';
        //     }
        // )};

        //Burger animation
        burger.classList.toggle ('toggle');

    });

    

}

navSlide ();