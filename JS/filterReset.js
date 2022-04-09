function ResetSelectionFilters(){
	//categories
	let categories = document.getElementsByClassName("categories");
	let categoriesBtn = document.getElementsByClassName("categories-btn");
	
	for(let i = 0; i < categories.length; i ++){
		categories.item(i).classList.remove("appeared");
		categories.item(i).classList.remove("appearedType");
		categories.item(i).classList.remove("appearedSuperType");
		categories.item(i).classList.remove("appearedExtremeType");
	}
	
	for(let i = 0; i < categoriesBtn.length; i ++){
		categoriesBtn.item(i).classList.remove("activeCategory");
	}
	
	for(let i = 0; i < categories.length; i ++){
		categories.item(i).style.display = "none";
	}
	
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	
	for(let i = 0; i < categoriesOrange.length; i ++){
		categoriesOrange.item(i).style.backgroundColor = "#83451F";
	}
	for(let i = 0; i < categoriesGreen.length; i ++){
		categoriesGreen.item(i).style.backgroundColor = "#56941D";
	}
	for(let i = 0; i < categoriesYellow.length; i ++){
		categoriesYellow.item(i).style.backgroundColor = "#A28E23";
	}
	for(let i = 0; i < categoriesCyan.length; i ++){
		categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
	}
	for(let i = 0; i < categoriesBlue.length; i ++){
		categoriesBlue.item(i).style.backgroundColor = "#1D4477";
	}
	for(let i = 0; i < categoriesPurple.length; i ++){
		categoriesPurple.item(i).style.backgroundColor = "#482077";
	}
	for(let i = 0; i < categoriesRed.length; i ++){
		categoriesRed.item(i).style.backgroundColor = "#881539";
	}
	for(let i = 0; i < categoriesDarkGreen.length; i ++){
		categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
	}
	for(let i = 0; i < categoriesDarkBlue.length; i ++){
		categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
	}
	//categories
	
	//type
	let agl_filter = document.getElementById("agl");
	let int_filter = document.getElementById("int");
	let phy_filter = document.getElementById("phy");
	let str_filter = document.getElementById("str");
	let teq_filter = document.getElementById("teq");
	let typeBtn = document.getElementsByClassName("type-btn");
	
	for(let i = 0; i < typeBtn.length; i ++){
		typeBtn.item(i).classList.remove("checkedTypeBtn");
	}
	
	agl_filter.style.backgroundColor = "#064794";
	int_filter.style.backgroundColor = "#6E3E80";
	phy_filter.style.backgroundColor = "#673A03";
	str_filter.style.backgroundColor = "#7C1A1E";
	teq_filter.style.backgroundColor = "#015907";
	//type
	
	//class
	let super_filter = document.getElementById("super_type");
	let extreme_filter = document.getElementById("extreme_type");
	let classBtn = document.getElementsByClassName("class-btn");
	
	for(let i = 0; i < classBtn.length; i ++){
		classBtn.item(i).classList.remove("checkedClassBtn");
	}
	
	super_filter.style.backgroundColor = "#494949";
	extreme_filter.style.backgroundColor = "#494949";
	//class
	
	//rarity
	let rarityBtn = document.getElementsByClassName("rarity-btn");
	
	for(let i = 0; i < rarityBtn.length; i ++){
		rarityBtn.item(i).style.backgroundColor = "#494949";
	}
	
	for(let i = 0; i < rarityBtn.length; i ++){
		rarityBtn.item(i).classList.remove("checkedRarityBtn");
	}
	//rarity
}

function ShowAllCharacters(){
	let categories = document.getElementsByClassName("categories");
	
	for(let i = 0; i < categories.length; i ++){
		if(i < (categories.length / 6)){
			categories.item(i).style.display = "inline-block";
		}
		
		if(i < (categories.length / 5.5)){
			sleep(100).then(() => {
				categories.item(i).style.display = "inline-block";
			})
		}
		
		if(i < (categories.length / 5)){
			sleep(200).then(() => {
				categories.item(i).style.display = "inline-block";
			})
		}
		
		if(i < (categories.length / 4.5)){
			sleep(300).then(() => {
				categories.item(i).style.display = "inline-block";
			})
		}
		
		if(i < (categories.length / 4)){
			sleep(400).then(() => {
				categories.item(i).style.display = "inline-block";
			})
		}
		
		if(i < (categories.length / 3.5)){
			sleep(500).then(() => {
				categories.item(i).style.display = "inline-block";
			})
		}
		
		if(i < (categories.length / 3)){
			sleep(600).then(() => {
				categories.item(i).style.display = "inline-block";
			})
		}
		
		if(i < (categories.length / 2.5)){
			sleep(700).then(() => {
				categories.item(i).style.display = "inline-block";
			})
		}
		
		if(i < (categories.length / 2)){
			sleep(800).then(() => {
				categories.item(i).style.display = "inline-block";
			})
		}
		
		if(i < (categories.length / 1.5)){
			sleep(900).then(() => {
				categories.item(i).style.display = "inline-block";
			})
		}
		
		if(i < (categories.length)){
			sleep(1000).then(() => {
				categories.item(i).style.display = "inline-block";
			})
		}
	}
	document.getElementsByClassName("CharacterSearch").item(0).classList.remove("CharacterSearchShow");
}
