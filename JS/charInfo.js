function charInfo(){
	let charBaseType = document.getElementsByClassName("char-base-type-margin");
	let charThumb = document.getElementsByClassName("card-thumb-margin");
	let charType = document.getElementsByClassName("card-type-margin");
	let charRarityType = document.getElementsByClassName("card-rarity-margin");
	
	for(let i = 0; i < charBaseType.length; i ++){
		let charBaseTypeImage = document.createElement("img");
		let charThumbImage = document.createElement("img");
		let charTypeImage = document.createElement("img");
		let charRarityImage = document.createElement("img");
		
		if(charBaseType.item(i).innerHTML === "agl"){
			if((charRarityType.item(i).innerHTML === "lr") || (charRarityType.item(i).innerHTML === "ur") || (charRarityType.item(i).innerHTML === "ssr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_agl.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "sr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_agl_sr.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "r")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_agl_r.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "n")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_agl_n.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			
			if(charType.item(i).innerHTML === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_agl.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_agl.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_agl.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
		}
		
		if(charBaseType.item(i).innerHTML === "int"){
			if((charRarityType.item(i).innerHTML === "lr") || (charRarityType.item(i).innerHTML === "ur") || (charRarityType.item(i).innerHTML === "ssr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_int.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "sr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_int_sr.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "r")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_int_r.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "n")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_int_n.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			
			if(charType.item(i).innerHTML === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_int.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_int.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_int.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
		}
		
		if(charBaseType.item(i).innerHTML === "phy"){
			if((charRarityType.item(i).innerHTML === "lr") || (charRarityType.item(i).innerHTML === "ur") || (charRarityType.item(i).innerHTML === "ssr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_phy.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "sr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_phy_sr.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "r")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_phy_r.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "n")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_phy_n.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			
			if(charType.item(i).innerHTML === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_phy.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_phy.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_phy.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
		}
		
		if(charBaseType.item(i).innerHTML === "str"){
			if((charRarityType.item(i).innerHTML === "lr") || (charRarityType.item(i).innerHTML === "ur") || (charRarityType.item(i).innerHTML === "ssr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_str.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "sr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_str_sr.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "r")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_str_r.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "n")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_str_n.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			
			if(charType.item(i).innerHTML === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_str.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_str.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_str.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
		}
		
		if(charBaseType.item(i).innerHTML === "teq"){
			if((charRarityType.item(i).innerHTML === "lr") || (charRarityType.item(i).innerHTML === "ur") || (charRarityType.item(i).innerHTML === "ssr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_teq.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "sr")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_teq_sr.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "r")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_teq_r.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			if((charRarityType.item(i).innerHTML === "n")){
				charBaseTypeImage.classList.add("char-base-type");
				charBaseTypeImage.src = "CharacterBase/char_base_teq_n.png";
				charBaseType.item(i).innerHTML = "";
				charBaseType.item(i).appendChild(charBaseTypeImage);
			}
			
			if(charType.item(i).innerHTML === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_teq.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_teq.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_teq.png";
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
		}
		
		charThumbImage.classList.add("card-thumb");
		charThumbImage.src = "CharacterThumb/card_" + charThumb.item(i).innerHTML + "_thumb.png";
		charThumb.item(i).innerHTML = "";
		charThumb.item(i).appendChild(charThumbImage);
		
		if(charRarityType.item(i).innerHTML === "lr"){
			charRarityImage.classList.add("card-rarity");
			charRarityImage.src = "CharacterRarity/char_rarity_lr.png";
			charRarityType.item(i).innerHTML = "";
			charRarityType.item(i).appendChild(charRarityImage);
		}
		
		if(charRarityType.item(i).innerHTML === "ur"){
			charRarityImage.classList.add("card-rarity");
			charRarityImage.src = "CharacterRarity/char_rarity_ur.png";
			charRarityType.item(i).innerHTML = "";
			charRarityType.item(i).appendChild(charRarityImage);
		}
		
		if(charRarityType.item(i).innerHTML === "ssr"){
			charRarityImage.classList.add("card-rarity");
			charRarityImage.src = "CharacterRarity/char_rarity_ssr.png";
			charRarityType.item(i).innerHTML = "";
			charRarityType.item(i).appendChild(charRarityImage);
		}
		
		if(charRarityType.item(i).innerHTML === "sr"){
			charRarityImage.classList.add("card-rarity");
			charRarityImage.src = "CharacterRarity/char_rarity_sr.png";
			charRarityType.item(i).innerHTML = "";
			charRarityType.item(i).appendChild(charRarityImage);
		}
		
		if(charRarityType.item(i).innerHTML === "r"){
			charRarityImage.classList.add("card-rarity");
			charRarityImage.src = "CharacterRarity/char_rarity_r.png";
			charRarityType.item(i).innerHTML = "";
			charRarityType.item(i).appendChild(charRarityImage);
		}
		
		if(charRarityType.item(i).innerHTML === "n"){
			charRarityImage.classList.add("card-rarity");
			charRarityImage.src = "CharacterRarity/char_rarity_n.png";
			charRarityType.item(i).innerHTML = "";
			charRarityType.item(i).appendChild(charRarityImage);
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