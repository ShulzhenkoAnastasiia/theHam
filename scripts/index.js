
// THIRD BLOCK

const showContent = (event) => {
    document.querySelector(".third-block-menu-item-active").classList.remove("third-block-menu-item-active");
    event.target.classList.add("third-block-menu-item-active");

    const category = event.target.dataset.category;

    document.querySelector(".third-block-image-active").classList.remove("third-block-image-active");
    document.querySelector(".third-block-text-active").classList.remove("third-block-text-active");
    document.querySelector(".third-block-menu-item-rect-active").classList.remove("third-block-menu-item-rect-active");

    document.querySelector(`[data-image="${category}"]`).classList.add("third-block-image-active");
    document.querySelector(`[data-text="${category}"]`).classList.add("third-block-text-active");
    document.querySelector(`[data-rectangle="${category}"]`).classList.add("third-block-menu-item-rect-active");
}

const menuItemsDiv = document.querySelector(".third-block-menu-items");
menuItemsDiv.addEventListener("click", showContent)



// FIFTH BLOCK

const allImagesHtmlArray = [
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design1.jpg" alt="graphic-design1" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design2.jpg" alt="graphic-design2" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design3.jpg" alt="graphic-design3" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design4.jpg" alt="graphic-design4" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design5.jpg" alt="graphic-design5" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design6.jpg" alt="graphic-design6" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,

    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design7.jpg" alt="graphic-design7" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design8.jpg" alt="graphic-design8" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design9.jpg" alt="graphic-design9" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design10.jpg" alt="graphic-design10" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design11.jpg" alt="graphic-design11" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design12.jpg" alt="graphic-design12" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design1.jpg" alt="web-design1" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design2.jpg" alt="web-design2" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design3.jpg" alt="web-design3" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design4.jpg" alt="web-design4" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design5.jpg" alt="web-design5" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design6.jpg" alt="web-design6" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design7.jpg" alt="web-design7" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design8.jpg" alt="web-design8" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design9.jpg" alt="web-design9" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design10.jpg" alt="web-design10" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design11.jpg" alt="web-design11" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design12.jpg" alt="web-design12" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page1.jpg" alt="landing-page1" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page2.jpg" alt="landing-page2" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page3.jpg" alt="landing-page3" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page4.jpg" alt="landing-page4" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page5.jpg" alt="landing-page5" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page6.jpg" alt="landing-page6" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page7.jpg" alt="landing-page7" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page8.jpg" alt="landing-page8" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page9.jpg" alt="landing-page9" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page10.jpg" alt="landing-page10" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page11.jpg" alt="landing-page11" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page12.jpg" alt="landing-page12" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/wordpress1.jpg" alt="wordpress1" data-img="wordpress" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Wordpress</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/wordpress2.jpg" alt="wordpress2" data-img="wordpress" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Wordpress</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/wordpress3.jpg" alt="wordpress3" data-img="wordpress" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Wordpress</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/wordpress4.jpg" alt="wordpress4" data-img="wordpress" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Wordpress</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/wordpress5.jpg" alt="wordpress5" data-img="wordpress" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Wordpress</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/wordpress6.jpg" alt="wordpress6" data-img="wordpress" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Wordpress</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/wordpress7.jpg" alt="wordpress7" data-img="wordpress" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Wordpress</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/wordpress8.jpg" alt="wordpress8" data-img="wordpress" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Wordpress</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/wordpress9.jpg" alt="wordpress9" data-img="wordpress" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Wordpress</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/wordpress10.jpg" alt="wordpress10" data-img="wordpress" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Wordpress</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/wordpress11.jpg" alt="wordpress11" data-img="wordpress" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Wordpress</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/wordpress12.jpg" alt="wordpress12" data-img="wordpress" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Wordpress</p></div></div></div>`,
]

const imagesForAllHtml = [
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page6.jpg" alt="landing-page6" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""/><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""/><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""/><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""/></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page1.jpg" alt="landing-page1" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""/><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""/><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""/><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""/></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design8.jpg" alt="web-design8" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""/><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""/><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""/><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""/></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design9.jpg" alt="web-design9" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""/><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""/><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""/><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""/></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design12.jpg" alt="web-design12" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""/><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""/><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""/><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""/></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/wordpress3.jpg" alt="wordpress3" data-img="wordpress" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""/><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""/><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""/><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""/></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Wordpress</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/wordpress10.jpg" alt="wordpress10" data-img="wordpress" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""/><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""/><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""/><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""/></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Wordpress</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/landing-page4.jpg" alt="landing-page4" data-img="landing-pages" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""/><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""/><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""/><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""/></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Landing Page</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design10.jpg" alt="graphic-design10" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""/><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""/><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""/><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""/></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design11.jpg" alt="graphic-design11" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""/><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""/><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""/><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""/></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/graphic-design12.jpg" alt="graphic-design12" data-img="graphic-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""/><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""/><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""/><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""/></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Graphic Design</p></div></div></div>`,
    `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="./images/fifth_block/web-design4.jpg" alt="web-design4" data-img="web-design" width="285px" height="206px"/></div><div class="flip-card-back"><div class="fifth-block-image-back-logo"><img src="./images/fifth_block/flip-card-back/Ellipse 1 copy 3.png" alt=""/><img src="./images/fifth_block/flip-card-back/Combined shape 7431.png" alt=""/><img src="./images/fifth_block/flip-card-back/Ellipse 1.png" alt=""/><img src="./images/fifth_block/flip-card-back/Layer 23.png" alt=""/></div><p class="flip-card-back-text">creative design</p><p class="flip-card-back-text">Web Design</p></div></div></div>`,
]

