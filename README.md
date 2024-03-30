# TypeScript-DataStructures

Este repositório contém implementações simples de estruturas de dados em TypeScript, e está em constante desenvolvimento, com o objetivo de incluir uma variedade de estruturas de dados úteis.

As três estruturas de dados atualmente presentes são:

1. **Array:** A estrutura mais básica e amplamente utilizada, que oferece acesso rápido aos elementos por meio de seus índices. As arrays são ideais para armazenar coleções de elementos do mesmo tipo e oferecem uma complexidade de tempo de O(1) para acesso direto aos elementos.

2. **Linked List:** Uma estrutura de dados dinâmica que consiste em nós encadeados, onde cada nó contém um valor e uma referência ao próximo nó na lista. As listas encadeadas são eficientes para inserção e exclusão de elementos, especialmente no início, mas têm uma complexidade de tempo de O(n) para acesso aleatório aos elementos.

3. **Árvore Binária de Busca:** Uma estrutura de dados hierárquica em que cada nó possui no máximo dois filhos, e os elementos são organizados de forma que os elementos menores estão à esquerda e os elementos maiores estão à direita. As árvores binárias de busca são eficientes para busca, inserção e exclusão de elementos, oferecendo uma complexidade de tempo médio de O(log n) para essas operações.

## Exemplos de Uso

Aqui estão alguns exemplos de como utilizar as estruturas de dados presentes neste repositório:

### Array

```typescript
const array: string[] = ["Arroz", "Feijão", "Batata", "Macarrão"];
console.log(array[1]); // Saída: Feijão
```

arrays são como uma lista de compra, seus itens são seguidos e sempre um em baixo do outro, o computador armazena as arrays de forma parecida ele vasculha na memoria um espaço livre e seguido para guardar elementos dessa lista.
Os elementos dessa lista podem ter varios formatos como: Strings, Numeros, Objetos, booleanos entre outros. geralmente as arrays são preenchidas com apenas 1 tipo de objeto mas em linguagens como javascript voce pode colocar objetos não relacionados em sequencia

#### Uma array:

dentre as inumeras funções da array existem as principais, pop e push, sendo o push o ato de inserir um elemento na array de forma com que o elemento fique na ultima posição e o pop que como ja diz tira o 1 elemento da array