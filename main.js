var count = 0;

class Input {

    handleEvent(event) {

     if (count == 0 ) {
     	this['forInputs'](event);
     } else {

     	this['forInputs2'](event);

     	if(count<-99) {

     		if(event.target.tagName=="INPUT") {
	     		var text = event.target.value;
     		} else {
	     		var text = event.target.textContent;
     		}
	     	let divModal = document.createElement('div');
	     	divModal.id = "myModal";
	     	divModal.style.fontFamily = "Arial, Helvetica, sans-serif";
	     	divModal.innerHTML = '<div style="background-color: #fefefe; margin: auto; padding: 0 20px 20px; box-shadow: 2px 2px 20px rgb(158, 158, 158); border-radius: 10px; width: 245px; \
	     	    							  position: fixed; top: 15%; left: 39%; z-index: 1000;"> \
								    <h1 style="font-family: Arial, Helvetica, sans-serif;     font-weight: bold; font-size: 17px;">Replacement options</h1> \
								    <div style="margin-bottom: 15px;"> \
									    <label for="replacement" style="font-size: 13.3333px;">Word "@" is replaced with: </label><br> \
										<select id="replacement" style="min-width: 70px;"> \
										  <option value="1">1</option> \
										  <option value="2">2</option> \
										  <option value="3">3</option> \
										</select> \
									</div> \
								    <span id="ModalClose" style="color: #aaaaaa; font-size: 13px; font-weight: bold; background-color: #e0e0e0; border-radius: 5px; padding: 5px;">Cancel</span> \
								    <span id="ModalOk" style="color: #aaaaaa; font-size: 13px; font-weight: bold; background-color: #e0e0e0; border-radius: 5px; padding: 5px; margin-left: 120px;">Ok</span> \
								  </div>';
			document.body.prepend(divModal);
			let close = document.getElementById("ModalClose");
			let ok = document.getElementById("ModalOk");

			close.onclick = function() {
			  divModal.style.display = "none";
			}

			ok.onclick = function() {
				if(event.target.tagName=="INPUT") {
		     		var text = event.target.value;
	     		} else {
		     		var text = event.target.textContent;
	     		}

				let sel = document.getElementById("replacement").selectedIndex;
				var options = document.getElementById('replacement').options;

				if (count == -100) {
			     	replaceCat(text, options[sel].value);
			     } else if (count == -200) {
			     	replaceHelo(text, options[sel].value);
			     } else if (count == -300) {
			     	replaceHeldp(text, options[sel].value);
			     }

			    divModal.style.display = "none";
			    count = 0;
			}

			close.onmouseover = function(element) {		  
			    var style = element.target.style;
			    style.color = "#000";
			    style.textDecoration = "none";
			    style.cursor = "pointer";
			}

			close.onmouseout = function(element) {		  
			    var style = element.target.style;
			    style.color = "#aaaaaa";
			}

			ok.onmouseover = function(element) {		  
			    var style = element.target.style;
			    style.color = "#000";
			    style.textDecoration = "none";
			    style.cursor = "pointer";
			}

			ok.onmouseout = function(element) {		  
			    var style = element.target.style;
			    style.color = "#aaaaaa";
			}

	     	if (count == -100) {
		     	this['replaceCatModal']();
		     } else if (count == -200) {
		     	this['replaceHeloModal']();
		     } else if (count == -300) {
		     	this['replaceHeldpModal']();
		     }
	    } else {
	    	this['forInputs'](event);
	    }
	   }

	    function replaceCat(text, val) {
	    	text = text.replace('cat', val);
	    	
	 		if(event.target.tagName=="INPUT") {
	     		event.target.value = text;
	 		} else {
	     		event.target.textContent = text;
	 		}
	    }

	    function replaceHelo(text, val) {
	    	text = text.replace('helo', val);
	    	
	 		if(event.target.tagName=="INPUT") {
	     		event.target.value = text;
	 		} else {
	     		event.target.textContent = text;
	 		}
	    }

	    function replaceHeldp(text, val) {
	    	text = text.replace('heldp', val);
	    	
	 		if(event.target.tagName=="INPUT") {
	     		event.target.value = text;
	 		} else {
	     		event.target.textContent = text;
	 		}
	    }
     }

    forInputs(event) {    	
 		if(event.target.tagName=="INPUT") {
     		var text = event.target.value;
 		} else {
     		var text = event.target.textContent;
 		}
     
    	if(text.indexOf('cat')!=-1) {
    		count = -1;
    	} else if (text.indexOf('helo')!=-1) {
    		count = -2;
    	} else if (text.indexOf('heldp')!=-1) {
    		count = -3;
    	}
    }

    forInputs2(event) {
 		if(event.target.tagName=="INPUT") {
     		var text = event.target.value;
 		} else {
     		var text = event.target.textContent;
 		}
     
    	if(text.indexOf('cat')!=-1) {
    		count = -100;
    	} else if (text.indexOf('helo')!=-1) {
    		count = -200;
    	} else if (text.indexOf('heldp')!=-1) {
    		count = -300;
    	} else {
    		count = 0; 
    	}
    }

    replaceCatModal() {
    	let divModal = document.getElementById("myModal");
    	divModal.getElementsByTagName("label")[0].innerText = divModal.getElementsByTagName("label")[0].innerText.replace('@', 'cat');
     	let repOpt = divModal.getElementsByTagName("select")[0];

 		repOpt[0].value = "dog";
 		repOpt[0].textContent = "dog";
 		repOpt[1].value = "rat";
 		repOpt[1].textContent = "rat";
 		repOpt[2].value = "bat";
 		repOpt[2].textContent = "bat";
 		divModal.style.display = "block";
    }

    replaceHeloModal() {    	
    	let divModal = document.getElementById("myModal");
    	divModal.getElementsByTagName("label")[0].innerText = divModal.getElementsByTagName("label")[0].innerText.replace('@', 'helo');
     	let repOpt = divModal.getElementsByTagName("select")[0];

 		repOpt[0].value = "hello";
 		repOpt[0].textContent = "hello";
 		repOpt[1].value = "help";
 		repOpt[1].textContent = "help";
 		repOpt[2].value = "hell";
 		repOpt[2].textContent = "hell";
 		divModal.style.display = "block";
    }

    replaceHeldpModal() {
    	let divModal = document.getElementById("myModal");
    	divModal.getElementsByTagName("label")[0].innerText = divModal.getElementsByTagName("label")[0].innerText.replace('@', 'heldp');
     	let repOpt = divModal.getElementsByTagName("select")[0];

 		repOpt[0].value = "help";
 		repOpt[0].textContent = "help";
 		repOpt[1].value = "held";
 		repOpt[1].textContent = "held";
 		repOpt[2].value = "hello";
 		repOpt[2].textContent = "hello";
 		divModal.style.display = "block";
    }
}

let input = new Input();

let inputs = document.getElementsByTagName('input').length;
if(inputs>0) {
	for(let i = 0; i < inputs; i++) {
	    var k = document.getElementsByTagName('input')[i].type;
	    if (k=="text") {
	        document.getElementsByTagName('input')[i].addEventListener("keyup", input);
	    }
	}
}

let divs = document.getElementsByTagName('div').length;
if(divs>0) {
	for(let i = 0; i < divs; i++) {
	    let k = document.getElementsByTagName('div')[i].contentEditable;
	    if (k=="true") {
	      document.getElementsByTagName('div')[i].addEventListener("keyup", input);
	    }
	}
}
