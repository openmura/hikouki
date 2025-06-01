let quotes = [];

async function loadQuotes() {
    try {
        const res = await fetch('data.json');
        quotes = await res.json();
        showRandomQuote();
    } catch (e) {
        document.getElementById('body').textContent = 'データの読み込みに失敗しました。';
        console.error(e);
    }
}

function showRandomQuote() {
    if (quotes.length === 0) return;
    const entry = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('title').textContent = entry.title;
    document.getElementById('body').textContent = entry.body;
}

document.getElementById('next').addEventListener('click', showRandomQuote);
loadQuotes();