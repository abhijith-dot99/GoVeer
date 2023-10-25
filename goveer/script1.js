let swiperTexts = document.querySelectorAll(".swipper_text");
let currentText = 0;

setInterval(() => {
    swiperTexts[currentText].style.display = 'none';
    currentText = (currentText + 1) % swiperTexts.length;
    swiperTexts[currentText].style.display = 'block';
}, 2400);










// hamburger
document.querySelector('.hamburger').addEventListener('click', function() {
    const hamHeaderItems = document.querySelector('.ham_header_items');
    const hamHeaderItemsIn = document.querySelector('.ham_header_items_in');
    const navItems = document.querySelectorAll('.nav_item');
    const chevronIcons = document.querySelectorAll('.icon--chevron-right');
    const body = document.querySelector('body');

    const computedStyle = window.getComputedStyle(hamHeaderItemsIn);
    const isDisplayed = computedStyle.getPropertyValue('display') !== 'none';

    if (!isDisplayed) {
        hamHeaderItems.style.display = 'block';
        hamHeaderItemsIn.style.display = 'flex';
        hamHeaderItemsIn.style.overflow = 'scroll';
        hamHeaderItems.style.overflow = 'scroll';

        navItems.forEach(navItem => {
            navItem.style.padding = '10px 6px';
            navItem.style.width = '100%';
            navItem.style.display = 'flex';                // Added this line
            navItem.style.justifyContent = 'space-between'; // Added this line
            navItem.style.alignItems = 'center';            // Added this line
        });

        chevronIcons.forEach(chevronIcon => {
            chevronIcon.style.display = 'flex';
        });

        body.style.overflow = 'hidden';
    } else {
        hamHeaderItems.style.display = 'none';
        hamHeaderItemsIn.style.display = 'none';

        navItems.forEach(navItem => {
            navItem.style.padding = '30px 6px';
            navItem.style.display = '';                // Reset to default
            navItem.style.justifyContent = '';         // Reset to default
            navItem.style.alignItems = '';             // Reset to default
        });

        chevronIcons.forEach(chevronIcon => {
            chevronIcon.style.display = 'none';
        });

        body.style.overflow = 'auto';
    }
});








document.getElementById('down_arrow').addEventListener('click', function() {
    // Get the current scroll position
    let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Smoothly scroll to the new position
    window.scroll({
        top: currentScrollPosition + 700, // Adjust the value as needed
        behavior: 'smooth'
    });
});





// Function to handle the parallax effect
function handleParallax(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}

// Create a new intersection observer
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(handleParallax, options);

// Observe the text elements for the parallax effect
observer.observe(document.querySelector('.section_text_first'));
observer.observe(document.querySelector('.section_text_second'));





const shopElements = document.querySelectorAll('.shop_img_and_text');

shopElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        const imgs = element.querySelector('.shop_img').querySelectorAll('img');
        imgs[0].classList.remove('active-img');
        imgs[1].classList.add('active-img');
    });

    element.addEventListener('mouseout', () => {
        const imgs = element.querySelector('.shop_img').querySelectorAll('img');
        imgs[1].classList.remove('active-img');
        imgs[0].classList.add('active-img');
    });
});









let carousel = document.querySelector('.product_carousel');
let lastScrollTop = 0;
let cardHeight = document.querySelector('.product_card_main').offsetHeight; // Assuming all cards have the same height

carousel.addEventListener('scroll', function() {
    let st = this.scrollTop;
    if (st > lastScrollTop){
        // Scrolling down
        this.scrollTop = Math.ceil(this.scrollTop / cardHeight) * cardHeight + cardHeight; // Move down by two cards
    } else {
        // Scrolling up
        this.scrollTop = Math.ceil(this.scrollTop / cardHeight) * cardHeight - cardHeight; // Move up by two cards
    }
    lastScrollTop = st;
});



// Reference to the hamburger menu and close button
const hamMenu = document.querySelector('.header_items .ham_header_items');
const closeButton = document.querySelector('.close_btn');




document.addEventListener('click', function(event) {
    let menu = document.querySelector('.header_items .ham_header_items');

   
});












// sixthcompeont
let currentSlide = 0;
const slides = document.querySelectorAll('.text_slide');
const leftArrow = document.querySelector('.left_aroww');
const rightArrow = document.querySelector('.right_aroww');

