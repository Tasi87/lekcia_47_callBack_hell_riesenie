//idea	CallBack hell
//note	Promise, async/await
	getData(function(data){
		procesData(data, function(processed){
			saveData(processed, function () {
				console.log("Hotovo!")
			})
		})
	})

//fixme Riešenie
	//note Promise
	getData()
		.then(procesData)
		.then(saveData)
		.then( () => console.log("Hotovo!") )
		.catch( err => console.error("Chyba: ", err) )		//! zachytávanie chýb

