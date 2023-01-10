class SiteHeader {
   constructor() {
      this.headerBtnSearch = document.querySelector(".header__nav-search-btn");
      this.inputSearchNav = document.querySelector(".header__nav-input-search");
      this.inputSearchWrap = document.querySelector(".header__input-wrapper");
      this.siteHomepage = document.querySelector(".site-homepage");
      this.header = this.inputSearchWrap.closest(".header");
      this.userBtn = document.querySelector(".header__nav-user");
      this.modal = document.querySelector('.modal-login');
      this.modalContainer = document.querySelector('.modal-container');
      this.btnCloseModal = document.querySelector('.modal-login i.fa-xmark');
      this.eventHandler();
   }

   inputOn() {
      this.inputSearchNav.classList.add("is-active");
      this.inputSearchNav.addEventListener("transitionend", () => {
         document.querySelector('.header__input-wrapper input').focus();
      })
   }
   inputOff() {
      this.inputSearchNav.classList.remove("is-active");
   }

   modalHandler(e){
      this.modal.classList.add('active');
   }

   changeScrollHeaderState(e){
      let lastScrollTop = window.scrollY
      window.addEventListener('scroll', (e) => {
         const curScrollTop = window.pageYOffset || document.documentElement.scrollTop;
         if(curScrollTop > lastScrollTop){
            this.header.style.transform = 'translateY(-100%)' 
         }
         else{
            this.header.style.transform = 'translateY(0)'
         }
         lastScrollTop = curScrollTop;
      })
   }

   eventHandler() {
      this.headerBtnSearch.addEventListener("click", this.inputOn.bind(this));
      this.inputSearchNav.addEventListener("click", this.inputOff.bind(this));
      this.inputSearchWrap.addEventListener("click", (e) => {
         e.stopPropagation();
      })

      this.changeScrollHeaderState();
      this.userBtn.addEventListener('click', this.modalHandler.bind(this));
      this.btnCloseModal.addEventListener('click',(e) => {
         this.modal.classList.remove('active')
      });
      this.modal.addEventListener('click', (e) => this.modal.classList.remove('active'));
      this.modalContainer.addEventListener('click', (e) => e.stopPropagation()); 
   }
}
const siteHeader = new SiteHeader();

class SiteBanner {
   imgbannerUrlArray =
      [
         
         // "./assets/img/banner/ROTY-Coffeecake-Cover-05.jpg",
         "./assets/img/banner/banner-1.avif",
         "./assets/img/banner/banner-5.webp",
         "./assets/img/banner/banner-6.jpg",
         "./assets/img/banner/banner-7.jpg"
      ]

   constructor() {
      this.carouselSlider = document.querySelector(".homepage__baner-slider");
      this.colSize = 1;
      this.counter = this.colSize;
      this.render();
   }

   render() {
      const bannerSliderImgHtml = this.imgbannerUrlArray.map((url) => {
         return `
            <a href="">
               <img src="${url}" alt="" class="homepage__banner-slide-img">
            </a>
         `
      })

      const firstCloneArr = bannerSliderImgHtml.slice(0, this.colSize);
      const lastCloneArr = bannerSliderImgHtml.slice(bannerSliderImgHtml.length - this.colSize, bannerSliderImgHtml.length + 1);
      this.carouselSlider.innerHTML = lastCloneArr.join('') + bannerSliderImgHtml.join('') + firstCloneArr.join('');
   }

}
const siteBannerSlider = new SiteBanner()

class SiteBannerHandler extends SiteBanner {

   constructor() {
      super();
      this.carouselImages = document.querySelectorAll(".homepage__baner-slider a");
      this.prevBtn = document.querySelector(".homepage__btn-prev-container");
      this.nextBtn = document.querySelector(".homepage__btn-next-container");
      this.size = this.carouselImages[0].clientWidth;
      this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
      this.totalImages = this.imgbannerUrlArray.length;
      this.leftRemain = 0;
      this.rightRemain = this.totalImages - this.colSize;
      this.notEnoughInGroup = this.carouselImages.length % this.colSize;
      this.carouselImages[0].setAttribute("id", "last-clone");
      this.carouselImages[this.carouselImages.length - this.colSize].setAttribute("id", "first-clone");
      this.idInterval;
      this.eventHandler();
   }

