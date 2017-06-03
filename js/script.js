// Created by Aaron A

//JSON DATA
const quotes = [
  {
    quote: "I'm not anti-college, I'm just pro-Student",
    source: "Ryan Carson",
    citation: "Twitter",
    date:"2017",
    tags: "Motivation"
  },
  {
    quote: "When you want to succeed as bad as you want to breathe, then you’ll be successful!",
    source: "Eric Thomas",
    citation: "MSU",
    date:"2015",
    tags: "Motivation"
  },
  {
    quote: "If you wanna make money, I’ll meet you tomorrow. 4 AM",
    source: "Eric Thomas",
    citation: "MSU",
    date:"2015",
    tags: "Motivation"
  },
  {
    quote: "Our greatest weakness lies in giving up.",
    source: "Thomas Edison",
    citation: "BrainyQuote",
    date:"Date: Unknown",
    tags: "Motivation"
  },
  {
    quote: "If you want to achieve greatness stop asking for permission.",
    source: "Anonymous",
    citation: "huffington post",
    date:"Date: Unknown",
    tags: "Motivation"
  },
  {
    quote: "All our dreams can come true if we have the courage to pursue them",
    source: "Walt Disney",
    citation: "Disney.com",
    date:"Date: Unknown",
    tags: "Motivation"
  },
  {
    quote: "Try not to become a person of success, but rather try to become a person of value.",
    source: "Albert Einstein",
    citation: "huffington post",
    date:"Date: Unknown",
    tags: "Motivation"
  },
  {
    quote: "If you can’t explain it simply, you don’t understand it well enough.",
    source: "Albert Einstein",
    citation: "huffington post",
    date:"Date: Unknown",
    tags: "Motivation"
  }
]

//Takes an array and returns a random item from that array
function randomQuote(quoteArray) {
  var randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
  return randomQuote
}

//Replaces the inner HTML for both the quote & source elements
function printQuote() {
  var nextQuote = randomQuote(quotes);
  console.log(nextQuote);

  var quote = document.getElementsByClassName('quote')[0];
  quote.innerHTML =  nextQuote.quote

  var source = document.getElementsByClassName('source')[0];
  source.innerHTML =  nextQuote.source + '<span class="citation">' +
  nextQuote.citation + '</span>' + '<span class="year">' + nextQuote.date + '</span>'
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
