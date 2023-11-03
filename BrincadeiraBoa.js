//bom felipão aqui chamei ajuda do meu bom amigo RNG porque eu penso ser mais divertido já que sonho em ser game dev preciso saber ter uma mão justa no balanceio para tudo desde cedo
//mas fazer as declarações e criar funções com resultado já conhecido é o necessário pra saber oque está conhecendo , voce é fera !
//eu tentei usar do melhor bom senso pro equilíbrio de ganhos de pdl já que sonho em ser game dev , se tem uma coisa que me frusta a vida toda em jogos
//é o "caguei" ou "não ligo" pra balanceamento do jogo , agora aprendendo a simples lógica da programação criei um certo mmmnh ainda pior pelos jogos que eu jogo
//em saber que uma simples manutenção em números nos códigos e tudo que há no jogo já definido, poderia resolver o balanceamento.

//fiz as variáveis serem rng em vez de definidos
const pontosDeElo = 3;
const headShot = Math.floor(Math.random() * 11) + 1;
const multiKill = Math.floor(Math.random() * 11) + 0.5;
const contadorDeAbates = Math.floor(Math.random() * 25) + 1;

console.log(`Número de abates: ${contadorDeAbates}`);

function upeiPontosDeElo(abates) {
    let pontos = 0;
    if (abates >= 1 && abates <= 25) {
        pontos = abates * pontosDeElo;

        if (abates >= 10) {
            pontos += headShot;
        }
        if (abates >= 5) {
            pontos += multiKill;
        }
    }
    return pontos;
}console.log(`Número de headshots: ${headShot}`);

function gerarDerrotas() {
    return Math.random() > 0.5; // 50% de chance de derrota
}
const sofreuDerrotas = gerarDerrotas();
console.log(`Sofreu derrotas: ${sofreuDerrotas}`);

let pontos = upeiPontosDeElo(contadorDeAbates);
if (sofreuDerrotas) {
    const pontosAntesDasDerrotas = pontos;
    pontos -= 1.5;
    console.log(`Pontos de Elo após sofrer derrotas: ${pontos}`);
} else {
    console.log(`Pontos de Elo sem sofrer derrotas: ${pontos}`);
}

//Case dos elos
let nivelElo;
switch (true) {
    case pontos < 10:
        nivelElo = "Ferro";
        break;
    case pontos >= 11 && pontos <= 20:
        nivelElo = "Bronze";
        break;
    case pontos >= 21 && pontos <= 50:
        nivelElo = "Prata";
        break;
    case pontos >= 51 && pontos <= 80:
        nivelElo = "Ouro";
        break;
    case pontos >= 81 && pontos <= 100:
        nivelElo = "Lendário";
        break;
    default:
        nivelElo = "Imortal";
        break;
}console.log(`Nível de Elo: ${nivelElo}`);


//foi bem mais do mesmo não sei se atende o necessário mas é isso!basicamente em vez de declarar um resultado já conhecido só optei pelas variáveis
//serem voláteis com o rng "que diga-se de passagem adoro" pra ficar mais interativo, a essencia acredito que é a mesma , me corrija qualquer coisa felipão tmj!