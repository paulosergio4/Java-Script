function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
           gen = 'Homem' 
           if (idade <= 4 ){
            //bb
            img.setAttribute('src', 'homem-bb.jpg')
           } else if ( idade < 10){
            //criança
            img.setAttribute('src','homem-crianca.jpg')
           } else if (idade < 21 ){
            //jovem
            img.setAttribute('src','homem-jovem.jpg')
           }  else if (idade < 50) {
            //adulto
            img.setAttribute('src','homem-adulto.jpg')
           } else {
            //idoso
            img.setAttribute('src', 'homem-idoso.jpg')
           }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade <= 4 ){
                //bb
                img.setAttribute('src', 'mulher-bb.jpg')
            } else if ( idade < 10){
                //criança
                img.setAttribute('src','mulher-criança.jpg')
            } else if (idade < 21 ){
                //jovem
                img.setAttribute('src','mulher-jovem.jpg')
            }  else if (idade < 50) {
                //adulto
                img.setAttribute('src','mulher-adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}