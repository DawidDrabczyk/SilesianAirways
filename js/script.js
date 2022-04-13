const input = document.querySelector(".weather__main-info--input");
const button = document.querySelector(".weather__main-info--button");
const cityName = document.querySelector(".weather__main-info--city-name");
const warning = document.querySelector(".weather__main-info--warning");
const photo = document.querySelector(".weather__main-info--photo");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=1b99f2272edc02a59db20170fb27bc32";
const API_UNIT = "&units=metric";

const buttonLogin = document.querySelector(".header__btn");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close");
const popupInputs = document.querySelectorAll(".popup-input");
const popupBtn = document.getElementById("popup-btn");
const info = document.querySelector(".popup-info");

const date = document.querySelector(".header__timer--date");
const time = document.querySelector(".header__timer--time");

const year = document.querySelector(".footer__year");

const loginBtn = document.querySelector(".header__btn-text");

const usernameRegister = document.querySelector("#usernameRegister");
const userSurnameRegister = document.querySelector("#userSurnameRegister");
const passwordRegister = document.querySelector("#passwordRegister");
const passwordRegister2 = document.querySelector("#passwordRegisterRepeat");
const userEmail = document.querySelector("#userEmail");
const clearBtn = document.querySelector(".register__popup-form--btnClear");
const sendBtn = document.querySelector(".register__popup-form--btnSend");
const popupFinal = document.querySelector(".register__popup-form--final");
const tableInputs = [
	usernameRegister,
	userSurnameRegister,
	passwordRegister,
	passwordRegister2,
	userEmail,
];

const fromCity = document.getElementById('from')
const toCity = document.getElementById('to')
const timeArrive = document.getElementById('time-arrive')
const adults = document.getElementById("adults");
const underage = document.getElementById("underage");
const sector = document.getElementById("sector");
const luggage = document.getElementById("luggage");
const submitBtn = document.getElementById("submit-btn");

const popupLogin = document.querySelector('.popup-login')
const popupLoginClose = document.querySelector('.popup-login__closeBtn')

const formHandler = () => {
	localStorage.setItem('fromCity', fromCity.options[fromCity.selectedIndex].text)
	localStorage.setItem('toCity', toCity.options[toCity.selectedIndex].text)
	localStorage.setItem("timeArrive", timeArrive.value);
	localStorage.setItem("numAdults", adults.value);
	localStorage.setItem("numUnderage", underage.value);
	localStorage.setItem('sector', sector.options[sector.selectedIndex].text)
	localStorage.setItem('luggage', luggage.options[luggage.selectedIndex].text)
};

const handlerDateInput = () => {
	let curDate = new Date();
	let curYear = curDate.getFullYear();
	let curMonth = curDate.getMonth() + 1;
	let curDay = curDate.getDate();
	let crr;

	if(curMonth < 10 && curDay < 10){
		crr = curYear.toString() + '-0' + curMonth.toString() + '-0' + curDay.toString()
	} else if (curMonth < 10 && curDay > 10){
		crr = curYear.toString() + '-0' + curMonth.toString() +  '-'  + curDay.toString()
	} else if (curMonth > 10 && curDay < 10){
		crr = curYear.toString() + '-' + curMonth.toString() +  '-0'  + curDay.toString()
	} else {
		crr = curYear.toString() + '-' + curMonth.toString() +  '-'  + curDay.toString()
	}
	
	timeArrive.setAttribute('min', crr)
}

const popupLoginForm = (e) => {
	if(loginBtn.textContent === 'Zaloguj się'){
		popupLogin.style.display="block"
		e.preventDefault()
	}
}

popupLoginClose.addEventListener('click', () => {
	popupLogin.style.display = 'none'
})

buttonLogin.addEventListener('click', () => {
	popupLogin.style.display = 'none'
})

const getWeather = () => {
	const city = input.value;
	const URL = API_LINK + city + API_KEY + API_UNIT;

	axios
		.get(URL)
		.then(res => {
			const temp = res.data.main.temp;
			const hum = res.data.main.humidity;
			const status = Object.assign({}, ...res.data.weather);

			temperature.textContent = Math.floor(temp) + "°C";
			humidity.textContent = Math.floor(hum) + "%";
			cityName.textContent = res.data.name;

			input.value = "";
			warning.textContent = "";

			if (status.id >= 200 && status.id <= 232) {
				photo.setAttribute("src", "./img/thunderstorm.png");
			} else if (status.id >= 300 && status.id <= 321) {
				photo.setAttribute("src", "./img/drizzle.png");
			} else if (status.id >= 500 && status.id <= 531) {
				photo.setAttribute("src", "./img/rain.png");
			} else if (status.id >= 600 && status.id <= 622) {
				photo.setAttribute("src", "./img/ice.png");
			} else if (status.id >= 701 && status.id <= 781) {
				photo.setAttribute("src", "./img/fog.png");
			} else if (status.id === 800) {
				photo.setAttribute("src", "./img/sun.png");
			} else if (status.id >= 801 && status.id <= 804) {
				photo.setAttribute("src", "./img/cloud.png");
			} else {
				photo.setAttribute("src", "./img/unknown.png");
			}
		})
		.catch(() => {
			warning.textContent = "Wpisz prawidłową nazwę miasta!";
			cityName.textContent = "";
		});
};

