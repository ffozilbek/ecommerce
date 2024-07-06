const elBannerImg = document.querySelector(".banner__img"),
    elsThumnailImgWrapper = document.querySelectorAll(".banner-bottom__img-wrapper"),
    elsThumnailImg = document.querySelectorAll(".banner-bottom__img");

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
