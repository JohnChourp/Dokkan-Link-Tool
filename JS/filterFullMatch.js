function filterFullMatch(){
	let catList = [];
	let categories = document.getElementsByClassName("categories");
	let categoriesBtn = document.getElementsByClassName("categories-btn");
	let appearedType = document.getElementsByClassName("appearedType");
	let appearedRarity = document.getElementsByClassName("appearedRarity");
	
	for(let i = 0; i < categoriesBtn.length; i ++){
		catList[i] = document.getElementsByClassName(categoriesBtn.item(i).id);
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
	
	for(let j = 0; j < categoriesOrange.length; j ++){
		categoriesOrange.item(j).addEventListener("click" , function(){
			removeAllActiveCategory(categoriesBtn , categories);
			categoriesOrange.item(j).classList.add("activeCategory");
			for(let i = 0; i < catList[j].length; i ++){
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			}
			filterInit(appearedType , appearedRarity , categories , categoriesOrange , j);
			changeDefaultCategoryActiveColors(j , "orange");
		});
	}
	
	for(let j = 0; j < categoriesGreen.length; j ++){
		categoriesGreen.item(j).addEventListener("click" , function(){
			removeAllActiveCategory(categoriesBtn , categories);
			categoriesGreen.item(j).classList.add("activeCategory");
			for(let i = 0; i < catList[j + categoriesOrange.length].length; i ++){
				catList[j + categoriesOrange.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length].item(i).classList.add("appeared");
			}
			filterInit(appearedType , appearedRarity , categories , categoriesGreen , j);
			changeDefaultCategoryActiveColors(j , "green");
		});
	}
	
	for(let j = 0; j < categoriesYellow.length; j ++){
		categoriesYellow.item(j).addEventListener("click" , function(){
			removeAllActiveCategory(categoriesBtn , categories);
			categoriesYellow.item(j).classList.add("activeCategory");
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length].item(i).classList.add("appeared");
			}
			filterInit(appearedType , appearedRarity , categories , categoriesYellow , j);
			changeDefaultCategoryActiveColors(j , "yellow");
		});
	}
	
	for(let j = 0; j < categoriesCyan.length; j ++){
		categoriesCyan.item(j).addEventListener("click" , function(){
			removeAllActiveCategory(categoriesBtn , categories);
			categoriesCyan.item(j).classList.add("activeCategory");
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length].item(i).classList.add("appeared");
			}
			filterInit(appearedType , appearedRarity , categories , categoriesCyan , j);
			changeDefaultCategoryActiveColors(j , "cyan");
		});
	}
	
	for(let j = 0; j < categoriesBlue.length; j ++){
		categoriesBlue.item(j).addEventListener("click" , function(){
			removeAllActiveCategory(categoriesBtn , categories);
			categoriesBlue.item(j).classList.add("activeCategory");
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length].item(i).classList.add("appeared");
			}
			filterInit(appearedType , appearedRarity , categories , categoriesBlue , j);
			changeDefaultCategoryActiveColors(j , "blue");
		});
	}
	
	for(let j = 0; j < categoriesPurple.length; j ++){
		categoriesPurple.item(j).addEventListener("click" , function(){
			removeAllActiveCategory(categoriesBtn , categories);
			categoriesPurple.item(j).classList.add("activeCategory");
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length].item(i).classList.add("appeared");
			}
			filterInit(appearedType , appearedRarity , categories , categoriesPurple , j);
			changeDefaultCategoryActiveColors(j , "purple");
		});
	}
	
	for(let j = 0; j < categoriesRed.length; j ++){
		categoriesRed.item(j).addEventListener("click" , function(){
			removeAllActiveCategory(categoriesBtn , categories);
			categoriesRed.item(j).classList.add("activeCategory");
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length].item(i).classList.add("appeared");
			}
			filterInit(appearedType , appearedRarity , categories , categoriesRed , j);
			changeDefaultCategoryActiveColors(j , "red");
		});
	}
	
	for(let j = 0; j < categoriesDarkGreen.length; j ++){
		categoriesDarkGreen.item(j).addEventListener("click" , function(){
			removeAllActiveCategory(categoriesBtn , categories);
			categoriesDarkGreen.item(j).classList.add("activeCategory");
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length].item(i).classList.add("appeared");
			}
			filterInit(appearedType , appearedRarity , categories , categoriesDarkGreen , j);
			changeDefaultCategoryActiveColors(j , "darkGreen");
		});
	}
	
	for(let j = 0; j < categoriesDarkBlue.length; j ++){
		categoriesDarkBlue.item(j).addEventListener("click" , function(){
			removeAllActiveCategory(categoriesBtn , categories);
			categoriesDarkBlue.item(j).classList.add("activeCategory");
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length + categoriesDarkBlue.length]; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length + categoriesDarkBlue.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length + categoriesDarkBlue.length].item(i).classList.add("appeared");
			}
			filterInit(appearedType , appearedRarity , categories , categoriesDarkBlue , j);
			changeDefaultCategoryActiveColors(j , "darkBlue");
		});
	}
}

function removeAllActiveCategory(categoriesBtn , categories){
	for(let i = 0; i < categoriesBtn.length; i ++){
		categoriesBtn.item(i).classList.remove("activeCategory");
	}
	
	for(let i = 0; i < categories.length; i ++){
		categories.item(i).style.display = "none";
		categories.item(i).classList.remove("appeared");
	}
}

function filterInit(appearedType , appearedRarity , categories , categoriesColor , j){
	if(appearedType.length < 1 && appearedRarity.length > 0){
		filterAppearRarity(categories , categoriesColor , j);
	}
	
	if(appearedType.length > 0 && appearedRarity.length < 1){
		filterAppearType(categories , categoriesColor , j);
	}
	
	if(appearedType.length > 0 && appearedRarity.length > 0){
		filterAppearTypeAndAppearRarity(categories , categoriesColor , j);
	}
}

function filterAppearRarity(categories , categoriesColor , j){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesColor.item(j).id)){
			categories.item(i).style.display = "inline-block";
		}else{
			categories.item(i).style.display = "none";
		}
	}
}

function filterAppearType(categories , categoriesColor , j){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains(categoriesColor.item(j).id)){
			categories.item(i).style.display = "inline-block";
		}else{
			categories.item(i).style.display = "none";
		}
	}
}

function filterAppearTypeAndAppearRarity(categories , categoriesColor , j){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesColor.item(j).id)){
			categories.item(i).style.display = "inline-block";
		}else{
			categories.item(i).style.display = "none";
		}
	}
}