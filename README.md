🧠 Explicação do Código
Esse código simula uma batalha entre Pikachu e Charmander com valores de vida e ataques aleatórios, utilizando JavaScript puro.

🔄 Lógica:
Inicializa as variáveis:

pikavida e charmandervida começam com 80 pontos de vida.

rodada, pikaatk, e charatk começam em 0.

Loop de batalha (while) roda enquanto ambos têm vida maior que 0:

Incrementa a rodada.

Calcula ataques aleatórios:

Pikachu ataca com até 25 de dano.

Charmander ataca com até 18 de dano.

Subtrai os ataques das vidas correspondentes.

Mostra no console o dano causado e a vida restante.

Final do jogo:

Se Pikachu tiver menos vida: Charmander vence.

Se ambos ficarem com 0 ou menos: empate.

Caso contrário: Pikachu vence.

📄 README.md
Aqui está um README.md completo para você usar:

markdown
Copiar
Editar
# 🔥⚡ Batalha Pokémon: Pikachu vs Charmander

Este é um projeto simples em JavaScript que simula uma batalha entre **Pikachu** e **Charmander**, com ataques aleatórios em cada rodada.

## 🎮 Como Funciona

- Cada Pokémon começa com **80 pontos de vida**.
- Pikachu ataca com força aleatória de **0 a 24**.
- Charmander ataca com força aleatória de **0 a 17**.
- A cada rodada:
  - Ambos os Pokémon atacam.
  - O dano é subtraído da vida do oponente.
  - O estado da batalha é exibido no console.
- O jogo termina quando a vida de pelo menos um dos dois chega a 0.

## 🧠 Lógica Básica

```javascript
pikavida = pikavida - danoCharmander;
charmandervida = charmandervida - danoPikachu;
A cada rodada, esse cálculo determina quanto cada Pokémon perde de vida.

📦 Executando
Copie o código JavaScript para um arquivo .js, por exemplo: batalha.js.

Execute o código no navegador (via DevTools) ou usando Node.js:

bash
Copiar
Editar
node batalha.js
🏆 Resultado
Se Pikachu for derrotado primeiro: Charmander vence! 🔥

Se ambos caírem ao mesmo tempo: Empate!

Se Charmander cair primeiro: Pikachu vence! ⚡

✨ Exemplo de Saída
markdown
Copiar
Editar
Estamos na rodada 1
O pikachu recebeu 7 de dano restam 73 de vida⚔️
charmander recebeu 14 de dano restam 66 de vida❤️
------------------------------------------------------------------
...
Pikachu ganhou com um choque do trovão⛈️
