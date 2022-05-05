// preloading the images
var images = new Array();
function preloadImages() {
    for (i=0; i < preloadImages.arguments.length; i++){
        images[i] = new Image();
        images[i].src = preloadImages.arguments[i];
    }
}
preloadImages()

//FERRIS BUELLER//
var getFerris = function(){
	var request = new XMLHttpRequest();
	request.open("GET", "http://www.omdbapi.com/?apikey=8af1471b&t=Ferris+Bueller's+Day+Off", true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		var ferrisPlot = data.Plot;
		document.getElementById("ferrisPlot").textContent=ferrisPlot;
	};
	request.send();
}

//TOY STORY//
var getToyStory = function(){
		var request = new XMLHttpRequest();
		request.open("GET", "http://www.omdbapi.com/?apikey=8af1471b&t=Toy+Story", true);
		request.onload = function(){
			var data = JSON.parse(this.response);
			var Plot = data.Plot;
			document.getElementById("Plot").textContent=Plot;
		};
		request.send();
}

//Forrest Gump//
var getForrest = function(){
	var request = new XMLHttpRequest();
	request.open("GET", "http://www.omdbapi.com/?apikey=8af1471b&t=Forrest+Gump", true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		var forrestPlot = data.Plot;
		document.getElementById("forrestPlot").textContent=forrestPlot;
	};
	request.send();
}

//Titanic//
var getTitanic = function(){
	var request = new XMLHttpRequest();
	request.open("GET", "http://www.omdbapi.com/?apikey=8af1471b&t=Titanic", true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		var titanicPlot = data.Plot;
		document.getElementById("titanicPlot").textContent=titanicPlot;
	};
	request.send();
}

//THE NOTEBOOK//
var getNotebook = function(){
	var request = new XMLHttpRequest();
	request.open("GET", "http://www.omdbapi.com/?apikey=8af1471b&t=The+Notebook", true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		var notebookPlot = data.Plot;
		document.getElementById("notebookPlot").textContent=notebookPlot;
	};
	request.send();
}

//THE FAULT IN OUR STARS//
var getFaultInStars = function(){
	var request = new XMLHttpRequest();
	request.open("GET", "http://www.omdbapi.com/?apikey=8af1471b&t=The+Fault+in+Our+Stars", true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		var fisPlot = data.Plot;
		document.getElementById("fisPlot").textContent=fisPlot;
	};
	request.send();
}

//MONTY PYTHON AND THE HOLY GRAIL//
var getMontyPython = function(){
	var request = new XMLHttpRequest();
	request.open("GET", "http://www.omdbapi.com/?apikey=8af1471b&t=Monty+Python+and+the+Holy+Grail", true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		var mpPlot = data.Plot;
		document.getElementById("mpPlot").textContent=mpPlot;
	};
	request.send();
}

//ANCHORMAN//
var getClueless = function(){
	var request = new XMLHttpRequest();
	request.open("GET", "http://www.omdbapi.com/?apikey=8af1471b&t=Clueless", true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		var cluelessPlot = data.Plot;
		document.getElementById("cluelessPlot").textContent=cluelessPlot;
	};
	request.send();
}

//AIRPLANE//
var getAirplane = function(){
	var request = new XMLHttpRequest();
	request.open("GET", "http://www.omdbapi.com/?apikey=8af1471b&t=Airplane", true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		var airplanePlot = data.Plot;
		document.getElementById("airplanePlot").textContent=airplanePlot;
	};
	request.send();
}

//SAW//
var getSaw = function(){
	var request = new XMLHttpRequest();
	request.open("GET", "http://www.omdbapi.com/?apikey=8af1471b&t=Saw", true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		var sawPlot = data.Plot;
		document.getElementById("sawPlot").textContent=sawPlot;
	};
	request.send();
}

//THE SHINING//
var getShining = function(){
	var request = new XMLHttpRequest();
	request.open("GET", "http://www.omdbapi.com/?apikey=8af1471b&t=The+Shining", true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		var shiningPlot = data.Plot;
		document.getElementById("shiningPlot").textContent=shiningPlot;
	};
	request.send();
}

//THE CONJURING//
var getConjuringcd  = function(){
	var request = new XMLHttpRequest();
	request.open("GET", "http://www.omdbapi.com/?apikey=8af1471b&t=The+Conjuring", true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		var conjPlot = data.Plot;
		document.getElementById("conjPlot").textContent=conjPlot;
	};
	request.send();
}