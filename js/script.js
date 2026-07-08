document.addEventListener("DOMContentLoaded", () => {

    loadSection("about.html", "book");
    loadSection("skills.html", "skill-section");
    loadSection("projects.html", "project-section");
    loadSection("education.html", "education-section");
    loadSection("certificate.html", "certificate-section");
    loadSection("contact.html", "contact-section", true);

    const menu = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");

    if (menu && nav) {

        menu.addEventListener("click", () => {
            nav.classList.toggle("active");
        });

        document.querySelectorAll("#nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
            });
        });

    }

});

function loadSection(file, id, isContact = false) {

    fetch(file)
        .then(res => res.text())
        .then(html => {

            document.getElementById(id).innerHTML = html;

            // Run About animation only after about.html is loaded
            if (id === "book" && typeof initAboutAnimation === "function") {
                initAboutAnimation();

                if (typeof ScrollTrigger !== "undefined") {
                    ScrollTrigger.refresh();
                }
            }

            if (id === "skill-section") {
                initSkillsAnimation();
            }

            if (id === "project-section") {
                initProjectsAnimation();
            }

            if (id === "education-section") {
                initEducationAnimation();
            }

            if (id === "certificate-section") {
                initCertificateAnimation();
            }

            if (id === "contact-section") {
    initContactAnimation();
    initContactForm();
}

        })
        .catch(err => console.error(err));

}

function initSkillsAnimation() {

    const section = document.querySelector("#skills");
    const cards = document.querySelectorAll(".skill-card");

    if (!section || cards.length === 0) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                cards.forEach((card, index) => {

                    setTimeout(() => {
                        card.classList.add("show");
                    }, index * 180);

                });

                observer.unobserve(section);

            }

        });

    }, {
        threshold: 0.3
    });

    observer.observe(section);

}

function initProjectsAnimation() {

    const section = document.querySelector("#projects");
    const cards = document.querySelectorAll(".project-card");

    if (!section || cards.length === 0) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                cards.forEach((card, index) => {

                    setTimeout(() => {
                        card.classList.add("show");
                    }, index * 250);

                });

                observer.unobserve(section);

            }

        });

    }, {
        threshold: 0.3
    });

    observer.observe(section);

}

function initEducationAnimation() {

    const timeline = document.querySelector(".timeline");
    const items = document.querySelectorAll(".timeline-item");

    if (!timeline) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                timeline.classList.add("draw");

                items.forEach((item, index) => {

                    setTimeout(() => {

                        item.classList.add("show");

                    }, 700 + index * 350);

                });

                observer.unobserve(timeline);

            }

        });

    }, { threshold: 0.3 });

    observer.observe(timeline);

}

function initCertificateAnimation() {

    const section = document.querySelector("#certificates");
    const cards = document.querySelectorAll(".certificate-card");

    if (!section || cards.length === 0) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                cards.forEach((card, index) => {

                    setTimeout(() => {

                        card.classList.add("show");

                    }, index * 250);

                });

                observer.unobserve(section);

            }

        });

    }, { threshold: 0.3 });

    observer.observe(section);

}

function initContactForm() {

    const form = document.getElementById("contact-form");
    const sendBtn = document.getElementById("sendBtn");

    console.log(form);

    if (!form || !sendBtn) {
        console.log("Contact form not found.");
        return;
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        sendBtn.disabled = true;
        sendBtn.innerHTML = "🦉 Owl is flying...";

        const formData = new FormData(form);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {

                form.reset();

                sendBtn.innerHTML = "✅ Owl Delivered!";

                setTimeout(() => {
                    sendBtn.disabled = false;
                    sendBtn.innerHTML = "🦉 Send Owl";
                }, 2500);

            } else {

                alert(result.message);

                sendBtn.disabled = false;
                sendBtn.innerHTML = "🦉 Send Owl";
            }

        } catch (error) {

            console.error(error);

            alert("Something went wrong.");

            sendBtn.disabled = false;
            sendBtn.innerHTML = "🦉 Send Owl";
        }
    });

}

function initContactAnimation() {

    const section = document.querySelector("#contact");
    const cards = document.querySelectorAll(".contact-info, .contact-form");

    if (!section) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                cards.forEach((card, index) => {

                    setTimeout(() => {

                        card.classList.add("show");

                    }, index * 350);

                });

                observer.unobserve(section);

            }

        });

    }, { threshold: 0.3 });

    observer.observe(section);

}