leftArrow.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
});

rightArrow.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
});








const movingComponent = document.querySelector('.moving_component');
const images = movingComponent.querySelectorAll('.moving_image');

// Clone each image to ensure there's enough content for infinite scroll
images.forEach(img => {
    const clone = img.cloneNode();
    movingComponent.appendChild(clone);
});

movingComponent.addEventListener('animationiteration', () => {
    movingComponent.style.animationPlayState = 'paused';  // Pause the animation
    movingComponent.style.transform = 'translateX(-100%)';  // Reset the position
    setTimeout(() => {
        movingComponent.style.animationPlayState = 'running';  // Restart the animation
    }, 0);
});












let lastScroll = 0;
const headerNav = document.querySelector('.header_nav');
const ham = document.querySelector('.hamburger');
const headerButton = document.querySelector('.header_button');
const sectionOne = document.querySelector('.section_one');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Scrolling down and beyond 10rem from the top
    if (scrollTop > lastScroll && scrollTop > 160) {
        headerNav.classList.add('hide-header');
        // Hide sectionOne when scrolling down
        sectionOne.style.display = 'none';

        // Reset styles to default
        headerNav.style.backgroundColor = '';
        headerNav.style.color = '';
        if (headerButton) {
            headerButton.style.border = '';
        }
    } 
    // Scrolling up
    else {
        headerNav.classList.remove('hide-header');
        headerNav.style.background = '#fff';
        headerNav.style.color = '#111111';
        if (headerButton) {
            headerButton.style.border = '2px solid #111';
        }

        if (ham) {
            ham.style.color = '#111';
        }
    }

    // When at the top of the page, set the background of headerNav to transparent
    if (scrollTop === 0) {
        headerNav.style.background = 'transparent';
        headerNav.style.color = '#fff';

        // Display sectionOne when at the top
        sectionOne.style.display = 'flex';

        if (headerButton) {
            headerButton.style.border = '2px solid #fff';
        }
        if (ham) {
            ham.style.color = '#fff';
        }
    }

    lastScroll = scrollTop;
});







// document.querySelector('.close_btn').addEventListener('click', function() {
//     // Get the elements to hide
//     var hamHeaderList = document.querySelector('.ham_header_list');
//     var headerItemsListIn = document.querySelector('.header_items_list_in');

//     // Hide the elements by setting display to 'none'
//     hamHeaderList.style.display = 'none';
//     headerItemsListIn.style.display = 'none';
//   });
  





// const closeBtn = document.querySelector('.close_btn');
// const elementToHide = document.querySelector('.header_items');
// const elementToHide2 = document.querySelector('.ham_header_items_in');

// closeBtn.addEventListener('click', function() {
//   if (elementToHide.style.display === 'none') {
//     elementToHide.style.display = 'block';

//     document.body.style.overflow = 'hidden';
//     document.documentElement.style.overflow = 'hidden';
//   } else {
//     elementToHide.style.display = 'none';
//     elementToHide2.style.display = 'none';

//     document.body.style.overflow = 'auto';
//     document.documentElement.style.overflow = 'auto';
//   }
// });






const closeBtn = document.querySelector('.close_btn');
const elementToHide = document.querySelector('.header_items');
const elementToHide2 = document.querySelector('.ham_header_items_in');
const goveerElement = document.querySelector('.goveer');  // Assuming this is the main container

closeBtn.addEventListener('click', function() {
    if (elementToHide.style.display === 'none') {
        elementToHide.style.display = 'block';
        document.body.classList.add('no-scroll');
        document.documentElement.classList.add('no-scroll');
        if(goveerElement) {
            goveerElement.classList.add('no-scroll');
        }
    } else {
        elementToHide.style.display = 'none';
        elementToHide2.style.display = 'none';
        document.body.classList.remove('no-scroll');
        document.documentElement.classList.remove('no-scroll');
        if(goveerElement) {
            goveerElement.classList.remove('no-scroll');
        }
    }
});




document.querySelector('.hamburger').addEventListener('click', function() {
    const containerHover = document.querySelector('.container___hover');
    
    const isDisplayed = window.getComputedStyle(containerHover).getPropertyValue('display') !== 'none';

    if (!isDisplayed) {
        containerHover.style.display = 'block';
    } else {
        containerHover.style.display = 'none';
    }
});







