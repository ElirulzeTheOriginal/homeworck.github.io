document.addEventListener('DOMContentLoaded', (event) => {
    const character = document.getElementById('character');
    let position = { top: 0, left: 0 };

    function moveCharacter(event) {
        switch(event.key) {
            case 'ArrowUp':
                position.top -= 10;
                break;
            case 'ArrowDown':
                position.top += 10;
                break;
            case 'ArrowLeft':
                position.left -= 10;
                break;
            case 'ArrowRight':
                position.left += 10;
                break;
        }
        updatePosition();
    }

    function updatePosition() {
        character.style.top = position.top + 'px';
        character.style.left = position.left + 'px';
    }

    document.addEventListener('keydown', moveCharacter);
});
<!DOCTYPE html>
<html>
<head>
    <title>Simple Game</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div id="character"></div>
    <script src="script.js"></script>
</body>
</html>
body {
    margin: 0;
    overflow: hidden;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
}

#character {
    width: 50px;
    height: 50px;
    background-color: red;
    position: absolute;
}
