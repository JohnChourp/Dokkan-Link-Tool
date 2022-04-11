function charInfo(){
	let dataType = 'data-type';
	let dataId = 'data-id';
	let dataClass = 'data-class';
	let dataRarity = 'data-rarity';
	
	let dataTypeItems = document.querySelectorAll('[' + dataType + ']');
	let dataIdItems = document.querySelectorAll('[' + dataId + ']');
	let dataClassItems = document.querySelectorAll('[' + dataClass + ']');
	let dataRarityItems = document.querySelectorAll('[' + dataRarity + ']');
	
	let categories = document.getElementsByClassName("categories");
	
	function addCharThumbImage(charThumbImage , i , charThumbImageDiv){
		charThumbImage.classList.add("card-thumb");
		charThumbImage.src = "CharacterThumb/card_" + dataIdItems[i].getAttribute(dataId) + "_thumb.png";
		charThumbImageDiv.classList.add("card-thumb-margin");
		charThumbImageDiv.appendChild(charThumbImage);
		categories.item(i).appendChild(charThumbImageDiv);
	}
	
	for(let i = 0; i < categories.length; i ++){
		let charBaseTypeDiv = document.createElement("div");
		let charThumbImageDiv = document.createElement("div");
		let charClassImageDiv = document.createElement("div");
		let charRarityImageDiv = document.createElement("div");
		
		let charBaseTypeImage = document.createElement("img");
		let charThumbImage = document.createElement("img");
		let charTypeImage = document.createElement("img");
		let charRarityImage = document.createElement("img");

		if(dataTypeItems[i].getAttribute(dataType) === "agl"){
			if(((dataRarityItems[i].getAttribute(dataRarity) === "lr") || (dataRarityItems[i].getAttribute(dataRarity) === "ur") || (dataRarityItems[i].getAttribute(dataRarity) === "ssr"))){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_agl.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "sr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_agl_sr.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "r")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_agl_r.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "n")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_agl_n.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			
			addCharThumbImage(charThumbImage , i , charThumbImageDiv);
			
			if(dataClassItems[i].getAttribute(dataClass) === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_agl.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
			
			if(dataClassItems[i].getAttribute(dataClass) === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_agl.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
			
			if(dataClassItems[i].getAttribute(dataClass) === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_agl.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
		}
		
		if(dataTypeItems[i].getAttribute(dataType) === "int"){
			if((dataRarityItems[i].getAttribute(dataRarity) === "lr") || (dataRarityItems[i].getAttribute(dataRarity) === "ur") || (dataRarityItems[i].getAttribute(dataRarity) === "ssr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_int.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "sr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_int_sr.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "r")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_int_r.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "n")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_int_n.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			
			addCharThumbImage(charThumbImage , i , charThumbImageDiv);
			
			if(dataClassItems[i].getAttribute(dataClass) === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_int.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
			
			if(dataClassItems[i].getAttribute(dataClass) === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_int.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
			
			if(dataClassItems[i].getAttribute(dataClass) === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_int.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
		}
		
		if(dataTypeItems[i].getAttribute(dataType) === "phy"){
			if((dataRarityItems[i].getAttribute(dataRarity) === "lr") || (dataRarityItems[i].getAttribute(dataRarity) === "ur") || (dataRarityItems[i].getAttribute(dataRarity) === "ssr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_phy.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "sr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_phy_sr.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "r")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_phy_r.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "n")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_phy_n.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			
			addCharThumbImage(charThumbImage , i , charThumbImageDiv);
			
			if(dataClassItems[i].getAttribute(dataClass) === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_phy.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
			
			if(dataClassItems[i].getAttribute(dataClass) === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_phy.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
			
			if(dataClassItems[i].getAttribute(dataClass) === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_phy.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
		}
		
		if(dataTypeItems[i].getAttribute(dataType) === "str"){
			if((dataRarityItems[i].getAttribute(dataRarity) === "lr") || (dataRarityItems[i].getAttribute(dataRarity) === "ur") || (dataRarityItems[i].getAttribute(dataRarity) === "ssr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_str.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "sr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_str_sr.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "r")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_str_r.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "n")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_str_n.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			
			addCharThumbImage(charThumbImage , i , charThumbImageDiv);
			
			if(dataClassItems[i].getAttribute(dataClass) === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_str.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
			
			if(dataClassItems[i].getAttribute(dataClass) === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_str.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
			
			if(dataClassItems[i].getAttribute(dataClass) === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_str.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
		}
		
		if(dataTypeItems[i].getAttribute(dataType) === "teq"){
			if((dataRarityItems[i].getAttribute(dataRarity) === "lr") || (dataRarityItems[i].getAttribute(dataRarity) === "ur") || (dataRarityItems[i].getAttribute(dataRarity) === "ssr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_teq.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "sr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_teq_sr.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "r")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_teq_r.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "n")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_teq_n.png";
				charBaseTypeDiv.classList.add("char-base-type-margin");
				charBaseTypeDiv.appendChild(charBaseTypeImage);
				categories.item(i).appendChild(charBaseTypeDiv);
			}
			
			addCharThumbImage(charThumbImage , i , charThumbImageDiv);
			
			if(dataClassItems[i].getAttribute(dataClass) === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_teq.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
			
			if(dataClassItems[i].getAttribute(dataClass) === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_teq.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
			
			if(dataClassItems[i].getAttribute(dataClass) === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_teq.png";
				charClassImageDiv.classList.add("card-type-margin");
				charClassImageDiv.appendChild(charTypeImage);
				categories.item(i).appendChild(charClassImageDiv);
			}
		}
		
		if(dataRarityItems[i].getAttribute(dataRarity) === "lr"){
			charRarityImage.classList.add("card-rarity");
			charRarityImage.src = "CharacterRarity/char_rarity_lr.png";
			charRarityImageDiv.classList.add("card-rarity-margin");
			charRarityImageDiv.appendChild(charRarityImage);
			categories.item(i).appendChild(charRarityImageDiv);
		}
		
		if(dataRarityItems[i].getAttribute(dataRarity) === "ur"){
			charRarityImage.classList.add("card-rarity");
			charRarityImage.src = "CharacterRarity/char_rarity_ur.png";
			charRarityImageDiv.classList.add("card-rarity-margin");
			charRarityImageDiv.appendChild(charRarityImage)
			categories.item(i).appendChild(charRarityImageDiv);
		}
		
		if(dataRarityItems[i].getAttribute(dataRarity) === "ssr"){
			charRarityImage.classList.add("card-rarity");
			charRarityImage.src = "CharacterRarity/char_rarity_ssr.png";
			charRarityImageDiv.classList.add("card-rarity-margin");
			charRarityImageDiv.appendChild(charRarityImage)
			categories.item(i).appendChild(charRarityImageDiv);
		}
		
		if(dataRarityItems[i].getAttribute(dataRarity) === "sr"){
			charRarityImage.classList.add("card-rarity");
			charRarityImage.src = "CharacterRarity/char_rarity_sr.png";
			charRarityImageDiv.classList.add("card-rarity-margin");
			charRarityImageDiv.appendChild(charRarityImage)
			categories.item(i).appendChild(charRarityImageDiv);
		}
		
		if(dataRarityItems[i].getAttribute(dataRarity) === "r"){
			charRarityImage.classList.add("card-rarity");
			charRarityImage.src = "CharacterRarity/char_rarity_r.png";
			charRarityImageDiv.classList.add("card-rarity-margin");
			charRarityImageDiv.appendChild(charRarityImage)
			categories.item(i).appendChild(charRarityImageDiv);
		}
		
		if(dataRarityItems[i].getAttribute(dataRarity) === "n"){
			charRarityImage.classList.add("card-rarity");
			charRarityImage.src = "CharacterRarity/char_rarity_n.png";
			charRarityImageDiv.classList.add("card-rarity-margin");
			charRarityImageDiv.appendChild(charRarityImage)
			categories.item(i).appendChild(charRarityImageDiv);
		}
	}
}

function loadingScriptFile(){
	window.addEventListener('load' , function(){
		let container = document.getElementsByClassName("container-cards").item(0);
		container.style.display = "block";
	});
}

loadingScriptFile();