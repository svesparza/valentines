const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('btn');

// 1. Redirect on "Yes"
yesBtn.addEventListener('click', () => {
    window.location.href = "https://www.youtube.com/watch?v=SMoXHjVBJ4c"
});

// 2. Moving "No" Button Logic
noBtn.addEventListener('mouseover', () => {
    // Calculate random positions within the screen bounds
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 3. Heart Animation
function createHeart() {
    const heartContainer = document.querySelector('.bg_heart');
    const heart = document.createElement('div');
    heart.className = 'heart';
    const size = Math.random() * 20 + 10 + "px";
    heart.style.width = size;
    heart.style.height = size;
    heart.style.left = Math.random() * 100 + "vw";
    const colors = ["#ff4d6d", "#ff758f", "#c9184a", "#ffb3c1"];
    heart.style.background = colors[Math.floor(Math.random() * colors.length)];
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heartContainer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);