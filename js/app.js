const seatsAvailable = document.querySelectorAll(".available");
const summaryBtn = document.querySelector(".summary__btn");
const popupFinal = document.querySelector(".popup-final");

const popupFinalBtn = document.querySelector(".popup-final__accept");
const year = document.querySelector(".footer__year");

const currencyOne = document.querySelector("#currency-one");
const amountOne = document.querySelector(".exchange__body-amountOne");
const currencyTwo = document.querySelector("#currency-two");
const amountTwo = document.querySelector(".exchange__body-amountTwo");
const swapBtn = document.querySelector(".exchange__body-btnSwap");
const rateInfo = document.querySelector(".exchange__body-rateInfo");

const fromCity = document.getElementById('startPlace')
const toCity = document.getElementById('finishPlace')
const flyDate = document.getElementById('flyDate')
const numberAdults = document.getElementById('numberAdults')
const numberUnderage = document.getElementById('numberUnderage')
const sectorPlace = document.getElementById('sectorPlace')
const luggageOption = document.getElementById('luggageOption')
let price = document.getElementById('price')

const seatEconomical = document.querySelectorAll('.plane-box__seats')
const seatBusiness = document.querySelectorAll('.plane-box__seatsB')
const seatVip = document.querySelectorAll('.plane-box__seatsV')

const acceptOrder = () => {
	popupFinalBtn.setAttribute("href", "index.html");
};

const showFinalPopup = () => {
	popupFinal.style.display = "block";
};

const footerYear = () => {
	const currentYear = new Date().getFullYear();

	year.innerText = currentYear;
};

const calculate = () => {
	fetch(
		`https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`
	).then(res => res.json())
	.then(data => {
		const currencyFirst = currencyOne.value;
		const currencySecond = currencyTwo.value;
		const rate = data.rates[currencySecond];

		rateInfo.textContent = `1 ${currencyFirst} = ${rate.toFixed(4)} ${currencySecond}`
		amountTwo.value = (amountOne.value * rate).toFixed(2)
	})
};

const swapCurrency = () => {
	const oldCurrency = currencyOne.value;
	
	currencyOne.value = currencyTwo.value
	currencyTwo.value = oldCurrency
	calculate()
}

