(function () {
    const header = document.querySelector(".header");
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.getElementById("menu");
    const panelLinks = document.querySelectorAll("#menu a[href^='#']");
    const yearEl = document.getElementById("year");

    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }

    function setScrolled() {
        if (!header) return;
        header.classList.toggle("is-scrolled", window.scrollY > 12);
    }

    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });

    function closeMenu() {
        if (!menu || !menuBtn) return;
        menu.hidden = true;
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Menu");
    }

    function openMenu() {
        if (!menu || !menuBtn) return;
        menu.hidden = false;
        menuBtn.setAttribute("aria-expanded", "true");
        menuBtn.setAttribute("aria-label", "Close menu");
    }

    menuBtn?.addEventListener("click", () => {
        if (menu?.hidden) openMenu();
        else closeMenu();
    });

    panelLinks.forEach((link) => {
        link.addEventListener("click", () => closeMenu());
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) closeMenu();
    });

    const prefersReduced =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const id = this.getAttribute("href");
            if (!id || id === "#") return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const offset = header ? header.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset - 10;
            window.scrollTo({
                top,
                behavior: prefersReduced ? "auto" : "smooth",
            });
        });
    });

    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const navByHref = new Map(
        Array.from(document.querySelectorAll(".header__inner .nav__link[href^='#']")).map((a) => [
            a.getAttribute("href"),
            a,
        ])
    );

    function setActiveNav() {
        const scrollPos = window.scrollY + (header?.offsetHeight || 0) + 28;
        let currentId = sections[0]?.id;
        for (const section of sections) {
            if (scrollPos >= section.offsetTop) currentId = section.id;
        }
        if (!currentId) return;
        navByHref.forEach((link, href) => {
            link.classList.toggle("is-active", href === `#${currentId}`);
        });
    }

    if (sections.length && navByHref.size) {
        setActiveNav();
        window.addEventListener("scroll", setActiveNav, { passive: true });
    }
})();
