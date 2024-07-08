const elBannerImg = document.querySelector(".banner__img"),
    elLightBoxImg = document.querySelector(".light-box__img"),
    elsThumnailImgWrapper = document.querySelectorAll(".banner-bottom__img-wrapper"),
    elsThumnailImg = document.querySelectorAll(".banner-bottom__img"),
    elsThumnailLightBoxImg = document.querySelectorAll(".banner-bottom__lightbox-img"),
    elLightBox = document.querySelector(".light-box"),
    elsLightBoxThumnailImgs = document.querySelectorAll(".banner-bottom__lightbox-img-wrapper"),
    elLightBoxClose = document.querySelector(".light-box__close"),
    elLightBoxOpen = document.querySelector(".hero__banner-img-wrapper"),
    elHeaderTrash = document.querySelector(".header__trash"),
    elShoppingCard = document.querySelector(".shopping-cart");

    elsThumnailImg.forEach(img => {
        elsThumnailImgWrapper.forEach(el => {
            const elThumnailImg = el.querySelector(".banner-bottom__img");
            // el.classList.remove("active");
            el.addEventListener("click", ()=> {
                elBannerImg.setAttribute("src",elThumnailImg.dataset.imgSrc);
                elBannerImg.setAttribute("srcset",elThumnailImg.dataset.imgSrcBig);

                el.classList.add("active");
                img.parentElement.classList.remove("active");
            })
        })
    })

    elsThumnailLightBoxImg.forEach(image => {
        // LIGHT BOX
        elsLightBoxThumnailImgs.forEach(elImg=> {
            const elLightBoxThumnailImg = elImg.querySelector(".banner-bottom__img");

            elImg.addEventListener("click", ()=> {
                elLightBoxImg.setAttribute("src",elLightBoxThumnailImg.dataset.imgSrc);
                elLightBoxImg.setAttribute("srcset",elLightBoxThumnailImg.dataset.imgSrcBig);

                elImg.classList.add("lightbox-thumnail-active");
                image.parentElement.classList.remove("lightbox-thumnail-active");
            })
        })
    })

    if(elLightBoxOpen) {
        elLightBoxOpen.addEventListener("click", ()=> {
            elLightBox.classList.add("light-box__active");
        })
    }

    if(elLightBoxClose) {
        elLightBoxClose.addEventListener("click", ()=> {
            elLightBox.classList.remove("light-box__active");
        })
    }

    if(elHeaderTrash) {
        elHeaderTrash.addEventListener("click", ()=> {
            elShoppingCard.classList.toggle("shopping-cart__open");
        })
    }

    // COUNTER
    const elButtonMinus = document.querySelector(".button-minus"),
        elButtonPlus = document.querySelector(".button-plus"),
        elShoppingQuantity = document.querySelector(".header__product-quantity");
    let elCounterValue = document.querySelector(".counter");
    let count = 0;

        if(elButtonPlus) {
            elButtonPlus.addEventListener("click", ()=> {
                count++;
                elCounterValue.textContent = count;
                elShoppingQuantity.textContent = count;
            })
        }

        if(elButtonMinus) {
            elButtonMinus.addEventListener("click", ()=> {
                if(count!==0) {
                    count--;
                    elCounterValue.textContent = count;
                elShoppingQuantity.textContent = count;
                }
            })
        }
