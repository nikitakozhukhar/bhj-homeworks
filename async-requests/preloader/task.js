let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);

xhr.responseType = 'json'

xhr.onload = () => {
	let valuteObj = xhr.response.response.Valute;
	let arrOfValutes = Object.entries(valuteObj)
	let loader = document.querySelector('.loader')

	let items = document.querySelector('#items');

	if (xhr.readyState === 4) {
		loader.classList.remove('loader_active');
	}

	for (let i = 0; i < arrOfValutes.length; i++) {
		let item = document.createElement('div');
		item.className = 'item';

		let itemCode = document.createElement('div');
		itemCode.className = 'item__code';
		itemCode.innerText = arrOfValutes[i][1].CharCode;

		let itemCValue = document.createElement('div');
		itemCValue.className = 'item__value';
		itemCValue.innerText = arrOfValutes[i][1].Value;

		let itemCCurrency = document.createElement('div');
		itemCCurrency.className = 'item__currency';
		itemCCurrency.innerText = arrOfValutes[i][1].Name;

		items.append(item);
		item.appendChild(itemCode);
		item.appendChild(itemCValue);
		item.appendChild(itemCCurrency);
	}

}

xhr.send();