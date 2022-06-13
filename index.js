const arrPhrases = [
    "A persistência é o caminho do êxito.",
    "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
    "Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.",
    "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
    "No meio da dificuldade encontra-se a oportunidade.",
    "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
    "Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.",
    "A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.",
    "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.",
    "É parte da cura o desejo de ser curado.",
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    "O que me preocupa não é o grito dos maus. É o silêncio dos bons.",
    "Imagine uma nova história para sua vida e acredite nela.",
    "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
    "Quando você quer alguma coisa, todo o universo conspira para que você realize o seu desejo.",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
    "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
    "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.",
    "Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante."
];
const phrases = document.querySelector("#phrases");
const button = document.querySelector("#button");

function generatePhrase() {
    // ativa animação do opacity se o valor de phrases não for igual a uma string vazia
    if (phrases !== "") {
        phrases.animate([
            // keyframes
            { opacity: 0 },
            { opacity: 0.9 }
        ], {
            // timing options
            duration: 0700,
            iteration: 5
        })
    }

    button.setAttribute("disabled", true);
    
    // numeros aleatorios
    const randomNum = Math.floor(Math.random() * arrPhrases.length);

    // atribuir valor de uma posição aleatória do array para #phrases
    phrases.innerHTML = "<blockquote>" + arrPhrases[randomNum] + "</blockquote>";

    // setar tempo para desaparecer 
    setTimeout(function(){
        button.removeAttribute("disabled");
    }, 1000);
}