function sideMenu() {
    let menu = document.querySelector(".menu");
    let side_menu = document.querySelector(".side_menu");
    menu.classList.toggle("active");
    side_menu.classList.toggle("active");
}

const menu = document.querySelectorAll(".mid-nav>ul>li>div>p>a");
for(let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click",function() {
        for(let j = 0; j < menu.length; j++) {
            menu[j].removeAttribute("class","active");
        }
        this.setAttribute("class","active");
    })
}

// 이미지 슬라이드 시작
// 첫 번째
const slideWrap1 = document.querySelector('.slideWrap1');
        const slide1 = document.querySelectorAll('.slide1');
        // const nav1 = document.querySelectorAll('.pagination1 a');

        // nav1[0].classList.add('active');

        const firstEl1 = slideWrap1.firstElementChild;
        const lastEl1 = slideWrap1.lastElementChild;
        let cloneFirst1 = firstEl1.cloneNode(true);
        let cloneLast1 = lastEl1.cloneNode(true);

        slideWrap1.appendChild(cloneFirst1);
        slideWrap1.insertBefore(cloneLast1, slideWrap1.firstElementChild);

        slideWrap1.style.width = `${100 * (slide1.length + 2)}%`;
        slideWrap1.style.left = '-100%';

        const nextBtn1 = document.querySelector('.btn-next1');
        const prevBtn1 = document.querySelector('.btn-prev1');

        let current1 = 0;
        nextBtn1.addEventListener('click', function() {
          if (current1 < slide1.length - 1) {
              current1++;
          } else {
              current1 = 0;
              slideWrap1.style.transition = '0ms';
              slideWrap1.style.left = `-${100 * (current1 + 1)}%`;
              setTimeout(function() {
                  slideWrap1.style.transition = '500ms';
                  slideWrap1.style.left = `-${100 * (current1 + 1)}%`;
              }, 10);
          }
          slideWrap1.style.transition = '500ms';
          slideWrap1.style.left = `-${100 * (current1 + 1)}%`;
      });
      
      prevBtn1.addEventListener('click', function() {
          if (current1 > 0) {
              current1--;
          } else {
              current1 = slide1.length - 1;
              slideWrap1.style.transition = '0ms';
              slideWrap1.style.left = `-${100 * (current1 + 1)}%`;
              setTimeout(function() {
                  slideWrap1.style.transition = '500ms';
                  slideWrap1.style.left = `-${100 * (current1 + 1)}%`;
              }, 10);
          }
          slideWrap1.style.transition = '500ms';
          slideWrap1.style.left = `-${100 * (current1 + 1)}%`;
      });
      
// 두 번째
const slideWrap2 = document.querySelector('.slideWrap2');
        const slide2 = document.querySelectorAll('.slide2');
        // const nav2 = document.querySelectorAll('.pagination2 a');

        // nav2[0].classList.add('active');

        const firstEl2 = slideWrap2.firstElementChild;
        const lastEl2 = slideWrap2.lastElementChild;
        let cloneFirst2 = firstEl2.cloneNode(true);
        let cloneLast2 = lastEl2.cloneNode(true);

        slideWrap2.appendChild(cloneFirst2);
        slideWrap2.insertBefore(cloneLast2, slideWrap2.firstElementChild);

        slideWrap2.style.width = `${100 * (slide2.length + 2)}%`;
        slideWrap2.style.left = '-100%';

        const nextBtn2 = document.querySelector('.btn-next2');
        const prevBtn2 = document.querySelector('.btn-prev2');

        let current2 = 0;
        nextBtn2.addEventListener('click', function() {
          if (current2 < slide2.length - 1) {
              current2++;
          } else {
              current2 = 0;
              slideWrap2.style.transition = '0ms';
              slideWrap2.style.left = `-${100 * (current2 + 1)}%`;
              setTimeout(function() {
                  slideWrap2.style.transition = '500ms';
                  slideWrap2.style.left = `-${100 * (current2 + 1)}%`;
              }, 10);
          }
          slideWrap2.style.transition = '500ms';
          slideWrap2.style.left = `-${100 * (current2 + 1)}%`;
      });
      
      prevBtn2.addEventListener('click', function() {
          if (current2 > 0) {
              current2--;
          } else {
              current2 = slide2.length - 1;
              slideWrap2.style.transition = '0ms';
              slideWrap2.style.left = `-${100 * (current2 + 1)}%`;
              setTimeout(function() {
                  slideWrap2.style.transition = '500ms';
                  slideWrap2.style.left = `-${100 * (current2 + 1)}%`;
              }, 10);
          }
          slideWrap2.style.transition = '500ms';
          slideWrap2.style.left = `-${100 * (current2 + 1)}%`;
      });

