function contar() {
    let ini = window.document.getElementById('txti')
    let fi = window.document.getElementById('txtf')
    let pass = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fi.value.length == 0 || pass.value.length == 0) {
        window.alert('[ERRO] preencha todos os dados!')
    } else {
        let i = Number(ini.value) 
        let f = Number(fi.value)
        let p = Number(pass.value)
        if (p <= 0) {
            window.alert('Passo invalido, considerando o passo 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = 1; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }   
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

   
} 

}
    
