const req = require('request')

const baslatalim = (url, qty, ms) => {
    let hata = tamam = 0

    setInterval(_ => {

        for (let i = qty; i--;)
            req(url, hataa => !hataa ? tamam++ : hata++)

        console.log(`sonuclar:' ${ tamam } ${ hata }`)

        hata = tamam = 0

    }, ms)
}

module.exports = baslatalim