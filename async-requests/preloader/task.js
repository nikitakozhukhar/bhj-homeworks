const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);

xhr.responseType = 'json'

xhr.onload = () => {
	const valuteObj = xhr.response.response.Valute;
	const arrOfValutes = Object.entries(valuteObj)
	const loader = document.querySelector('.loader')

	const items = document.querySelector('#items');

	// if (xhr.readyState === 4) {
		if (xhr.status === 200) {
		loader.classList.remove('loader_active');
	} else {
		'Произошла ошибка'
	}

	for (let i = 0; i < arrOfValutes.length; i++) {
		const item = document.createElement('div');
		item.className = 'item';

		const itemCode = document.createElement('div');
		itemCode.className = 'item__code';
		itemCode.innerText = arrOfValutes[i][1].CharCode;

		const itemCValue = document.createElement('div');
		itemCValue.className = 'item__value';
		itemCValue.innerText = arrOfValutes[i][1].Value;

		const itemCCurrency = document.createElement('div');
		itemCCurrency.className = 'item__currency';
		itemCCurrency.innerText = arrOfValutes[i][1].Name;

		items.append(item);
		item.appendChild(itemCode);
		item.appendChild(itemCValue);
		item.appendChild(itemCCurrency);
	}

}

xhr.send();