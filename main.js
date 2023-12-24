//Variaveis Globais


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
    obra=obraInput();
    nome = document.getElementById('name').value;
    funcao = document.getElementById('funcao').value;
    valDia = document.getElementById('valorDia').value;
    dias = document.getElementById('dias').value;
    totalQ = document.getElementById('totalQ').value;
    pix = document.getElementById('pix').value;
    tipoPix = document.querySelector('input[name="tipoPix"]:checked').value;
        funcionario.push(obra);
        funcionario.push(nome);
        funcionario.push(funcao);
        funcionario.push(valDia);
        funcionario.push(dias);
        funcionario.push(totalQ);
        funcionario.push(pix);
        funcionario.push(tipoPix);
    console.log(funcionario)
}

function obraInput(){
    if (document.getElementById('newObra').value !=''){
        return document.getElementById('newObra').value;
    }else{
        return document.getElementById('obraSelect').value;
    }
}

function updateTable(){
    console.log(funcionario)
    console.log(obraInput())
    const tr = document.createElement('tr');
        tr.setAttribute('id','linha'+ counter)
    const tr2 = document.createElement('tr');
        tr2.setAttribute('id','linha'+ obraInput() + counter)
            document.getElementById('tablePag').appendChild(tr);
            document.getElementById(obraInput()).appendChild(tr2);
    funcionario.forEach(i => {
         const td = document.createElement('td');
            td.innerHTML=i;
                document.getElementById('linha'+counter).appendChild(td);
    });
    funcionario.splice(0,1);
    funcionario.forEach(i => {
        const td = document.createElement('td');
           td.innerHTML=i;
               document.getElementById('linha'+ obraInput() + counter).appendChild(td);
   });
    funcionario=[];
    counter++;
    document.getElementById('newObra').value='';
    document.getElementById('name').value = '';
    document.getElementById('pix').value = '';
    document.getElementById('funcao').value = '';
    document.getElementById('valorDia').value = '';
    document.getElementById('dias').value = '';
    document.getElementById('totalQ').value = '';
    document.getElementById('name').focus();
}

//Automação de tabelas por obra
function newTable(){
    console.log('Inside newTable function');
    obra = document.getElementById('newObra').value;
    if (obra !=''){
        const optObra = document.createElement('option');
            optObra.setAttribute('value', obra);
            optObra.innerHTML = obra;
                document.getElementById('obraSelect').appendChild(optObra)
        const table = document.createElement('table');
            table.setAttribute('id', obra)
            table.setAttribute('name', obra)
                document.getElementById('tables').appendChild(table)
        const newTrHead = document.createElement('tr');
            newTrHead.setAttribute('id', obra + "headObra")
                document.getElementById(obra).appendChild(newTrHead)
        const th = document.createElement('th');
            th.setAttribute('colspan',"8")
            th.innerHTML = obra
                document.getElementById(obra+'headObra').appendChild(th)
        const newTr = document.createElement('tr');
            newTr.setAttribute('id', obra + "headRow" )    
                document.getElementById(obra).appendChild(newTr);

        const nome = document.createElement('th');
            nome.innerHTML = 'Nome'
                document.getElementById(obra+'headRow').appendChild(nome);
        const funcao = document.createElement('th');
            funcao.innerHTML = 'Função'
                document.getElementById(obra+'headRow').appendChild(funcao);
        const diaria = document.createElement('th');
            diaria.innerHTML = 'Valor Diária'
                document.getElementById(obra+'headRow').appendChild(diaria);
        const dias = document.createElement('th');
            dias.innerHTML = 'Dias Trabalhados'
                document.getElementById(obra+'headRow').appendChild(dias);
        const totalQ = document.createElement('th');
            totalQ.innerHTML = 'Total Quinzena'
                document.getElementById(obra+'headRow').appendChild(totalQ);
        const pix = document.createElement('th');
            pix.innerHTML = 'Pix'
                document.getElementById(obra+'headRow').appendChild(pix);
        const tipoPix = document.createElement('th');
            tipoPix.innerHTML = 'Tipo de pix'
                document.getElementById(obra+'headRow').appendChild(tipoPix);

        const br = document.createElement('br');
        const br2 = document.createElement('br');
            document.getElementById(obra).insertAdjacentElement('afterend', br)
            document.getElementById(obra).insertAdjacentElement('afterend', br2)
    }else {
        return null;
    }
}

//Funções onSubmit
function submitTable(event){
    onSubmitFuncionario(event);
    newTable();
    updateTable()
}