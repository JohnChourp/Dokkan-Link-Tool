function initTypeFilter(){
	let httpLink;
	let hostName = window.location.host;
	
	if(hostName === "johnchourp.github.io"){
		httpLink = "https://";
	}else{
		httpLink = "http://";
	}
	
	let typeBtn = document.getElementsByClassName("type-btn");
	let appeared = document.getElementsByClassName("appeared");
	let appearedType = document.getElementsByClassName("appearedType");
	let appearedClass = document.getElementsByClassName("appearedClass");
	let appearedRarity = document.getElementsByClassName("appearedRarity");
	let categories = document.getElementsByClassName("categories");
	let cardType = document.getElementsByClassName("card-type");
	
	let type = "";
	let agl_filter = document.getElementById("agl");
	let int_filter = document.getElementById("int");
	let phy_filter = document.getElementById("phy");
	let str_filter = document.getElementById("str");
	let teq_filter = document.getElementById("teq");
	
	agl_filter.addEventListener('click' , function(){
		type = "agl";
		removeAllCheckedTypeBtn(httpLink , hostName , type , categories , cardType , typeBtn);
		agl_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedType , appearedClass , appearedRarity , type);
		defaultFilterTypeColors(0);
	});
	
	int_filter.addEventListener('click' , function(){
		type = "int";
		removeAllCheckedTypeBtn(httpLink , hostName , type , categories , cardType , typeBtn);
		int_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedType , appearedClass , appearedRarity , type);
		defaultFilterTypeColors(1);
	});
	
	phy_filter.addEventListener('click' , function(){
		type = "phy";
		removeAllCheckedTypeBtn(httpLink , hostName , type , categories , cardType , typeBtn);
		phy_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedType , appearedClass , appearedRarity , type);
		defaultFilterTypeColors(2);
	});
	
	str_filter.addEventListener('click' , function(){
		type = "str";
		removeAllCheckedTypeBtn(httpLink , hostName , type , categories , cardType , typeBtn);
		str_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedType , appearedClass , appearedRarity , type);
		defaultFilterTypeColors(3);
	});
	
	teq_filter.addEventListener('click' , function(){
		type = "teq";
		removeAllCheckedTypeBtn(httpLink , hostName , type , categories , cardType , typeBtn);
		teq_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedType , appearedClass , appearedRarity , type);
		defaultFilterTypeColors(4);
	});
	
	hoverFilterType();
}

function removeAllCheckedTypeBtn(httpLink , hostName , type , categories , cardType , typeBtn){
	for(let i = 0; i < typeBtn.length; i ++){
		typeBtn.item(i).classList.remove("checkedTypeBtn");
	}
}

function filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedType , appearedClass , appearedRarity , type){
	if(appeared.length < 1 && appearedClass.length < 1 && appearedRarity.length < 1){
		filterTypeDefault(httpLink , hostName , categories , cardType , type);
	}
	
	if(appeared.length > 0 && appearedClass.length < 1 && appearedRarity.length < 1){
		filterTypeAppearAppeared(httpLink , hostName , categories , cardType , type);
	}
	
	if(appeared.length < 1 && appearedClass.length > 0 && appearedRarity.length < 1){
		filterTypeAppearClass(httpLink , hostName , categories , cardType , type);
	}
	
	if(appeared.length < 1 && appearedClass.length < 1 && appearedRarity.length > 0){
		filterTypeAppearRarity(httpLink , hostName , categories , cardType , type);
	}
	
	
	
	if(appeared.length > 0 && appearedClass.length > 0 && appearedRarity.length < 1){
		filterTypeAppearAppearedAndAppearClass(httpLink , hostName , categories , cardType , type);
	}
	
	if(appeared.length > 0 && appearedClass.length < 1 && appearedRarity.length > 0){
		filterTypeAppearAppearedAndAppearRarity(httpLink , hostName , categories , cardType , type);
	}
	
	if(appeared.length < 1 && appearedClass.length > 0 && appearedRarity.length > 0){
		filterTypeAppearClassAndAppearRarity(httpLink , hostName , categories , cardType , type);
	}
	
	if(appeared.length > 0 && appearedClass.length > 0 && appearedRarity.length > 0){
		filterTypeAppearAndAppearClassAndAppearRarity(httpLink , hostName , categories , cardType , type);
	}
}

function filterTypeDefault(httpLink , hostName , categories , cardType , type){
	for(let i = 0; i < cardType.length; i ++){
		if(cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_" + type + ".png"){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedType");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedType");
		}
	}
}