const imagesWrapper = document.querySelector(".fifth-block-images-container");
const menuItems = document.querySelector(".fifth-block-menu-items");

const buttonMore = document.querySelector(".fifth-block-button");
let moreImagesDiv = document.querySelector(".fifth-block-images-container-more");
const imagesDiv = document.querySelector(".fifth-block-images-container");

let result;

const showImage = (event) => {
    document.querySelector(".fifth-block-menu-item-active").classList.remove("fifth-block-menu-item-active");
    event.target.classList.add("fifth-block-menu-item-active");

    const imgCategory = event.target.dataset.categ;

    switch (imgCategory) {
        case "all":
            imagesWrapper.innerHTML = imagesForAllHtml.join("");
            moreImagesDiv.style.display = "none";
            buttonMore.style.display = "flex";
        
            break;
    
        case "graphic-design":
            result = allImagesHtmlArray.filter(image => image.includes(`data-img="graphic-design"`));
            imagesWrapper.innerHTML = result.join("");
            moreImagesDiv.style.display = "none";
            buttonMore.style.display = "flex";

            break;
        case "web-design":
            result = allImagesHtmlArray.filter(image => image.includes(`data-img="web-design"`));
            imagesWrapper.innerHTML = result.join("");
            moreImagesDiv.style.display = "none";
            buttonMore.style.display = "flex";
            
            break;
        
        case "landing-pages":
            result = allImagesHtmlArray.filter(image => image.includes(`data-img="landing-pages"`));
            imagesWrapper.innerHTML = result.join("");
            moreImagesDiv.style.display = "none";
            buttonMore.style.display = "flex";
                
            break;

        case "wordpress":
            result = allImagesHtmlArray.filter(image => image.includes(`data-img="wordpress"`));
            imagesWrapper.innerHTML = result.join("");
            moreImagesDiv.style.display = "none";
            buttonMore.style.display = "flex";
                
            break;
    }
}
menuItems.addEventListener("click", showImage)

const loadingWrapper = document.querySelector(".container-loader");

const showLoading = () => {
    loadingWrapper.style.display="flex"
}



const showMoreImages = () => {
    loadingWrapper.style.display="none";
    moreImagesDiv.style.display = "flex";
    moreImagesDiv.innerHTML = imagesDiv.innerHTML;
    moreImagesDiv.style.marginTop = 0;
    imagesDiv.style.marginBottom = 0;

    moreImagesDiv.style.marginBottom = "100px"
}

buttonMore.addEventListener("click",() => {
    buttonMore.style.display = "none";
    showLoading();
    let timer = setTimeout(showMoreImages, 3000)   
});




// SEVENTH BLOCK

//CHANGE IMAGE BY THE TOUCH ON IT

const miniImagesCollection = document.getElementsByClassName("seventh-block-image-mini ")

const wrapperImagesMini = document.querySelector(".seventh-block-mini-images-container");

let currentImageMini = document.querySelector(".seventh-block-image-mini-active");

function changeInfoCurrentEmployee (categ) {
    document.querySelector(".seventh-block-image-active").classList.remove("seventh-block-image-active");
    document.querySelector(".employee-info-active").classList.remove("employee-info-active");

    document.querySelector(`[data-photo="${categ}"]`).classList.add("seventh-block-image-active");
    document.querySelector(`[data-name="${categ}"]`).classList.add("employee-info-active");
}

const checkCurrentImg = (event) => {
    if(event.target === event.currentTarget){
        return;
    }
    document.querySelector(".seventh-block-image-mini-active").classList.remove("seventh-block-image-mini-active");
    event.target.classList.add("seventh-block-image-mini-active");
    currentImageMini = event.target;
    const category = currentImageMini.dataset.photoMini;

    changeInfoCurrentEmployee(category)    
}
wrapperImagesMini.addEventListener("click", checkCurrentImg)



// CHANGE IMAGES BY THE TOUCH OF A BUTTON

function changeIndexToNext () {
    for(i = 0; i < miniImagesCollection.length; i++){
        if(miniImagesCollection[i] === currentImageMini){
            i += 1;
            return i;
        }
    }
}

function changeIndexToPrev () {
    for(i = 0; i < miniImagesCollection.length; i++){
        if(miniImagesCollection[i] === currentImageMini){
            i -= 1;
            return i;
        }
    }
}

function changeToNextImage () {
    if(i <= 3){
    currentImageMini.classList.remove("seventh-block-image-mini-active");
    
    currentImageMini = miniImagesCollection[i];
    currentImageMini.classList.add("seventh-block-image-mini-active");

    const category = currentImageMini.dataset.photoMini;

    changeInfoCurrentEmployee(category);
    } return;
}

function changeToPrevImage () {
    if(i >= 0){
    currentImageMini.classList.remove("seventh-block-image-mini-active");
    currentImageMini = miniImagesCollection[i];
    currentImageMini.classList.add("seventh-block-image-mini-active");

    const category = currentImageMini.dataset.photoMini;


    changeInfoCurrentEmployee(category);
    } return;    
}


const buttonPrev = document.querySelector(".seventh-block-button-prev");
const buttonNext = document.querySelector(".seventh-block-button-next");

buttonNext.addEventListener("click", () => {
    changeIndexToNext();
    changeToNextImage();   
})

buttonPrev.addEventListener("click", () => {
    changeIndexToPrev();  
    changeToPrevImage();
})














