document.querySelector('#menu').Larry.addEventListener("click",fact1);

function fact1(){
	document.querySelector('#section').innerHTML = "<h3>The Worlds Largest Padlock weighs 916 pounds!</h3> <br>	It's 56.8 inches tall (144.3cm), 41.3 inches wide(105cm) and 10.2 inches deep (26cm)<br> <img src = 'images/largepadlock.jpg' alt = 'large padlock'>";
}

document.querySelector('#menu').Harry.addEventListener("click",fact2);

function fact2(){
	document.querySelector('#section').innerHTML = "<h3>The Record for most bacon ate in 5 minutes is 182 held by Matt Stonie.</h3><br><img src = 'images/mattstonie.jpg' alt = 'a picture of Matt Stonie'> ";
}

document.querySelector('#menu').Gerry.addEventListener("click",fact3);

function fact3(){
	document.querySelector('#section').innerHTML = "<h3>Longest Session of Playing Video Games</h3> This Record is held by a Nanaimo man named Kory Breaden, he played Call of Duty for 145 hours<br> <img src = 'images/korybreaden.jpg' alt = 'kory breaden playing Call of Duty' img> ";
}

document.querySelector('#menu').Terry.addEventListener("click",fact4);

function fact4(){
	document.querySelector('#section').innerHTML = "<h3>The Ingredients of Chloroform</h3> Just mixing rubbing alcohol and bleach makes chloroform <br><img src = 'images/chloroform.jpg' alt = 'a picture of chloroform'><br><h1>DISCLAIMER: DO NOT MAKE CHLOROFORM</h1>";
}

document.querySelector('#menu').Mary.addEventListener("click",fact5);

function fact5(){
	document.querySelector('#section').innerHTML = "<h3>The Presumably smartest man in the world</h3> Terence Tao is recorded to have an iq of 230<br> <img src = 'images/terence.jpg' alt = 'Terence Tao'>";
}

document.querySelector('#menu').Barry.addEventListener("click",fact6);

function fact6(){
	document.querySelector('#section').innerHTML = "<h3>The Longest word in the english language is the chemical name for titin</h3>measuring in at 181819 letters long its the longest word in the english language<br><img src = 'images/longestword.jpg' alt = 'a picture of about 1/100 of the longest word in english'>";
}

document.querySelector('#menu').Cherry.addEventListener("click",fact7);

function fact7(){
	document.querySelector('#section').innerHTML = "<h3>The Highest Jump</h3>The worlds highest jump record was made in 1993 by a man named Javier Sotomayor, he jumped an outstanding 8.25 ft into the air!<br><img src = 'images/javier.jpg' alt = 'a picture of Javier Sotomayor'>";
}

document.querySelector('#menu').Karrie.addEventListener("click",fact8);

function fact8(){
	document.querySelector('#section').innerHTML = "<h3>The Average Person walks by an Average 36 murderers in their lifetime</h3><img src = 'images/michealmyers.jpg' alt = 'a picture of Michael Myers'>";
}

document.querySelector('#menu').Faerie.addEventListener("click",fact9);

function fact9(){
	document.querySelector('#section').innerHTML = "<h3>If you fall into a black hole you could see the start and end of the universe</h3> if you don't die first <img src = 'images/blackhole.jpg' alt = 'a picture of a black hole'>"
}

document.querySelector('#menu').Scary.addEventListener("click",fact10);

function fact10(){
	document.querySelector('#section').innerHTML = "<h3>People who stay up late have a more psychopathic tendencies than those who sleep early</h3> <img src = 'images/psychopath.jpg' alt = 'a psychopath'> ";
}

document.querySelector('#menu').Sherry.addEventListener("click",fact11);

function fact11(){
	document.querySelector('#section').innerHTML = "<h3>There is no physical evidence to say that today is thursday, we all just have to trust that someone has kept count since the first one ever.</h3><img src = 'images/calender.jpg' alt = 'a calender'>";
}

document.querySelector('#menu').Gary.addEventListener("click",fact12);

function fact12(){
	document.querySelector('#section').innerHTML = "<h3>In 1939, 835 sheep in the US were killed by a single lightning strike.</h3><img src = 'images/deadsheep.jpg' alt = 'dead sheep'>";
}

document.querySelector('#menu').McClary.addEventListener("click",fact13);

function fact13(){
	document.querySelector('#section').innerHTML = "<h3>A different version of you exists in the minds of everyone who knows you</h3> <img src = 'images/thinkingaboutothers.jpg' alt = 'a person thinking of you'>";
}

document.querySelector('#menu').Huckleberry.addEventListener("click",fact14);

function fact14(){
	document.querySelector('#section').innerHTML = "<h3>The word 'mortgage' comes a French term that means ' death pledge ', or a contract that only expires upon death.</h3> <img src = 'images/mortgage.jpg' alt = 'something you never pay off'>";
}

document.querySelector('#menu').Ledoot.addEventListener("click",fact15);

function fact15(){
	document.querySelector('#section').innerHTML = "<h3>There is around a 1/250000 chanc that you will be the victime of a serial killing</h3><img src = 'images/samuellittle.jpg' alt = 'a picture of a knife'>";
}

document.querySelector('#menu').Clear.addEventListener("click",clear);

function clear(){
	document.querySelector('#section').innerHTML = "Cleared, Facts Will Show Here";
}


document.querySelector('#theme').darktheme.addEventListener("click",darkcolour)
function darkcolour(){
	document.querySelector('main').style.backgroundColor = "#0f0f0f"
	document.querySelector('#section').style.backgroundColor = "#090909"
	document.querySelector('#section').style.border = "5px solid #444444"
	document.querySelector('#section').style.color = "#EEEEEE"
	
	for(var i = 0;i < 19; i++){
	document.getElementsByTagName('input')[i].style.backgroundColor = "#707070"
	}
	
	document.querySelector('html').style.backgroundColor = "#000000"
	
}

document.querySelector('#theme').defaulttheme.addEventListener("click",defaultcolour)

function defaultcolour(){
	
	document.querySelector('main').style.backgroundColor = "#ABCDEF"
	document.querySelector('#section').style.backgroundColor = "#FEDCBA"
	document.querySelector('#section').style.border = "5px solid #ff00ff"
	document.querySelector('#section').style.color = "#000000"
	
	for(var i = 0;i < 19; i++){
	document.getElementsByTagName('input')[i].style.backgroundColor = "#dfdfdf"
	}
	
	document.querySelector('html').style.backgroundColor = "#FFFFFF"
	
}

document.querySelector('#theme').lighttheme.addEventListener("click",lightcolour)

function lightcolour(){
	
	document.querySelector('main').style.backgroundColor = "#FFFFfF"
	document.querySelector('#section').style.backgroundColor = "#DDDDDD"
	document.querySelector('#section').style.border = "5px solid #EEEEEE"
	document.querySelector('#section').style.color = "#000000"
	
	for(var i = 0;i < 19; i++){
	document.getElementsByTagName('input')[i].style.backgroundColor = "#dfdfdf"
	}
	
	document.querySelector('html').style.backgroundColor = "#FFFFFF"
	
}
