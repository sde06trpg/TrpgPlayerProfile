/* character-page-system.js */

// 1. 아코디언 기능 설정
function initAccordion() {
    const acc = document.querySelectorAll(".accordion");
    
    acc.forEach(btn => {
        // 기존에 인라인으로 들어갔을 수 있는 클릭 이벤트를 초기화하고 새로 바인딩
        btn.onclick = null; 
        
        btn.addEventListener("click", function() {
            // 클릭된 버튼의 바로 다음 요소(panel)를 가져옴
            const panel = this.nextElementSibling;
            
            // 현재 상태 확인 후 토글
            if (panel.style.display === "block") {
                panel.style.display = "none";
                this.innerText = this.innerText.replace("▼", "▶");
            } else {
                panel.style.display = "block";
                this.innerText = this.innerText.replace("▶", "▼");
            }
        });
    });
}

// 2. 페이지 로드 시 실행 (가장 중요)
document.addEventListener("DOMContentLoaded", function() {
    // HTML 요소들이 모두 로드된 후 아코디언 기능을 활성화합니다.
    initAccordion();

    // 만약 로그인 시스템 로직이 여기에 포함되어 있다면 함께 실행
    // checkLoginStatus(); 
});
