# Na Mosca — jornada e UX/UI

> O jogo é sobre um chute, uma revelação e aquela sensação de “caralho, eu quase acertei”. A interface tem que servir isso rápido e bonito. Se parecer prova, planilha ou dashboard, cagamos na ideia.

## 1. A ideia visual em uma frase

**Pergunta grande, número gigante, suspense curto e revelação gostosa.**

Tudo gira em torno desse ciclo:

**leu → chutou → descobriu → comparou → quis outra.**

## 2. O que a experiência precisa provocar

O jogador deve passar por:

1. **essa eu acho que sei mais ou menos**;
2. **vou mandar esse número aqui**;
3. **puta merda, quase** ou **fui parar em outro planeta**;
4. **quero ver a próxima**;
5. **preciso mandar essa para alguém**.

O jogo vive do “só mais uma”.

## 3. Princípios de UX

### Pergunta manda na tela

Nada compete visualmente com ela.

### O palpite precisa ser prazeroso

O número digitado deve ficar grande e claro. A unidade nunca pode ficar escondida.

### A revelação vale mais que a resposta

Mostrar “78.838” sozinho é brochante.

Precisamos mostrar:

- onde você chutou;
- onde estava a resposta;
- quão perto ficou;
- quem chegou mais perto;
- uma curiosidade curta.

### Sem cara de quiz escolar

Não usar estética de prova, checkbox de apostila nem “resposta correta/incorreta” como centro da experiência.

Aqui quase sempre existe **proximidade**, não apenas certo ou errado.

### Um objetivo por tela

Pergunta. Palpite. Revelação. Ranking. Próxima.

Só isso já segura o jogo.

## 4. Estrutura geral

### Fora da partida

- Home
- Partida rápida
- Criar sala
- Entrar em sala
- Como jogar

### Durante partida

Fluxo linear, sem menu fixo enchendo o saco.

### Solo

**Home → Jogar agora → Pergunta → Palpite → Revelação → Pontos → Próxima → Resultado final → Jogar de novo/Compartilhar.**

### Multiplayer

**Home → Criar/Entrar → Sala → Pergunta → Palpites → Revelação → Ranking → Próxima → Placar final → Revanche.**

## 5. Tela 1 — Home

### Objetivo

Colocar o jogador numa pergunta o mais rápido possível.

### Estrutura

Marca no topo.

Centro:

- frase curta;
- CTA principal **Jogar agora**;
- CTA secundário **Jogar com amigos**.

Abaixo:

- **Entrar em sala**;
- **Como joga?**.

### Copy sugerida

**Você não precisa saber. Só precisa chegar perto.**

“Chuta um número. Descobre o estrago.”

### O que não entra

- feed na home;
- login obrigatório;
- ranking mundial gigante;
- catálogo com 30 modos bloqueando o jogo;
- banner publicitário antes da primeira pergunta.

## 6. Tela 2 — Como jogar

Três passos, sem palestra:

1. leia a pergunta;
2. chute um número;
3. quanto mais perto, mais pontos.

Fechar com:

**Pronto. Não tem pegadinha. Vai chutar.**

CTA: **Jogar agora**.

## 7. Tela 3 — Preparação da partida solo

Idealmente nem existe como tela separada.

Ao tocar **Jogar agora**, a primeira pergunta já entra.

Pode haver uma transição curtíssima:

**10 perguntas. 10 chutes. Bora.**

Nada de pedir categoria, dificuldade, avatar, signo e tipo sanguíneo antes de jogar.

## 8. Tela 4 — Pergunta / Palpite

Essa é a tela principal do produto.

### Hierarquia

Topo discreto:

- pergunta 3 de 10;
- pontuação atual;
- cronômetro.

Centro:

- categoria pequena;
- pergunta em destaque;
- campo numérico grande;
- unidade sempre visível.

Rodapé:

- CTA **Mandar palpite**.

### Exemplo

**Mundo · 3/10**

# Quantos quilômetros tem a Muralha da China?

**[ 8.000 ] km**

**Mandar palpite**

### Campo numérico

- teclado numérico;
- aceitar separador de milhar;
- decimal quando a pergunta permitir;
- formatar número enquanto digita sem mudar o valor;
- botão deve ficar óbvio quando a resposta está válida.

## 9. Cronômetro

No solo, 20 segundos padrão.

Nos últimos 5 segundos, a urgência aumenta visualmente de forma discreta.

Não precisa tocar sirene de ataque aéreo.

Em acessibilidade/redução de movimento, usar mudança textual clara.

Quando termina sem resposta:

**Tempo. Essa passou voando.**

0 ponto e segue a vida.

## 10. Depois de enviar

O palpite é travado.

Mostrar por um instante:

**Você foi de 8.000 km.**

No solo, pode seguir para revelação quase imediatamente.

No multiplayer:

**Palpite enviado. 5 de 7 já chutaram.**

Nunca mostrar os números dos outros antes da revelação.

## 11. Tela 5 — Revelação

Essa é a tela que precisa ser mais gostosa do jogo inteiro.

### Sequência ideal

