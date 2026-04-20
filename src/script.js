//idea	Asynchronný JavaScript

const button = document.createElement("button")
button.id = "btn"
button.textContent = "Klikni"
document.body.append(button)
button.style.fontSize = "2rem"

//note	CallBack hell

// 1. príklad
setTimeout(() => {
	console.log("Krok 1: pripojenie k databázi...")

	setTimeout(() => {
		console.log("Krok 2: načítanie užívateľa...")

		setTimeout(() => {
			console.log("Krok 3: overenie prístupu...")

			setTimeout(() => {
				console.log("Krok 4: načítanie dát...")
			}, 1000);
		}, 1000);
	}, 1000);
}, 1000);

// 2. príklad
getData(function(data){
	procesData(data, function(processed){
		saveData(processed, function () {
			console.log("Hotovo")
		})
	})
})

//fixme	Riešenie	-	promise, async/await