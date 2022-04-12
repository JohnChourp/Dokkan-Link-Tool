function filterRarity(){
	let httpLink;
	let hostName = window.location.host;
	
	if(hostName === "johnchourp.github.io"){
		httpLink = "https://";
		hostName = window.location.host + "/Dokkan-Link-Tool";

	}else{
		hostName = window.location.host;
		httpLink = "http://";
	}
	
	let categories = document.getElementsByClassName("categories");
	let cardRarity = document.getElementsByClassName("card-rarity");
	let cardType = document.getElementsByClassName("card-type");
	let appeared = document.getElementsByClassName("appeared");
	let appearedType = document.getElementsByClassName("appearedType");
	let appearedClass = document.getElementsByClassName("appearedClass");
	let rarityBtn = document.getElementsByClassName("rarity-btn");
	
	let rarity = "";
	let rarity_n = document.getElementById("rarity_n");
	let rarity_r = document.getElementById("rarity_r");
	let rarity_sr = document.getElementById("rarity_sr");
	let rarity_ssr = document.getElementById("rarity_ssr");
	let rarity_ur = document.getElementById("rarity_ur");
	let rarity_lr = document.getElementById("rarity_lr");
	
	rarity_n.addEventListener('click' , function(){
		rarity = "n";
		removeAllCheckedRarityBtn(rarityBtn);
		rarity_n.classList.add("checkedRarityBtn");
		filterRarityInit(httpLink , hostName , categories , cardRarity , cardType , appeared , appearedType,appearedClass , rarity);
		defaultActiveFilter(rarityBtn , 0);
	});
	
	rarity_r.addEventListener('click' , function(){
		rarity = "r";
		removeAllCheckedRarityBtn(rarityBtn);
		rarity_r.classList.add("checkedRarityBtn");
		filterRarityInit(httpLink , hostName , categories , cardRarity , cardType , appeared , appearedType,appearedClass , rarity);
		defaultActiveFilter(rarityBtn , 1);
	});
	
	rarity_sr.addEventListener('click' , function(){
		rarity = "sr";
		removeAllCheckedRarityBtn(rarityBtn);
		rarity_sr.classList.add("checkedRarityBtn");
		filterRarityInit(httpLink , hostName , categories , cardRarity , cardType , appeared , appearedType,appearedClass , rarity);
		defaultActiveFilter(rarityBtn , 2);
	});
	
	rarity_ssr.addEventListener('click' , function(){
		rarity = "ssr";
		removeAllCheckedRarityBtn(rarityBtn);
		rarity_ssr.classList.add("checkedRarityBtn");
		filterRarityInit(httpLink , hostName , categories , cardRarity , cardType , appeared , appearedType,appearedClass , rarity);
		defaultActiveFilter(rarityBtn , 3);
	});
	
	rarity_ur.addEventListener('click' , function(){
		rarity = "ur";
		removeAllCheckedRarityBtn(rarityBtn);
		rarity_ur.classList.add("checkedRarityBtn");
		filterRarityInit(httpLink , hostName , categories , cardRarity , cardType , appeared , appearedType,appearedClass , rarity);
		defaultActiveFilter(rarityBtn , 4);
	});
	
	rarity_lr.addEventListener('click' , function(){
		rarity = "lr";
		removeAllCheckedRarityBtn(rarityBtn);
		rarity_lr.classList.add("checkedRarityBtn");
		filterRarityInit(httpLink , hostName , categories , cardRarity , cardType , appeared , appearedType,appearedClass , rarity);
		defaultActiveFilter(rarityBtn , 5);
	});
	
	hoverRarity(rarity_n , rarity_r , rarity_sr , rarity_ssr , rarity_ur , rarity_lr);
}

function removeAllCheckedRarityBtn(rarityBtn){
	for(let i = 0; i < rarityBtn.length; i ++){
		rarityBtn.item(i).classList.remove("checkedRarityBtn");
	}
}

