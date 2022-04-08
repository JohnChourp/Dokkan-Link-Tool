function searchCategory(){
	let categoriesBtn = document.getElementsByClassName("categories-btn");
	let categoriesBtnName = document.getElementsByClassName("categories-btn-name");
	let categorySearchId = document.getElementById("category-search-id");
	let catList = [];
	
	for(let i = 0; i < categoriesBtnName.length; i ++){
		catList[i] = categoriesBtnName.item(i).innerHTML.length;
	}
	
	if(!document.getElementsByClassName("CategoriesFilter").item(0).classList.contains("CategoriesFilterShow")){
		for(let i = 0; i < categoriesBtnName.length; i ++){
			if(categorySearchId.value.length === 0){
				categoriesBtn.item(i).style.display = "inline-block";
			}
			
			for(let j = 0; j < Math.max(...catList); j ++){
				if(categorySearchId.value.length === j + 1){
					if(categorySearchId.value.toLowerCase() === categoriesBtnName.item(i).innerHTML.toLowerCase().slice(0 , j + 1)){
						categoriesBtn.item(i).style.display = "inline-block";
					}else{
						categoriesBtn.item(i).style.display = "none";
					}
				}
			}
		}
	}
}