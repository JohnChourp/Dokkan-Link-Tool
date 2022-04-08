function sleep(duration){
	return new Promise(resolve => {
		setTimeout(resolve , duration)
	})
}

function filterCategory(){
	let catList = [];
	
	let categories = document.getElementsByClassName("categories");
	let categoriesBtn = document.getElementsByClassName("categories-btn");
	let appearedType = document.getElementsByClassName("appearedType");
	let appearedRarity = document.getElementsByClassName("appearedRarity");
	let appearedClass = document.getElementsByClassName("appearedClass");
	
	for(let i = 0; i < categoriesBtn.length; i ++){
		catList[i] = document.getElementsByClassName(categoriesBtn.item(i).id);
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
	
	for(let j = 0; j < categoriesOrange.length; j ++){
		categoriesOrange.item(j).addEventListener('click' , function(){
			removeActiveCategory(categories , categoriesBtn , catList , categoriesOrange , j);
			categoriesOrange.item(j).classList.add("activeCategory");
			filterInit(catList , appearedType , appearedRarity , appearedClass , categories , categoriesOrange , j , j);
		});
	}
	
	for(let j = 0; j < categoriesGreen.length; j ++){
		categoriesGreen.item(j).addEventListener('click' , function(){
			removeActiveCategory(categories , categoriesBtn , catList , categoriesGreen , j);
			categoriesGreen.item(j).classList.add("activeCategory");
			filterInit(catList , appearedType , appearedRarity , appearedClass , categories , categoriesGreen , j , j + categoriesOrange.length);
		});
	}
	
	for(let j = 0; j < categoriesYellow.length; j ++){
		categoriesYellow.item(j).addEventListener('click' , function(){
			removeActiveCategory(categories , categoriesBtn , catList , categoriesYellow , j);
			categoriesYellow.item(j).classList.add("activeCategory");
			filterInit(catList , appearedType , appearedRarity , appearedClass , categories , categoriesYellow , j , j + categoriesOrange.length + categoriesGreen.length);
		});
	}
	
	for(let j = 0; j < categoriesCyan.length; j ++){
		categoriesCyan.item(j).addEventListener('click' , function(){
			removeActiveCategory(categories , categoriesBtn , catList , categoriesCyan , j);
			categoriesCyan.item(j).classList.add("activeCategory");
			filterInit(catList , appearedType , appearedRarity , appearedClass , categories , categoriesCyan , j , j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length);
		});
	}
	
	for(let j = 0; j < categoriesBlue.length; j ++){
		categoriesBlue.item(j).addEventListener('click' , function(){
			removeActiveCategory(categories , categoriesBtn , catList , categoriesBlue , j);
			categoriesBlue.item(j).classList.add("activeCategory");
			filterInit(catList , appearedType , appearedRarity , appearedClass , categories , categoriesBlue , j , j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length);
		});
	}
	
	for(let j = 0; j < categoriesPurple.length; j ++){
		categoriesPurple.item(j).addEventListener('click' , function(){
			removeActiveCategory(categories , categoriesBtn , catList , categoriesPurple , j);
			categoriesPurple.item(j).classList.add("activeCategory");
			filterInit(catList , appearedType , appearedRarity , appearedClass , categories , categoriesPurple , j , j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length);
		});
	}
	
	for(let j = 0; j < categoriesRed.length; j ++){
		categoriesRed.item(j).addEventListener('click' , function(){
			removeActiveCategory(categories , categoriesBtn , catList , categoriesRed , j);
			categoriesRed.item(j).classList.add("activeCategory");
			filterInit(catList , appearedType , appearedRarity , appearedClass , categories , categoriesRed , j , j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length);
		});
	}
	
	for(let j = 0; j < categoriesDarkGreen.length; j ++){
		categoriesDarkGreen.item(j).addEventListener('click' , function(){
			removeActiveCategory(categories , categoriesBtn , catList , categoriesDarkGreen , j);
			categoriesDarkGreen.item(j).classList.add("activeCategory");
			filterInit(catList , appearedType , appearedRarity , appearedClass , categories , categoriesDarkGreen , j , j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length);
		});
	}
	
	for(let j = 0; j < categoriesDarkBlue.length; j ++){
		categoriesDarkBlue.item(j).addEventListener('click' , function(){
			removeActiveCategory(categories , categoriesBtn , catList , categoriesDarkBlue , j);
			categoriesDarkBlue.item(j).classList.add("activeCategory");
			filterInit(catList , appearedType , appearedRarity , appearedClass , categories , categoriesDarkBlue , j , j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length + categoriesDarkGreen.length);
		});
	}
}

function removeActiveCategory(categories , categoriesBtn , catList , categoriesColor , j){
	if(categoriesColor.item(j).classList.contains("activeCategory")){
		categoriesColor.item(j).classList.remove("activeCategory");
		
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appeared");
		}
		
		for(let j = 0; j < categoriesBtn.length; j ++){
			if(categoriesBtn.item(j).classList.contains("activeCategory")){
				showActiveCategoryWithDelay(catList , j);
			}
		}
	}
}

