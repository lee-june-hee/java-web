// 기존 수업시간 코드
/*
document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault(); // 폼 기본 동작 차단(새로고침)
    const query = document.getElementById('searchInput').value.trim();
    if (!query) return;
    window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
});
*/

// 새 코드
document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    performSearch();
});

function showMainScreen() {
    const searchResults = document.getElementById('searchResults');
    if (searchResults) {
        searchResults.style.display = 'none';
        searchResults.innerHTML = '';
    }

    const mainSections = document.querySelectorAll('.main-section');
    mainSections.forEach(function (section) {
        section.style.display = 'block';
    });
}

function performSearch() {
    const q = document.getElementById('searchInput').value.trim();

    if (!q) {
        showMainScreen();
        alert('검색어가 없어서 메인 화면으로 돌아갑니다.');
        return;
    }

    // 검색어가 있으면 기존처럼 구글 검색
    window.open('https://www.google.com/search?q=' + encodeURIComponent(q), '_blank');
}