function filterRarityInit(httpLink , hostName , categories , cardRarity , cardType , appeared , appearedType,appearedClass , rarity){
	if(appeared.length < 1 && appearedClass.length < 1 && appearedType.length < 1){
		filterRarityDefault(httpLink , hostName , categories , cardRarity , rarity);
	}
	
	if(appeared.length > 0 && appearedClass.length < 1 && appearedType.length < 1){
		filterRarityAppear(httpLink , hostName , categories , cardRarity , rarity);
	}
	
	if(appeared.length < 1 && appearedClass.length > 0 && appearedType.length < 1){
		filterRarityAppearClass(httpLink , hostName , categories , cardRarity , cardType , rarity);
	}
	
	if(appeared.length < 1 && appearedClass.length < 1 && appearedType.length > 0){
		filterRarityAppearType(httpLink , hostName , categories , cardRarity , cardType , rarity);
	}
	
	
	
	
	if(appeared.length > 0 && appearedClass.length > 0 && appearedType.length < 1){
		filterRarityAppearAndAppearClass(httpLink , hostName , categories , cardRarity , cardType , rarity);
	}
	
	if(appeared.length > 0 && appearedClass.length < 1 && appearedType.length > 0){
		filterRarityAppearAndAppearType(httpLink , hostName , categories , cardRarity , cardType , rarity);
	}
	
	if(appeared.length < 1 && appearedClass.length > 0 && appearedType.length > 0){
		filterRarityAppearClassAndAppearType(httpLink , hostName , categories , cardRarity , cardType , rarity);
	}
	
	if(appeared.length > 0 && appearedClass.length > 0 && appearedType.length > 0){
		filterRarityAppearAndAppearClassAndAppearType(httpLink , hostName , categories , cardRarity , cardType , rarity);
	}
}

function filterRarityDefault(httpLink , hostName , categories , cardRarity , rarity){
	for(let i = 0; i < categories.length; i ++){
		if(cardRarity.item(i).src === httpLink + hostName + "/CharacterRarity/char_rarity_" + rarity + ".png"){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedRarity");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedRarity");
		}
	}
}

function filterRarityAppear(httpLink , hostName , categories , cardRarity , rarity){
	for(let i = 0; i < cardRarity.length; i ++){
		if(categories.item(i).classList.contains("appeared") && (cardRarity.item(i).src === httpLink + hostName + "/CharacterRarity/char_rarity_" + rarity + ".png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedRarity");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedRarity");
		}
	}
}

function filterRarityAppearClass(httpLink , hostName , categories , cardRarity , cardType , rarity){
	for(let i = 0; i < cardRarity.length; i ++){
		if(categories.item(i).classList.contains("appearedClass") && (cardRarity.item(i).src === httpLink + hostName + "/CharacterRarity/char_rarity_" + rarity + ".png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedRarity");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedRarity");
		}
	}
}

function filterRarityAppearType(httpLink , hostName , categories , cardRarity , cardType , rarity){
	for(let i = 0; i < cardRarity.length; i ++){
		if(categories.item(i).classList.contains("appearedType") && (cardRarity.item(i).src === httpLink + hostName + "/CharacterRarity/char_rarity_" + rarity + ".png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedRarity");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedRarity");
		}
	}
}

function filterRarityAppearAndAppearClass(httpLink , hostName , categories , cardRarity , cardType , rarity){
	for(let i = 0; i < cardRarity.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedClass") && (cardRarity.item(i).src === httpLink + hostName + "/CharacterRarity/char_rarity_" + rarity + ".png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedRarity");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedRarity");
		}
	}
}

function filterRarityAppearAndAppearType(httpLink , hostName , categories , cardRarity , cardType , rarity){
	for(let i = 0; i < cardRarity.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && (cardRarity.item(i).src === httpLink + hostName + "/CharacterRarity/char_rarity_" + rarity + ".png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedRarity");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedRarity");
		}
	}
}

