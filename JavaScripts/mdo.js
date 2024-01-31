//Variaveis Globais
var funcionario = []
var counter = 1
quinzenaStart = document.getElementById('setQuiStart')
quinzenaEnd = document.getElementById('setQuiEnd')

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
function onSubmitFuncionario(event){
    event.preventDefault();
    obra=obraInput();
    nome = document.getElementById('name').value;
    funcao = funcaoInput();
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

function funcaoInput(){
    if (document.getElementById('newFuncao').value !=''){
        return document.getElementById('newFuncao').value;
    }else{
        return document.getElementById('funcao').value;
    }
}

function updateTable(){
    quinzena = setQuinzena(document.getElementById('setQuiStart').value, document.getElementById('setQuiEnd').value );
    obra = obraInput() 
    idSetter = obra+quinzena

    console.log(funcionario)
    console.log(obra)
    const tr = document.createElement('tr');
        tr.setAttribute('id','linha'+ counter)
    const tr2 = document.createElement('tr');
        tr2.setAttribute('id','linha'+ idSetter + counter)
            document.getElementById('tablePag').appendChild(tr);
            document.getElementById(idSetter).appendChild(tr2);
    funcionario.forEach(i => {
         const td = document.createElement('td');
            td.innerHTML=i;
                document.getElementById('linha'+counter).appendChild(td);
    });
    funcionario.splice(0,1);
    funcionario.forEach(i => {
        const td = document.createElement('td');
           td.innerHTML=i;
               document.getElementById('linha'+ idSetter + counter).appendChild(td);
   });
    funcionario=[];
    counter++;
    document.getElementById('newObra').value='';
    document.getElementById('name').value = '';
    document.getElementById('pix').value = '';
    document.getElementById('funcao').value = '';
    document.getElementById('newFuncao').value = '';
    document.getElementById('valorDia').value = '';
    document.getElementById('dias').value = '';
    document.getElementById('totalQ').value = '';
    document.getElementById('name').focus();
}

function formatDateInput(dateInput){
    var dateObj = new Date(dateInput + 'T00:00:00');

    var day = dateObj.getDate().toString().padStart(2,'0');
    var month = dateObj.toLocaleString('en-GB',{month: '2-digit'});
    var year = dateObj.getFullYear().toString().slice(-2);

    return day +  '-' + month + '-' + year
}

function setQuinzena(quinStart,quinEnd){
    const start = formatDateInput(quinStart);
    const end = formatDateInput(quinEnd);
    const quinzena = start + " - " + end 
    return quinzena
}
function setQuinzenaGeral(quinStart,quinEnd){
    const quinzena = setQuinzena(quinStart,quinEnd);
    const quinzenaTh = document.getElementById('thQuinzenaGeral')
        quinzenaTh.innerHTML= "Quinzena: " + quinzena 
}

//Automação de tabelas por obra
function newTable(){
    console.log('Inside newTable function');
    quinzena = setQuinzena(document.getElementById('setQuiStart').value, document.getElementById('setQuiEnd').value );
    obra = obraInput() 
    checker = document.getElementById('newObra').value;
    idSetter = obra+quinzena
    if (checker !='' || quinzenaStart.value !== quinzenaStart.defaultValue || quinzenaEnd.value !== quinzenaEnd.defaultValue){
        const optObra = document.createElement('option');
            optObra.setAttribute('value', obra);
            optObra.innerHTML = obra;
                document.getElementById('obraSelect').appendChild(optObra)
        const table = document.createElement('table');
            table.setAttribute('id', idSetter)
            table.setAttribute('name', idSetter)
                document.getElementById('tables').appendChild(table)
        const newTrHead = document.createElement('tr');
            newTrHead.setAttribute('id', idSetter + "headObra")
                document.getElementById(idSetter).appendChild(newTrHead)
        const thTitulo = document.createElement('th');
            thTitulo.setAttribute('colspan',"4")
            thTitulo.innerHTML = obra
                document.getElementById(idSetter+'headObra').appendChild(thTitulo)
        const thQuinzena = document.createElement('th');
            thQuinzena.setAttribute("colspan","4")
            thQuinzena.innerHTML = "Quinzena: " + quinzena
                document.getElementById(idSetter+'headObra').appendChild(thQuinzena)
        const newTr = document.createElement('tr');
            newTr.setAttribute('id', idSetter + "headRow" )    
                document.getElementById(idSetter).appendChild(newTr);

        const nome = document.createElement('th');
            nome.setAttribute('id',`${idSetter}: nome`)
            nome.innerHTML = 'Nome'
                document.getElementById(idSetter+'headRow').appendChild(nome);
        const funcao = document.createElement('th');
            funcao.setAttribute('id',`${idSetter}: funcao`)
            funcao.innerHTML = 'Função'
                document.getElementById(idSetter+'headRow').appendChild(funcao);
        const diaria = document.createElement('th');
            diaria.setAttribute('id',`${idSetter}: diaria`)
            diaria.innerHTML = 'Valor Diária'
                document.getElementById(idSetter+'headRow').appendChild(diaria);
        const dias = document.createElement('th');
            dias.setAttribute('id',`${idSetter}: dias`)
            dias.innerHTML = 'Dias Trabalhados'
                document.getElementById(idSetter+'headRow').appendChild(dias);
        const totalQ = document.createElement('th');
            totalQ.setAttribute('id',`${idSetter}: totalQ`)
            totalQ.innerHTML = 'Total Quinzena'
                document.getElementById(idSetter+'headRow').appendChild(totalQ);
        const pix = document.createElement('th');
            pix.setAttribute('id',`${idSetter}: pix`)
            pix.innerHTML = 'Pix'
                document.getElementById(idSetter+'headRow').appendChild(pix);
        const tipoPix = document.createElement('th');
            tipoPix.setAttribute('id',`${idSetter}: `)
            tipoPix.innerHTML = 'Tipo de pix'
                document.getElementById(idSetter+'headRow').appendChild(tipoPix);

        const br = document.createElement('br');
        const br2 = document.createElement('br');
            document.getElementById(idSetter).insertAdjacentElement('afterend', br)
            document.getElementById(idSetter).insertAdjacentElement('afterend', br2)
    }else {
        return null;
    }
}

//json storaging

//Funções onSubmit
function submitTable(event){
    onSubmitFuncionario(event);
    newTable();
    updateTable();
    setQuinzenaGeral(quinzenaStart.value,quinzenaEnd.value)
}