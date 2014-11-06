
var panes = new Array(); // list of IDs of accordian panes
var isShown = new Array(); // list of BOOLs indicating if pane is open or not
var origHeights = new Array(); // list of initial heights of each pane
var animationIds = new Array(); // list of animation ids for each pane

function buttonClick(myButton, myBodyId) {
	
	if (isShown[myBodyId]) {
		myButton.src = 'assets/img_handle_open.png';
	} else {
		myButton.src = 'assets/img_handle_close.png';
	}
	
	runAccordion(myBodyId);
	
}

// Initial accordion setup
function accordionInit() {

	// finds each accordion pane
	var tmp_accordian = document.getElementById('myAccor_accordion');
	var tmp_slides = tmp_accordian.getElementsByClassName('myAccor_body');
	var length = tmp_slides.length;
	for (var i = 0; i < length; i++) {
		var elemId = tmp_slides[i].id; 
		
		// init global variables
		panes.push(elemId);
		isShown[elemId] = true;
		origHeights[elemId] = tmp_slides[i].clientHeight;
		
	}
	
	
};


// Runs appropriate accordion action
function runAccordion(myElemId) {

	clearInterval(animationIds[myElemId]); // stops any ongoing animation
	
	if (isShown[myElemId]) {
		startClose(myElemId);
	} else {
		startShow(myElemId);
	}
	
};

// Closes the accordion pane
function startClose(myElemId) {
	isShown[myElemId] = false;
	
	var elem = document.getElementById(myElemId);
	function frame() {
	
		var currHeight = elem.clientHeight;
		var newHeight = currHeight - 3;
		
		if (newHeight > 0) {
			resizeAll(myElemId, newHeight);
		} else {
			// end it
			doClose(myElemId);
		}
	};
	
	animationIds[myElemId] = setInterval(frame, 10);
	
};

function doClose(myElemId) {
	clearInterval(animationIds[myElemId]);
	isShown[myElemId] = false;
	var elem = document.getElementById(myElemId);
	elem.style.display = 'none';
	elem.style.height = 0;
}

// Opens the accordion pane
function startShow(myElemId) {
	isShown[myElemId] = true;
	
	var elem = document.getElementById(myElemId);
	var origHeight = origHeights[myElemId];
	elem.style.display = 'block';
	function frame() {
	
		var currHeight = elem.clientHeight;
		var newHeight = currHeight + 3;
		
		if (newHeight < origHeight) {
			resizeAll(myElemId, newHeight);
		} else {
			clearInterval(animationIds[myElemId]);
			resizeAll(myElemId, origHeight);
		}
	};
	
	animationIds[myElemId] = setInterval(frame, 10);
	
};

// Resizes accordion pane to input height
function resizeAll(myElemId, myHeight) {
	var elem = document.getElementById(myElemId);
	/*	// Resizes pane children too
	var children = elem.getElementsByTagName('*');
	var length = children.length;
	for (var i = 0; i < length; i++) {
		children[i].style.height = myHeight;
		//console.log(children[i]);
	}
	*/
	elem.style.height = myHeight;
};

