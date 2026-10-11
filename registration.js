document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value;
    const parentName = document.getElementById("parentName").value;
    const date = document.getElementById("dob").value;
    const tel = document.getElementById("phone").value;
    const parentPhone = document.getElementById("parentPhone").value;
    const address = document.getElementById("address").value;

    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};

    localStorage.setItem("studentName", studentName);
    localStorage.setItem("parentname", parentName);
    localStorage.setItem("dob", date);
    localStorage.setItem("phone", tel);
    localStorage.setItem("parentPhone", parentPhone);
    localStorage.setItem("address", address);

    Object.assign(currentUser, {
        name: studentName,
        parentname: parentName,
        birthdate: date,
        phone: tel,
        parentPhone: parentPhone,
        address: address
    });

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    const students = JSON.parse(localStorage.getItem("students")) || [];

    const studentIndex = students.findIndex(student =>
        currentUser.email && student.email === currentUser.email
    );

    if (studentIndex !== -1) {
        students[studentIndex] = {
            ...students[studentIndex],
            ...currentUser
        };
    } else {
        students.push(currentUser);
    }

    localStorage.setItem("students", JSON.stringify(students));

    alert("Registration Successful!");
    window.location.href = "user_dashboard.html";
});