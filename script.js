document.addEventListener("DOMContentLoaded", function() {
    const idForm = document.getElementById("id-form");
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const generatedLink = document.getElementById("generated-link");
    const shareButton = document.getElementById("share-button");
    const qrCodeContainer = document.getElementById("qr-code");
    const qrImg = document.getElementById('qrImg');
    const qrBox = document.getElementById('qrBox');

    idForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const id = document.getElementById("id").value;
        
        // Generate the link using the entered ID number
        const link = `https://careerseng-teleperformance.icims.com/jobs/34198/customer-success-specialist-%28m%29---japanese/job?mode=job&iis=RAF&iisn=${id}+-+Anisah+Rosley`;
        
        // Update the generated link display as a clickable link
        generatedLink.innerHTML = `<a href="${link}" target="_blank" class="generated-link">${link}</a>`;
        
        // Generate QR code for the link
        generateQrCode(link);
        
        // Show step 2 and hide step 1
        step1.style.display = "none";
        step2.style.display = "block";
    });

    shareButton.addEventListener("click", function() {
        const link = generatedLink.textContent;
        const message = `Check out this link: ${link}`;

        // Create a shareable link for WhatsApp
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

        // Open WhatsApp share link in a new window
        window.open(whatsappLink, "_blank");
    });

    function generateQrCode(link) {
        // Check if the input field is empty
        if (link.trim() === "") {
            alert("Please enter text to generate a QR code.");
            return;
        }

        // Construct the URL for the qrserver.com API
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link)}`;

        // Generating image 
        qrImg.src = apiUrl;
        qrBox.setAttribute("id", "qrBoxGenerated");
    }
});
