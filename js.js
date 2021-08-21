function o1(img1) {
    let clickImg = document.getElementById("img_id");
    let imgs = ["https://www.w3schools.com/w3images/tech_mic.jpg", "https://www.w3schools.com/w3images/tech_phone.jpg", "https://www.w3schools.com/w3images/tech_drone.jpg", "https://www.w3schools.com/w3images/tech_sound.jpg", "https://www.w3schools.com/w3images/tech_tablet.jpg", "https://www.w3schools.com/w3images/tech_camera.jpg", "https://www.w3schools.com/w3images/tech_typewriter.jpg", "https://www.w3schools.com/w3images/tech_tableturner.jpg"]
    let tx = ["A microphone", "A phone", "A drone", "Soundbox", "A tablet", "A camera", "A typewriter", "A tableturner"]
    let jsP = document.getElementById("js_p");


    document.getElementById("div_id").style.display = "block";
    clickImg.style="width: auto;";
    

    for(let i = 0; i < imgs.length; i++) {
        if(img1.src === imgs[i]) {
            clickImg.src = img1.src;
            jsP.innerHTML = tx[i];
        }
    }
}

function o2() {
    document.getElementById("div_id").style.display="none"
}

function o3() {
    document.getElementById("sb_id").style.display="none"
}

function o4() {
    document.getElementById("sb_id").style.display="block"
}

function o5() {
    document.getElementById("sb_id").style.display="none"
}