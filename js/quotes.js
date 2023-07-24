const quotes = [
    {
        quote: "A single day is enough to make us a little larger",
        author: "Paul Klee"
    },
    {
        quote: "All that is straight lies. All truth is crooked; time itself is a circle",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "All my possessions for a moment of time",
        author: "Elizabeth I"
    },
    {
        quote: "Regret for wasted time is more wasted time",
        author: "Mason Cooley"
    },
    {
        quote: "There is more to life than increasing its speed",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Everything comes to him who hustles while he waits",
        author: "Thomas A. Edison"
    },
    {
        quote: "Victory belongs to the most persevering",
        author: "Napoleon Bonaparte"
    },
    {
        quote: "Always bear in mind that your own resolution to succeed is more important than any one thing",
        author: "Abraham Lincoln"
    },
    {
        quote: "It has never been my object to record my dreams, just to realize them",
        author: "Man Ray"
    },
    {
        quote: "The human race has one really effective weapon, and that is laughter",
        author: "Mark Twain"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;