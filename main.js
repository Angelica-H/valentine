// Thay đổi nội dung búc thư ở đây
var letterContent =" 💕 Chúc mừng Valentine, tình yêu của anh! 💕 Cảm ơn em vì đã đến bên anh, yêu thương và đồng hành cùng anh qua những vui buồn của cuộc sống. Em là món quà quý giá nhất mà anh may mắn có được. Không có em, cuộc sống của anh sẽ thật nhạt nhòa và vô vị. Từng khoảnh khắc bên em đều là kỷ niệm đẹp mà anh trân trọng. Nhớ những lần cùng nhau cười đùa, những cái ôm ấm áp, những tin nhắn quan tâm mỗi ngày... tất cả đều làm anh hạnh phúc. Em chính là điều tuyệt vời nhất mà anh có! Chúc em một ngày Valentine tràn ngập niềm vui, hạnh phúc, và luôn rạng rỡ như ánh mặt trời trong tim anh😘🌹 Yêu em thật nhiều! ❤️"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})