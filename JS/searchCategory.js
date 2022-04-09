function searchCategory(){
	let categoriesBtn = document.getElementsByClassName("categories-btn");
	let categoriesBtnName = document.getElementsByClassName("categories-btn-name");
	let categorySearchId = document.getElementById("category-search-id");
	
	for(let i = 0; i < categoriesBtn.length; i ++){
		categoriesBtn.item(i).style.display = "none";
	}
	
	for(let i = 0; i < categoriesBtnName.length; i ++){
		if(categoriesBtnName.item(i).innerHTML.toLowerCase().indexOf(categorySearchId.value.toLowerCase()) >= 0){
			categoriesBtn.item(i).style.display = "inline-block";
		}else{
			categoriesBtn.item(i).style.display = "none";
		}
	}
}