/* -- Terceiro Exercício -- */
let nome = window.prompt("Qual seu nome?");
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras <br>`);
document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()} <br>`);
document.write(`Seu nome em minúsculo é ${nome.toLowerCase()}`);

/* -- Operações com Números -- */
/* 
    - .toFixed(N) - N é o número de casas após a vírgula
     - .toFixed(2).replace('.', ',') - substitui ponto por vírgula
     - .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) - Formatação como moeda
*/
