let quotes = {
    "Carol Burnett": "When you have a dream, you’ve got to grab it and never let go.",
    "Audrey Hepburn": "Nothing is impossible. The word itself says ‘I’m possible!",
    "Alexander the Great": "There is nothing impossible to they who will try.",
    "Michael Altshuler": "The bad news is time flies. The good news is you’re the pilot.",
    "Nicole Kidman": "Life has got all those twists and turns. You’ve got to hold on tight and off you go.",
    "Walt Whitman": "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "Amal Clooney": "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
    "Winston Churchill": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Oprah Winfrey": "You define your own life. Don’t let other people write your script.",
    "Malala Yousafzai": "You are never too old to set another goal or to dream a new dream.",
    "Mother Teresa": "Spread love everywhere you go.",
    "Kesha": "ou can be everything. You can be the infinite amount of things that people are.",
    "Ralph Waldo Emerson": "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
    "William James": "Belief creates the actual fact.",
    "Robin Williams": "No matter what people tell you, words and ideas can change the world.",
    "Aristotle": "It is during our darkest moments that we must focus to see the light.",
    "Marie Forleo": "Not having the best situation, but seeing the best in your situation is the key to happiness.",
    "Mahatma Gandhi": "In a gentle way, you can shake the world.",
    "Earl Nightingale": "All you need is the plan, the road map, and the courage to press on to your destination.",
    "Roald Dahl": "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
    "Jay-Z": "Nobody built like you, you design yourself.",
    "Albert Einstein": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Beyoncé": "Don’t try to lessen yourself for the world; let the world catch up to you.",
    "Amy Dickinson": "We are not our best intentions. We are what we do.",
    "Martin Luther King, Jr.": "Out of the mountain of despair, a stone of hope."
}

const newBtn = document.querySelector('.new-btn');
const authors = Object.keys(quotes);

window.addEventListener('DOMContentLoaded', () => {
    displayRandomQuote();
})

newBtn.addEventListener('click', () => {
    displayRandomQuote();
})

function displayRandomQuote() {
    let randomAuthor = authors[generateRandomNumber()];
    document.querySelector('.quote').innerText = `"${quotes[randomAuthor]}"`;
    document.querySelector('.author').innerText = `- ${randomAuthor} -`;
}

function generateRandomNumber() {
    return Math.floor(Math.random() * authors.length);
}

