

// Back to Home Button
document.getElementById("btnHome").addEventListener("click", function () {
    window.location.href = "index.html";   
});

// Logout Button
document.getElementById("btnLogout").addEventListener("click", function () {
    document.getElementById("logoutModal").style.display = "flex";
});

// Cancel Logout
document.getElementById("cancelLogout").addEventListener("click", function () {
    document.getElementById("logoutModal").style.display = "none";
});

// Confirm Logout
document.getElementById("confirmLogout").addEventListener("click", function () {

        localStorage.clear();
    window.location.href = "login.html";
});
document.getElementById("studentId").textContent =
    localStorage.getItem("studentId");

document.getElementById("studentName").textContent =
    localStorage.getItem("studentName");

document.getElementById("dob").textContent =
    localStorage.getItem("dob");
document.getElementById("hostel").textContent =
    localStorage.getItem("hostel");
