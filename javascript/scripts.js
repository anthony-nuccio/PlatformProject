/*!
* Start Bootstrap - Landing Page v6.0.5 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});


//TOY STORY//
xhr.open("GET", "https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?movie=toy-story&category=%22family%22%2C%20%22comedy%22&character=buzz-lightyear&year=1995&actor=tim-allen");
xhr.setRequestHeader("Authorization", "Token token=yd8WzkWNEEzGtqMSgiZBrwtt");
xhr.setRequestHeader("X-RapidAPI-Host", "juanroldan1989-moviequotes-v1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9f400b6cefmsh3c31b47ad0ef57ap14e371jsnd666a4c64d22");

xhr.send(data);

//FERRIS BUELLER'S DAY OFF//
xhr.open("GET", "https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?movie=ferris-bueller's-day-off&category=%22comedy%22%2C%20%22romance%22&character=ferris-bueller&year=1986&actor=matthew-broderick");
xhr.setRequestHeader("Authorization", "Token token=yd8WzkWNEEzGtqMSgiZBrwtt");
xhr.setRequestHeader("X-RapidAPI-Host", "juanroldan1989-moviequotes-v1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9f400b6cefmsh3c31b47ad0ef57ap14e371jsnd666a4c64d22");

xhr.send(data);

//FORREST GUMP//
xhr.open("GET", "https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?movie=forrest-gump&category=%22drama%22%2C%20%22romance%22&character=forrest-gump&year=1994&actor=tom-hanks");
xhr.setRequestHeader("Authorization", "Token token=yd8WzkWNEEzGtqMSgiZBrwtt");
xhr.setRequestHeader("X-RapidAPI-Host", "juanroldan1989-moviequotes-v1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9f400b6cefmsh3c31b47ad0ef57ap14e371jsnd666a4c64d22");

xhr.send(data);

//TITANIC//
xhr.open("GET", "https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?movie=titanic&category=%22drama%22%2C%20%22romance%22&character=jack-dawson&year=1997&actor=leonardo-dicaprio");
xhr.setRequestHeader("Authorization", "Token token=yd8WzkWNEEzGtqMSgiZBrwtt");
xhr.setRequestHeader("X-RapidAPI-Host", "juanroldan1989-moviequotes-v1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9f400b6cefmsh3c31b47ad0ef57ap14e371jsnd666a4c64d22");

xhr.send(data);

//THE NOTEBOOK//
xhr.open("GET", "https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?movie=the-notebook&category=%22drama%22%2C%20%22romance%22&character=allie-hamilton&year=2004&actor=rachel-mcadams");
xhr.setRequestHeader("Authorization", "Token token=yd8WzkWNEEzGtqMSgiZBrwtt");
xhr.setRequestHeader("X-RapidAPI-Host", "juanroldan1989-moviequotes-v1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9f400b6cefmsh3c31b47ad0ef57ap14e371jsnd666a4c64d22");

xhr.send(data);

//THE FAULT IN OUR STARS//
xhr.open("GET", "https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?movie=the-fault-in-our-stars&category=%22drama%22%2C%20%22romance%22&character=hazel-grace-lancaster&year=2014&actor=shailene-woodley");
xhr.setRequestHeader("Authorization", "Token token=yd8WzkWNEEzGtqMSgiZBrwtt");
xhr.setRequestHeader("X-RapidAPI-Host", "juanroldan1989-moviequotes-v1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9f400b6cefmsh3c31b47ad0ef57ap14e371jsnd666a4c64d22");

xhr.send(data);

//MONTY PYTHON AND THE HOLY GRAIL//
xhr.open("GET", "https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?movie=monty-python-and-the-holy-grail&category=%22comedy%22%2C%20%22fantasy%22&character=lancelot&year=1975&actor=john-cleese");
xhr.setRequestHeader("Authorization", "Token token=yd8WzkWNEEzGtqMSgiZBrwtt");
xhr.setRequestHeader("X-RapidAPI-Host", "juanroldan1989-moviequotes-v1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9f400b6cefmsh3c31b47ad0ef57ap14e371jsnd666a4c64d22");

xhr.send(data);

//ANCHORMAN//
xhr.open("GET", "https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?movie=anchorman&category=%22comedy%22&character=ron-burgundy&year=2004&actor=will-ferrell");
xhr.setRequestHeader("Authorization", "Token token=yd8WzkWNEEzGtqMSgiZBrwtt");
xhr.setRequestHeader("X-RapidAPI-Host", "juanroldan1989-moviequotes-v1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9f400b6cefmsh3c31b47ad0ef57ap14e371jsnd666a4c64d22");

xhr.send(data);

//AIRPLANE!//
xhr.open("GET", "https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?movie=airplane&category=%22comedy%22%2C%20%22romance%22&character=ted-striker&year=1980&actor=robert-hays");
xhr.setRequestHeader("Authorization", "Token token=yd8WzkWNEEzGtqMSgiZBrwtt");
xhr.setRequestHeader("X-RapidAPI-Host", "juanroldan1989-moviequotes-v1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9f400b6cefmsh3c31b47ad0ef57ap14e371jsnd666a4c64d22");

xhr.send(data);

//SAW//
xhr.open("GET", "https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?movie=saw&category=%22horror%22%2C%20%22thriller%22&character=jigsaw&year=2004&actor=tobin-bell");
xhr.setRequestHeader("Authorization", "Token token=yd8WzkWNEEzGtqMSgiZBrwtt");
xhr.setRequestHeader("X-RapidAPI-Host", "juanroldan1989-moviequotes-v1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9f400b6cefmsh3c31b47ad0ef57ap14e371jsnd666a4c64d22");

xhr.send(data);

//THE SHINING//
xhr.open("GET", "https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?movie=the-shining&category=%22horror%22%2C%20%22mystery%22&character=jack-torrance&year=1980&actor=jack-nicholson");
xhr.setRequestHeader("Authorization", "Token token=yd8WzkWNEEzGtqMSgiZBrwtt");
xhr.setRequestHeader("X-RapidAPI-Host", "juanroldan1989-moviequotes-v1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9f400b6cefmsh3c31b47ad0ef57ap14e371jsnd666a4c64d22");

xhr.send(data);

//THE CONJURING//
xhr.open("GET", "https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?movie=the-conjuring&category=%22horror%22%2C%20%22thriller%22&character=lorraine-warren&year=2013&actor=vera-farmiga");
xhr.setRequestHeader("Authorization", "Token token=yd8WzkWNEEzGtqMSgiZBrwtt");
xhr.setRequestHeader("X-RapidAPI-Host", "juanroldan1989-moviequotes-v1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9f400b6cefmsh3c31b47ad0ef57ap14e371jsnd666a4c64d22");

xhr.send(data);;

