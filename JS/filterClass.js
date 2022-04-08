function initClassFilter(){
	let httpLink;
	let hostName = window.location.host;
	
	if(hostName === "johnchourp.github.io"){
		httpLink = "https://";
	}else{
		httpLink = "http://";
	}
	
	let classBtn = document.getElementsByClassName("class-btn");
	let appeared = document.getElementsByClassName("appeared");
	let appearedType = document.getElementsByClassName("appearedType");
	let appearedRarity = document.getElementsByClassName("appearedRarity");
	let categories = document.getElementsByClassName("categories");
	let cardType = document.getElementsByClassName("card-type");
	
	let classType = "";
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	super_type_filter.addEventListener('click' , function(){
		classType = "super";
		removeAllCheckedClassBtn(classBtn);
		super_type_filter.classList.add("checkedClassBtn");
		filterClassInit(httpLink , hostName , categories , cardType , appeared , appearedType , appearedRarity , classType);
		defaultFilterClassColors(0);
	});
	extreme_type_filter.addEventListener('click' , function(){
		classType = "extreme";
		removeAllCheckedClassBtn(classBtn);
		extreme_type_filter.classList.add("checkedClassBtn");
		filterClassInit(httpLink , hostName , categories , cardType , appeared , appearedType , appearedRarity , classType);
		defaultFilterClassColors(1);
	});
	
	hoverFilterClass();
}

function removeAllCheckedClassBtn(typeBtn){
	for(let i = 0; i < typeBtn.length; i ++){
		typeBtn.item(i).classList.remove("checkedClassBtn");
	}
}

function filterClassInit(httpLink , hostName , categories , cardType , appeared , appearedType , appearedRarity , classType){
	if(appeared.length < 1 && appearedType.length < 1 && appearedRarity.length < 1){
		filterClassDefault(httpLink , hostName , categories , cardType , classType);
	}
	
	if(appeared.length > 0 && appearedType.length < 1 && appearedRarity.length < 1){
		filterClassAppear(httpLink , hostName , categories , cardType , classType);
	}
	
	if(appeared.length < 1 && appearedType.length > 0 && appearedRarity.length < 1){
		filterClassAppearType(httpLink , hostName , categories , cardType , classType);
	}
	
	if(appeared.length < 1 && appearedType.length < 1 && appearedRarity.length > 0){
		filterClassAppearRarity(httpLink , hostName , categories , cardType , classType);
	}
	
	if(appeared.length > 0 && appearedType.length > 0 && appearedRarity.length < 1){
		filterClassAppearAndAppearType(httpLink , hostName , categories , cardType , classType);
	}
	
	if(appeared.length > 0 && appearedType.length < 1 && appearedRarity.length > 0){
		filterClassAppearAndAppearRarity(httpLink , hostName , categories , cardType , classType);
	}
	
	if(appeared.length < 1 && appearedType.length > 0 && appearedRarity.length > 0){
		filterClassAppearTypeAndAppearRarity(httpLink , hostName , categories , cardType , classType);
	}
	
	if(appeared.length > 0 && appearedType.length > 0 && appearedRarity.length > 0){
		filterClassAppearAndAppearTypeAndAppearRarity(httpLink , hostName , categories , cardType , classType);
	}
}

function filterClassDefault(httpLink , hostName , categories , cardType , classType){
	for(let i = 0; i < cardType.length; i ++){
		if(cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_teq.png"){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedClass");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedClass");
		}
	}
}

function filterClassAppear(httpLink , hostName , categories , cardType , classType){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appeared") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_teq.png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedClass");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedClass");
		}
	}
}

function filterClassAppearType(httpLink , hostName , categories , cardType , classType){
	for(let i = 0; i < cardType.length; i ++){
		if(categories.item(i).classList.contains("appearedType") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_teq.png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedClass");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedClass");
		}
	}
}

function filterClassAppearRarity(httpLink , hostName , categories , cardType , classType){
	for(let i = 0; i < cardType.length; i ++){
		if(categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_teq.png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedClass");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedClass");
		}
	}
}

function filterClassAppearAndAppearType(httpLink , hostName , categories , cardType , classType){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_teq.png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedClass");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedClass");
		}
	}
}

function filterClassAppearAndAppearRarity(httpLink , hostName , categories , cardType , classType){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_teq.png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedClass");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedClass");
		}
	}
}

function filterClassAppearTypeAndAppearRarity(httpLink , hostName , categories , cardType , classType){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_teq.png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedClass");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedClass");
		}
	}
}

function filterClassAppearAndAppearTypeAndAppearRarity(httpLink , hostName , categories , cardType , classType){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + classType + "_teq.png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedClass");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedClass");
		}
	}
}

function showFilterClass(){
	document.getElementsByClassName("classFilter").item(0).classList.remove("classFilterShow");
}

function hoverFilterClass(){
	let super_filter = document.getElementById("super_type");
	super_filter.onmouseover = function(){
		super_filter.style.backgroundColor = "#919090";
		if(super_filter.classList.contains("checkedClassBtn")){
			super_filter.style.backgroundColor = "#EEC310";
		}
	}
	super_filter.onmouseout = function(){
		super_filter.style.backgroundColor = "#494949";
		if(super_filter.classList.contains("checkedClassBtn")){
			super_filter.style.backgroundColor = "#EEC310";
		}
	}
	let extreme_filter = document.getElementById("extreme_type");
	extreme_filter.onmouseover = function(){
		extreme_filter.style.backgroundColor = "#919090";
		if(extreme_filter.classList.contains("checkedClassBtn")){
			extreme_filter.style.backgroundColor = "#EEC310";
		}
	}
	extreme_filter.onmouseout = function(){
		extreme_filter.style.backgroundColor = "#494949";
		if(extreme_filter.classList.contains("checkedClassBtn")){
			extreme_filter.style.backgroundColor = "#EEC310";
		}
	}
}

function defaultFilterClassColors(n){
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	super_type_filter.style.backgroundColor = "#494949";
	extreme_type_filter.style.backgroundColor = "#494949";
	
	let classBtn = document.getElementsByClassName("class-btn");
	classBtn.item(n).style.backgroundColor = "#EEC310";
}