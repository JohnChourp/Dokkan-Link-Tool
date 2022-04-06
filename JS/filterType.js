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
	let appearedRarity = document.getElementsByClassName("appearedRarity");
	let categories = document.getElementsByClassName("categories");
	let cardType = document.getElementsByClassName("card-type");
	
	let type = "";
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	agl_filter.addEventListener('click' , function(){
		type = "agl";
		removeAllCheckedTypeBtn(typeBtn);
		agl_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(0);
	});
	super_agl_filter.addEventListener('click' , function(){
		type = "super_agl";
		removeAllCheckedTypeBtn(typeBtn);
		super_agl_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(7);
	});
	extreme_agl_filter.addEventListener('click' , function(){
		type = "extreme_agl";
		removeAllCheckedTypeBtn(typeBtn);
		extreme_agl_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(12);
	});
	
	int_filter.addEventListener('click' , function(){
		type = "int";
		removeAllCheckedTypeBtn(typeBtn);
		int_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(1);
	});
	super_int_filter.addEventListener('click' , function(){
		type = "super_int";
		removeAllCheckedTypeBtn(typeBtn);
		super_int_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(8);
	});
	extreme_int_filter.addEventListener('click' , function(){
		type = "extreme_int";
		removeAllCheckedTypeBtn(typeBtn);
		extreme_int_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(13);
	});
	
	phy_filter.addEventListener('click' , function(){
		type = "phy";
		removeAllCheckedTypeBtn(typeBtn);
		phy_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(2);
	});
	super_phy_filter.addEventListener('click' , function(){
		type = "super_phy";
		removeAllCheckedTypeBtn(typeBtn);
		super_phy_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(9);
	});
	extreme_phy_filter.addEventListener('click' , function(){
		type = "extreme_phy";
		removeAllCheckedTypeBtn(typeBtn);
		extreme_phy_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(14);
	});
	
	str_filter.addEventListener('click' , function(){
		type = "str";
		removeAllCheckedTypeBtn(typeBtn);
		str_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(3);
	});
	super_str_filter.addEventListener('click' , function(){
		type = "super_str";
		removeAllCheckedTypeBtn(typeBtn);
		super_str_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(10);
	});
	extreme_str_filter.addEventListener('click' , function(){
		type = "extreme_str";
		removeAllCheckedTypeBtn(typeBtn);
		extreme_str_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(15);
	});
	
	teq_filter.addEventListener('click' , function(){
		type = "teq";
		removeAllCheckedTypeBtn(typeBtn);
		teq_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(4);
	});
	super_teq_filter.addEventListener('click' , function(){
		type = "super_teq";
		removeAllCheckedTypeBtn(typeBtn);
		super_teq_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(11);
	});
	extreme_teq_filter.addEventListener('click' , function(){
		type = "extreme_teq";
		removeAllCheckedTypeBtn(typeBtn);
		extreme_teq_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(16);
	});
	
	super_type_filter.addEventListener('click' , function(){
		type = "super_type";
		removeAllCheckedTypeBtn(typeBtn);
		super_type_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(5);
	});
	extreme_type_filter.addEventListener('click' , function(){
		type = "extreme_type";
		removeAllCheckedTypeBtn(typeBtn);
		extreme_type_filter.classList.add("checkedTypeBtn");
		filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type);
		defaultFilter(6);
	});
	
	hoverFilterType();
}

function removeAllCheckedTypeBtn(typeBtn){
	for(let i = 0; i < typeBtn.length; i ++){
		typeBtn.item(i).classList.remove("checkedTypeBtn");
	}
}

function filterTypeInit(httpLink , hostName , categories , cardType , appeared , appearedRarity , type){
	if(appeared.length < 1 && appearedRarity.length < 1){
		filterTypeDefault(httpLink , hostName , categories , cardType , type);
	}
	
	if(appeared.length < 1 && appearedRarity.length > 0){
		filterTypeAppearRarity(httpLink , hostName , categories , cardType , type);
	}
	
	if(appeared.length > 0 && appearedRarity.length < 1){
		filterTypeAppear(httpLink , hostName , categories , cardType , type);
	}
	
	if(appeared.length > 0 && appearedRarity.length > 0){
		filterTypeAppearAndAppearRarity(httpLink , hostName , categories , cardType , type);
	}
}

function filterTypeDefault(httpLink , hostName , categories , cardType , type){
	if(type !== "super_type" && type !== "extreme_type"){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + type + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}
		}
	}
	
	if(type === "super_type"){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}
		}
	}
	
	if(type === "extreme_type"){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}
		}
	}
}

function filterTypeAppearRarity(httpLink , hostName , categories , cardType , type){
	if(type !== "super_type" && type !== "extreme_type"){
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + type + ".png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}
		}
	}
	
	if(type === "super_teq"){
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}
		}
	}
	
	if(type === "extreme_teq"){
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}
		}
	}
}

