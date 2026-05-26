function validateAndLogin() {
    // submitLogin();  유효성 검사(지난 주 문제)
    let valid = true;

    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value;

    // ① 아이디 유효성 검사
    // 조건 : 4~20자 영문/숫자만 허용
    // 정규식 : /^[a-zA-Z0-9]{4,20}$/
    if (!/^[a-zA-Z0-9]{4,20}$/.test(username)) {
        showError(
            'usernameInput',
            'usernameMsg',
            '아이디는 4~20자의 영문 또는 숫자만 사용할 수 있습니다.'
        );
        valid = false;
    } else {
        clearError('usernameInput', 'usernameMsg');
    }

    // ② 패스워드 유효성 검사
    // 조건 : 8자 이상, 영문 + 숫자 + 특수문자(!@#$%^&*) 포함
    // 정규식 : /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/
    if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password)) {
        showError(
            'usernameInput',
            '아이디는 4~20자의 영문 또는 숫자만 사용할 수 있습니다.'
        );
        valid = false;
    } else {
        clearError('usernameInput');
    }

    // ③ 두 항목 모두 통과 시 로그인 실행
    if (valid) {
        submitLogin();
    }
    
}

async function submitLogin() {
    const password = document.getElementById('passwordInput').value;
    const hashed = await hashPassword(password);
    document.getElementById('password').value = hashed;
    document.getElementById('loginForm').submit();
}
