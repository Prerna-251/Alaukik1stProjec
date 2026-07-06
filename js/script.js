document.addEventListener("DOMContentLoaded", () => {

    loadSection("about.html", "book");
    loadSection("skills.html", "skill-section");
    loadSection("projects.html", "project-section");
    loadSection("education.html", "education-section");
    loadSection("certificate.html", "certificate-section");
    loadSection("contact.html", "contact-section", true);

});

function loadSection(file, id, isContact = false) {

    fetch(file)
        .then(res => res.text())
        .then(html => {

            document.getElementById(id).innerHTML = html;

            if (isContact) {
                const script = document.createElement("script");
                script.src = "../js/contact.js";

                script.onload = () => {
                    initContactForm();
                };

                document.body.appendChild(script);
            }

        })
        .catch(err => console.error(err));

}