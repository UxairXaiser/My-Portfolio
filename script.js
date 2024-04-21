function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_ul57gss","template_rabzi4i",parms).then(alert("Email Sent!"))
}

document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to each "View Details" button
    document.getElementById("view-details-1").addEventListener("click", function() {
      window.location.href = "project_details.html"; // Redirect to project1_details.html
    });
  
    document.getElementById("view-details-2").addEventListener("click", function() {
      window.location.href = "project_details.html"; // Redirect to project2_details.html
    });
  
    document.getElementById("view-details-3").addEventListener("click", function() {
      window.location.href = "project_details.html"; // Redirect to project3_details.html
    });
  });
  