const signsArr = ['/', '*', '-', '+', '.']
const anyFunctions = ['%', 'с', 'a/c']
const numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const input = document.querySelector('#input')
const lists = document.querySelector('.lists')
let historyArr = JSON.parse(localStorage.getItem('historyArr')) || []

if (historyArr.length !== 0) {
	backUp()
}
input.addEventListener('keyup', function(event) {
	if (signsArr.includes(event.key)) {
		return alert('sing')
	} else if (anyFunctions.includes(event.key)) {
		return alert('anyFunctions')
	} else if (numbersArr.includes(event.key)) {
		return alert('numbersArr')
	}
	if (event.key === 'Enter') {
		return
	}
	if (event.key === 'Backspace') {
		return
	} else {
		input.value = input.value.slice(0, -1)
	}
})
const spy = document
	.querySelector('#main')
	.addEventListener('keydown', function(event) {
		if (event.key === 'Enter') {
			equalsFunc(input.value)
		}
	})

const buttons = document.querySelectorAll('.button').forEach(function(item) {
	item.onclick = function(el) {
		let count = input.value.length
		singFirstСondition =
			signsArr.includes(input.value[count - 1]) &
			signsArr.includes(el.target.value)
		singSecondCondition = !signsArr.includes(input.value[0]) & (count == 0)
		if (numbersArr.includes(el.target.value)) {
			return numFunc(el.target.value)
		}
		if (el.target.value == '=') {
			return equalsFunc()
		}
		if (anyFunctions.includes(el.target.value)) {
			return anyFunc(el.target.value)
		}
		if (singFirstСondition | singSecondCondition) {
			return
		}
		if (signsArr.includes(el.target.value)) {
			return signsFunc(el.target.value, count)
		}
	}
})

function signsFunc(sing, length) {
	if (input.value[length] == sing) {
		return
	}
	input.value = input.value + sing
}

function anyFunc(num) {
	if (num === 'с') {
		return (input.value = input.value.slice(0, -1))
	}
	if (num === 'a/c') {
		return (input.value = '')
	}
	if (num === '%') {
		let preResult = input.value.replace(/[A-Z]/gi, '')
		preResult = preResult.replace(/[А-Я]/gi, '')
		let result = eval(preResult)
		result = result * 0.01
		input.value = result
	}
}

function numFunc(num) {
	input.value = input.value + num
}

function equalsFunc() {
	try {
		let preResult = input.value.replace(/[A-Z]/gi, '')
		preResult = preResult.replace(/[А-Я]/gi, '')
		let result = eval(preResult)
		if (!Number.isInteger(result)) {
			result = result.toFixed(4)
			result = parseFloat(result)
		}
		createHistory(`${preResult} = ${result}`, false)
		input.value = result
	} catch (err) {
		alert(err)
		input.value = ''
	}
}

function getDate() {
	const date = new Date()
	return date.toLocaleString('ru-RU', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	})
}

function createHistory(item, isBackUp) {
	if (isBackUp) {
		let historyItem = document.createElement('li')
		historyItem.setAttribute('class', 'item')
		historyItem.innerHTML = `${item}<svg class='svg' height='24px' viewBox='0 0 448 512'><path fill='#efefef' d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'></path></svg>`
		document
			.querySelector('.lists')
			.insertAdjacentElement('afterbegin', historyItem)
	} else {
		let time = getDate()
		let text = `${item}, ${time}`
		let historyItem = document.createElement('li')
		historyItem.setAttribute('class', 'item')
		historyItem.innerHTML = `${text}<svg class='svg' height='24px' viewBox='0 0 448 512'><path fill='#efefef' d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'></path></svg>`
		document
			.querySelector('.lists')
			.insertAdjacentElement('afterbegin', historyItem)
		saveHistory(text)
	}
}

function saveHistory(text) {
	let idTime = new Date()
	let id = idTime.getTime()
	historyArr.push(id)
	localStorage.setItem('historyArr', JSON.stringify(historyArr))
	localStorage.setItem(id, text)
}

function backUp() {
	historyArr.forEach(function(elem) {
		let text = localStorage.getItem(elem)
		createHistory(text, true)
	})
}

lists.onclick = function(item) {
	if (item.target.nodeName == 'LI') {
		console.log('li')
	}
	if (item.target.nodeName == 'UL') {
		console.log('ul')
	}
	if (item.target.nodeName == 'path') {
		let htmlElem = item.target.parentNode.parentNode
		let text = htmlElem.textContent
		let result
		let index
		historyArr.forEach(function(elem) {
			if (localStorage.getItem(elem) == text) {
				result = elem
				index = historyArr.indexOf(elem)
			}
		})
		historyArr.splice(index, 1)
		localStorage.setItem('historyArr', JSON.stringify(historyArr))
		localStorage.removeItem(result)
		htmlElem.remove()
	}
}
