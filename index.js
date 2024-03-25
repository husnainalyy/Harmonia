window.onload = function animation() {
    const tl = gsap.timeline()

    tl.from(
        ".left",
        {
            x: -700,
            duration: 3
        }
    )


    gsap.from(
        ".circle-main",
        {
            y: -800,
            duration: 3
        }
    )


    gsap.from(
        ".inner-circle",
        {
            x: -700,
            duration: 3
        }
    )


    gsap.from(
        ".guitar",
        {
            y: 700,
            duration: 3
        }
    )


    gsap.from(
        ".music-circle",
        {
            x: 950,
            duration: 3
        }
    )


    gsap.from(
        ".navbar",
        {
            y: -50,
            opacity: 0,
            duration: 6
        }
    )




    tl.from(
        ".right",
        {
            x: 500,
            duration: 3
        }
    )

    return 0;
}