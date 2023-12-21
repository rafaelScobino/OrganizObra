//Função input currency e função totalq currency
function numValue(valor){
    valor= valor.replace(/[^\d]/g,'')
        return parseFloat(valor);
}
function formatoMoeda(input) {
    let value = numValue(input.value);
    input.value = (value/100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}
function quinzenaMoeda() {
    let diaria = document.getElementById('valordia').value
        diaria = numValue(diaria)
    let dia = parseFloat(document.getElementById('dias').value)
            total = diaria * dia;
    document.getElementById('totalq').value = (total/100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'})
    }
    