function filterTypeAppear(httpLink , hostName , categories , cardType , type){
	if(type !== "super_type" && type !== "extreme_type"){
		for(let i = 0; i < categories.length; i ++){
			if(categories.item(i).classList.contains("appeared") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + type + ".png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}
		}
	}
	
	if(type === "super_teq"){
		for(let i = 0; i < categories.length; i ++){
			if(categories.item(i).classList.contains("appeared") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}
		}
	}
	
	if(type === "extreme_teq"){
		for(let i = 0; i < categories.length; i ++){
			if(categories.item(i).classList.contains("appeared") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}
		}
	}
}

function filterTypeAppearAndAppearRarity(httpLink , hostName , categories , cardType , type){
	if(type !== "super_type" && type !== "extreme_type"){
		for(let i = 0; i < categories.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_" + type + ".png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}
		}
	}
	
	if(type === "super_teq"){
		for(let i = 0; i < categories.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}
		}
	}
	
	if(type === "extreme_teq"){
		for(let i = 0; i < categories.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png" || cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}
		}
	}
}

function showFilterType(){
	document.getElementsByClassName("typeFilter").item(0).classList.remove("typeFilterShow");
}

function hoverFilterType(){
	let agl_filter = document.getElementById("agl");
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
	
	let super_agl_filter = document.getElementById("super_agl");
	super_agl_filter.onmouseover = function(){
		super_agl_filter.style.backgroundColor = "#0A7FFF";
		if(super_agl_filter.classList.contains("checkedTypeBtn")){
			super_agl_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	super_agl_filter.onmouseout = function(){
		super_agl_filter.style.backgroundColor = "#064794";
		if(super_agl_filter.classList.contains("checkedTypeBtn")){
			super_agl_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let extreme_agl_filter = document.getElementById("extreme_agl");
	extreme_agl_filter.onmouseover = function(){
		extreme_agl_filter.style.backgroundColor = "#0A7FFF";
		if(extreme_agl_filter.classList.contains("checkedTypeBtn")){
			extreme_agl_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	extreme_agl_filter.onmouseout = function(){
		extreme_agl_filter.style.backgroundColor = "#064794";
		if(extreme_agl_filter.classList.contains("checkedTypeBtn")){
			extreme_agl_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let int_filter = document.getElementById("int");
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
	
	let super_int_filter = document.getElementById("super_int");
	super_int_filter.onmouseover = function(){
		super_int_filter.style.backgroundColor = "#B367D7";
		if(super_int_filter.classList.contains("checkedTypeBtn")){
			super_int_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	super_int_filter.onmouseout = function(){
		super_int_filter.style.backgroundColor = "#6E3E80";
		if(super_int_filter.classList.contains("checkedTypeBtn")){
			super_int_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let extreme_int_filter = document.getElementById("extreme_int");
	extreme_int_filter.onmouseover = function(){
		extreme_int_filter.style.backgroundColor = "#B367D7";
		if(extreme_int_filter.classList.contains("checkedTypeBtn")){
			extreme_int_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	extreme_int_filter.onmouseout = function(){
		extreme_int_filter.style.backgroundColor = "#6E3E80";
		if(extreme_int_filter.classList.contains("checkedTypeBtn")){
			extreme_int_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let phy_filter = document.getElementById("phy");
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
	
	let super_phy_filter = document.getElementById("super_phy");
	super_phy_filter.onmouseover = function(){
		super_phy_filter.style.backgroundColor = "#C06D06";
		if(super_phy_filter.classList.contains("checkedTypeBtn")){
			super_phy_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	super_phy_filter.onmouseout = function(){
		super_phy_filter.style.backgroundColor = "#673A03";
		if(super_phy_filter.classList.contains("checkedTypeBtn")){
			super_phy_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let extreme_phy_filter = document.getElementById("extreme_phy");
	extreme_phy_filter.onmouseover = function(){
		extreme_phy_filter.style.backgroundColor = "#C06D06";
		if(extreme_phy_filter.classList.contains("checkedTypeBtn")){
			extreme_phy_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	extreme_phy_filter.onmouseout = function(){
		extreme_phy_filter.style.backgroundColor = "#673A03";
		if(extreme_phy_filter.classList.contains("checkedTypeBtn")){
			extreme_phy_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let str_filter = document.getElementById("str");
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
	
	let super_str_filter = document.getElementById("super_str");
	super_str_filter.onmouseover = function(){
		super_str_filter.style.backgroundColor = "#C72931";
		if(super_str_filter.classList.contains("checkedTypeBtn")){
			super_str_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	super_str_filter.onmouseout = function(){
		super_str_filter.style.backgroundColor = "#7C1A1E";
		if(super_str_filter.classList.contains("checkedTypeBtn")){
			super_str_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let extreme_str_filter = document.getElementById("extreme_str");
	extreme_str_filter.onmouseover = function(){
		extreme_str_filter.style.backgroundColor = "#C72931";
		if(extreme_str_filter.classList.contains("checkedTypeBtn")){
			extreme_str_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	extreme_str_filter.onmouseout = function(){
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		if(extreme_str_filter.classList.contains("checkedTypeBtn")){
			extreme_str_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let teq_filter = document.getElementById("teq");
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
	
	let super_teq_filter = document.getElementById("super_teq");
	super_teq_filter.onmouseover = function(){
		super_teq_filter.style.backgroundColor = "#00B712";
		if(super_teq_filter.classList.contains("checkedTypeBtn")){
			super_teq_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	super_teq_filter.onmouseout = function(){
		super_teq_filter.style.backgroundColor = "#015907";
		if(super_teq_filter.classList.contains("checkedTypeBtn")){
			super_teq_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let extreme_teq_filter = document.getElementById("extreme_teq");
	extreme_teq_filter.onmouseover = function(){
		extreme_teq_filter.style.backgroundColor = "#00B712";
		if(extreme_teq_filter.classList.contains("checkedTypeBtn")){
			extreme_teq_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	extreme_teq_filter.onmouseout = function(){
		extreme_teq_filter.style.backgroundColor = "#015907";
		if(extreme_teq_filter.classList.contains("checkedTypeBtn")){
			extreme_teq_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let super_filter = document.getElementById("super_type");
	super_filter.onmouseover = function(){
		super_filter.style.backgroundColor = "#919090";
		if(super_filter.classList.contains("checkedTypeBtn")){
			super_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	super_filter.onmouseout = function(){
		super_filter.style.backgroundColor = "#494949";
		if(super_filter.classList.contains("checkedTypeBtn")){
			super_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let extreme_filter = document.getElementById("extreme_type");
	extreme_filter.onmouseover = function(){
		extreme_filter.style.backgroundColor = "#919090";
		if(extreme_filter.classList.contains("checkedTypeBtn")){
			extreme_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	extreme_filter.onmouseout = function(){
		extreme_filter.style.backgroundColor = "#494949";
		if(extreme_filter.classList.contains("checkedTypeBtn")){
			extreme_filter.style.backgroundColor = "#EEC310";
		}
	}
}

function filterTypeClick(agl_filter , super_agl_filter , extreme_agl_filter , int_filter , super_int_filter , extreme_int_filter , phy_filter , super_phy_filter , extreme_phy_filter , str_filter , super_str_filter , extreme_str_filter , teq_filter , super_teq_filter , extreme_teq_filter , super_type_filter , extreme_type_filter){
	if(agl_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		agl_filter.click();
	}
	if(super_agl_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		super_agl_filter.click();
	}
	if(extreme_agl_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		extreme_agl_filter.click();
	}
	
	if(int_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		int_filter.click();
	}
	if(super_int_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		super_int_filter.click();
	}
	if(extreme_int_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		extreme_int_filter.click();
	}
	
	if(phy_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		phy_filter.click();
	}
	if(super_phy_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		super_phy_filter.click();
	}
	if(extreme_phy_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		extreme_phy_filter.click();
	}
	
	if(str_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		str_filter.click();
	}
	if(super_str_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		super_str_filter.click();
	}
	if(extreme_str_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		extreme_str_filter.click();
	}
	
	if(teq_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		teq_filter.click();
	}
	if(super_teq_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		super_teq_filter.click();
	}
	if(extreme_teq_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		extreme_teq_filter.click();
	}
	
	if(super_type_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		super_type_filter.click();
	}
	if(extreme_type_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		extreme_type_filter.click();
	}
}

function defaultFilter(n){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	agl_filter.style.backgroundColor = "#064794";
	super_agl_filter.style.backgroundColor = "#064794";
	extreme_agl_filter.style.backgroundColor = "#064794";
	
	int_filter.style.backgroundColor = "#6E3E80";
	super_int_filter.style.backgroundColor = "#6E3E80";
	extreme_int_filter.style.backgroundColor = "#6E3E80";
	
	phy_filter.style.backgroundColor = "#673A03";
	super_phy_filter.style.backgroundColor = "#673A03";
	extreme_phy_filter.style.backgroundColor = "#673A03";
	
	str_filter.style.backgroundColor = "#7C1A1E";
	super_str_filter.style.backgroundColor = "#7C1A1E";
	extreme_str_filter.style.backgroundColor = "#7C1A1E";
	
	teq_filter.style.backgroundColor = "#015907";
	super_teq_filter.style.backgroundColor = "#015907";
	extreme_teq_filter.style.backgroundColor = "#015907";
	
	super_type_filter.style.backgroundColor = "#494949";
	extreme_type_filter.style.backgroundColor = "#494949";
	
	let filterTypeList = [];
	let typeBtn = document.getElementsByClassName("type-btn");
	for(let i = 0; i < typeBtn.length; i ++){
		filterTypeList[i] = typeBtn.item(i);
	}
	filterTypeList[n].style.backgroundColor = "#EEC310";
}