   handleNextBtn(e) {
      e.stopPropagation();
      if (this.counter >= this.carouselImages.length - this.colSize) return;

      if (this.rightRemain > 0 && this.rightRemain < this.colSize) {
         this.carouselSlider.style.transition = "transform 0.4s ease-in-out";
         this.counter += this.rightRemain;
         console.log('counter: ' + this.counter)

         this.leftRemain += this.rightRemain
         console.log('leftRemain: ' + this.leftRemain)

         this.rightRemain -= this.rightRemain;
         console.log('rightRemain: ' + this.rightRemain)
         this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
      } else {
         this.carouselSlider.style.transition = "transform 0.4s ease-in-out";
         this.counter += this.colSize;
         console.log('counter: ' + this.counter)

         this.leftRemain += this.colSize
         console.log('leftRemain: ' + this.leftRemain)

         this.rightRemain -= this.colSize;
         console.log('rightRemain: ' + this.rightRemain)

         this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
      }

      this.carouselSlider.addEventListener("transitionend", () => {
         if (this.carouselImages[this.counter].id == 'first-clone') {
            this.carouselSlider.style.transition = 'none';
            this.counter = this.colSize
            this.rightRemain = this.totalImages - this.colSize
            this.leftRemain = this.counter - this.colSize
            console.log(this.leftRemain)
            this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
         }
      })

      clearInterval(this.idInterval);
      this.intervalHandler();
   }

   handlePrevBtn(e) {
      e.stopPropagation();
      if (this.counter <= 0) return;
      if (this.leftRemain > 0 && this.leftRemain < this.colSize) {
         this.carouselSlider.style.transition = "transform 0.4s ease-in-out";
         this.counter -= this.leftRemain;
         console.log('counter: ' + this.counter)

         this.rightRemain = this.rightRemain + this.leftRemain
         console.log('rightRemain: ' + this.rightRemain)

         this.leftRemain -= this.leftRemain;
         console.log('leftRemain: ' + this.leftRemain)

         this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
      }
      else {
         if (this.rightRemain == 0 && this.notEnoughInGroup != 0) {
            this.carouselSlider.style.transition = "transform 0.4s ease-in-out";
            this.counter -= this.notEnoughInGroup;
            this.rightRemain += this.notEnoughInGroup;
            this.leftRemain -= this.notEnoughInGroup;

            this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
         } else {
            this.carouselSlider.style.transition = "transform 0.4s ease-in-out";
            this.counter -= this.colSize;
            console.log('counter: ' + this.counter)

            this.leftRemain -= this.colSize;
            console.log('leftRemain: ' + this.leftRemain)

            this.rightRemain += this.colSize
            console.log('rightRemain: ' + this.rightRemain)

            this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
         }
      }


      this.carouselSlider.addEventListener("transitionend", () => {
         if (this.carouselImages[this.counter].id == 'last-clone') {
            this.carouselSlider.style.transition = 'none';
            this.counter = this.totalImages;
            console.log('counter: ' + this.counter)

            this.rightRemain = this.counter - this.totalImages
            console.log('rightRemain: ' + this.rightRemain)

            this.leftRemain = this.totalImages - this.colSize
            console.log('leftRemain: ' + this.leftRemain)

            this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
         }
      })

      clearInterval(this.idInterval);
      this.intervalHandler();
   }

   intervalHandler() {
      this.idInterval = setInterval(() => {
         this.nextBtn.click();
      }, 7000)
   }

   eventHandler() {
      this.prevBtn.addEventListener("click", this.handlePrevBtn.bind(this))
      this.nextBtn.addEventListener("click", this.handleNextBtn.bind(this))
      this.intervalHandler();
      window.addEventListener('resize', () => {
         this.carouselSlider.style.transition = "none";
         this.size = this.carouselImages[0].clientWidth;
         this.carouselSlider.style.transform = 'translateX(' + (-this.size * this.counter) + 'px)';
      });
   }
}
const siteBannerHandler = new SiteBannerHandler()