// 세 번째
const slideWrap3 = document.querySelector('.slideWrap3');
        const slide3 = document.querySelectorAll('.slide3');
        // const nav3 = document.querySelectorAll('.pagination3 a');

        // nav3[0].classList.add('active');

        const firstEl3 = slideWrap3.firstElementChild;
        const lastEl3 = slideWrap3.lastElementChild;
        let cloneFirst3 = firstEl3.cloneNode(true);
        let cloneLast3 = lastEl3.cloneNode(true);

        slideWrap3.appendChild(cloneFirst3);
        slideWrap3.insertBefore(cloneLast3, slideWrap3.firstElementChild);

        slideWrap3.style.width = `${100 * (slide3.length + 2)}%`;
        slideWrap3.style.left = '-100%';

        const nextBtn3 = document.querySelector('.btn-next3');
        const prevBtn3 = document.querySelector('.btn-prev3');

        let current3 = 0;
        nextBtn3.addEventListener('click', function() {
          if (current3 < slide3.length - 1) {
              current3++;
          } else {
              current3 = 0;
              slideWrap3.style.transition = '0ms';
              slideWrap3.style.left = `-${100 * (current3 + 1)}%`;
              setTimeout(function() {
                  slideWrap3.style.transition = '500ms';
                  slideWrap3.style.left = `-${100 * (current3 + 1)}%`;
              }, 10);
          }
          slideWrap3.style.transition = '500ms';
          slideWrap3.style.left = `-${100 * (current3 + 1)}%`;
      });
      
      prevBtn3.addEventListener('click', function() {
          if (current3 > 0) {
              current3--;
          } else {
              current3 = slide3.length - 1;
              slideWrap3.style.transition = '0ms';
              slideWrap3.style.left = `-${100 * (current3 + 1)}%`;
              setTimeout(function() {
                  slideWrap3.style.transition = '500ms';
                  slideWrap3.style.left = `-${100 * (current3 + 1)}%`;
              }, 10);
          }
          slideWrap3.style.transition = '500ms';
          slideWrap3.style.left = `-${100 * (current3 + 1)}%`;
      });