function filterInit(catList , appearedType , appearedRarity , appearedClass , categories , categoriesColor , j , jLength){
	if(appearedType.length < 1 && appearedClass.length < 1 && appearedRarity.length < 1){
		showActiveCategoryWithDelay(catList , jLength);
	}
	
	if(appearedType.length > 0 && appearedClass.length < 1 && appearedRarity.length < 1){
		filterAppearType(categories , categoriesColor , j);
	}
	
	if(appearedType.length < 1 && appearedClass.length < 1 && appearedRarity.length > 0){
		filterAppearRarity(categories , categoriesColor , j);
	}
	
	if(appearedType.length < 1 && appearedClass.length > 0 && appearedRarity.length < 1){
		filterAppearClass(categories , categoriesColor , j);
	}
	
	
	
	if(appearedType.length > 0 && appearedClass.length < 1 && appearedRarity.length > 0){
		filterAppearTypeAndAppearRarity(categories , categoriesColor , j);
	}
	
	if(appearedType.length > 0 && appearedClass.length > 0 && appearedRarity.length < 1){
		filterAppearTypeAndAppearClass(categories , categoriesColor , j);
	}
	
	if(appearedType.length < 1 && appearedClass.length > 0 && appearedRarity.length > 0){
		filterAppearRarityAndAppearClass(categories , categoriesColor , j);
	}
	
	if(appearedType.length > 0 && appearedClass.length > 0 && appearedRarity.length > 0){
		filterAppearTypeAndAppearRarityAndAppearClass(categories , categoriesColor , j);
	}
}

function filterAppearRarity(categories , categoriesColor , j){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesColor.item(j).id)){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appeared");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appeared");
		}
	}
}

function filterAppearClass(categories , categoriesColor , j){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appearedClass") && categories.item(i).classList.contains(categoriesColor.item(j).id)){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appeared");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appeared");
		}
	}
}

function filterAppearType(categories , categoriesColor , j){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains(categoriesColor.item(j).id)){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appeared");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appeared");
		}
	}
}

function filterAppearTypeAndAppearRarity(categories , categoriesColor , j){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesColor.item(j).id)){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appeared");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appeared");
		}
	}
}

function filterAppearRarityAndAppearClass(categories , categoriesColor , j){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains("appearedClass") && categories.item(i).classList.contains(categoriesColor.item(j).id)){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appeared");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appeared");
		}
	}
}

function filterAppearTypeAndAppearClass(categories , categoriesColor , j){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedClass") && categories.item(i).classList.contains(categoriesColor.item(j).id)){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appeared");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appeared");
		}
	}
}

function filterAppearTypeAndAppearRarityAndAppearClass(categories , categoriesColor , j){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains("appearedClass") && categories.item(i).classList.contains(categoriesColor.item(j).id)){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appeared");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appeared");
		}
	}
}

function showActiveCategoryWithDelay(catList , j){
	for(let i = 0; i < catList[j].length; i ++){
		if(i < (catList[j].length / 6)){
			catList[j].item(i).style.display = "inline-block";
			catList[j].item(i).classList.add("appeared");
		}
		
		if(i < (catList[j].length / 5.5)){
			sleep(25).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 5)){
			sleep(50).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 4.5)){
			sleep(75).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 4)){
			sleep(100).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 3.5)){
			sleep(125).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 3)){
			sleep(150).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 2.5)){
			sleep(175).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 2)){
			sleep(200).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 1.5)){
			sleep(225).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length)){
			sleep(250).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
	}
}