1. seu palpite aparece;
2. entra uma régua/linha visual;
3. resposta correta é revelada;
4. distância entre os dois fica visível;
5. pontos entram;
6. curiosidade aparece.

### Exemplo

**Seu chute:** 8.000 km

**Resposta:** 21.196 km

**Erro:** 62,3%

**+50 pontos**

“Sim, é muito maior do que parece no mapa.”

### Tom

A copy reage ao desempenho:

#### Na Mosca

**NA MOSCA!**

“Acertou exatamente. Pode ficar insuportável por alguns minutos.”

#### Muito perto

**Porra, quase.**

#### Razoável

**Foi um chute digno.**

#### Muito longe

**Você mandou o palpite para outro CEP.**

Não humilhar gratuitamente nem repetir a mesma piada em toda rodada.

## 12. A régua visual

É o principal elemento gráfico da revelação.

Ela mostra:

- palpite(s);
- resposta correta;
- distância relativa.

No multiplayer, cada pessoa ocupa uma marca com nome/apelido.

### Cuidado importante

Quando existe diferença absurda de escala, uma régua linear pode jogar quase todo mundo no mesmo pixel.

A implementação visual pode usar escala adaptativa ou transformação que preserve leitura, mas precisa deixar claro que é uma representação comparativa, não uma régua científica exata.

Nada de fazer o usuário interpretar gráfico de mercado financeiro no meio do jogo.

## 13. Tela 6 — Pontuação da rodada

No solo, pode ser integrada à revelação.

Mostrar:

- pontos ganhos;
- total acumulado;
- classificação rápida de proximidade.

CTA principal:

**Próxima**.

A ação deve ficar alcançável com o polegar.

## 14. Tela 7 — Criar sala

### Objetivo

Criar uma partida social em segundos.

Opções:

- 5 ou 10 perguntas;
- categorias;
- tempo: 10 / 20 / 30 segundos.

Defaults já selecionados.

CTA:

**Criar sala**.

## 15. Tela 8 — Entrar em sala

Campos:

- código;
- apelido.

Por link, código já resolvido.

CTA:

**Entrar**.

Erros:

- “Essa sala já acabou.”
- “Código não bateu. Confere aí.”
- “A sala está cheia.”

## 16. Tela 9 — Sala de espera

Host:

- código;
- compartilhar;
- jogadores conectados;
- resumo das regras;
- CTA **Começar**.

Convidados:

- jogadores;
- “Esperando começar”.

Nada de exigir conta.

## 17. Tela 10 — Pergunta multiplayer

Mesma base do solo.

Diferenças:

- todos recebem a mesma pergunta;
- progresso de respostas pode aparecer depois do envio;
- nenhum palpite de outro jogador é revelado antes do fim.

Isso permite reaproveitar estrutura de tela e evita construir dois produtos separados.

## 18. Tela 11 — Revelação multiplayer

Aqui o jogo cresce.

Todos os palpites entram visualmente na régua.

A resposta correta aparece depois.

Destaques:

- mais perto;
- Na Mosca, se houver;
- maior viagem da rodada;
- pontos de cada um.

### Exemplo

**Resposta: 78.838**

Ana — 80.000 — **quase beijou a mosca**

Luiz — 120.000

Pedro — 1.000.000 — **foi buscar a resposta em outro planeta**

A brincadeira precisa continuar legível mesmo com 10 jogadores.

## 19. Tela 12 — Ranking entre rodadas

Curta e direta.

Mostrar top 3 + posição dos demais.

CTA/avanço:

**Próxima pergunta**.

Pode avançar automaticamente depois de poucos segundos no multiplayer, com host tendo controle quando necessário.

Não deixar ranking ficar 20 segundos parado enquanto todo mundo quer jogar.

## 20. Tela 13 — Resultado final solo

Precisa dar vontade de compartilhar.

Mostrar:

- pontuação total;
- classificação divertida;
- melhor resposta;
- pior desastre;
- média de erro;
- quantidade de Na Mosca.

Exemplo:

# 7.250 pontos

**Perigosamente bom.**

“Seu melhor chute errou por 0,8%. O pior a gente prefere não comentar.”

CTAs:

- **Jogar de novo**;
- **Compartilhar**.

## 21. Tela 14 — Resultado final multiplayer

Mostrar:

- campeão;
- ranking completo;
- quantidade de Na Mosca;
- mais preciso;
- maior desastre;
- estatística engraçada da partida.

CTAs:

- **Revanche**;
- **Compartilhar resultado**;
- **Sair**.

### Copy possível

**Ana levou essa. Pedro errou 14 milhões numa pergunta e também merece reconhecimento.**

## 22. Compartilhamento

O card precisa fazer sentido sem contexto.

### Solo

- pontuação;
- pergunta ou estatística marcante;
- CTA/link para tentar.

### Multiplayer

- campeão;
- frase engraçada;
- link para nova partida/desafio.

Exemplo:

**A resposta era 42 mil. Eu chutei 41.700. Você chega mais perto?**

Esse compartilhamento é mais forte do que “venha conhecer nosso jogo inovador”.

