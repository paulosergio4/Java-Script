function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 15
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12 ) {
        // Bom Dia !
        img.src = 'fotos/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18 ) {
        //Boa Tarde !
        img.src = 'fotos/tarde.png'
        document.body.style.background = '#c58b63'
    } else {
        // Boa Noite ! 
        img.src = 'fotos/noite.png'
        document.body.style.background = '#342a44'
    }
}
