function randomWisdom() {
    const maxVol = 11;
    const randomVol = Math.floor(Math.random() * maxVol) + 1;
    window.location.href = `vol/${randomVol}.html`;
}