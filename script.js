
// Function for Contact Form Alert
function showMessage() {
    const name = document.getElementById('userName').value;
    if (name) {
        alert("Thanks for visiting our home, " + name + "!");
    } else {
        alert("Thanks for visiting our home!");
    }
}

// Show/Hide Back to Top button on scroll
window.onscroll = function() {
    const topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Scroll to top when button is clicked
document.getElementById("topBtn").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};