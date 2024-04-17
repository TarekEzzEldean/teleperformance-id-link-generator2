document.addEventListener("DOMContentLoaded", function() {
    const idForm = document.getElementById("id-form");
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const generatedLink = document.getElementById("generated-link");
    const qrCodeContainer = document.getElementById("qr-code");
    const shareButton = document.getElementById("share-button");

    idForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const id = document.getElementById("id").value;
        
        // Generate the link using the entered ID number
        const link =  `https://careerseng-teleperformance.icims.com/jobs/34198/customer-success-specialist-%28m%29---japanese/job?mode=job&iis=RAF&iisn=${id}+-+Anisah+Rosley`;
        
        // Update the generated link display
        generatedLink.textContent = link;
        
        // Generate QR code for the link
        new QRCode(qrCodeContainer, link);
        
        // Show step 2 and hide step 1
        step1.style.display = "none";
        step2.style.display = "block";
    });

    shareButton.addEventListener("click", async function() {
        const link = generatedLink.textContent;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Share Link",
                    text: "Check out this link",
                    url: link
                });
                console.log("Link shared successfully");
            } catch (error) {
                console.error("Error sharing link:", error);
            }
        } else {
            alert("Web Share API not supported in this browser");
        }
    });
});
