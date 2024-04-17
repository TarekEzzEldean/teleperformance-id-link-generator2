document.addEventListener("DOMContentLoaded", function() {
    const idForm = document.getElementById("id-form");
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const generatedLink = document.getElementById("generated-link");

    idForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const id = document.getElementById("id").value;
        
        // Generate the link using the entered ID number
        const link =  `https://careerseng-teleperformance.icims.com/jobs/34198/customer-success-specialist-%28m%29---japanese/job?mode=job&iis=RAF&iisn=${id}+-+Anisah+Rosley`;
        
        // Update the generated link display as a clickable link
        generatedLink.innerHTML = `<a href="${link}" target="_blank" class="generated-link">${link}</a>`;
        
        // Show step 2 and hide step 1
        step1.style.display = "none";
        step2.style.display = "block";
    });
});
