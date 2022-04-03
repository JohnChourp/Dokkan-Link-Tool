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
			for(let i = 0; i < categoriesBtn.length; i ++){
				categoriesBtn.item(i).classList.remove("activeCategory");
			}
			categoriesOrange.item(j).classList.add("activeCategory");
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j].length; i ++){
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			}
			
			if(appearedType.length < 1 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesOrange.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length < 1){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains(categoriesOrange.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesOrange.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			changeDefaultCategoryActiveColors(j , "orange");
		});
	}
	
	for(let j = 0; j < categoriesGreen.length; j ++){
		categoriesGreen.item(j).addEventListener("click" , function(){
			for(let i = 0; i < categoriesBtn.length; i ++){
				categoriesBtn.item(i).classList.remove("activeCategory");
			}
			categoriesGreen.item(j).classList.add("activeCategory");
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length].length; i ++){
				catList[j + categoriesOrange.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length].item(i).classList.add("appeared");
			}
			
			if(appearedType.length < 1 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesGreen.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length < 1){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains(categoriesGreen.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesGreen.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			changeDefaultCategoryActiveColors(j , "green");
		});
	}
	
	for(let j = 0; j < categoriesYellow.length; j ++){
		categoriesYellow.item(j).addEventListener("click" , function(){
			//add and remove activeCategory
			for(let i = 0; i < categoriesBtn.length; i ++){
				categoriesBtn.item(i).classList.remove("activeCategory");
			}
			categoriesYellow.item(j).classList.add("activeCategory");
			//add and remove activeCategory
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length].item(i).classList.add("appeared");
			}
			
			if(appearedType.length < 1 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesYellow.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length < 1){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains(categoriesYellow.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesYellow.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			changeDefaultCategoryActiveColors(j , "yellow");
		});
	}
	
	for(let j = 0; j < categoriesCyan.length; j ++){
		categoriesCyan.item(j).addEventListener("click" , function(){
			//add and remove activeCategory
			for(let i = 0; i < categoriesBtn.length; i ++){
				categoriesBtn.item(i).classList.remove("activeCategory");
			}
			categoriesCyan.item(j).classList.add("activeCategory");
			//add and remove activeCategory
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length].item(i).classList.add("appeared");
			}
			
			if(appearedType.length < 1 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesCyan.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length < 1){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains(categoriesCyan.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesCyan.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			changeDefaultCategoryActiveColors(j , "cyan");
		});
	}
	
	for(let j = 0; j < categoriesBlue.length; j ++){
		categoriesBlue.item(j).addEventListener("click" , function(){
			//add and remove activeCategory
			for(let i = 0; i < categoriesBtn.length; i ++){
				categoriesBtn.item(i).classList.remove("activeCategory");
			}
			categoriesBlue.item(j).classList.add("activeCategory");
			//add and remove activeCategory
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length].item(i).classList.add("appeared");
			}
			
			if(appearedType.length < 1 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesBlue.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length < 1){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains(categoriesBlue.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesBlue.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			changeDefaultCategoryActiveColors(j , "blue");
		});
	}
	
	for(let j = 0; j < categoriesPurple.length; j ++){
		categoriesPurple.item(j).addEventListener("click" , function(){
			//add and remove activeCategory
			for(let i = 0; i < categoriesBtn.length; i ++){
				categoriesBtn.item(i).classList.remove("activeCategory");
			}
			categoriesPurple.item(j).classList.add("activeCategory");
			//add and remove activeCategory
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length].item(i).classList.add("appeared");
			}
			
			if(appearedType.length < 1 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesPurple.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length < 1){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains(categoriesPurple.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesPurple.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			changeDefaultCategoryActiveColors(j , "purple");
		});
	}
	
	for(let j = 0; j < categoriesRed.length; j ++){
		categoriesRed.item(j).addEventListener("click" , function(){
			//add and remove activeCategory
			for(let i = 0; i < categoriesBtn.length; i ++){
				categoriesBtn.item(i).classList.remove("activeCategory");
			}
			categoriesRed.item(j).classList.add("activeCategory");
			//add and remove activeCategory
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length].item(i).classList.add("appeared");
			}
			
			if(appearedType.length < 1 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesRed.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length < 1){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains(categoriesRed.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesRed.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			changeDefaultCategoryActiveColors(j , "red");
		});
	}
	
	for(let j = 0; j < categoriesDarkGreen.length; j ++){
		categoriesDarkGreen.item(j).addEventListener("click" , function(){
			//add and remove activeCategory
			for(let i = 0; i < categoriesBtn.length; i ++){
				categoriesBtn.item(i).classList.remove("activeCategory");
			}
			categoriesDarkGreen.item(j).classList.add("activeCategory");
			//add and remove activeCategory
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length].item(i).classList.add("appeared");
			}
			
			if(appearedType.length < 1 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesDarkGreen.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length < 1){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains(categoriesDarkGreen.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesDarkGreen.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			changeDefaultCategoryActiveColors(j , "darkGreen");
		});
	}
	
	for(let j = 0; j < categoriesDarkBlue.length; j ++){
		categoriesDarkBlue.item(j).addEventListener("click" , function(){
			//add and remove activeCategory
			for(let i = 0; i < categoriesBtn.length; i ++){
				categoriesBtn.item(i).classList.remove("activeCategory");
			}
			categoriesDarkBlue.item(j).classList.add("activeCategory");
			//add and remove activeCategory
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length + categoriesDarkBlue.length]; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length + categoriesDarkBlue.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length + categoriesDarkBlue.length].item(i).classList.add("appeared");
			}
			
			if(appearedType.length < 1 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesDarkBlue.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length < 1){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains(categoriesDarkBlue.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			
			if(appearedType.length > 0 && appearedRarity.length > 0){
				for(let i = 0; i < categories.length; i ++){
					if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesDarkBlue.item(j).id)){
						categories.item(i).style.display = "inline-block";
					}else{
						categories.item(i).style.display = "none";
					}
				}
			}
			changeDefaultCategoryActiveColors(j , "darkBlue");
		});
	}
}