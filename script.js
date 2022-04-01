var notifyStyle = '<style>\
.notify {\
	position: fixed;\
	bottom: 0;\
	right: 0;\
	}\
.notifications {\
	width: 100%;\
	top: 0;\
	right: 0;\
	opacity: 1;\
	background: #fff;\
	border-radius: 8px;\
	-webkit-box-shadow: 0 4px 24px rgba(0, 77, 95, .24);\
	box-shadow: 0 4px 24px rgba(0, 77, 95, .24);\
	color: #58646a;\
	-webkit-transition: opacity 1.5s ease;\
	-o-transition: opacity 1.5s ease;\
	transition: opacity 1.5s ease;\
	margin: 24px 24px 24px auto;\
    width: 352px;\
    display: block;\
    padding: 0;\
    transform: translateY(150%);\
  	animation: ani 0.5s forwards;\
}\
@keyframes ani {\
  0% {transform: translateY(150%);}\
  100% {transform: translateY(0);}\
}\
.notifications__row {\
	display: -webkit-box;\
}\
.notifications__content {\
	margin-top: 12px;\
	margin-bottom: 20px;\
	width: 80%;\
	line-height: 20px;\
	font-size: 14px;\
	text-align: center;\
}\
.notifications__title {\
	font-weight: bold;\
	margin: 20px 0;\
    text-align: center;\
    font-size: 24px;\
}\
.notifications__title_text {\
	margin-bottom: 20px;\
    font-size: 16px;\
}\
.notifications__text_1, \
.notifications__text_2 {\
	font-size: 28px;	\
    margin: 5px;\
}\
.notifications__text_1:hover, \
.notifications__text_2:hover {\
	cursor: pointer;	\
}\
.notifications__icon {\
	background-repeat: no-repeat;\
	width: 20px;\
	height: 20px;\
	margin-left: 16px;\
    margin-top: 12px;\
}\
.notifications__close {\
	position: absolute;\
	width: 20px;\
	height: 20px;\
	cursor: pointer;\
	top: 6px;\
	right: 0px;\
}\
@media (max-width: 480px) {\
	.notifications {\
		width: 312px;\
		margin: 24px auto;\
	}\
}';

var newDiv = document.createElement("div");
newDiv.className = 'notify';
newDiv.innerHTML = notifyStyle;

document.body.appendChild(newDiv);

const pushWrapp = document.querySelector(".notify");
const notifyMain = document.createElement('div');
notifyMain.className = 'notifications';
pushWrapp.appendChild(notifyMain);

const notifyRow = document.createElement('div');
notifyRow.className = 'notifications__row';
notifyMain.appendChild(notifyRow);

const notifyIcon = document.createElement('div');
notifyIcon.className = 'notifications__icon';
notifyRow.appendChild(notifyIcon);

const notifyContent = document.createElement('div');
notifyContent.className = 'notifications__content';
notifyRow.appendChild(notifyContent);    

const notifyTitle = document.createElement('div');
notifyTitle.className = 'notifications__title';
notifyTitle.textContent = "Была ли статья полезна?";
notifyContent.appendChild(notifyTitle);

const notifyTitleText = document.createElement('div');
notifyTitleText.className = 'notifications__title_text';
notifyTitleText.textContent = "Мы хотим понять, информативен ли такой формат ответов на ваши вопросы. Будем благодарны, если вы оцените эту статью.";
notifyContent.appendChild(notifyTitleText);

const notifyText_1 = document.createElement('span');
notifyText_1.className = 'notifications__text_1';
notifyText_1.innerHTML = "&#128077;"
notifyContent.appendChild(notifyText_1);

const notifyText_2 = document.createElement('span');
notifyText_2.className = 'notifications__text_2';
notifyText_2.innerHTML = "&#128078;"
notifyContent.appendChild(notifyText_2);

const notifyClose = document.createElement('div');
notifyClose.className = 'notifications__close';
notifyClose.innerHTML = "x";
notifyRow.appendChild(notifyClose);

notifyClose.addEventListener('click', function (e) {
  	notifyMain.style.opacity = 0;
  	notifyMain.remove();
});

notifyText_1.addEventListener('click', function (e) {
  	carrotquest.track('Понравилась статья: ' + document.title, {
	    // "$email": $('#subscribe-email').val(),
	    // "$name": $('#subscribe-name').val()
	});
  	notifyMain.style.opacity = 0;
  	notifyMain.remove();
});
notifyText_2.addEventListener('click', function (e) {
  	carrotquest.track('Не понравилась статья: ' + document.title, {
	    // "$email": $('#subscribe-email').val(),
	    // "$name": $('#subscribe-name').val()
	});
  	notifyMain.style.opacity = 0;
  	notifyMain.remove();
});
