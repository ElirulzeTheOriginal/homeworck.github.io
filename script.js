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
