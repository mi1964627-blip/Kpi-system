const firebaseConfig = {
  apiKey: "AIzaSyDNVsGev89Jo38h3laGW9oGPKhhplYZ3nA",
  authDomain: "kpi-analysis-ef742.firebaseapp.com",
  projectId: "kpi-analysis-ef742",
  storageBucket: "kpi-analysis-ef742.firebasestorage.app",
  messagingSenderId: "475386199880",
  appId: "1:475386199880:web:25bca9e9d2176a3e627d7d"
};

firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

const auth = firebase.auth();
const db = firebase.database();

const loginBox = document.getElementById("loginBox");
const registerBox = document.getElementById("registerBox");


/* Register */
window.register = function () {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  if (!email || !password) {
    alert("من فضلك أدخل البريد وكلمة المرور");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("تم إنشاء الحساب بنجاح"))
    .catch(err => alert(err.message));
};

/* Login */
window.login = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("ادخل البريد وكلمة المرور");
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .catch(err => alert(err.message));
};

/* Logout */
window.logout = function () {
  auth.signOut().then(() => showPage('p1'));
};

/* Show / Hide Password */
const showBtn = document.querySelector(".show");
if (showBtn) {
  showBtn.onclick = function () {
    const pass = document.getElementById("loginPassword");
    pass.type = pass.type === "password" ? "text" : "password";
    this.textContent = pass.type === "password" ? "show" : "hide";
  };
}


/* Auth State */
auth.onAuthStateChanged(user => {
  if (user) {
    showPage('p2');
  } else {
    showPage('p1');
  }
});

function sendWhats() {
    const phone = ""; 
  let date = document.getElementById('d_date').value;
  let work = document.getElementById('d_work').value;
  let faults = document.getElementById('d_faults').value;
  let repairText = document.getElementById('repairText').value;
  
  let checkLocation = document.getElementById('checkLocation').value;
  let checkNotes = document.getElementById('checkNotes').value;
  
  let problem = document.getElementById('problem').value;
  let solution = document.getElementById('solution').value;
  let result = document.getElementById('result').value;
  
  let team = document.getElementById('d_team').value;

  let dailyCheck = document.getElementById('v_check').value;
  let repairs = document.getElementById('v_repairs').value;
  let safety = document.getElementById('v_safety').value;
  let reports = document.getElementById('v_reports').value;



  // رسالة واتس اب جاهزة
  let message = `📅 تاريخ: ${date}
🔧 الأعمال اليومية: ${work}
⚠️ الأعطال: ${faults}
🛠 الإصلاحات / الحلول: ${repairText}

✅ التشيك اليومي:
المكان: ${checkLocation}
ملاحظات: ${checkNotes}

💡 اقتراح / تحسين:
المشكلة: ${problem}
الحل: ${solution}
النتيجة: ${result}

👷‍♂️ المنفذين: ${team}

📊 التقييم:
Daily Check: ${dailyCheck}
Repairs: ${repairs}
Safety: ${safety}
Reports: ${reports}`;

  // فتح رابط واتس اب في تبويب جديد
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}


/* Page Control */
function showPage(id) {
  document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

window.showRegister = function () {
  loginBox.style.display = "none";
  registerBox.style.display = "block";
};

window.showLogin = function () {
  registerBox.style.display = "none";
  loginBox.style.display = "block";
};
