var container = document.getElementById("parallax-container"),
    waveSrc = [
        "https://res.cloudinary.com/discart/image/upload/v1577214544/Snapchat-1954227206_xyicfy.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214541/Snapchat-1849928628_ubztmc.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214540/Snapchat-1625326414_eaajsv.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214537/Snapchat-1572706768_xqmm0e.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214535/Snapchat-1370964244_l0fg6p.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214533/Snapchat-1221391115_tiy66h.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214531/Snapchat-1019456136_nqurpo.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214529/Snapchat-961810224_jopdta.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214527/Snapchat-641807939_byaezu.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214523/Snapchat-593884616_g6bzdk.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214520/Snapchat-571146920_ihxtrc.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214517/Snapchat-557954182_wyutqq.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214515/Snapchat-493382357_ejlkbv.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214511/Snapchat-480330559_fiol0d.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214509/Snapchat-260478541_gqdkmt.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214506/Snapchat-148067190_teeqjt.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214503/Snapchat-120493549_nxodgw.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214499/Snapchat-10948249_zjtjff.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214495/SAVE_20190519_193713_hfxumg.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214493/SAVE_20190503_094154_ducifp.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214493/received_1375012789320356_jhabx5.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214489/SAVE_20190503_093819_elff5q.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214487/IMG_20190524_163439_113_ieb7rq.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214485/IMG_20191214_115619_234-1_lrmc3u.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214483/IMG_20190526_204605_980_kycjak.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214483/IMG_20191005_212819_768_o7gqus.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214476/IMG_20190517_205142_598_o99jro.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214474/IMG_20190513_235845_sbbgus.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214474/IMG_20190419_222609_973_itranx.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214470/IMG-20190213-WA0009_mulvg5.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214468/IMG-20190124-WA0062_phbklr.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214466/IMG-20190124-WA0020_aaxbbw.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214463/FB_IMG_1557416617969_ye1oa7.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214462/FB_IMG_1557416597674_psaffe.jpg",
        "https://res.cloudinary.com/discart/image/upload/v1577214461/FB_IMG_1548238107922_ch6eze.jpg"
    ],
    waves = [],
    imgLoc = "",

    j = 0;

console.log('Here');


function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function preloadImage(filename) {
    var img = new Image();
    img.onload = function () {
        img.xPlane = getRandomInRange(-500, screenWidth - 500);
        img.yPlane = getRandomInRange(500, 1000);
        img.zPlane = getRandomInRange(300, 2000);
        img.style = "transform: translate3d(" + img.xPlane + "px, " + img.yPlane + "px, -" + img.zPlane + "px)";
        container.appendChild(img);
    };
    imgLoc = "";
    img.src = imgLoc + filename;
    img.alt = "";
    waves[j] = img;
    j++;
}

function loadImages() {
    for (var i = 0; i < waveSrc.length; ++i) {
        var filename = waveSrc[i];
        preloadImage(filename);
    }
}

function moveImages() {
    waves.forEach(function (image) {
        image.yPlane = image.yPlane - 2;
        image.style.cssText = "transform: translate3d(" + image.xPlane + "px, " + image.yPlane + "px,  -" + image.zPlane + "px); z-index: " + image.zIndex;
    });
    window.requestAnimationFrame(moveImages);
}

var perspImages = container.getElementsByTagName("img"),
    screenWidth = window.screen.width,
    screenHeight = window.screen.height;

loadImages();
window.requestAnimationFrame(moveImages);