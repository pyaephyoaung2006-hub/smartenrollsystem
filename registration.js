document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let studentId = document.getElementById("studentId").value;
    let studentName = document.getElementById("studentName").value;
    let parentname = document.getElementById("parentName").value;
    let date = document.getElementById("dob").value;
    let tel = document.getElementById("phone").value;
    let parentPhone = document.getAnimationsByID("parentPhone").value;
    let address = document.getElementById("address").value;

    // ၁။ သီးသန့် Single Key အနေဖြင့် သိမ်းခြင်း (သင် ရေးထားသည့်အတိုင်း)
    localStorage.setItem("studentId", studentId);
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("parentname", parentname);
    localStorage.setItem("dob", date);
    localStorage.setItem("phone", tel);
    localStorage.setItem("parentPhone", parentPhone);
    localStorage.setItem("address", address);

    // ၂။ currentUser Object ထဲသို့ အချက်အလက်များ ဖြည့်သွင်းခြင်း ✨
    let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    currentUser.id = studentId;
    currentUser.name = studentName;
    currentUser.parentname = parentname;
    currentUser.birthdate = date;
    currentUser.phone = tel;
    currentUser.parentPhone = parentPhone;
    currentUser.address = address;

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    // ၃။ Admin Dashboard ဖတ်မည့် students Array ထဲသို့ Update လုပ်ပေးခြင်း ✨
    let students = JSON.parse(localStorage.getItem("students")) || [];

    // ရှိပြီးသား ကျောင်းသားဖြစ်ပါက ရှာဖွေခြင်း (ID သို့မဟုတ် Email ဖြင့်)
    let studentIndex = students.findIndex(s => 
        (studentId && s.id === studentId) || 
        (currentUser.email && s.email === currentUser.email)
    );

    if (studentIndex !== -1) {
        // ရှိပြီးသားကျောင်းသားဖြစ်ပါက အချက်အလက်သစ်များ ဖြည့်ပေးမည်
        students[studentIndex].id = studentId;
        students[studentIndex].name = studentName;
        students[studentIndex].parentname = parentname;
        
        students[studentIndex].birthdate = date;
        students[studentIndex].phone = tel;
        students[studentIndex].parentPhone = parentPhone;
        students[studentIndex].address = address;
    } else {
        // အသစ်ဖြစ်ပါက Array ထဲသို့ ထည့်သွင်းမည်
        students.push(currentUser);
    }

    // LocalStorage ထဲ ပြန်သိမ်းခြင်း
    localStorage.setItem("students", JSON.stringify(students));

    alert("Registration Successful! Back to Dashboard.");
    window.location.href = "user_dashboard.html";
});