const products = [
   {
      productTitle: "Áo khoác nỉ nam For Winter (có mũ trùm tiện lợi)",
      activeImgUrl: [
         "./assets/img/home-product/product-1.avif",
         "./assets/img/home-product/product-19.avif",
         "./assets/img/home-product/product-8.avif",
         "./assets/img/home-product/product-3.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-21.avif",
         "./assets/img/home-product/product-2.avif",
         "./assets/img/home-product/product-22.avif",
         "./assets/img/home-product/product-4.avif"
      ],
      isSale: true,
      isRemainS: false,
      isRemainM: false,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
         "./assets/img/home-product/color-option/color-2.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "499.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   },
   {
      productTitle: "Áo khoác nỉ nam For Winter (có mũ trùm tiện lợi)",
      activeImgUrl: [
         "./assets/img/home-product/product-5.avif",
         "./assets/img/home-product/product-7.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-6.avif",
         "./assets/img/home-product/product-8.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "499.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   },
   {
      productTitle: "Áo khoác nỉ nam For Winter (có mũ trùm tiện lợi)",
      activeImgUrl: [
         "./assets/img/home-product/product-9.avif",
         "./assets/img/home-product/product-11.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-10.avif",
         "./assets/img/home-product/product-12.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "499.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   },
   {
      productTitle: "Áo khoác nỉ nam For Winter (có mũ trùm tiện lợi)",
      activeImgUrl: [
         "./assets/img/home-product/product-13.avif",
         "./assets/img/home-product/product-15.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-14.avif",
         "./assets/img/home-product/product-16.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "499.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   },
   {
      productTitle: "Áo khoác nỉ nam For Winter (có mũ trùm tiện lợi)",
      activeImgUrl: [
         "./assets/img/home-product/product-17.avif",
         "./assets/img/home-product/product-19.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-18.avif",
         "./assets/img/home-product/product-20.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "499.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   }
]

const productsFallWinter = [
   {
      productTitle: "Áo giữ nhiệt nam Modal Ultra Warm - mặc là ấm, thoáng khí",
      activeImgUrl: [
         "./assets/img/home-product/product-11.avif",
         "./assets/img/home-product/product-13.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-12.avif",
         "./assets/img/home-product/product-14.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "499.000",
      saledPrice: "349.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   },
   {
      productTitle: "Áo giữ nhiệt nam Modal Ultra Warm - mặc là ấm, thoáng khí",
      activeImgUrl: [
         "./assets/img/home-product/product-15.avif",
         "./assets/img/home-product/product-17.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-16.avif",
         "./assets/img/home-product/product-18.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "399.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   },
   {
      productTitle: "Áo giữ nhiệt nam Modal Ultra Warm - mặc là ấm, thoáng khí",
      activeImgUrl: [
         "./assets/img/home-product/product-19.avif",
         "./assets/img/home-product/product-21.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-20.avif",
         "./assets/img/home-product/product-22.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "399.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   },
   {
      productTitle: "Áo giữ nhiệt nam Modal Ultra Warm - mặc là ấm, thoáng khí",
      activeImgUrl: [
         "./assets/img/home-product/product-23.avif",
         "./assets/img/home-product/product-25.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-24.avif",
         "./assets/img/home-product/product-26.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "399.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   },
   {
      productTitle: "Áo giữ nhiệt nam Modal Ultra Warm - mặc là ấm, thoáng khí",
      activeImgUrl: [
         "./assets/img/home-product/product-27.avif",
         "./assets/img/home-product/product-29.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-28.jpg",
         "./assets/img/home-product/product-30.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "399.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   },
   {
      productTitle: "Áo giữ nhiệt nam Modal Ultra Warm - mặc là ấm, thoáng khí",
      activeImgUrl: [
         "./assets/img/home-product/product-31.avif",
         "./assets/img/home-product/product-33.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-32.avif",
         "./assets/img/home-product/product-34.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "399.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   }
]

const productsUnderwear = [
   {
      productTitle: "Combo 03 quần lót nam khe moi Bamboo Trunk kháng khuẩn",
      activeImgUrl: [
         "./assets/img/home-product/product-30.avif",
         "./assets/img/home-product/product-1.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-31.avif",
         "./assets/img/home-product/product-21.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "399.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   },
   {
      productTitle: "Combo 03 quần lót nam khe moi Bamboo Trunk kháng khuẩn",
      activeImgUrl: [
         "./assets/img/home-product/product-1.avif",
         "./assets/img/home-product/product-3.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-2.avif",
         "./assets/img/home-product/product-4.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "399.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   },
   {
      productTitle: "Combo 03 quần lót nam khe moi Bamboo Trunk kháng khuẩn",
      activeImgUrl: [
         "./assets/img/home-product/product-1.avif",
         "./assets/img/home-product/product-3.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-2.avif",
         "./assets/img/home-product/product-4.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "399.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   },
   {
      productTitle: "Combo 03 quần lót nam khe moi Bamboo Trunk kháng khuẩn",
      activeImgUrl: [
         "./assets/img/home-product/product-1.avif",
         "./assets/img/home-product/product-3.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-2.avif",
         "./assets/img/home-product/product-4.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "399.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   },
   {
      productTitle: "Combo 03 quần lót nam khe moi Bamboo Trunk kháng khuẩn",
      activeImgUrl: [
         "./assets/img/home-product/product-1.avif",
         "./assets/img/home-product/product-3.avif"
      ],
      hoverImgUrl: [
         "./assets/img/home-product/product-2.avif",
         "./assets/img/home-product/product-4.avif"
      ],
      isSale: true,
      isRemainS: true,
      isRemainM: true,
      isRemainL: true,
      isRemainXL: true,
      isRemain2XL: true,
      isReamain3xl:true,
      numberOfColors: 2,
      colorArr: [
         "./assets/img/home-product/color-option/color-1.avif",
         "./assets/img/home-product/color-option/color-2.avif",
      ],
      orgPrice: "399.000",
      saledPrice: "449.000",
      percent: 10,
      ratingPoint: 4.9,
      ratingNumber: 32,
   },
]

class ProductSlider {
   constructor() {
      this.carouselSlider = document.querySelector(".home__product-slider");
      this.colSize = 4;
      this.counter = this.colSize;
      this.render();
   }

   innerHtmlAddingColor(colorUrlArray) {
      return colorUrlArray.map((url, i) => {
         return `
           <div class="product__color-item  ${i == 0 ? 'is-active' :''}" data-index="${i}">
               <span style="background-image:url(${url})"></span>
            </div>
         `
      })
   }

   render(id){
      let productsArr = products;
      if(id == 0 && id != undefined){
         productsArr = products;
      }else if(id == 1){
         productsArr = productsFallWinter;
      }else if(id == 2){
         productsArr = productsUnderwear;
      }

      const productHtml = productsArr.map((item, i) => {
         const colorHtml = this.innerHtmlAddingColor(item.colorArr).join('');

         return `
         <div class="product-slider__item" data-index="${i}">
            <div class="product__thumbnail">
               <img class="active-img" src="${item.activeImgUrl[0]}" alt="">
               <img class="hover-img" src="${item.hoverImgUrl[0]}" alt="">

               <div class="product__rating">
                  <span class="product__rating-point">${item.ratingPoint}</span>
                  <span class="product__rating-start"><i style="font-size: 11px;" class='bx bxs-star'></i></span>
                  <span class="product__rating-number">${item.ratingNumber}</span>
               </div>
               ${item.isSale == true ? '<div class="product__span">Sale</div>"' : ''}
               
               <div class="product__pick-size">
                  ${item.isRemainS == true ? ' <a href="" class="product__pick-item">S</a>' : ''}
                  ${item.isRemainM == true ? ' <a href="" class="product__pick-item">M</a>' : ''}
                  ${item.isRemainL == true ? ' <a href="" class="product__pick-item">L</a>' : ''}
                  ${item.isRemainXL == true ? ' <a href="" class="product__pick-item">XL</a>' : ''}
                  ${item.isRemain2XL == true ? ' <a href="" class="product__pick-item">2XL</a>' : ''}
                  ${item.isReamain3xl == true ? ' <a href="" class="product__pick-item">3XL</a>' : ''}
               </div>
            </div>
                                          
            <div class="product__infor">
               <div class="product__color-option">
                  ${colorHtml}
               </div>
               <div class="product__title">
                  <p>${item.productTitle}</p>
               </div>
               <div class="product__price">
                  <ins>${item.saledPrice}d</ins>
                  <del>${item.orgPrice}d</del>
                  <span class="product__per-sale">-${item.percent}%</span>
               </div>
            </div>
         </div>`;
      })
      // console.log(productHtml.join(''))
      const firstCloneArr = productHtml.slice(0, this.colSize);
      const lastCloneArr = productHtml.slice(productHtml.length - this.colSize, productHtml.length + 1);
      this.carouselSlider.innerHTML = lastCloneArr.join('') + productHtml.join('') + firstCloneArr.join('');
   }
}

// const productSlider = new ProductSlider();

class ProductSliderHandler extends ProductSlider{
   constructor() {
      super();
      this.setUpForCarousel();
      this.tabs = document.querySelector(".home-tab__top-inner");
      this.line = document.querySelector(".home-tab__top-inner .line");
      this.colorOptions = document.querySelectorAll(".product__color-option");
      this.eventHandler();
   }

   setUpForCarousel(){
      this.carouselImages = document.querySelectorAll(".home__product-slider > div");
      this.prevBtn = document.querySelector(".home-tab__prev-btn");
      this.nextBtn = document.querySelector(".home-tab__next-btn");
      this.size = this.carouselImages[0].clientWidth;
      this.totalImages = this.carouselImages.length - this.colSize * 2;
      this.leftRemain = 0;
      this.rightRemain = this.totalImages - this.colSize;
      this.notEnoughInGroup = this.carouselImages.length % this.colSize;                                       
      this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
      this.carouselImages[0].setAttribute("id", "last-clone");
      this.carouselImages[this.carouselImages.length - this.colSize].setAttribute("id", "first-clone"); 
      this.colorOptions = document.querySelectorAll(".product__color-option");
   }

   initPositionLine() {
      const tabActive = document.querySelector('.home-tab--active');
      this.line.style.left = tabActive.offsetLeft + 'px';
      this.line.style.width = tabActive.clientWidth + 'px';
   }

   tabHandler(e) {
      const tabActive = document.querySelector('.home-tab--active');
      tabActive.classList.remove('home-tab--active');
      e.target.classList.add('home-tab--active');

      this.line.style.left = e.target.offsetLeft + 'px';
      this.line.style.width = e.target.clientWidth + 'px';

      let idTab = e.target.closest('.home-tab__top-item').dataset.index
      this.render(idTab)
      this.setUpForCarousel();
      this.colorHandler(idTab);
   }

   colorHandler(id) {
      let productsArr = products;
      if(id == 0 && id != undefined){
         productsArr = products;
      }else if(id == 1){
         productsArr = productsFallWinter;
      }else if(id == 2){
         productsArr = productsUnderwear;
      }
      this.colorOptions.forEach((coloroOption,i) => {
         coloroOption.addEventListener('click', (e) => {
            const colorClicked = e.target.closest('.product__color-item');
            const colorActived = e.currentTarget.querySelector(".product__color-item.is-active")
            if(!colorClicked){
               return;
            }
            colorActived.classList.remove('is-active');
            e.target.closest('.product__color-item').classList.add('is-active');
            const curIndexColorBtn = e.target.closest('.product__color-item').dataset.index;
            const curIndexObject = e.currentTarget.closest('.product-slider__item').dataset.index;
            console.log(curIndexObject)
            console.log(curIndexColorBtn)
            const curActiveImg = e.currentTarget.closest('.product-slider__item').querySelector(".active-img")                           
            const curHoverImg = e.currentTarget.closest('.product-slider__item').querySelector(".hover-img")                           
            curActiveImg.setAttribute('src', productsArr[curIndexObject].activeImgUrl[curIndexColorBtn]);
            curHoverImg.setAttribute('src', productsArr[curIndexObject].hoverImgUrl[curIndexColorBtn]);                               
         })
      })
   }

   eventHandler() {
      this.prevBtn.addEventListener("click", () => {
         if(this.counter <= 0 ) return;
         if (this.leftRemain > 0 && this.leftRemain < this.colSize) {
            this.carouselSlider.style.transition = "transform 0.4s ease-in-out";
            this.counter -= this.leftRemain;
            console.log('counter: ' + this.counter)

            this.rightRemain = this.rightRemain + this.leftRemain
            console.log('rightRemain: ' + this.rightRemain)

            this.leftRemain -= this.leftRemain;
            console.log('leftRemain: ' + this.leftRemain)

            this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
         } 
         else {
            if(this.rightRemain == 0 && this.notEnoughInGroup != 0){
               this.carouselSlider.style.transition = "transform 0.4s ease-in-out";
               this.counter -= this.notEnoughInGroup;
               this.rightRemain += this.notEnoughInGroup;
               this.leftRemain -= this.notEnoughInGroup;

               this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
            }else{
               this.carouselSlider.style.transition = "transform 0.4s ease-in-out";
               this.counter -= this.colSize;
               console.log('counter: ' + this.counter)

               this.leftRemain -= this.colSize;
               console.log('leftRemain: ' + this.leftRemain)

               this.rightRemain += this.colSize
               console.log('rightRemain: ' + this.rightRemain)

               this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
            }
         }
      })

      this.nextBtn.addEventListener("click", () => {
         if(this.counter >= this.carouselImages.length - this.colSize) return;

         if (this.rightRemain > 0 && this.rightRemain < this.colSize) {
            this.carouselSlider.style.transition = "transform 0.4s ease-in-out";
            this.counter += this.rightRemain;
            console.log('counter: ' + this.counter)

            this.leftRemain+=this.rightRemain
            console.log('leftRemain: ' + this.leftRemain)

            this.rightRemain -= this.rightRemain;
            console.log('rightRemain: ' + this.rightRemain)
            this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
         } else {
            this.carouselSlider.style.transition = "transform 0.4s ease-in-out";
            this.counter += this.colSize;
            console.log('counter: ' + this.counter)

            this.leftRemain+=this.colSize
            console.log('leftRemain: ' + this.leftRemain)

            this.rightRemain -= this.colSize;
            console.log('rightRemain: ' + this.rightRemain)

            this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
         }
      })

      this.carouselSlider.addEventListener("transitionend", () => {
         if (this.carouselImages[this.counter].id == 'last-clone') {
            this.carouselSlider.style.transition = 'none';
            this.counter = this.totalImages;
            console.log('counter: ' + this.counter)

            this.rightRemain = this.counter - this.totalImages
            console.log('rightRemain: ' + this.rightRemain)

            this.leftRemain = this.totalImages - this.colSize
            console.log('leftRemain: ' + this.leftRemain)

            this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter }px )`;
         }
         if (this.carouselImages[this.counter].id == 'first-clone') {
            this.carouselSlider.style.transition = 'none';
            this.counter = this.colSize
            this.rightRemain = this.totalImages - this.colSize
            this.leftRemain = this.counter - this.colSize
            console.log(this.leftRemain)
            this.carouselSlider.style.transform = `translateX( ${-this.size * this.counter}px )`;
         }
      })

      window.addEventListener('resize', () => {
         this.carouselSlider.style.transition = "none";
         this.size = this.carouselImages[0].clientWidth;
         this.carouselSlider.style.transform = 'translateX(' + (-this.size * this.counter) + 'px)';
      });
      window.onload = () => {this.initPositionLine()};

      this.tabs.addEventListener('click', this.tabHandler.bind(this));
      
      this.colorHandler();
   }
}

// const productSliderHandler = new ProductSliderHandler()

class Card {
   constructor(element) {
      this.element = element;
      this.cardContainer = document.querySelector(`.${element}-cards`);
      this.cardItems = document.querySelectorAll(`.${element}-cards .card-item`);
      this.previewContainer = document.querySelector(`.${element}-popup-preview`);
      this.previewItems = document.querySelectorAll(`.${element}-popup-preview .card-item`);
      this.btnCloses = document.querySelectorAll(`.${element}-popup-preview .card-close`);
      this.eventHandler();
   }

   previewHandler(e) {
      const cardClicked = e.target.closest('.card-item');
      const cardIndex = e.target.closest('.card-item').dataset.index;
      if(!cardClicked) return;

      this.previewContainer.style.display = 'flex';
      this.previewItems.forEach((preview) => {
         let targetIndex = preview.dataset.target;
         if(cardIndex == targetIndex){
            preview.classList.add('active');
         }
      })
   }

   closePrebyBtn() {
      this.btnCloses.forEach((btn) => {
         btn.addEventListener('click', (e) => {
            const curAcitvePreview = e.target.closest('.card-item.active');
            curAcitvePreview.classList.remove('active');
            e.target.closest(`.${this.element}-popup-preview`).style.display = 'none';
         })
      })
   }

   propagationHandler() {
      this.previewItems.forEach((preview) => {
         preview.addEventListener("click", (e) => {
            e.stopPropagation();
         })
      })
   }

   closePreviewHandler(e){
      // const btnClose = e.target.closest('.card-close');
      // btnClose.addEventListener('click', () => {
      //    console.log("hello")
      // });
      const curAcitvePreview = e.currentTarget.querySelector('.card-item.active');
      curAcitvePreview.classList.remove('active');
      e.currentTarget.style.display = 'none';
   }

   eventHandler(){
      this.cardContainer.addEventListener('click', this.previewHandler.bind(this))
      this.propagationHandler();
      this.previewContainer.addEventListener('click', this.closePreviewHandler.bind(this));
      this.closePrebyBtn();
   }
}

const patriesCard = new Card('patries')
const gourmetCakeCard = new Card('gourmet-cakes')
const cookieCard = new Card('cookies')

class Cart {
   constructor() {

   }
}
