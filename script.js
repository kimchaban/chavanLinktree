// '보내기' 버튼 클릭 시 버튼 문구 변경
const thxMsg = document.querySelector('.thankyou_message');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
	btn.textContent = '보내는 중...';
});

let observer = new MutationObserver((mutations) => {
	btn.textContent = '보내기';
});

let option = {
	attributes: true,
};

observer.observe(thxMsg, option);
