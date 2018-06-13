var nome = [], cpf = [], datnasc = [], tel = [], conta = [], saldo = [];


// Aqui começa a função para salvar os valores digitados pelo usuario.
function submeter() {
				nome.push(document.getElementById("nome").value);
				cpf.push(document.getElementById("cpf").value);
				datnasc.push(document.getElementById("datnasc").value);
				tel.push(document.getElementById("tel").value);
				conta.push(document.getElementById("conta").value);
				saldo.push("0");
			
				
				
				
				localStorage.setItem("nome", JSON.stringify(nome));
				localStorage.setItem("cpf", JSON.stringify(cpf));
				localStorage.setItem("datnasc", JSON.stringify(datnasc));
				localStorage.setItem("tel", JSON.stringify(tel));
				localStorage.setItem("conta", JSON.stringify(conta));
				localStorage.setItem("saldo", JSON.stringify(saldo));
				
							
			} 
// Limpando campos.			
function limparForm(){
			    document.getElementById("nome").value = "";
				document.getElementById("cpf").value = "";
				document.getElementById("datnasc").value = "";
				document.getElementById("tel").value = "";
				document.getElementById("conta").value = "";
			}

			
			
// validando campo nome.			
function testeNome() {
	var nome = document.getElementById("nome").value;
	if(nome.match(['[-@!#$;:?|\?=,./{}"<>()%¨&*+_´`^~]'])) {
		// testa se o campo nome possui apenas letras e/ou numeros.
		alert("Por favor, insira somente letras e números");
		document.getElementById("nome").value = "";
}
}
// validando campo tel.
function testeTel(){
			var tel = document.getElementById("tel").value;
			if(isNaN(tel)){
			//testa se o campo tel possui apenas numeros.
			alert("O campo telefone só aceita numeros");
			document.getElementById("tel").value = "";
			}

}
// validando campo conta.
function testeConta(){
			var conta = document.getElementById("conta").value;
			if(isNaN(conta)){
			//testa se o campo conta possui apenas numeros.
			alert("O campo conta só aceita numeros");
			document.getElementById("conta").value = "";
			}

}

// validando campo datnasc.
/*function testeData(){
			var data = document.getElementById("datnasc").value;
			if(isNaN(data)){
			//testa se o campo datnasc possui apenas numeros.
			alert("O campo data só aceita numeros");
			document.getElementById("datnsc").value = "";
			}

}*/

// validando campo cpf.
function validarCPF(){
			var cpf = document.getElementById("cpf").value;
			if(isNaN(cpf)){
			//testa se o campo cpf possui apenas numeros.
			alert("O campo CPF só aceita numeros");
			document.getElementById("cpf").value = "";
			}
			}
/*			
function validarNumConta(){
			var numConta = document.getElementById("numConta").value;
			if(isNaN(numConta)){
			
			alert("O campo de conta só aceita numeros");
			document.getElementById("numConta").value = "";
			}
			}*/
			
// validar campo valor.
function validarValor(){
			var valor = document.getElementById("valor").value;
			if(isNaN(valor)){
			//testa se o campo valor possui apenas numeros.
			alert("O campo de valor só aceita numeros");
			document.getElementById("valor").value = "";
			}
			}
			
// listando contas ja cadastradas
function listarContas(){
							
			var table = document.getElementById("tabConts");
			
			if(localStorage.getItem("conta") === null){
			var conta = [];
			conta = conta.push("0");
			
			}
			else{
			var nome = JSON.parse(localStorage.getItem("nome"));
			var cpf = JSON.parse(localStorage.getItem("cpf"));
			var datnasc = JSON.parse(localStorage.getItem("datnasc"));
			var tel= JSON.parse(localStorage.getItem("tel"));
			var conta = JSON.parse(localStorage.getItem("conta"));
			var saldo = JSON.parse(localStorage.getItem("saldo"));
			var del;
			}
			table.innerHTML = "";
			var topo = table.insertRow();
			
			var topoConta = topo.insertCell();
			var topoNome = topo.insertCell();
			var topoTel = topo.insertCell();
			var topoCpf = topo.insertCell();
			var topoDatNasc = topo.insertCell();
			var topoSaldo = topo.insertCell();
			var topoDel = topo.insertCell();
			
			
			topoConta.innerHTML = "Conta";
			topoNome.innerHTML = "Nome";
			topoCpf.innerHTML = "CPF";
			topoDatNasc.innerHTML = "Data de nascimento";
			topoTel.innerHTML = "Telefone";
			topoSaldo.innerHTML = "Saldo";
			
		for (i = 0; i < conta.length; i++){
			
			var infor =	table.insertRow();
			var inforConta = infor.insertCell();
			var inforNome = infor.insertCell();
			var inforTel = infor.insertCell();
			var inforCpf = infor.insertCell();
			var inforDatNasc = infor.insertCell();
			var inforSaldo = infor.insertCell();
			var inforDel = infor.insertCell();
			
			
			inforConta.innerHTML = conta[i].toString();
			inforNome.innerHTML = nome[i].toString();
			inforCpf.innerHTML = cpf[i].toString();
			inforDatNasc.innerHTML = datnasc[i].toString();
			inforTel.innerHTML = tel[i].toString();
			inforSaldo.innerHTML = saldo[i].toString();
			
			var delConta = conta[i];
			inforDel.innerHTML = "<input type='button' value ='deletar' onclick = 'deletar("+delConta+");listarContas()'>";
		}

			
}

