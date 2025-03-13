// Сворачивающийся хедер при скролле
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".site-header");
    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Скролл вниз
            header.style.padding = "0.5rem 0";
        } else {
            // Скролл вверх
            header.style.padding = "1rem 0";
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});