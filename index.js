"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = __importStar(require("prompt-sync"));
const prompt = PromptSync();
const nomeAluno = prompt('Digita o nome');
const notasAluno = [];
for (let i = 0; i < 4; i++) {
    const valor = prompt(`Digite a nota ${i + 1} (de 0 a 10)`);
    notasAluno.push(Number(valor));
}
function calcularMedia(nome, notas) {
    const somaNotas = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return {
        nome: nomeAluno,
        notas: notasAluno,
        mediaFinal: somaNotas / 4
    };
}
console.log('Info do aluno');
console.log(calcularMedia(nomeAluno, notasAluno));
