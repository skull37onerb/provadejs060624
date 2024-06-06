let NomeDaPessoa=document.getElementById("breno")
let texto =document.getElementById("textoEnvio")


function Enviar()
{
    texto.innerHTML ="Olá, " + NomeDaPessoa.value + "Tudo Bem?"
}

let metros1 = document.getElementById("metros1");
let Resultado = document.getElementById("Resultado");

function somar()
{
    Resultado.innerHTML = (parseInt(metros1.value) * 100);
}

let numero = document.getElementById("numero");
let proximo = document.getElementById("proximo");
let anterior = document.getElementById("anterior");

function calcular()
{
   proximo.innerHTML = parseInt(numero.value) + 1;
   anterior.innerHTML = parseInt(numero.value) - 1;
}

let a =document.getElementById("numero1");
let b =document.getElementById("numero2");
let r =document.getElementById("maior");

function Comparar()
{
    if(a.numero1 <= b.numero2)

    {
        maior.innerHTML = "errou";
        
    }
    
    else
    
        { 
           maior.innerHTML = "tá certo";
        }
}

console.clear()
var c = 100;
while (c >= 0)
    {
        console.log(c)
        c = c - 10;
    }

    let Numero = document.getElementById("Numero")
    let resposta = document.getElementById("resposta")

    function Bora()
    {

        
        if(Numero.value ==1250)
            {
                resposta.innerHTML = "Arcetou misseravel"
            }
            else
            {
                resposta.innerHTML = "Tente Novamente seu burro!"
            }
        }

        console.clear
        var c = 1;
        while (c <=100)
            {
                console.log(c)
                c = c + 1;
            }

            console.clear
            var c = 0;
            while (c <=50)
                {
                    console.log(c)
                    c = c + 5;
                }