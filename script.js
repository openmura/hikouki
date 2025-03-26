window.onload = function() {
    if (localStorage.getItem("visited")) {
        console.log("以前アクセスしたことがあります。");
    } else {
        showPopup()    }
};

function randomWisdom() {
    const maxVol = 11;
    const randomVol = Math.floor(Math.random() * maxVol) + 1;
    window.location.href = `vol/${randomVol}.html`;
}

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function agree() {
    localStorage.setItem("visited", "true");
    closePopup()
}

function disagree() {
    localStorage.clear();
    document.body.innerHTML = "<h1>アクセス拒否</h1><p>このページにはアクセスできません。</p>";
    return;
}
