const demoAccount = {
  email: "tester@example.com",
  password: "Test1234!"
};

const loginForm = document.querySelector("#loginForm");
const togglePasswordButton = document.querySelector("#togglePassword");
const passwordInput = document.querySelector("#password");

function setText(selector, message) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = message;
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearLoginMessages() {
  setText("#emailError", "");
  setText("#passwordError", "");
  setText("#formMessage", "");
  document.querySelector("#formMessage")?.classList.remove("error", "success");
}

if (togglePasswordButton && passwordInput) {
  togglePasswordButton.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";
    togglePasswordButton.textContent = isHidden ? "Hide" : "Show";
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearLoginMessages();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const rememberMe = document.querySelector("#rememberMe").checked;
    const formMessage = document.querySelector("#formMessage");
    let hasError = false;

    // Validation ส่วนนี้ทำให้ QA เห็นข้อความเตือนเมื่อยังกรอกข้อมูลไม่ครบหรือรูปแบบ Email ไม่ถูกต้อง
    if (!email) {
      setText("#emailError", "กรุณากรอก Email");
      hasError = true;
    } else if (!isValidEmail(email)) {
      setText("#emailError", "กรุณากรอก Email ให้ถูกต้อง เช่น tester@example.com");
      hasError = true;
    }

    if (!password) {
      setText("#passwordError", "กรุณากรอก Password");
      hasError = true;
    }

    if (hasError) {
      formMessage.classList.add("error");
      formMessage.textContent = "กรุณาตรวจสอบข้อมูลอีกครั้ง";
      return;
    }

    if (email === demoAccount.email && password === demoAccount.password) {
      localStorage.setItem("qaDemoEmail", email);
      localStorage.setItem("qaDemoRememberMe", rememberMe ? "yes" : "no");
      formMessage.classList.add("success");
      formMessage.textContent = "Login สำเร็จ กำลังไปหน้า Dashboard";
      window.location.href = "dashboard.html";
      return;
    }

    formMessage.classList.add("error");
    formMessage.textContent = "Email หรือ Password ไม่ถูกต้อง";
  });
}

if (document.querySelector("#dashboard-title")) {
  const email = localStorage.getItem("qaDemoEmail");
  const rememberMe = localStorage.getItem("qaDemoRememberMe");

  if (!email) {
    window.location.href = "index.html";
  } else {
    setText("#userEmail", email);
    setText("#rememberStatus", rememberMe === "yes" ? "ผู้ใช้เลือก Remember me ตอน Login" : "ผู้ใช้ไม่ได้เลือก Remember me ตอน Login");
  }
}

const logoutButton = document.querySelector("#logoutButton");
if (logoutButton) {
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("qaDemoEmail");
    localStorage.removeItem("qaDemoRememberMe");
    window.location.href = "index.html";
  });
}

const forgotPasswordLink = document.querySelector("#forgotPassword");
if (forgotPasswordLink) {
  forgotPasswordLink.addEventListener("click", (event) => {
    event.preventDefault();
    const formMessage = document.querySelector("#formMessage");
    formMessage.classList.remove("success");
    formMessage.classList.add("error");
    formMessage.textContent = "Demo นี้ยังไม่รองรับการ Reset Password";
  });
}
