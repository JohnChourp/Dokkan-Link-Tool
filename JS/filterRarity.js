function filterRarity(){
	let httpLink;
	let hostName = window.location.host;
	
	if(hostName === "johnchourp.github.io"){
		httpLink = "https://";
	}else{
		httpLink = "http://";
	}
	
	let categories = document.getElementsByClassName("categories");
	let cardRarity = document.getElementsByClassName("card-rarity");
	let rarityBtn = document.getElementsByClassName("rarity-btn");
	let appeared = document.getElementsByClassName("appeared");
	let appearedType = document.getElementsByClassName("appearedType");
	
	let rarity_n = document.getElementById("rarity_n");
	let rarity_r = document.getElementById("rarity_r");
	let rarity_sr = document.getElementById("rarity_sr");
	let rarity_ssr = document.getElementById("rarity_ssr");
	let rarity_ur = document.getElementById("rarity_ur");
	let rarity_lr = document.getElementById("rarity_lr");
	
	rarity_n.addEventListener('click' , function(){
		for(let i = 0; i < rarityBtn.length; i ++){
			rarityBtn.item(i).classList.remove("checkedRarityBtn");
		}
		rarity_n.classList.add("checkedRarityBtn");
		
		if(appeared.length < 1 && appearedType.length < 1){
			for(let i = 0; i < categories.length; i ++){
				if(cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_n.png"){
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedRarity");
				}else{
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedRarity");
				}
			}
		}
		
		if(appeared.length < 1 && appearedType.length > 0){
			filterAppearAndAppearRarity("n");
		}
		
		if(appeared.length > 0 && appearedType.length < 1){
			for(let i = 0; i < cardRarity.length; i ++){
				if(categories.item(i).classList.contains("appeared") && (cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_n.png")){
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedRarity");
				}else{
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedRarity");
				}
			}
		}
		
		if(appeared.length > 0 && appearedType.length > 0){
			filterAppearAndAppearTypeAppearRarity("n");
		}
		defaultActiveFilter(0);
	});
	
	rarity_r.addEventListener('click' , function(){
		for(let i = 0; i < rarityBtn.length; i ++){
			rarityBtn.item(i).classList.remove("checkedRarityBtn");
		}
		rarity_r.classList.add("checkedRarityBtn");
		
		if(appeared.length < 1 && appearedType.length < 1){
			for(let i = 0; i < categories.length; i ++){
				if(cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_r.png"){
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedRarity");
				}else{
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedRarity");
				}
			}
		}
		
		if(appeared.length < 1 && appearedType.length > 0){
			filterAppearAndAppearRarity("r");
		}
		
		if(appeared.length > 0 && appearedType.length < 1){
			for(let i = 0; i < cardRarity.length; i ++){
				if(categories.item(i).classList.contains("appeared") && (cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_r.png")){
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedRarity");
				}else{
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedRarity");
				}
			}
		}
		if(appeared.length > 0 && appearedType.length > 0){
			filterAppearAndAppearTypeAppearRarity("r");
		}
		defaultActiveFilter(1);
	});
	
	rarity_sr.addEventListener('click' , function(){
		for(let i = 0; i < rarityBtn.length; i ++){
			rarityBtn.item(i).classList.remove("checkedRarityBtn");
		}
		rarity_sr.classList.add("checkedRarityBtn");
		
		if(appeared.length < 1 && appearedType.length < 1){
			for(let i = 0; i < categories.length; i ++){
				if(cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_sr.png"){
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedRarity");
				}else{
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedRarity");
				}
			}
		}
		
		if(appeared.length < 1 && appearedType.length > 0){
			filterAppearAndAppearRarity("sr");
		}
		
		if(appeared.length > 0 && appearedType.length < 1){
			for(let i = 0; i < cardRarity.length; i ++){
				if(categories.item(i).classList.contains("appeared") && (cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_sr.png")){
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedRarity");
				}else{
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedRarity");
				}
			}
		}
		
		if(appeared.length > 0 && appearedType.length > 0){
			filterAppearAndAppearTypeAppearRarity("sr");
		}
		defaultActiveFilter(2);
	});
	
	rarity_ssr.addEventListener('click' , function(){
		for(let i = 0; i < rarityBtn.length; i ++){
			rarityBtn.item(i).classList.remove("checkedRarityBtn");
		}
		rarity_ssr.classList.add("checkedRarityBtn");
		
		if(appeared.length < 1 && appearedType.length < 1){
			for(let i = 0; i < categories.length; i ++){
				if(cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_ssr.png"){
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedRarity");
				}else{
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedRarity");
				}
			}
		}
		
		if(appeared.length < 1 && appearedType.length > 0){
			filterAppearAndAppearRarity("ssr");
		}
		
		if(appeared.length > 0 && appearedType.length < 1){
			for(let i = 0; i < cardRarity.length; i ++){
				if(categories.item(i).classList.contains("appeared") && (cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_ssr.png")){
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedRarity");
				}else{
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedRarity");
				}
			}
		}
		
		if(appeared.length > 0 && appearedType.length > 0){
			filterAppearAndAppearTypeAppearRarity("ssr");
		}
		defaultActiveFilter(3);
	});
	
	rarity_ur.addEventListener('click' , function(){
		for(let i = 0; i < rarityBtn.length; i ++){
			rarityBtn.item(i).classList.remove("checkedRarityBtn");
		}
		rarity_ur.classList.add("checkedRarityBtn");
		
		if(appeared.length < 1 && appearedType.length < 1){
			for(let i = 0; i < categories.length; i ++){
				if(cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_ur.png"){
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedRarity");
				}else{
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedRarity");
				}
			}
		}
		
		if(appeared.length < 1 && appearedType.length > 0){
			filterAppearAndAppearRarity("ur");
		}
		
		if(appeared.length > 0 && appearedType.length < 1){
			for(let i = 0; i < cardRarity.length; i ++){
				if(categories.item(i).classList.contains("appeared") && (cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_ur.png")){
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedRarity");
				}else{
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedRarity");
				}
			}
		}
		
		if(appeared.length > 0 && appearedType.length > 0){
			filterAppearAndAppearTypeAppearRarity("ur");
		}
		defaultActiveFilter(4);
	});
	
	rarity_lr.addEventListener('click' , function(){
		for(let i = 0; i < rarityBtn.length; i ++){
			rarityBtn.item(i).classList.remove("checkedRarityBtn");
		}
		rarity_lr.classList.add("checkedRarityBtn");
		
		if(appeared.length < 1 && appearedType.length < 1){
			for(let i = 0; i < categories.length; i ++){
				if(cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_lr.png"){
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedRarity");
				}else{
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedRarity");
				}
			}
		}
		
		if(appeared.length < 1 && appearedType.length > 0){
			filterAppearAndAppearRarity("lr");
		}
		
		if(appeared.length > 0 && appearedType.length < 1){
			for(let i = 0; i < cardRarity.length; i ++){
				if(categories.item(i).classList.contains("appeared") && (cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_lr.png")){
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedRarity");
				}else{
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedRarity");
				}
			}
		}
		
		if(appeared.length > 0 && appearedType.length > 0){
			filterAppearAndAppearTypeAppearRarity("lr");
		}
		defaultActiveFilter(5);
	});
	
	hoverRarity();
}

function filterAppearAndAppearRarity(rarity){
	let httpLink;
	let hostName = window.location.host;
	
	if(hostName === "johnchourp.github.io"){
		httpLink = "https://";
	}else{
		httpLink = "http://";
	}
	
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
	
	let categories = document.getElementsByClassName("categories");
	let cardRarity = document.getElementsByClassName("card-rarity");
	let cardType = document.getElementsByClassName("card-type");
	
	if(agl_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_agl.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(super_agl_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(extreme_agl_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(int_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_int.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(super_int_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_int.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(extreme_int_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(phy_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_phy.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(super_phy_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(extreme_phy_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(str_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_str.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(super_str_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_str.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(extreme_str_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(teq_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_teq.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(super_teq_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(extreme_teq_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(super_type_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if(((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_int.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_str.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png")) && (cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(extreme_type_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if(((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png")) && (cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
}

function filterAppearAndAppearTypeAppearRarity(rarity){
	let httpLink;
	let hostName = window.location.host;
	
	if(hostName === "johnchourp.github.io"){
		httpLink = "https://";
	}else{
		httpLink = "http://";
	}
	
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
	
	let categories = document.getElementsByClassName("categories");
	let cardRarity = document.getElementsByClassName("card-rarity");
	let cardType = document.getElementsByClassName("card-type");
	
	if(agl_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_agl.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(super_agl_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(extreme_agl_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(int_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_int.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(super_int_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_int.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(extreme_int_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(phy_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_phy.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(super_phy_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(extreme_phy_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(str_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_str.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(super_str_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_str.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(extreme_str_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(teq_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_teq.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(super_teq_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(extreme_teq_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png") && categories.item(i).classList.contains("appeared") && cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(super_type_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if(((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_int.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_str.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png")) && categories.item(i).classList.contains("appeared") && (cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
	
	if(extreme_type_filter.classList.contains("checkedTypeBtn")){
		for(let i = 0; i < categories.length; i ++){
			if(((cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png") || (cardType.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png")) && categories.item(i).classList.contains("appeared") && (cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_" + rarity + ".png")){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
	}
}

function showFilterRarity(){
	document.getElementsByClassName("rarityFilter").item(0).classList.remove("rarityFilterShow");
}

function hoverRarity(){
	let rarity_n = document.getElementById("rarity_n");
	let rarity_r = document.getElementById("rarity_r");
	let rarity_sr = document.getElementById("rarity_sr");
	let rarity_ssr = document.getElementById("rarity_ssr");
	let rarity_ur = document.getElementById("rarity_ur");
	let rarity_lr = document.getElementById("rarity_lr");
	
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

function defaultActiveFilter(n){
	let rarityBtn = document.getElementsByClassName("rarity-btn");
	for(let i = 0; i < rarityBtn.length; i ++){
		rarityBtn.item(i).style.backgroundColor = "#494949";
	}
	rarityBtn.item(n).style.backgroundColor = "#EEC310";
}