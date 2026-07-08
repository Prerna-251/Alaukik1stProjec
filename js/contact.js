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