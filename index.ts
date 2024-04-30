import { constants } from 'buffer';
import * as PromptSync from 'prompt-sync'

const prompt = PromptSync();

const nomeAluno = prompt('Digita o nome')

const notasAluno:number[] = []
for (let i = 0; i <4; i++){
    const valor = prompt(`Digite a nota ${i+1} (de 0 a 10)`)
    notasAluno.push(Number(valor))
}

interface alunoMedia{
    nome: string;
    notas: number[];
    mediaFinal: number;
}
function calcularMedia(nome: string,notas: number[]): alunoMedia{
    const somaNotas = notas.reduce((acumulador,valorAtual) => acumulador + valorAtual, 0)
    return {
        nome: nomeAluno,
        notas: notasAluno,
        mediaFinal: somaNotas / 4
    }
}

console.log('Info do aluno')
console.log(calcularMedia(nomeAluno,notasAluno))