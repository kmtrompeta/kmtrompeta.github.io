var quotes = [
	"\"And remember that bad times...are just times that are bad.\" <br /> \u2014 Katrina",
	"\"I can make anything as long as it doesn\'t contain gluten or soy or eggs or wheat or sugar or salt...Basically, I can boil you some kale.\" <br /> \u2014 Kyle",
	"*On leap years* \"So the earth goes around the sun, and every four years it does it wrong? That\'s...not comforting.\" <br /> \u2014 Kyle",
	"\"Where\'s the satisfaction in cheatin\' through life? Take everythin\' as it comes. In its own time. Enjoy it all. That\'s noble.\" <br /> \u2014 Resetti",
	"\"Art feeds the soul. So does pizza.\" <br /> \u2014 Rocket",
	"\"Life\'s a journey, it ain\'t pass or fail.\" <br /> \u2014 Kapp\'n",
	"\"Starting over in a new town without any friends is kind of like playing life on hard mode.\" <br /> \u2014 Mallary",
	"\"In order to catch a fish you have to THINK like a fish. If you find yourself SMELLING like a fish, then you\'ve taken it too far.\" <br /> \u2014 Francine",
	"\"I\'ve heard that you grow horns and fangs when you\'re a grown-up. Oh, no, no, no! That\'s not right at all! That was gargoyles I was thinking of, not grown-ups.\" <br /> \u2014 Biskit",
	"\"Sometimes, all it takes is a good friend to remind you of all the things you like about your life...\" <br /> \u2014 Kiki",
	"\"My cares just melt away with some freshly baked cookies and a cup of tea.\" <br /> \u2014 Fauna",
	"\"Being yourself is always in style.\" <br /> \u2014 Wisp",
	"\"Don\'t cry about dreams that don\'t come true today. Sometimes ya needs ta try another way!\" <br /> \u2014 Kapp\'n",
	"\"Love is like a cookie. Your world is great until it\'s all gone, leaving your life all crummy.\" <br /> \u2014 Pascal",
	"\"Sometimes you have to lose to win.\" <br /> \u2014 Diana",
	"\"A smile increases your face value.\" <br /> \u2014 Merry",
	"\"I'm mad at myself for letting myself get mad!\" <br /> \u2014 Mira",
	"\"I\'ve been drinking 3 cups of coffee every night before bed so everyone will see how mature I am!\" <br /> \u2014 Moe",
	"\"We're all like snowflakes if you think about it. I mean, we\'re all different, but we all melt in lava.\" <br /> \u2014 Pascal",
	"\"He who hesitates has lost.\" <br /> \u2014 Jay"

	]


function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}