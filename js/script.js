const elBannerImg = document.querySelector(".banner__img"),
    elLightBoxImg = document.querySelector(".light-box__img"),
    elsThumnailImgWrapper = document.querySelectorAll(".banner-bottom__img-wrapper"),
    elsThumnailImg = document.querySelectorAll(".banner-bottom__img"),
    elLightBox = document.querySelector(".light-box"),
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
                elLightBoxImg.setAttribute("src",elThumnailImg.dataset.imgSrc);
                elLightBoxImg.setAttribute("srcset",elThumnailImg.dataset.imgSrcBig);

                el.classList.add("active");
                img.parentElement.classList.remove("active");
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