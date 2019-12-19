export default function(valor = 0){
    let numero = valor.toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
    
}