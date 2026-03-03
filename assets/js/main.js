/* c:\Paintball Gemilang Katun Outbound\assets\js\main.js */
document.addEventListener('DOMContentLoaded', function () {
    // Back to top visible threshold
    const fabTop = document.getElementById('fabTop');
    if (fabTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                fabTop.classList.add('show');
            } else {
                fabTop.classList.remove('show');
            }
        });
        fabTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Automatic TOC Generation
    const articleContent = document.querySelector('.article-body');
    const tocList = document.getElementById('tocList');
    const tocToggle = document.getElementById('tocToggle');
    const tocIcon = document.getElementById('tocIcon');

    if (articleContent && tocList) {
        const headings = articleContent.querySelectorAll('h2, h3');
        if (headings.length > 0) {
            headings.forEach((heading, index) => {
                // give an id to heading if not present
                if (!heading.id) {
                    const generatedId = heading.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                    heading.id = generatedId ? generatedId : 'heading-' + index;
                }

                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#' + heading.id;
                a.innerText = heading.innerText;

                if (heading.tagName.toLowerCase() === 'h3') {
                    li.className = 'toc-h3';
                } else {
                    li.className = 'toc-h2';
                }

                li.appendChild(a);
                tocList.appendChild(li);

                // Smooth scroll
                a.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.getElementById(heading.id);
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                });
            });

            // Toggle TOC
            tocToggle.addEventListener('click', () => {
                tocList.classList.toggle('show');
                if (tocList.classList.contains('show')) {
                    tocIcon.className = 'fas fa-chevron-up';
                } else {
                    tocIcon.className = 'fas fa-chevron-down';
                }
            });
        } else {
            document.querySelector('.toc-container').style.display = 'none';
        }
    }

    // Active state for navbar links
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-link');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("active");
        }
    }
});
