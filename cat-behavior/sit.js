function sit(cat) {
    let frame = 0;

    const animation = setInterval(() => {
        frame++;

        if (frame >= 0) {
            frame = 0;
        }

        cat.style.backgroundPosition = `-${frame * 100}px 0px`;
    }, 150);

    return {
        stop() {
            clearInterval(animation);
        }
    };
}