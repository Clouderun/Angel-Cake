const imgs = [
    '/assets/bowl w mix.png',
    '/assets/bowwithmixand spoon.png',
    '/assets/cake base.png',
    '/assets/angelcake pixel.png',
    '/assets/angelcakewithwings.png'
];

let angelimgcontent = document.querySelector('.angelimgcontent');
let angelbutton = document.getElementById('angelbutton');
let angelfinalmsg = document.querySelector('.angelfinalmsg');

//começar com a primeira img
let indexAtual = 0;

function updateImg(){
    //angelimgcontent.style.opacity = 0;
    //angelimgcontent.style.opacity = 1;
    //angelimgcontent.opacity = 0;

    const img = new Image();
    img.src = imgs[indexAtual];

    img.onload = () => {
        angelimgcontent.style.backgroundImage = `url('${imgs[indexAtual]}')`

        //angelimgcontent.style.opacity = 1;
        //angelimgcontent.opacity = 1;
    };
}

updateImg();


angelbutton.addEventListener('click', () => {

    indexAtual++;
    if (indexAtual <= imgs.length) {
        updateImg()
    }

    if (indexAtual === imgs.length - 1) {
        angelbutton.style.display = 'none';
        angelfinalmsg.style.display = 'block';
    }

    

})



