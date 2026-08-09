# Na Mosca — brief do protótipo

> Objetivo: desenhar um protótipo mobile-first que faça a pessoa bater o olho, entender o jogo e querer mandar um chute em poucos segundos. Sem cara de prova, sem dashboard e sem transformar número em formulário burocrático.

## O que prototipar

Precisamos provar o loop principal e o multiplayer.

### Telas obrigatórias

1. Home
2. Partida solo — introdução mínima
3. Pergunta
4. Palpite digitado
5. Palpite confirmado / esperando
6. Revelação solo
7. Resultado parcial solo
8. Resultado final solo
9. Criar sala
10. Entrar em sala
11. Sala de espera
12. Configuração da sala
13. Pergunta multiplayer
14. Espera pelos outros palpites
15. Revelação multiplayer
16. Ranking parcial
17. Resultado final multiplayer
18. Card de compartilhamento
19. Reconexão
20. Erro de sala/código

Boa parte disso é estado da mesma estrutura. Não inventar vinte layouts só porque a lista tem vinte itens.

## Jornada que precisa estar clicável

### Solo

**Home → Jogar agora → Pergunta → Chute → Revelação → Próxima → Resultado final → Compartilhar/Jogar de novo.**

### Multiplayer

**Home → Criar sala → Sala → Iniciar → Pergunta → Palpites secretos → Revelação → Ranking → Próxima → Resultado final → Revanche.**

Também:

**Home → Entrar em sala → Código/apelido → Sala.**

## O que o protótipo precisa provar

- a pessoa entende sem tutorial;
- começar solo leva praticamente um toque;
- digitar um número é gostoso e claro;
- a unidade nunca gera dúvida;
- a revelação é melhor que simplesmente mostrar a resposta;
- no multiplayer, dá pra entender quem ficou mais perto em segundos;
- a pessoa sente vontade de ver a próxima;
- compartilhar uma pergunta/resultado faz sentido.

## Direção visual

Usar `docs/identidade-visual.md` como fonte da verdade.

Resumo:

- fundo escuro;
- verde-lima como cor principal;
- azul para apoio/informação;
- laranja para palpite muito distante;
- Space Grotesk em títulos e números;
- Manrope na interface;
- círculos, alvos, marcadores, linhas e réguas;
- número é protagonista.

## Mobile primeiro

Artboard principal de referência: **390 × 844 px**.

Precisa funcionar bem a partir de 360 px.

CTA principal perto do polegar.

Teclado numérico não pode esconder pergunta, unidade ou botão de confirmar.

## Home

A pessoa precisa entender o conceito sem ler manifesto.

Marca grande.

Frase curta:

**“Quanto você acha que é?”**

CTAs:

**Jogar agora**

**Criar sala**

**Entrar em sala**

Pode existir uma mini pergunta viva na própria home para mostrar a brincadeira.

Exemplo:

**“Quantos litros cabem numa piscina olímpica?”**

Um número pode animar abaixo como demonstração, sem exigir resposta real.

## Pergunta

É a tela principal do jogo.

Hierarquia:

1. categoria pequena;
2. pergunta grande;
3. espaço para o número;
4. unidade;
5. cronômetro discreto;
6. CTA.

Exemplo:

**Quantos metros de altura tem o Cristo Redentor contando o pedestal?**

**[ 38 ] metros**

CTA:

**Chutar**

## Entrada do palpite

O número precisa crescer conforme é digitado.

Separadores devem aparecer automaticamente.

Exemplo:

`2500000` vira visualmente **2.500.000**.

A unidade fica parada ao lado ou abaixo.

Não colocar label “Insira sua resposta numérica”. A pergunta já explica a porra toda.

## Confirmação

Depois de chutar:

**“2.500.000 litros. Agora já foi.”**

No solo, transição curta para revelação.

No multiplayer, entra estado de espera:

**“5 de 7 já chutaram.”**

Sem mostrar números dos outros.

## Revelação solo

Essa tela decide se o jogo é gostoso ou é só trivia com maquiagem.

Sequência:

1. seu marcador aparece na régua;
2. escala se estabelece;
3. resposta correta entra;
4. distância fica óbvia;
5. pontos aparecem;
6. curiosidade curta entra por último.

Elementos:

- resposta correta grande;
- seu palpite;
- erro percentual;
- pontos;
- classificação da rodada;
- régua/target visual.

Exemplos de feedback:

**“Quase, porra.”**

**“Isso foi assustadoramente perto.”**

**“Você foi parar em outro planeta.”**

**“NA MOSCA!”**

## Régua de comparação

