
function lay(cat) {
    let frame = 0;

    const animation = setInterval(() => {
        frame++;

        if (frame >= 8) {
        clearInterval(animation);        }

        cat.style.backgroundPosition = `-${(frame - 1) * 100}px 0px`;
    }, 120);

    return {
        stop() {
            clearInterval(animation);
        }
    };
}

