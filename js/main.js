// ---------- 🌟통합 검색🌟 ----------
//const searchEl = document.querySelector(".search");
//const searchInputEl = document.querySelector(".search input");

const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

//searchEl(.search)를 click하면 함수가 실행이 될거다.
searchEl.addEventListener("click", function () {
  //searchInputEl(input) 요소를 focus 하겠다.
  searchInputEl.focus();
});
// ▲ 자바스크립트를 통해 포커스가 가능한 대표적인 input 요소에 focus를 강제 적용해주는 명령

//searchInputEl(input)에 focus가 되면 함수가 실행이 될거다. 이벤트 핸들러...
searchInputEl.addEventListener("focus", function () {
  //특정 요소(searchEl)에 대해 클래스 리스트 객체를 추가한 후, 해당 객체에서 focused 클래스를 추가한다.
  searchEl.classList.add("focused"); // 포커스가 된 상태
  //searchInputEl에 set attribute라는 메소드 실행
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// ---------- 🌟배지 스크롤 위치에 따라 나타났다 사라지기 & 탑버튼 실행🌟 ----------
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      //gsap.to(요소, 지속시간, 옵션)
      // gsap.to(요소, 지속시간, 옵션) 메소드를 사용하여 애니메이션을 처리
      // badgeEl 요소를 대상으로 하며, 0.6초 동안 애니메이션이 진행
      // 애니메이션 옵션으로 opacity를 설정하여 점점 투명해지는 효과
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 탑버튼 보이기
      gsap.to(toTopEl, .2, {
        x:0
      });
    } else {
      //배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 탑버튼 숨기기
      gsap.to(toTopEl, .2, {
        x:100
      });
    }
  }, 300)
);
// _.throttle(함수, 시간)

// ---------- 🌟탑버튼 실행🌟 ----------

toTopEl.addEventListener("click", function(){
  gsap.to(window, .7, {
    scrollTo:0
  });
});


// ---------- 🌟메인 비주얼 하나씩 보이기🌟 ----------
// 로직들을 통해서 많은 것들을 자동화 시켜줄 수 있어야 되는 게 중요!
// .visual이라는 클래스를 가진 후손 .fade-in 요소를 전부 찾아서 fade-elements라는 변수에 할당
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션)
  //첫번째 인수는 반복되는 요소 명시
  //지속시간 1초
  //옵션 => 객체데이터가 기본 => 딜레이 .7s / 투명도 1로 변경
  gsap.to(fadeEl, 1, {
    //순차적 개념 만들기 위해서 (index + 1) 추가
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1,
  });
});

// ---------- 🌟NOTICE LINE SWIPER SLIDE🌟 ----------
//new Swiper (선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

// ---------- 🌟PROMOTION SWIPER SLIDE🌟 ----------
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    // .promotion 클래스를 가지고 있는 요소의 후손인 .swiper-pagination 요소를
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

// ---------- 🌟AWARDS SWIPER SLIDE🌟 ----------
new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// ---------- 🌟PROMOTION TOGGLE🌟 ----------
// promotion 클래스 요소 찾아서 promotionEl라는 변수에 할당
const promotionEl = document.querySelector(".promotion");
// toggle-promotion 클래스 요소 찾아서 promotionToggleBtn라는 변수에 할당
const promotionToggleBtn = document.querySelector(".toggle-promotion");
// 프로모션 영역이 숨겨졌니? 아니 보이는 중
let isHidePromotion = false;
// 프로모션토글버튼 클릭하면 함수 실행해줘라
promotionToggleBtn.addEventListener("click", function () {
  // 느낌표가 붙어있는 뒤쪽의 값이 반대가 되게 만들어 달라! ex)false => true
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김처리!
    // promotion 요소에 hide라는 class 추가
    // 요소를 화면에서 안보이게 css 스타일로 정리
    promotionEl.classList.add("hide");
  } else {
    // 보임처리!
    promotionEl.classList.remove("hide");
  }
});

// ---------- 🌟FLOATING ANIMATION🌟 ----------
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 지속시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
// floating1은 1초를 위아래로 범위는 15px
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// ---------- 🌟SCROLLMAGIC🌟 ----------
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
  })
    .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});

// ---------- 🌟FOOTER YEAR COUNT🌟 ----------
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 현재년도 숫자 표출!!
