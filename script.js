/**
 * 前端作品集 - Portfolio
 * Web开发技术 · 第三次课作业
 */

/* 导航栏滚动效果 */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* 元素入场动画（IntersectionObserver） */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document
    .querySelectorAll(".project-card, .about-text, .about-stats")
    .forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.08}s`;
        observer.observe(el);
    });

/* 平滑滚动导航已由 CSS scroll-behavior 处理 */
