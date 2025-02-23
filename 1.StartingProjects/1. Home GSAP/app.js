const navLinks = document.querySelectorAll("nav a");
const imgsNav = document.querySelectorAll("nav img");
const title = document.querySelector("h1");
const verticalLine = document.querySelector(".middle-line");
const grapesLogo = document.querySelector(".home-content img");
const homeBtn = document.querySelector(".home-content button");

const TLFADE = gsap.timeline();

TLFADE
  .from(title, {
    autoAlpha: 0,   // opacity と visibility を同時に制御
    y: -50,
  })
  .fromTo(verticalLine, { 
    height: 0
  }, { 
    height: 200,
  }, "-=0.2") // 直前のアニメーションが終了する0.2秒前にこのアニメーションを開始する
  .from(grapesLogo, {
    autoAlpha: 0,
    y: -50,
  }, "-=0.2")
  .from(homeBtn, {
    autoAlpha: 0,
    y: -50,
  }, "-=0.2")
  .from(navLinks, {
    autoAlpha: 0,
    y: -50,
    duration: 0.4, /* アニメーションの長さ0.4秒 */
    stagger: 0.1, // navLinksが順番に現れる
  }, "-=0.2")
  .from(imgsNav, {
    autoAlpha: 0,
    y: -50,
  }, "-=0.2");
