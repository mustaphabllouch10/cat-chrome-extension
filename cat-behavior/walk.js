function walk(cat) {
    let frame = 0;

    // Walk animation
    const animation = setInterval(() => {
        frame++;

        if (frame >= 8) {
            frame = 0;
        }

        cat.style.backgroundPosition = `-${frame * 100}px 0px`;
    }, 120);

    // Movement
    let position = 20;
    let direction = 1;

    const movement = setInterval(() => {
        position += 2 * direction;

        const maxPosition = window.innerWidth - 120;

        if (position >= maxPosition) {
            position = maxPosition;
            direction = -1;

            cat.style.transform = "scaleX(-1)";
        }

        if (position <= 20) {
            position = 20;
            direction = 1;

            cat.style.transform = "scaleX(1)";
        }

        cat.style.left = `${position}px`;
    }, 120);

    // Give content.js a way to stop walking
    return {
        stop() {
            clearInterval(animation);
            clearInterval(movement);
        }
    };
}