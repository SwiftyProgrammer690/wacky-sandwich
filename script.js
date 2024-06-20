document.addEventListener('DOMContentLoaded', function () {
    const imagesBread = [
        'imgs/Bagguette.png',
        'imgs/BriocheBun.png',
        'imgs/WhiteBread.png'
    ];

    const images = [
        'imgs/Gummybear.png',
        'imgs/Ham.png',
        'imgs/Lettuce.png',
        'imgs/OnionRing.png',
        'imgs/Watermelon.png',
        'imgs/SwissCheese.png',
        'imgs/Lollipop.png',
        'imgs/CheddarCheese.png'
    ];

    const rerollBrButtons = [document.getElementById('brButton')];
    const rerollBrImages = [document.getElementById('bread')];

    const rerollIngButtons = [
        document.getElementById('ingButton1'),
        document.getElementById('ingButton2'),
        document.getElementById('ingButton3')
    ];

    const rerollIngImages = [
        document.getElementById('ingrediant1'),
        document.getElementById('ingrediant2'),
        document.getElementById('ingrediant3'),
    ];

    rerollIngButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const randomIndex = Math.floor(Math.random() * images.length);
            rerollIngImages[index].src = images[randomIndex];
        });
    });

    rerollBrButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const randomIndex = Math.floor(Math.random() * imagesBread.length);
            rerollBrImages[index].src = imagesBread[randomIndex];
        });
    });
});