const priceHandler = () => {
	let numAdults = localStorage.getItem('numAdults')
	let numUnderage = localStorage.getItem('numUnderage')
	let sector = localStorage.getItem('sector')
	let luggage = localStorage.getItem('luggage')
	let fromCity = localStorage.getItem('fromCity')
	let toCity = localStorage.getItem('toCity')
	
	if(sector === 'Ekonomiczna' && luggage === 'Bez bagażu' && fromCity === 'Zabrze' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 100 + numUnderage * 50 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bez bagażu' && fromCity === 'Zabrze' && toCity === 'Londyn'){
		price.textContent = numAdults * 150 + numUnderage * 75 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bez bagażu' && fromCity === 'Zabrze' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 300 + numUnderage * 150 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bagaż podręczny' && fromCity === 'Zabrze' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 125 + numUnderage * 75 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bagaż podręczny' && fromCity === 'Zabrze' && toCity === 'Londyn'){
		price.textContent = numAdults * 175 + numUnderage * 100 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bagaż podręczny' && fromCity === 'Zabrze' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 450 + numUnderage * 250 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Zabrze' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 175 + numUnderage * 125 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Zabrze' && toCity === 'Londyn'){
		price.textContent = numAdults * 225 + numUnderage * 150 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Zabrze' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 650 + numUnderage * 400 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bez bagażu' && fromCity === 'Gliwice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 125 + numUnderage * 75 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bez bagażu' && fromCity === 'Gliwice' && toCity === 'Londyn'){
		price.textContent = numAdults * 175 + numUnderage * 125 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bez bagażu' && fromCity === 'Gliwice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 400 + numUnderage * 200 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bagaż podręczny' && fromCity === 'Gliwice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 150 + numUnderage * 125 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bagaż podręczny' && fromCity === 'Gliwice' && toCity === 'Londyn'){
		price.textContent = numAdults * 225 + numUnderage * 185 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bagaż podręczny' && fromCity === 'Gliwice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 550 + numUnderage * 300 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Gliwice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 250 + numUnderage * 175 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Gliwice' && toCity === 'Londyn'){
		price.textContent = numAdults * 325 + numUnderage * 250 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Gliwice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 850 + numUnderage * 550 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bez bagażu' && fromCity === 'Katowice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 150 + numUnderage * 100 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bez bagażu' && fromCity === 'Katowice' && toCity === 'Londyn'){
		price.textContent = numAdults * 200 + numUnderage * 140 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bez bagażu' && fromCity === 'Katowice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 600 + numUnderage * 350 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bagaż podręczny' && fromCity === 'Katowice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 250 + numUnderage * 175 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bagaż podręczny' && fromCity === 'Katowice' && toCity === 'Londyn'){
		price.textContent = numAdults * 350 + numUnderage * 250 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Bagaż podręczny' && fromCity === 'Katowice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 750 + numUnderage * 450 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Katowice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 400 + numUnderage * 275 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Katowice' && toCity === 'Londyn'){
		price.textContent = numAdults * 500 + numUnderage * 350 + ' PLN'
	} else if(sector === 'Ekonomiczna' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Katowice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 950 + numUnderage * 650 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bez bagażu' && fromCity === 'Zabrze' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 150 + numUnderage * 100 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bez bagażu' && fromCity === 'Zabrze' && toCity === 'Londyn'){
		price.textContent = numAdults * 250 + numUnderage * 175 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bez bagażu' && fromCity === 'Zabrze' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 500 + numUnderage * 350 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bagaż podręczny' && fromCity === 'Zabrze' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 175 + numUnderage * 125 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bagaż podręczny' && fromCity === 'Zabrze' && toCity === 'Londyn'){
		price.textContent = numAdults * 275 + numUnderage * 200 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bagaż podręczny' && fromCity === 'Zabrze' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 650 + numUnderage * 450 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Zabrze' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 225 + numUnderage * 175 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Duży bagaż > 15 kg' &&fromCity === 'Zabrze' && toCity === 'Londyn'){
		price.textContent = numAdults * 325 + numUnderage * 250 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Zabrze' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 850 + numUnderage * 600 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bez bagażu' && fromCity === 'Gliwice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 175 + numUnderage * 125 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bez bagażu' && fromCity === 'Gliwice' && toCity === 'Londyn'){
		price.textContent = numAdults * 275 + numUnderage * 225 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bez bagażu' && fromCity === 'Gliwice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 600 + numUnderage * 400 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bagaż podręczny' && fromCity === 'Gliwice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 200 + numUnderage * 175 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bagaż podręczny' && fromCity === 'Gliwice' && toCity === 'Londyn'){
		price.textContent = numAdults * 325 + numUnderage * 285 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bagaż podręczny' && fromCity === 'Gliwice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 750 + numUnderage * 500 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Gliwice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 300 + numUnderage * 225 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Gliwice' && toCity === 'Londyn'){
		price.textContent = numAdults * 425 + numUnderage * 350 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Gliwice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 1050 + numUnderage * 750 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bez bagażu' && fromCity === 'Katowice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 200 + numUnderage * 150 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bez bagażu' && fromCity === 'Katowice' && toCity === 'Londyn'){
		price.textContent = numAdults * 300 + numUnderage * 240 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bez bagażu' && fromCity === 'Katowice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 800 + numUnderage * 550 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bagaż podręczny' && fromCity === 'Katowice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 300 + numUnderage * 225 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bagaż podręczny' && fromCity === 'Katowice' && toCity === 'Londyn'){
		price.textContent = numAdults * 450 + numUnderage * 350 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Bagaż podręczny' && fromCity === 'Katowice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 950 + numUnderage * 650 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Katowice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 450 + numUnderage * 325 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Katowice' && toCity === 'Londyn'){
		price.textContent = numAdults * 600 + numUnderage * 450 + ' PLN'
	} else if(sector === 'Biznesowa' && luggage === 'Duży bagaż > 15 kg' && fromCity === 'Katowice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 1150 + numUnderage * 850 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bez bagażu' || fromCity === 'Zabrze' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 250 + numUnderage * 200 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bez bagażu' || fromCity === 'Zabrze' && toCity === 'Londyn'){
		price.textContent = numAdults * 450 + numUnderage * 375 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bez bagażu' || fromCity === 'Zabrze' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 900 + numUnderage * 750 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bagaż podręczny' || fromCity === 'Zabrze' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 275 + numUnderage * 225 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bagaż podręczny' || fromCity === 'Zabrze' && toCity === 'Londyn'){
		price.textContent = numAdults * 475 + numUnderage * 400 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bagaż podręczny' || fromCity === 'Zabrze' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 1050 + numUnderage * 850 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Duży bagaż > 15 kg' || fromCity === 'Zabrze' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 325 + numUnderage * 275 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Duży bagaż > 15 kg' || fromCity === 'Zabrze' && toCity === 'Londyn'){
		price.textContent = numAdults * 525 + numUnderage * 450 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Duży bagaż > 15 kg' || fromCity === 'Zabrze' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 1250 + numUnderage * 1000 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bez bagażu' || fromCity === 'Gliwice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 275 + numUnderage * 225 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bez bagażu' || fromCity === 'Gliwice' && toCity === 'Londyn'){
		price.textContent = numAdults * 475 + numUnderage * 425 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bez bagażu' || fromCity === 'Gliwice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 1000 + numUnderage * 800 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bagaż podręczny' || fromCity === 'Gliwice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 300 + numUnderage * 275 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bagaż podręczny' || fromCity === 'Gliwice' && toCity === 'Londyn'){
		price.textContent = numAdults * 525 + numUnderage * 485 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bagaż podręczny' || fromCity === 'Gliwice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 1150 + numUnderage * 900 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Duży bagaż > 15 kg' || fromCity === 'Gliwice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 400 + numUnderage * 325 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Duży bagaż > 15 kg' || fromCity === 'Gliwice' && toCity === 'Londyn'){
		price.textContent = numAdults * 625 + numUnderage * 550 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Duży bagaż > 15 kg' || fromCity === 'Gliwice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 1450 + numUnderage * 1150 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bez bagażu' || fromCity === 'Katowice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 300 + numUnderage * 250 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bez bagażu' || fromCity === 'Katowice' && toCity === 'Londyn'){
		price.textContent = numAdults * 500 + numUnderage * 440 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bez bagażu' || fromCity === 'Katowice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 1200 + numUnderage * 950 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bagaż podręczny' || fromCity === 'Katowice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 400 + numUnderage * 325 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bagaż podręczny' || fromCity === 'Katowice' && toCity === 'Londyn'){
		price.textContent = numAdults * 650 + numUnderage * 550 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Bagaż podręczny' || fromCity === 'Katowice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 1350 + numUnderage * 1050 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Duży bagaż > 15 kg' || fromCity === 'Katowice' && toCity === 'Gdańsk'){
		price.textContent = numAdults * 550 + numUnderage * 425 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Duży bagaż > 15 kg' || fromCity === 'Katowice' && toCity === 'Londyn'){
		price.textContent = numAdults * 800 + numUnderage * 650 + ' PLN'
	} else if(sector === 'VIP' && luggage === 'Duży bagaż > 15 kg' || fromCity === 'Katowice' && toCity === 'Nowy Jork'){
		price.textContent = numAdults * 1550 + numUnderage * 1250 + ' PLN'
	}
}

