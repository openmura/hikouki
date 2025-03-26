window.onload = function() {
    if (localStorage.getItem("visited")) {
        console.log("以前アクセスしたことがあります。");
    } else {
        if (!window.confirm("使用上の注意\n\n・無断転載禁止\n・暇な時に見ること\n\nOKを押すと続行します。")) {
            document.body.innerHTML = "<h1>アクセス拒否</h1><p>このページにはアクセスできません。</p>";
            return;
        }
        alert("また、バグを発見した場合は、何かしらの方法でお問い合わせください。");
        localStorage.setItem("visited", "true");
    }
};

function reAlert() {
    localStorage.removeItem("visited");
    window.location.reload();
}
