// 1. HTML에서 필요한 태그들을 찾아옵니다.
const loadBtn = document.getElementById('load-btn');
const container = document.getElementById('data-container');

// 2. 버튼을 클릭했을 때 실행할 동작을 정의합니다.
loadBtn.addEventListener('click', function() {
    
    // 3. fetch() 함수를 사용해 data.json 파일을 서버(또는 폴더)에 요청합니다.
    fetch('data.json')
        .then(response => {
            // 응답이 정상인지 확인합니다.
            if (!response.ok) {
                throw new Error('데이터를 불러오는데 실패했습니다.');
            }
            // 텍스트 형태의 응답을 JS가 다룰 수 있는 JSON 객체로 변환합니다.
            return response.json(); 
        })
        .then(data => {
            // 4. 변환된 데이터(data)를 화면에 그리는 함수를 실행합니다.
            displayData(data);
        })
        .catch(error => {
            console.error('에러 발생:', error);
            container.innerHTML = '<p style="color:red;">에러가 발생했습니다.</p>';
        });
});

// 5. 데이터를 받아 HTML로 만들어주는 함수입니다.
function displayData(users) {
    // 먼저 빈 식탁을 깨끗하게 치웁니다. (안 그러면 누를 때마다 계속 쌓입니다)
    container.innerHTML = '';

    // 배열(users)에 있는 데이터를 하나씩 꺼내서 반복 작업합니다.
    users.forEach(user => {
        // <div> 태그를 새로 만듭니다.
        const card = document.createElement('div');
        // CSS 스타일을 적용하기 위해 클래스 이름을 붙여줍니다.
        card.className = 'user-card';

        // <div> 안에 들어갈 HTML 내용을 데이터와 섞어서 작성합니다.
        card.innerHTML = `
            <h3>이름: ${user.name}</h3>
            <p>역할: ${user.role}</p>
        `;

        // 완성된 <div> 태그를 화면(container)에 쏙 집어넣습니다.
        container.appendChild(card);
    });
}
