function loadFullOrPartialMatch(){
	let httpLink;
	let hostName = window.location.host;
	
	if(hostName === "johnchourp.github.io"){
		httpLink = "https://";
	}else{
		httpLink = "http://";
	}
	
	let fullMatchInput = document.getElementById("full-match-input");
	const fullMatchJS = document.createElement("script");
	fullMatchJS.src = httpLink + hostName + "/Dokkan-Link-Tool/JS/filterFullMatch.js";
	fullMatchJS.type = "text/javascript";
	fullMatchJS.id = "partialMatchScriptId";
	
	let partialMatchInput = document.getElementById("partial-match-input");
	const partialMatchJS = document.createElement("script");
	partialMatchJS.src = httpLink + hostName + "/Dokkan-Link-Tool/JS/filterPartialMatch.js";
	partialMatchJS.type = "text/javascript";
	partialMatchJS.id = "fullMatchScriptId";
	document.head.appendChild(partialMatchJS);
	let partialMatch = document.getElementById("fullMatchScriptId");
	
	fullMatchInput.addEventListener("click",function(){
		if(fullMatchInput.classList.contains("checked")){
		
		}else{
			fullMatchInput.classList.add("checked");
			document.head.appendChild(fullMatchJS);
			
			partialMatchInput.classList.remove("checked");
			document.head.removeChild(partialMatch);
		}
		document.body.onload = function(){
			filterFullMatch();
		}
	});
	
	partialMatchInput.addEventListener("click",function(){
		if(partialMatchInput.classList.contains("checked")){
		
		}else{
			partialMatchInput.classList.add("checked");
			document.head.appendChild(partialMatchJS);
			
			fullMatchInput.classList.remove("checked");
			document.head.removeChild(fullMatchJS);
		}
		document.body.onload = function(){
			filterPartialMatch();
		}
	});
}