function showFilterCategory(){
	document.getElementsByClassName("CategoriesFilter").item(0).classList.remove("CategoriesFilterShow");
	document.getElementsByClassName("CategoriesSearch").item(0).classList.remove("CategoriesSearchShow");
}

function showAllFilter(){
	document.getElementsByClassName("CategoriesFilter").item(0).classList.remove("CategoriesFilterShow");
	document.getElementsByClassName("CategoriesSearch").item(0).classList.remove("CategoriesSearchShow");
	document.getElementsByClassName("classFilter").item(0).classList.remove("classFilterShow");
	document.getElementsByClassName("rarityFilter").item(0).classList.remove("rarityFilterShow");
	document.getElementsByClassName("typeFilter").item(0).classList.remove("typeFilterShow");
}

function hoverCategory(){
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	for(let i = 0; i < categoriesOrange.length; i ++){
		categoriesOrange.item(i).onmouseover = function(){
			categoriesOrange.item(i).style.backgroundColor = "#DA7632";
			if(categoriesOrange.item(i).classList.contains("activeCategory")){
				categoriesOrange.item(i).style.backgroundColor = "#FF6200";
			}
		}
		
		categoriesOrange.item(i).onmouseout = function(){
			categoriesOrange.item(i).style.backgroundColor = "#83451F";
			if(categoriesOrange.item(i).classList.contains("activeCategory")){
				categoriesOrange.item(i).style.backgroundColor = "#FF6200";
			}
		}
		
		categoriesOrange.item(i).onclick = function(){
			categoriesOrange.item(i).style.backgroundColor = "#FF6200";
		}
	}
	
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	for(let i = 0; i < categoriesGreen.length; i ++){
		categoriesGreen.item(i).onmouseover = function(){
			categoriesGreen.item(i).style.backgroundColor = "#83E52A";
			if(categoriesGreen.item(i).classList.contains("activeCategory")){
				categoriesGreen.item(i).style.backgroundColor = "#79FF00";
			}
		}
		
		categoriesGreen.item(i).onmouseout = function(){
			categoriesGreen.item(i).style.backgroundColor = "#56941D";
			if(categoriesGreen.item(i).classList.contains("activeCategory")){
				categoriesGreen.item(i).style.backgroundColor = "#79FF00";
			}
		}
		
		categoriesGreen.item(i).onclick = function(){
			categoriesGreen.item(i).style.backgroundColor = "#79FF00";
		}
	}
	
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	for(let i = 0; i < categoriesYellow.length; i ++){
		categoriesYellow.item(i).onmouseover = function(){
			categoriesYellow.item(i).style.backgroundColor = "#FD3";
			if(categoriesYellow.item(i).classList.contains("activeCategory")){
				categoriesYellow.item(i).style.backgroundColor = "#FFD800";
			}
		}
		
		categoriesYellow.item(i).onmouseout = function(){
			categoriesYellow.item(i).style.backgroundColor = "#A28E23";
			if(categoriesYellow.item(i).classList.contains("activeCategory")){
				categoriesYellow.item(i).style.backgroundColor = "#FFD800";
			}
		}
		
		categoriesYellow.item(i).onclick = function(){
			categoriesYellow.item(i).style.backgroundColor = "#FFD800";
		}
	}
	
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	for(let i = 0; i < categoriesCyan.length; i ++){
		categoriesCyan.item(i).onmouseover = function(){
			categoriesCyan.item(i).style.backgroundColor = "#36D2D2";
			if(categoriesCyan.item(i).classList.contains("activeCategory")){
				categoriesCyan.item(i).style.backgroundColor = "#00E5E5";
			}
		}
		
		categoriesCyan.item(i).onmouseout = function(){
			categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
			if(categoriesCyan.item(i).classList.contains("activeCategory")){
				categoriesCyan.item(i).style.backgroundColor = "#00E5E5";
			}
		}
		
		categoriesCyan.item(i).onclick = function(){
			categoriesCyan.item(i).style.backgroundColor = "#00E5E5";
		}
	}
	
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	for(let i = 0; i < categoriesBlue.length; i ++){
		categoriesBlue.item(i).onmouseover = function(){
			categoriesBlue.item(i).style.backgroundColor = "#5395FD";
			if(categoriesBlue.item(i).classList.contains("activeCategory")){
				categoriesBlue.item(i).style.backgroundColor = "#0067FF";
			}
		}
		
		categoriesBlue.item(i).onmouseout = function(){
			categoriesBlue.item(i).style.backgroundColor = "#1D4477";
			if(categoriesBlue.item(i).classList.contains("activeCategory")){
				categoriesBlue.item(i).style.backgroundColor = "#0067FF";
			}
		}
		
		categoriesBlue.item(i).onclick = function(){
			categoriesBlue.item(i).style.backgroundColor = "#0067FF";
		}
	}
	
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	for(let i = 0; i < categoriesPurple.length; i ++){
		categoriesPurple.item(i).onmouseover = function(){
			categoriesPurple.item(i).style.backgroundColor = "#BD88FF";
			if(categoriesPurple.item(i).classList.contains("activeCategory")){
				categoriesPurple.item(i).style.backgroundColor = "#6100FF";
			}
		}
		
		categoriesPurple.item(i).onmouseout = function(){
			categoriesPurple.item(i).style.backgroundColor = "#482077";
			if(categoriesPurple.item(i).classList.contains("activeCategory")){
				categoriesPurple.item(i).style.backgroundColor = "#6100FF";
			}
		}
		
		categoriesPurple.item(i).onclick = function(){
			categoriesPurple.item(i).style.backgroundColor = "#6100FF";
		}
	}
	
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	for(let i = 0; i < categoriesRed.length; i ++){
		categoriesRed.item(i).onmouseover = function(){
			categoriesRed.item(i).style.backgroundColor = "#FD5E94";
			if(categoriesRed.item(i).classList.contains("activeCategory")){
				categoriesRed.item(i).style.backgroundColor = "#FF0054";
			}
		}
		
		categoriesRed.item(i).onmouseout = function(){
			categoriesRed.item(i).style.backgroundColor = "#881539";
			if(categoriesRed.item(i).classList.contains("activeCategory")){
				categoriesRed.item(i).style.backgroundColor = "#FF0054";
			}
		}
		
		categoriesRed.item(i).onclick = function(){
			categoriesRed.item(i).style.backgroundColor = "#FF0054";
		}
	}
	
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	for(let i = 0; i < categoriesDarkGreen.length; i ++){
		categoriesDarkGreen.item(i).onmouseover = function(){
			categoriesDarkGreen.item(i).style.backgroundColor = "#31B787";
			if(categoriesDarkGreen.item(i).classList.contains("activeCategory")){
				categoriesDarkGreen.item(i).style.backgroundColor = "#05BD76";
			}
		}
		
		categoriesDarkGreen.item(i).onmouseout = function(){
			categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
			if(categoriesDarkGreen.item(i).classList.contains("activeCategory")){
				categoriesDarkGreen.item(i).style.backgroundColor = "#05BD76";
			}
		}
		
		categoriesDarkGreen.item(i).onclick = function(){
			categoriesDarkGreen.item(i).style.backgroundColor = "#05BD76";
		}
	}
	
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	for(let i = 0; i < categoriesDarkBlue.length; i ++){
		categoriesDarkBlue.item(i).onmouseover = function(){
			categoriesDarkBlue.item(i).style.backgroundColor = "#4266E0";
			if(categoriesDarkBlue.item(i).classList.contains("activeCategory")){
				categoriesDarkBlue.item(i).style.backgroundColor = "#002DC0";
			}
		}
		
		categoriesDarkBlue.item(i).onmouseout = function(){
			categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
			if(categoriesDarkBlue.item(i).classList.contains("activeCategory")){
				categoriesDarkBlue.item(i).style.backgroundColor = "#002DC0";
			}
		}
		
		categoriesDarkBlue.item(i).onclick = function(){
			categoriesDarkBlue.item(i).style.backgroundColor = "#002DC0";
		}
	}
}