const seatsHandler = () => {
	if(sectorPlace.textContent === 'Ekonomiczna') {
		seatBusiness.forEach(el => el.classList.add('engaged'))
		seatVip.forEach(el => el.classList.add('engaged'))
	} else if(sectorPlace.textContent === 'Biznesowa') {
		seatEconomical.forEach(el => el.classList.add('engaged'))
		seatVip.forEach(el => el.classList.add('engaged'))
	} else if(sectorPlace.textContent === 'VIP') {
		seatBusiness.forEach(el => el.classList.add('engaged'))
		seatEconomical.forEach(el => el.classList.add('engaged'))
	}
}

const exchangeHandler = () => {

	let finalPrice = ''

	if(price.innerHTML.length === 7){
		finalPrice = price.innerHTML.slice(0,3)
	} else if(price.innerHTML.length === 8){
		finalPrice = price.innerHTML.slice(0,4)
	} else if(price.innerHTML.length === 9){
		finalPrice = price.innerHTML.slice(0,5)
	} 
	amountOne.value = finalPrice
}

fromCity.textContent = localStorage.getItem('fromCity')
toCity.textContent = localStorage.getItem('toCity')
flyDate.textContent = localStorage.getItem('timeArrive')
numberAdults.textContent = localStorage.getItem('numAdults')
numberUnderage.textContent = localStorage.getItem('numUnderage')
sectorPlace.textContent = localStorage.getItem('sector')
luggageOption.textContent = localStorage.getItem('luggage')


const choiceSeatsHandler = () => {
	let countAdults = numberAdults.textContent * 1;
	let countUnderage = numberUnderage.textContent * 1;
	let counter = 0
	
	seatsAvailable.forEach(item => {
		item.addEventListener("click", () => {
			if(counter < countAdults + countUnderage){
				item.classList.add("available-choice");
				counter++
			}
			return
		});
	})
}


currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
swapBtn.addEventListener('click', swapCurrency)
popupFinalBtn.addEventListener("click", acceptOrder);
summaryBtn.addEventListener("click", showFinalPopup);

footerYear();
calculate();
priceHandler();
seatsHandler();
exchangeHandler();
choiceSeatsHandler()