// funçao despositar em uma conta 
function depositar(){	
		var saldo = JSON.parse(localStorage.getItem('saldo'));
		var numConta = document.getElementById("numConta").value;
		var Valor = document.getElementById("valor").value;


		if(localStorage.getItem('conta') === null){
		var conta = [];
		conta = conta.push("0");
} else{
		var conta = JSON.parse(localStorage.getItem("conta"));
		var saldo = JSON.parse(localStorage.getItem("saldo"));
		
}


for(i = 0; i < conta.length; i++){
// percorre o vetor de conta
if(conta[i] == numConta){
	// adiciona um novo valor a posiçao do vetor
	saldo[i] = parseInt(parseInt(saldo[i]) + parseInt(Valor));

}

}
limparContaValor();
localStorage.setItem("saldo", JSON.stringify(saldo));

}

// limpar campos onde sao digitados o valor de saque ou deposito.
function limparContaValor(){
document.getElementById("valor").value = "";
document.getElementById("numConta").value = "";
}



// funçao de sacar um valor disponivel em uma conta
function sacar() {
	var saldo = JSON.parse(localStorage.getItem('saldo'));
	var contaSac = document.getElementById("numConta").value;
	var valor = document.getElementById("valor").value;	
	
	if (localStorage.getItem('conta') === null) {	
		//Caso o localStorage ainda esteja nulo, adiciona-se um valor a variável conta
		//para que esta não seja 'undefined'		
		var conta = [];
		conta = conta.push('Item')
	} else {			
		var conta = JSON.parse(localStorage.getItem('conta'));
		var saldo = JSON.parse(localStorage.getItem('saldo'));
	}
	
	//Percorre o vetor de conta					
	for (i = 0; i < conta.length; i++) {
		//Verifica se alguma conta é a que o usuário digitou
		if (conta[i] == contaSac) {
			
			
			saldo[i] = parseInt(parseInt(saldo[i]) - parseInt(valor));
				if(saldo[i] >= -5000){
				// verifica se ha saldo disponivel para saque na conta selecionada.
				localStorage.setItem("saldo", JSON.stringify(saldo));
				limparContaValor();	
				} else{
				alert("o saque no valor de: "+ parseInt(valor) +" \nnao pode ser realizado, pois o saldo seria: " +saldo[i] +"\n mas o saldo não pode ser menor que -5000" );
				}
		}
	}
	
}


// aqui deleta contas existentes selecionada.
function deletar(delConta) {
			var nome = JSON.parse(localStorage.getItem("nome"));
			var cpf = JSON.parse(localStorage.getItem("cpf"));
			var datnasc = JSON.parse(localStorage.getItem("datnasc"));
			var tel = JSON.parse(localStorage.getItem("tel"));
			var conta = JSON.parse(localStorage.getItem("conta"));
			var saldo = JSON.parse(localStorage.getItem("saldo"));
	
	
			
	//percorre o vetor conta.				
	for (i = 0; i < conta.length; i++) {
		if (conta[i] == delConta) {
			if(saldo[i] == 0){
			saldo.splice(i,1);	
			nome.splice(i,1);
			cpf.splice(i,1);
			datnasc.splice(i,1);
			tel.splice(i,1);
			conta.splice(i,1);
			alert('conta: '+delConta+' Removida')
			
				localStorage.setItem("nome", JSON.stringify(nome));
				localStorage.setItem("cpf", JSON.stringify(cpf));
				localStorage.setItem("datnasc", JSON.stringify(datnasc));
				localStorage.setItem("tel", JSON.stringify(tel));
				localStorage.setItem("conta", JSON.stringify(conta));
				localStorage.setItem("saldo", JSON.stringify(saldo));
			
		}
		//testa se o saldo da conta é igual a 0, caso seja, a mesma não possa ser deletada.
		if(saldo[i] > 0){
		alert('A conta possui o saldo positivo! \n Realize um saque no valor de: '+ saldo[i]+' para poder remover a conta: '+ delConta)
		} if(saldo[i] < 0){
		alert('A conta possui o saldo negativo! \n Realize um deposito no valor de: '+ -saldo[i]+' para poder remover a conta: '+ delConta)
		
		}
		}
	}
	
					
}



