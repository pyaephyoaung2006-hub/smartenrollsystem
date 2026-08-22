document.getElementById("boyHostel").style.display = "none";
document.getElementById("girlHostel").style.display = "none";

function showHostel() {
    let gender = document.getElementById("gender").value;

    let checkedRadio = document.querySelector('input[name="hostel"]:checked');
    if (checkedRadio) {
        checkedRadio.checked = false;
    }

    if (gender === "Male") {
        document.getElementById("boyHostel").style.display = "block";
        document.getElementById("girlHostel").style.display = "none";
    } 
    else if (gender === "Female") {
        document.getElementById("boyHostel").style.display = "none";
        document.getElementById("girlHostel").style.display = "block";
    } 
    else {
        document.getElementById("boyHostel").style.display = "none";
        document.getElementById("girlHostel").style.display = "none";
    }
}

function nextPage() {
    let gender = document.getElementById("gender").value;
    let hostel = document.querySelector('input[name="hostel"]:checked');

    if (gender === "") {
        alert("Please select your gender.");
        return;
    }

    if (hostel === null) {
        alert("Please select a hostel.");
        return;
    }

    localStorage.setItem("gender", gender);
    localStorage.setItem("hostel", hostel.value);

    let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {}; //  ထည့်ထားပါသည်
    currentUser.gender = gender;
    currentUser.hostel = hostel.value;
    currentUser.hostelApplied = true; 
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    let students = JSON.parse(localStorage.getItem("students")) || []; //  ထည့်ထားပါသည်
    
    let studentIndex = students.findIndex(s => 
        (currentUser.id && s.id === currentUser.id) || 
        (currentUser.email && s.email === currentUser.email)
    );

    if (studentIndex !== -1) {
        students[studentIndex].gender = gender;
        students[studentIndex].hostel = hostel.value;
        students[studentIndex].hostelApplied = true;
    } else {
        currentUser.id = currentUser.id || ("STU-" + Date.now());
        students.push(currentUser);
    }
    
    localStorage.setItem("students", JSON.stringify(students));

    window.location.href = "success.html";
}