function musicplayy() {
    document.querySelector('.audio-btns2').innerHTML = '<i class="fa-solid fa-pause"></i>';
    document.getElementById('audio').play();
}



let play = true;
function musicplay() {
    if (play == true) {
        document.querySelector('.audio-btns2').innerHTML = '<i class="fa-solid fa-pause"></i>';
        document.getElementById('audio').play();
        play = false;
    }
    else {
        document.querySelector('.audio-btns2').innerHTML = '<i class="fa-solid fa-play"></i>';
        document.getElementById('audio').pause();
        play = true;
    }
}

let recent1, current;
recent1 = document.querySelector(`#bossa`);
function playlistImg(id) {
    animation();

    console.log(`#${id}`);
    current = document.querySelector(`#${id}`);
    recent1.style.backgroundColor = 'transparent';
    current.style.backgroundColor = 'rgba(250, 235, 215, 0.144)';
    playlist.forEach(element => {
        element.forEach(song => {
            if (song.id == id) {

                document.querySelector('.song-name').innerHTML = `${song.name}`;
                document.querySelector('.artist-name').innerHTML = `${song.singer}`;
                document.querySelector('#audio').src = `${song.song}`;
                document.querySelector('.musicImages').src = `${song.img}`;
                document.querySelector('.music-circle').style.backgroundImage = `url(${song.img})`;
                musicplayy();
            }
        })
    });
    recent1 = current;
}








let animation = function animation() {
    const tl = gsap.timeline()

    tl.from(
        ".left",
        {
            x: -700,
            duration: 1
        }
    )


    gsap.from(
        ".circle-main",
        {
            y: -800,
            duration: 1
        }
    )


    gsap.from(
        ".inner-circle",
        {
            x: -700,
            duration: 1
        }
    )


    gsap.from(
        ".guitar",
        {
            y: 700,
            duration: 1
        }
    )


    gsap.from(
        ".music-circle",
        {
            x: 950,
            duration: 1
        }
    )


    return 0;
}