Não precisa ser matematicamente linear quando valores extremos tornarem todo mundo ilegível. A visualização pode ajustar escala, desde que não minta sobre ordem e proximidade.

Marcadores:

- jogador;
- resposta correta;
- outros jogadores no multiplayer.

Cada marcador precisa ter forma/identificação além da cor.

## Na Mosca

Acerto exato merece momento próprio.

- marcador encaixa no centro;
- anel pulsa;
- **NA MOSCA!** enorme;
- +1.000 destacado;
- animação curta;
- CTA de compartilhar pode aparecer com mais força.

Sem fogos por dez segundos. A pessoa quer a próxima pergunta.

## Revelação multiplayer

Ordem sugerida:

1. régua vazia;
2. palpites aparecem;
3. nomes ficam visíveis;
4. resposta correta entra;
5. pontos aparecem;
6. vencedor da rodada ganha destaque.

A diversão é enxergar imediatamente que alguém quase acertou e outro chutou a população de Saturno.

## Ranking parcial

Curto.

Mostrar top e posição de todos, mas sem transformar isso em tabela de BI.

Cada linha:

- posição;
- apelido;
- pontos totais;
- variação pequena de posição.

Fica poucos segundos ou avança por CTA.

## Resultado final solo

Mostrar:

- pontos totais;
- classificação divertida;
- quantidade de respostas muito próximas;
- quantidade de Na Mosca;
- melhor resposta;
- maior desastre;
- recorde pessoal se existir localmente.

CTAs:

**Jogar de novo**

**Compartilhar**

## Resultado final multiplayer

Campeão em destaque.

Depois ranking curto.

Estatísticas engraçadas:

- mais preciso;
- maior Na Mosca;
- maior desastre;
- mais consistente.

CTAs:

**Revanche**

**Compartilhar**

## Criar sala

Configuração curta.

Escolhas:

- 5 ou 10 perguntas;
- categorias;
- 10, 20 ou 30 segundos.

Não abrir um formulário de configuração de servidor de Minecraft.

CTA:

**Criar sala**

## Sala de espera

Mostrar:

- código;
- copiar;
- compartilhar;
- jogadores;
- dono;
- configurações resumidas;
- CTA **Começar** para o dono.

## Cards compartilháveis

Criar pelo menos três modelos:

### Quase acerto

**“A resposta era 38. Eu chutei 39.”**

### Desastre

**“A resposta era 42 mil. O Pedro chutou 8 milhões.”**

### Desafio

**“Errei por 0,8%. Você chega mais perto?”**

A pergunta precisa aparecer resumida quando fizer sentido.

Marca pequena e link claro.

## Estados que não podem ser esquecidos

- sala inexistente;
- sala cheia;
- apelido repetido;
- número inválido;
- valor fora do limite;
- tempo acabou;
- jogador não respondeu;
- jogador caiu;
- jogador voltou;
- dono mudou;
- empate;
- pergunta indisponível/erro de carregamento.

Mensagens curtas e humanas.

Exemplo:

**“Esse número não cabe nem no universo dessa pergunta.”**

## Componentes reaproveitáveis

- botão principal;
- botão secundário;
- campo numérico gigante;
- unidade;
- cronômetro;
- badge de categoria;
- avatar/marcador;
- régua de revelação;
- item de ranking;
- toast;
- modal curto;
- indicador de progresso da partida.

## Movimento obrigatório no protótipo

Simular:

- número crescendo/digitando;
- confirmação do palpite;
- régua entrando;
- marcadores aparecendo;
- resposta correta chegando;
- Na Mosca;
- transição para próxima pergunta.

É aqui que o protótipo deixa de ser um monte de screenshots e começa a provar o jogo.

## O que NÃO desenhar agora

- loja;
- assinatura;
- ranking global completo;
- perfil social;
- clãs;
- feed;
- chat;
- poderes;
- moedas;
- skins;
- dezenas de modos;
- painel administrativo;
- tela explicando algoritmo de pontuação.

A pessoa chuta um número. Não precisa fazer MBA para jogar.

## Critério de aprovação

O protótipo está pronto quando uma pessoa consegue, sem ajuda:

1. começar uma partida solo;
2. entender a pergunta e unidade;
3. mandar um palpite;
4. entender a revelação;
5. saber quantos pontos ganhou;
6. querer responder outra;
7. criar/entrar numa sala;
8. entender quem ganhou no multiplayer;
9. compartilhar um resultado.

E tem um teste mais importante que todos:

se a revelação não der vontade de olhar por mais dois segundos e pensar **“caralho”**, ainda não acertamos a principal tela do Na Mosca.