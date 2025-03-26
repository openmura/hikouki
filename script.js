function randomWisdom() {
    const maxVol = 11;
    const randomVol = Math.floor(Math.random() * maxVol) + 1;
    window.location.href = `vol/${randomVol}.html`;
}
window.onload = function() {
    if (localStorage.getItem("visited")) {
        console.log("以前アクセスしたことがあります。");
    } else {
        alert("使用上の注意\n\n・無断転載禁止\n・暇な時に見ること");
        localStorage.setItem("visited", "true");
    }
};