// 네 번째
const slideWrap4 = document.querySelector('.slideWrap4');
        const slide4 = document.querySelectorAll('.slide4');
        // const nav4 = document.querySelectorAll('.pagination4 a');

        // nav4[0].classList.add('active');

        const firstEl4 = slideWrap4.firstElementChild;
        const lastEl4 = slideWrap4.lastElementChild;
        let cloneFirst4 = firstEl4.cloneNode(true);
        let cloneLast4 = lastEl4.cloneNode(true);

        slideWrap4.appendChild(cloneFirst4);
        slideWrap4.insertBefore(cloneLast4, slideWrap4.firstElementChild);

        slideWrap4.style.width = `${100 * (slide4.length + 2)}%`;
        slideWrap4.style.left = '-100%';

        const nextBtn4 = document.querySelector('.btn-next4');
        const prevBtn4 = document.querySelector('.btn-prev4');

        let current4 = 0;
        nextBtn4.addEventListener('click', function() {
          if (current4 < slide4.length - 1) {
              current4++;
          } else {
              current4 = 0;
              slideWrap4.style.transition = '0ms';
              slideWrap4.style.left = `-${100 * (current4+ 1)}%`;
              setTimeout(function() {
                  slideWrap4.style.transition = '500ms';
                  slideWrap4.style.left = `-${100 * (current4 + 1)}%`;
              }, 10);
          }
          slideWrap4.style.transition = '500ms';
          slideWrap4.style.left = `-${100 * (current4 + 1)}%`;
      });
      
      prevBtn4.addEventListener('click', function() {
          if (current4 > 0) {
              current4--;
          } else {
              current4 = slide4.length - 1;
              slideWrap4.style.transition = '0ms';
              slideWrap4.style.left = `-${100 * (current4 + 1)}%`;
              setTimeout(function() {
                  slideWrap4.style.transition = '500ms';
                  slideWrap4.style.left = `-${100 * (current4 + 1)}%`;
              }, 10);
          }
          slideWrap4.style.transition = '500ms';
          slideWrap4.style.left = `-${100 * (current4 + 1)}%`;
      });
// 이미지 슬라이드 끝

//슬라이드 영역 hover 시 btn 활성화(시작) - 첫 번째
let firstImgslide = document.querySelector(".first-imgslide");
let btnPrev1 = document.querySelector(".btn-prev1");
let btnNext1 = document.querySelector(".btn-next1");
firstImgslide.addEventListener("mouseover", function() {
    btnPrev1.style.display = "block";
    btnNext1.style.display = "block";
});
firstImgslide.addEventListener("mouseout", function() {
    btnPrev1.style.display = "none";
    btnNext1.style.display = "none";
});
//슬라이드 영역 hover 시 btn 활성화(끝) - 첫 번째

//슬라이드 영역 hover 시 btn 활성화(시작) - 두 번째
let secondImgslide = document.querySelector(".second-imgslide");
let btnPrev2 = document.querySelector(".btn-prev2");
let btnNext2 = document.querySelector(".btn-next2");
secondImgslide.addEventListener("mouseover", function() {
    btnPrev2.style.display = "block";
    btnNext2.style.display = "block";
});
secondImgslide.addEventListener("mouseout", function() {
    btnPrev2.style.display = "none";
    btnNext2.style.display = "none";
});
//슬라이드 영역 hover 시 btn 활성화(끝) - 두 번째

//슬라이드 영역 hover 시 btn 활성화(시작) - 세 번째
let thirdImgslide = document.querySelector(".third-imgslide");
let btnPrev3 = document.querySelector(".btn-prev3");
let btnNext3 = document.querySelector(".btn-next3");
thirdImgslide.addEventListener("mouseover", function() {
    btnPrev3.style.display = "block";
    btnNext3.style.display = "block";
});
thirdImgslide.addEventListener("mouseout", function() {
    btnPrev3.style.display = "none";
    btnNext3.style.display = "none";
});
//슬라이드 영역 hover 시 btn 활성화(끝) - 세 번째

//슬라이드 영역 hover 시 btn 활성화(시작) - 네 번째
let fourthImgslide = document.querySelector(".fourth-imgslide");
let btnPrev4 = document.querySelector(".btn-prev4");
let btnNext4 = document.querySelector(".btn-next4");
fourthImgslide.addEventListener("mouseover", function() {
    btnPrev4.style.display = "block";
    // btnPrev4.style.transition = "500ms";
    btnNext4.style.display = "block";
    // btnNext4.style.transition = "500ms";
});
fourthImgslide.addEventListener("mouseout", function() {
    btnPrev4.style.display = "none";
    // btnPrev4.style.transition = "1000ms";
    btnNext4.style.display = "none";
    // btnNext4.style.transition = "1000ms";
});
//슬라이드 영역 hover 시 btn 활성화(끝) - 네 번째