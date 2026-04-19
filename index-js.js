// =========================
// 👤 계정 데이터
// =========================
const users = {
    "Luca": {
        password: "7319",
        page: "character/luca/Luca.html"
    },
    "Arkel": {
        password: "1111",
        page: "Arkel.html"
    }
};

// =========================
// 🔐 로그인 함수
// =========================
function login() {
    const userInput = document.getElementById("username");
    const passInput = document.getElementById("password");
    const errorMsg = document.getElementById("error-msg");
    const btn = document.querySelector("button");

    const user = userInput.value.trim();
    const pass = passInput.value.trim();

    // 입력 안했을 때
    if (!user || !pass) {
        errorMsg.innerText = "닉네임과 비밀번호를 모두 입력하세요.";
        return;
    }

    // 버튼 잠금 (연타 방지)
    btn.disabled = true;
    btn.innerText = "확인 중...";

    setTimeout(() => {

        // 아이디 없음
        if (!users[user]) {
            errorMsg.innerText = "존재하지 않는 닉네임입니다.";
            resetBtn(btn);
            return;
        }

        // 비밀번호 틀림
        if (users[user].password !== pass) {
            errorMsg.innerText = "비밀번호가 틀렸습니다.";
            resetBtn(btn);
            return;
        }

        // 성공
        localStorage.setItem("loginUser", user);
        localStorage.setItem("lastUser", user);

        alert(`${user}님 환영합니다!`);

        window.location.href = users[user].page;

    }, 500); // 살짝 딜레이 (느낌용)
}

// 버튼 복구 함수
function resetBtn(btn) {
    btn.disabled = false;
    btn.innerText = "입장";
}

// =========================
// ⌨️ 엔터 로그인
// =========================
document.addEventListener("keydown", function(e){
    if(e.key === "Enter") login();

    // ESC 누르면 입력 초기화
    if(e.key === "Escape") {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("error-msg").innerText = "";
    }
});

// =========================
// 🧠 마지막 아이디 자동 입력
// =========================
window.onload = function() {
    const lastUser = localStorage.getItem("lastUser");
    if (lastUser) {
        document.getElementById("username").value = lastUser;
    }
};

// =========================
// ❌ 입력 시 에러 초기화
// =========================
document.getElementById("username").addEventListener("input", clearError);
document.getElementById("password").addEventListener("input", clearError);

function clearError() {
    document.getElementById("error-msg").innerText = "";
}

// =========================
// 👁 비밀번호 보기 토글
// =========================
function togglePassword() {
    const passInput = document.getElementById("password");

    if (passInput.type === "password") {
        passInput.type = "text";
    } else {
        passInput.type = "password";
    }
}

function showPassword() {
    document.getElementById("password").type = "text";
}

function hidePassword() {
    document.getElementById("password").type = "password";
}