## 23. Desafio do Dia — direção futura

Quando entrar, deve parecer extensão natural do modo solo.

Home pode ganhar um bloco discreto:

**Desafio de hoje**

“5 perguntas iguais pra todo mundo.”

Não precisa transformar a home num calendário de hábito com 14 selos e foguinhos.

## 24. Estados de erro e conexão

### Caiu no multiplayer

**Sua internet deu uma tossida. Estamos te colocando de volta.**

Se perder a rodada, volta na próxima.

### Pergunta falhou

O sistema pula a pergunta sem penalizar:

**Essa pergunta deu ruim. Próxima.**

### Sala morreu

**Essa sala já acabou. Bora criar outra?**

## 25. Direção visual

### Personalidade

Leve, afiada, contemporânea e com cara de jogo adulto/casual.

Não infantilizar com troféu dourado em tudo. Não usar visual de cassino.

### Layout

- muito espaço vazio;
- pergunta como elemento dominante;
- número grande;
- poucas superfícies;
- quase nenhum card quando não precisa;
- botões largos e claros.

### Tipografia

Números merecem tratamento especial.

Uma fonte com algarismos bonitos, legíveis e estáveis ajuda muito.

Títulos podem ter mais personalidade, mas perguntas precisam ser lidas sem esforço.

### Cor

A paleta deve permitir estados de proximidade sem depender exclusivamente de vermelho/verde.

Precisamos de:

- fundo;
- superfície;
- ação principal;
- destaque “Na Mosca”;
- estados de proximidade;
- texto primário/secundário.

## 26. Movimento

Animação vale principalmente na revelação.

Usar em:

- régua aparecendo;
- marcador de palpite;
- resposta chegando;
- pontos contando;
- Na Mosca;
- troca de posição no ranking.

Não animar toda porra da interface só porque podemos.

A pessoa deve conseguir jogar rápido mesmo depois da vigésima pergunta.

## 27. Som e vibração

Opcional.

Pode usar:

- feedback tátil ao confirmar palpite;
- impacto curto em Na Mosca;
- som discreto na revelação;
- alerta leve nos segundos finais.

Respeitar modo silencioso e preferência do usuário.

## 28. Acessibilidade

- contraste suficiente;
- não depender só de cor;
- teclado e leitores de tela no web;
- tamanhos de toque confortáveis;
- redução de movimento;
- número e unidade lidos corretamente;
- cronômetro textual;
- formatação numérica compatível com localidade;
- perguntas longas sem cortar conteúdo importante.

## 29. Localização de números

Isso aqui importa pra caralho num jogo numérico.

No Brasil:

- milhar: ponto;
- decimal: vírgula.

A interface precisa exibir números de acordo com a localidade, enquanto o sistema trabalha com valor numérico normalizado internamente.

O jogador não pode perder uma rodada porque digitou `1.500,5` e o sistema resolveu ler outra coisa.

## 30. Responsividade

Mobile-first, retrato.

Desktop deve centralizar o jogo numa área confortável.

No multiplayer em tela grande, pode haver mais espaço para a régua e ranking, mas sem criar uma UX diferente que precise ser mantida separadamente.

## 31. Tom de voz

Curto, divertido e sem parecer locutor de programa infantil.

### Bom

- “Manda teu chute.”
- “Porra, quase.”
- “Foi parar longe.”
- “Na Mosca.”
- “Próxima.”

### Ruim

- “Selecione sua estimativa numérica abaixo.”
- “Parabéns por completar esta questão.”
- “Você está progredindo na sua jornada de conhecimento.”

Ninguém pediu uma jornada. A pessoa pediu pra chutar um número.

## 32. Telas obrigatórias do MVP

1. Home
2. Como jogar
3. Pergunta/palpite solo
4. Revelação solo
5. Resultado final solo
6. Criar sala
7. Entrar em sala
8. Sala de espera
9. Pergunta multiplayer
10. Espera de jogadores
11. Revelação multiplayer
12. Ranking entre rodadas
13. Resultado final multiplayer
14. Estados de erro/reconexão

Várias delas devem compartilhar o mesmo esqueleto visual.

## 33. Componentes reaproveitáveis

- botão primário;
- botão secundário;
- input numérico;
- pergunta;
- unidade;
- cronômetro;
- progresso da partida;
- marcador de palpite;
- régua de revelação;
- ranking;
- placar;
- código de sala;
- jogador/lista;
- feedback curto/toast.

## 34. O que o protótipo precisa provar

Antes de código bonito, o protótipo deve mostrar que:

- dá para chegar à primeira pergunta quase imediatamente;
- a unidade nunca gera dúvida;
- digitar números grandes é confortável;
- a pessoa entende que não precisa saber a resposta exata;
- a revelação faz sentido sem explicação;
- comparar vários jogadores continua legível;
- o botão de próxima não fica escondido;
- o resultado final dá vontade de revanche ou compartilhamento.

Se isso funcionar, temos um jogo.

Se a gente precisar explicar a régua num tutorial de quatro telas, desenhamos a régua errado.