function filterRarityAppearClassAndAppearType(httpLink , hostName , categories , cardRarity , cardType , rarity){
	for(let i = 0; i < cardRarity.length; i ++){
		if(categories.item(i).classList.contains("appearedClass") && categories.item(i).classList.contains("appearedType") && (cardRarity.item(i).src === httpLink + hostName + "/CharacterRarity/char_rarity_" + rarity + ".png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedRarity");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedRarity");
		}
	}
}

function filterRarityAppearAndAppearClassAndAppearType(httpLink , hostName , categories , cardRarity , cardType , rarity){
	for(let i = 0; i < cardRarity.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedClass") && categories.item(i).classList.contains("appearedType") && (cardRarity.item(i).src === httpLink + hostName + "/CharacterRarity/char_rarity_" + rarity + ".png")){
			categories.item(i).style.display = "inline-block";
			categories.item(i).classList.add("appearedRarity");
		}else{
			categories.item(i).style.display = "none";
			categories.item(i).classList.remove("appearedRarity");
		}
	}
}

function showFilterRarity(){
	document.getElementsByClassName("rarityFilter").item(0).classList.remove("rarityFilterShow");
}

function hoverRarity(rarity_n , rarity_r , rarity_sr , rarity_ssr , rarity_ur , rarity_lr){
	rarity_n.onmouseover = function(){
		rarity_n.style.backgroundColor = "#919090";
		if(rarity_n.classList.contains("checkedRarityBtn")){
			rarity_n.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_n.onmouseout = function(){
		rarity_n.style.backgroundColor = "#494949";
		if(rarity_n.classList.contains("checkedRarityBtn")){
			rarity_n.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_r.onmouseover = function(){
		rarity_r.style.backgroundColor = "#919090";
		if(rarity_r.classList.contains("checkedRarityBtn")){
			rarity_r.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_r.onmouseout = function(){
		rarity_r.style.backgroundColor = "#494949";
		if(rarity_r.classList.contains("checkedRarityBtn")){
			rarity_r.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_sr.onmouseover = function(){
		rarity_sr.style.backgroundColor = "#919090";
		if(rarity_sr.classList.contains("checkedRarityBtn")){
			rarity_sr.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_sr.onmouseout = function(){
		rarity_sr.style.backgroundColor = "#494949";
		if(rarity_sr.classList.contains("checkedRarityBtn")){
			rarity_sr.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_ssr.onmouseover = function(){
		rarity_ssr.style.backgroundColor = "#919090";
		if(rarity_ssr.classList.contains("checkedRarityBtn")){
			rarity_ssr.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_ssr.onmouseout = function(){
		rarity_ssr.style.backgroundColor = "#494949";
		if(rarity_ssr.classList.contains("checkedRarityBtn")){
			rarity_ssr.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_ur.onmouseover = function(){
		rarity_ur.style.backgroundColor = "#919090";
		if(rarity_ur.classList.contains("checkedRarityBtn")){
			rarity_ur.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_ur.onmouseout = function(){
		rarity_ur.style.backgroundColor = "#494949";
		if(rarity_ur.classList.contains("checkedRarityBtn")){
			rarity_ur.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_lr.onmouseover = function(){
		rarity_lr.style.backgroundColor = "#919090";
		if(rarity_lr.classList.contains("checkedRarityBtn")){
			rarity_lr.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_lr.onmouseout = function(){
		rarity_lr.style.backgroundColor = "#494949";
		if(rarity_lr.classList.contains("checkedRarityBtn")){
			rarity_lr.style.backgroundColor = "#EEC310";
		}
	}
}

function defaultActiveFilter(rarityBtn , n){
	for(let i = 0; i < rarityBtn.length; i ++){
		rarityBtn.item(i).style.backgroundColor = "#494949";
	}
	rarityBtn.item(n).style.backgroundColor = "#EEC310";
}