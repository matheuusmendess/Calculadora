// passo 1 inserir numero digitado no campo resultado e inserir todos juntos

function insert(num)
{
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}

//passo 2 botao para limpar o campo

function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

//passo 3 botao de apagar

function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

// passo 3 botao calcular (=)

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = ""
    }
}