const checkEnter = e => {
	if (e.key === "Enter") {
		getWeather();
	}
};

const showPopup = () => {
	popup.style.display = "flex";
};

const closePopup = () => {
	popup.style.display = "none";
	popupInputs.forEach(item => {
		item.value = "";
	});
	popupInputs.textContent = "";
	info.textContent = "";
};

function lz(i) {
	return `${i}`.padStart(2, "0");
}

function showTextTime() {
	const now = new Date();
	const days = [
		"Niedziela",
		"Poniedziałek",
		"Wtorek",
		"Środa",
		"Czwartek",
		"Piątek",
		"Sobota",
	];

	const textDate = `${lz(now.getDate())} . ${lz(
		now.getMonth() + 1
	)} . ${now.getFullYear()} (${days[now.getDay()]})`;
	const textTime = `${lz(now.getHours())} : ${lz(now.getMinutes())} : ${lz(
		now.getSeconds()
	)}`;

	date.innerHTML = textDate;
	time.innerHTML = textTime;

	window.requestAnimationFrame(showTextTime);
}

const footerYear = () => {
	const currentYear = new Date().getFullYear();

	year.innerText = currentYear;
};

const popupHandler = e => {

	e.preventDefault();

	fetch('https://dawiddrabczyk.github.io/SilesianAirways/users.json')
	.then(res => res.json())
	.then(data => {
		let dataStr = JSON.stringify(data)
		let dataPar = JSON.parse(dataStr)
		if (login.value === "admin" && password.value === "admin123") {
					closePopup();
					loginBtn.textContent = "admin";
					buttonLogin.setAttribute("disabled", true);
				} else {
					info.textContent = "Błędne dane logowania!";
					info.style.color = "red";
				}
	})
}

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector(".register__popup-form--error-text");

	formBox.classList.add("register__popup-form--error");
	errorMsg.textContent = msg;
};

const clearError = input => {
	const formBox = input.parentElement;
	formBox.classList.remove("register__popup-form--error");
};

const checkInputs = input => {
	input.forEach(el => {
		if (el.value === "") {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} musi się składać z min. ${min} znaków!`
		);
	}
};

const checkPassword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, "Podane hasła różnią się od siebie!");
	}
};

const checkMail = email => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (re.test(email.value)) {
		clearError(email);
	} else {
		showError(email, "Niepoprawny adres e-mail!");
	}
};

const checkErrors = () => {
	const allRegisterInputs = document.querySelectorAll(".register__popup-form--box");
	let errorCount = 0;

	allRegisterInputs.forEach(el => {
		if (el.classList.contains("register__popup-form--error")) {
			errorCount++;
		}
	});

	if(errorCount === 0){
		popupFinal.classList.add('register__show-finalPopup')
	}
};

const sendValues = e => {
	e.preventDefault();

	checkInputs(tableInputs);
	checkLength(usernameRegister, 2);
	checkLength(userSurnameRegister, 2);
	checkLength(passwordRegister, 6);
	checkPassword(passwordRegister, passwordRegister2);
	checkMail(userEmail);
	checkErrors();
};

const clearInputs = e => {
	e.preventDefault();

	tableInputs.forEach(el => {
		el.value = "";
		clearError(el);
	});
};

const registerPopupButton = document.querySelector('.register__text--span')
const registerText = document.querySelector('.register__text')
const registerPopupActive = document.querySelector('.register__popup')

const showRegisterPopup = () =>{
	registerText.style.display = 'none'
	registerPopupActive.style.display = 'flex'
}

handlerDateInput()
footerYear();

window.requestAnimationFrame(showTextTime);

popupBtn.addEventListener("click", popupHandler);
input.addEventListener("keyup", checkEnter);
button.addEventListener("click", getWeather);
buttonLogin.addEventListener("click", showPopup);
closeBtn.addEventListener("click", closePopup);
clearBtn.addEventListener("click", clearInputs);
sendBtn.addEventListener("click", sendValues);
registerPopupButton.addEventListener('click', showRegisterPopup)
submitBtn.addEventListener("click", formHandler);
submitBtn.addEventListener("click", popupLoginForm);
