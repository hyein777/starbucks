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

// ---------- 🌟FOOTER YEAR COUNT🌟 ----------
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 현재년도 숫자 표출!!
