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
var funcionario = []
var counter = 1

function onSubmitFuncionario(event){
    event.preventDefault();
    nome = document.getElementById('name').value;
    funcao = document.getElementById('funcao').value;
    valDia = document.getElementById('valorDia').value;
    dias = document.getElementById('dias').value;
    totalQ = document.getElementById('totalQ').value;
    pix = document.getElementById('pix').value;
    tipoPix = document.querySelector('input[name="tipoPix"]:checked').value;
        funcionario.push(nome);
        funcionario.push(funcao);
        funcionario.push(valDia);
        funcionario.push(dias);
        funcionario.push(totalQ);
        funcionario.push(pix);
        funcionario.push(tipoPix);
    console.log(funcionario)
}

function updateTable(){
    console.log(funcionario)
    const tr = document.createElement('tr');
        tr.setAttribute('id','linha'+counter)
            document.getElementById('tablePag').appendChild(tr);
    funcionario.forEach(i => {
         const td = document.createElement('td');
            td.innerHTML=i;
                document.getElementById('linha'+counter).appendChild(td);
    });
    funcionario=[];
    counter++;
    document.getElementById('name').value = '';
    document.getElementById('pix').value = '';
    document.getElementById('funcao').value = '';
    document.getElementById('valorDia').value = '';
    document.getElementById('dias').value = '';
    document.getElementById('totalQ').value = '';
    document.getElementById('name').focus();
}

function submitTable(event){
    onSubmitFuncionario(event);
    updateTable();
}