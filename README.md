# TypeScript-DataStructures

tem 3 simples estruturas de dados nesse arquivo e futuramente tera muito mais.

as 3 estruturas de dados são Array que é a mais basica e mais ultilizada, Linked List que é uma "versão melhorada" Da array pois manipula a memoria de um jeito diferente do convencional da array, e uma arvore binaria de busca.


## Array

array é a estrutura mais ultilizada no mundo da programação, ela é basicamente como se fosse uma lista da compras e voce consegue acessar os items da lista pela posição dele.
por exemplo se vc tem uma lista de compras com o seguinte formato:

### Lista de Compras
- 1. Arroz
- 2. Feijão
- 3. Batata
- 4. Macarrão

para acessar o item macarrão vc precisaria fazer isso Lista de Compras[4] o que acessaria o 4° item da lista, obviamente no codigo as arrays começam em 0.
As arrays são muito ultilizadas pois sua leitura é muito rapida, pra quem manja o (O) notation para a leitura da array é O(1) caso saiba o indice do elemento.

exemplo de array no ts 
```ts
const array: string[] = ["Arroz", "Feijão", "Batata", "Macarrão"];
array[1] // Feijão
```

#### Vale Lembrar:
Arrays pode armazenar items com o mesmo tipo. por exemplo uma lista de Strings
como:
```ts
let array: string[] = ["arroz", "feijão", "batata"]
```
E também valores variados como 
```ts
let array: any[]= [null, {red: 1, blue: 0, green: 0}, "Fur"] 
```

### O jeito que arrays funcionam na memoria.

Para acessar um item de uma array utilizamos o seu indice, e isso só funciona pois os valores das arrays são guardados um do lado do outro na memoria. o problema disso é que as vezes não se tem espaços em sequencia de memoria vazia para o tamanho da array, então a array tem que se re alocar para um tamanho de memoria que caiba ela. e quando queremos inserir um item no inicio da array temos que mover toda ela uma casa para o lado.

então quando queremos inserir um item no inicio da array o tempo do codigo vai depender do tamanho da array, se por exemplo demora 1 segundo para qualquer inserção e sua array tem 200 items ira demorar 200 segundos para inserir algo no inicio da array, é claro que esse valor é imaginario ja que para o computador é ultra rapido fazer isso coisa de menos de 0.001 mili segundos.
então as arrays são as mais indicadas para quem quer ler os elementos e não ira ficar alterando muito eles.


