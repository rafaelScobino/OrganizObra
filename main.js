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
    let diaria = document.getElementById('valorDia').value
        diaria = numValue(diaria)
    let dia = parseFloat(document.getElementById('dias').value)
            total = diaria * dia;
    document.getElementById('totalQ').value = (total/100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'})
    }
//Automatizando Tabelas com Inputs - Necessita Otimização
const funcionario = []

function onSubmitFuncionario(){
    nome = document.getElementById('name').value;
    pix = document.getElementById('pix').value;
    tipoPix = document.getElementById('tipoPix').value;
    funcao = document.getElementById('funcao').value;
    valDia = document.getElementById('valorDia').value;
    dias = document.getElementById('dias').value;
    totalQ = document.getElementById('totalQ');

}


