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
	let appearedRarity = document.getElementsByClassName("appearedRarity");
	let categories = document.getElementsByClassName("categories");
	let cardType = document.getElementsByClassName("card-type");
	
	let type = "";
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	super_type_filter.addEventListener('click' , function(){
		type = "super_type";
		removeAllCheckedClassBtn(classBtn);
		super_type_filter.classList.add("checkedClassBtn");
		filterClassInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilterClassColors(0);
	});
	extreme_type_filter.addEventListener('click' , function(){
		type = "extreme_type";
		removeAllCheckedClassBtn(classBtn);
		extreme_type_filter.classList.add("checkedClassBtn");
		filterClassInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilterClassColors(1);
	});
	
	hoverFilterClass();
}

function removeAllCheckedClassBtn(typeBtn){
	for(let i = 0; i < typeBtn.length; i ++){
		typeBtn.item(i).classList.remove("checkedClassBtn");
	}
}

function filterClassInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type){
	if(appeared.length < 1 && appearedRarity.length < 1){
		filterClassDefault(httpLink , hostName , categories , cardType , type);
	}
	
	if(appeared.length < 1 && appearedRarity.length > 0){
		filterClassAppearRarity(httpLink , hostName , categories , cardType , type);
	}
	
	if(appeared.length > 0 && appearedRarity.length < 1){
		filterClassAppear(httpLink , hostName , categories , cardType , type);
	}
	
	if(appeared.length > 0 && appearedRarity.length > 0){
		filterClassAppearAndAppearRarity(httpLink , hostName , categories , cardType , type);
	}
}

function filterClassDefault(httpLink , hostName , categories , cardType , type){
	if(type === "super_type"){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedClass");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedClass");
			}
		}
	}
	if(type === "extreme_type"){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedClass");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedClass");
			}
		}
	}
}

function filterClassAppearRarity(httpLink , hostName , categories , cardType , type){
	if(type === "super_teq"){
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedClass");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedClass");
			}
		}
	}
	if(type === "extreme_teq"){
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedClass");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedClass");
			}
		}
	}
}

function filterClassAppear(httpLink , hostName , categories , cardType , type){
	if(type === "super_teq"){
		for(let i = 0; i < categories.length; i ++){
			if(categories.item(i).classList.contains("appeared") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedClass");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedClass");
			}
		}
	}
	if(type === "extreme_teq"){
		for(let i = 0; i < categories.length; i ++){
			if(categories.item(i).classList.contains("appeared") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedClass");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedClass");
			}
		}
	}
}

function filterClassAppearAndAppearRarity(httpLink , hostName , categories , cardType , type){
	if(type === "super_teq"){
		for(let i = 0; i < categories.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedClass");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedClass");
			}
		}
	}
	if(type === "extreme_teq"){
		for(let i = 0; i < categories.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedClass");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedClass");
			}
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