function filterTypeAppearAppeared(httpLink , hostName , categories , cardType , type){
	for(let i = 0; i < cardType.length; i ++){
		if(categories.item(i).classList.contains("appeared") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_" + type + ".png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedType");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedType");
			
		}
	}
}

function filterTypeAppearRarity(httpLink , hostName , categories , cardType , type){
	for(let i = 0; i < cardType.length; i ++){
		if(categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_" + type + ".png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedType");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedType");
		}
	}
}

function filterTypeAppearClass(httpLink , hostName , categories , cardType , type){
	for(let i = 0; i < cardType.length; i ++){
		if(categories.item(i).classList.contains("appearedClass") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_" + type + ".png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedType");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedType");
		}
	}
}

function filterTypeAppearAppearedAndAppearClass(httpLink , hostName , categories , cardType , type){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedClass") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_" + type + ".png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedType");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedType");
		}
	}
}

function filterTypeAppearAppearedAndAppearRarity(httpLink , hostName , categories , cardType , type){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_" + type + ".png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedType");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedType");
		}
	}
}

function filterTypeAppearClassAndAppearRarity(httpLink , hostName , categories , cardType , type){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appearedClass") && categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_" + type + ".png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedType");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedType");
		}
	}
}

function filterTypeAppearAndAppearClassAndAppearRarity(httpLink , hostName , categories , cardType , type){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedClass") && categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_" + type + ".png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_" + type + ".png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedType");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedType");
		}
	}
}

function showFilterType(){
	document.getElementsByClassName("typeFilter").item(0).classList.remove("typeFilterShow");
}

function hoverFilterType(){
	let agl_filter = document.getElementById("agl");
	let int_filter = document.getElementById("int");
	let phy_filter = document.getElementById("phy");
	let str_filter = document.getElementById("str");
	let teq_filter = document.getElementById("teq");
	
	agl_filter.onmouseover = function(){
		agl_filter.style.backgroundColor = "#0A7FFF";
		if(agl_filter.classList.contains("checkedTypeBtn")){
			agl_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	agl_filter.onmouseout = function(){
		agl_filter.style.backgroundColor = "#064794";
		if(agl_filter.classList.contains("checkedTypeBtn")){
			agl_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	int_filter = document.getElementById("int");
	int_filter.onmouseover = function(){
		int_filter.style.backgroundColor = "#B367D7";
		if(int_filter.classList.contains("checkedTypeBtn")){
			int_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	int_filter.onmouseout = function(){
		int_filter.style.backgroundColor = "#6E3E80";
		if(int_filter.classList.contains("checkedTypeBtn")){
			int_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	phy_filter = document.getElementById("phy");
	phy_filter.onmouseover = function(){
		phy_filter.style.backgroundColor = "#C06D06";
		if(phy_filter.classList.contains("checkedTypeBtn")){
			phy_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	phy_filter.onmouseout = function(){
		phy_filter.style.backgroundColor = "#673A03";
		if(phy_filter.classList.contains("checkedTypeBtn")){
			phy_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	str_filter = document.getElementById("str");
	str_filter.onmouseover = function(){
		str_filter.style.backgroundColor = "#C72931";
		if(str_filter.classList.contains("checkedTypeBtn")){
			str_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	str_filter.onmouseout = function(){
		str_filter.style.backgroundColor = "#7C1A1E";
		if(str_filter.classList.contains("checkedTypeBtn")){
			str_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	teq_filter = document.getElementById("teq");
	teq_filter.onmouseover = function(){
		teq_filter.style.backgroundColor = "#00B712";
		if(teq_filter.classList.contains("checkedTypeBtn")){
			teq_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	teq_filter.onmouseout = function(){
		teq_filter.style.backgroundColor = "#015907";
		if(teq_filter.classList.contains("checkedTypeBtn")){
			teq_filter.style.backgroundColor = "#EEC310";
		}
	}
}

function defaultFilterTypeColors(n){
	let agl_filter = document.getElementById("agl");
	let int_filter = document.getElementById("int");
	let phy_filter = document.getElementById("phy");
	let str_filter = document.getElementById("str");
	let teq_filter = document.getElementById("teq");
	
	agl_filter.style.backgroundColor = "#064794";
	int_filter.style.backgroundColor = "#6E3E80";
	phy_filter.style.backgroundColor = "#673A03";
	str_filter.style.backgroundColor = "#7C1A1E";
	teq_filter.style.backgroundColor = "#015907";
	
	let typeBtn = document.getElementsByClassName("type-btn");
	typeBtn.item(n).style.backgroundColor = "#EEC310";
}

