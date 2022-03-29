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
			charBaseTypeImage.classList.add("char-base-type");
			charBaseTypeImage.src = "CharacterBase/char_base_agl.png";
			charBaseType.item(i).innerHTML = "";
			charBaseType.item(i).appendChild(charBaseTypeImage);
			
			if(charType.item(i).innerHTML === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_agl.png";
				charTypeImage.alt = charType.item(i).innerHTML;
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_agl.png";
				charTypeImage.alt = charType.item(i).innerHTML;
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_agl.png";
				charTypeImage.alt = charType.item(i).innerHTML;
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
		}
		
		if(charBaseType.item(i).innerHTML === "int"){
			charBaseTypeImage.classList.add("char-base-type");
			charBaseTypeImage.src = "CharacterBase/char_base_int.png";
			charBaseType.item(i).innerHTML = "";
			charBaseType.item(i).appendChild(charBaseTypeImage);
			
			if(charType.item(i).innerHTML === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_int.png";
				charTypeImage.alt = charType.item(i).innerHTML;
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_int.png";
				charTypeImage.alt = charType.item(i).innerHTML;
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_int.png";
				charTypeImage.alt = charType.item(i).innerHTML;
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
		}
		
		if(charBaseType.item(i).innerHTML === "phy"){
			charBaseTypeImage.classList.add("char-base-type");
			charBaseTypeImage.src = "CharacterBase/char_base_phy.png";
			charBaseType.item(i).innerHTML = "";
			charBaseType.item(i).appendChild(charBaseTypeImage);
			
			if(charType.item(i).innerHTML === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_phy.png";
				charTypeImage.alt = charType.item(i).innerHTML;
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_phy.png";
				charTypeImage.alt = charType.item(i).innerHTML;
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_phy.png";
				charTypeImage.alt = charType.item(i).innerHTML;
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
		}
		
		if(charBaseType.item(i).innerHTML === "str"){
			charBaseTypeImage.classList.add("char-base-type");
			charBaseTypeImage.src = "CharacterBase/char_base_str.png";
			charBaseType.item(i).innerHTML = "";
			charBaseType.item(i).appendChild(charBaseTypeImage);
			
			if(charType.item(i).innerHTML === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_str.png";
				charTypeImage.alt = charType.item(i).innerHTML;
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_str.png";
				charTypeImage.alt = charType.item(i).innerHTML;
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_str.png";
				charTypeImage.alt = charType.item(i).innerHTML;
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
		}
		
		if(charBaseType.item(i).innerHTML === "teq"){
			charBaseTypeImage.classList.add("char-base-type");
			charBaseTypeImage.src = "CharacterBase/char_base_teq.png";
			charBaseType.item(i).innerHTML = "";
			charBaseType.item(i).appendChild(charBaseTypeImage);
			
			if(charType.item(i).innerHTML === "normal"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_teq.png";
				charTypeImage.alt = charType.item(i).innerHTML;
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "super"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_super_teq.png";
				charTypeImage.alt = charType.item(i).innerHTML;
				charType.item(i).innerHTML = "";
				charType.item(i).appendChild(charTypeImage);
			}
			
			if(charType.item(i).innerHTML === "extreme"){
				charTypeImage.classList.add("card-type");
				charTypeImage.src = "CharacterType/char_type_extreme_teq.png";
				charTypeImage.alt = charType.item(i).innerHTML;
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
	window.addEventListener('load',function(){
		let container = document.getElementsByClassName("container-cards").item(0);
		container.style.display = "block";
	});
}
loadingScriptFile();