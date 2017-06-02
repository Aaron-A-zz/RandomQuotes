// Created by Aaron A

const quotes = [
  {
    quote: "I'm not anti-college, I'm just pro-Student",
    source: "Ryan Carson",
    citation: "Twitter @ryancarson",
    date:"May 25, 2017",
    tags: "Motivation"
  },
  {
    quote: "I'm not anti-college, I'm just pro-Student",
    source: "Ryan Carson",
    citation: "Twitter @ryancarson",
    date:"May 25, 2017",
    tags: "Motivation"
  },
  {
    quote: "I'm not anti-college, I'm just pro-Student",
    source: "Ryan Carson",
    citation: "Twitter @ryancarson",
    date:"May 25, 2017",
    tags: "Motivation"
  }
]

//Takes an array and returns a random item from that array
function randomQuote(quoteArray) {
  var randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
  return randomQuote
}

function printQuote() {
  var nextQuote = randomQuote(quotes);
  console.log(nextQuote);

  var quote = document.getElementsByClassName('quote')[0];
  quote.innerHTML = nextQuote.quote;

  var source = document.getElementsByClassName('source')[0];
  source.innerHTML = nextQuote.source;

  var citation = document.getElementsByClassName('citation')[0];
  citation.innerHTML = nextQuote.citation;
  console.log(citation);

}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
