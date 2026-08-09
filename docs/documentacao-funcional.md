# Na Mosca — documentação funcional

> Um jogo de estimativa pra provar duas coisas: ninguém sabe de porra nenhuma e, mesmo assim, todo mundo tem coragem de chutar um número com convicção.

## 1. O que é o jogo

**Na Mosca** é um jogo de perguntas numéricas.

O jogo mostra uma pergunta cuja resposta é um número. O jogador não precisa saber a resposta exata. Ele precisa chegar o mais perto possível.

Exemplos:

- Quantos quilômetros tem a maior avenida do Brasil?
- Quantas pessoas cabem no Maracanã?
- Quantos litros de água uma pessoa usa, em média, por dia?
- Quantos episódios tem determinada série?

A graça está menos em “saber trivia” e mais em fazer um palpite razoável, comparar com os outros e descobrir quem viajou bonito.

## 2. Objetivo

Fazer a maior pontuação possível acertando ou chegando perto da resposta correta.

No multiplayer, vence quem terminar a partida com mais pontos.

No solo, o jogador tenta bater o próprio recorde e compartilhar o resultado.

## 3. Modos de jogo

### Partida rápida — MVP

Modo solo.

O jogador recebe **10 perguntas** e tenta fazer a maior pontuação possível.

Não exige conta.

### Sala com amigos — MVP

Uma pessoa cria uma sala e manda o link.

Todos recebem as mesmas perguntas ao mesmo tempo.

Depois de cada rodada, o jogo mostra quem chegou mais perto e atualiza o ranking.

### Desafio do Dia — futuro próximo

Um conjunto fixo de perguntas iguais para todo mundo naquele dia.

Serve para comparação e compartilhamento.

A graça é poder mandar:

> Fiz 6.840 hoje no Na Mosca. Quero ver passar.

### Categorias específicas — futuro

Futebol, cinema, geografia, música, ciência, Brasil, putaria cultural e o que mais funcionar.

## 4. Quantidade de jogadores

### Solo

1 jogador.

### Sala

- mínimo: **2 jogadores**;
- recomendado: **3 a 8**;
- máximo no MVP: **10 jogadores**.

## 5. Entrada no jogo

Na home, a pessoa escolhe:

- **Jogar agora**;
- **Criar sala**;
- **Entrar em sala**.

Não deve existir uma muralha de login antes da primeira pergunta.

Quem entra em sala usa apelido.

Conta pode existir depois para salvar histórico, recordes e estatísticas, mas não é requisito para jogar.

## 6. Estrutura de uma pergunta

Cada pergunta precisa ter:

- enunciado;
- resposta numérica correta;
- unidade;
- categoria;
- fonte de referência interna;
- nível de dificuldade;
- explicação curta ou curiosidade para a revelação;
- limite mínimo e máximo de resposta, quando fizer sentido.

Exemplo:

**Pergunta:** Quantos metros de altura tem o Cristo Redentor contando o pedestal?

**Resposta:** 38

**Unidade:** metros

O jogador vê a unidade antes de responder. Ninguém merece digitar 38 e depois descobrir que o jogo queria centímetros só de sacanagem.

## 7. Tipos de resposta aceitos no MVP

O MVP trabalha com respostas:

- inteiras;
- decimais simples;
- sempre numéricas;
- com resposta correta maior que zero.

Datas, intervalos, moedas com câmbio dinâmico e coisas que envelhecem rápido ficam para depois, a menos que tenham data de referência explícita.

## 8. Fluxo da rodada

Cada rodada segue essa ordem:

1. pergunta aparece;
2. cronômetro começa;
3. jogador envia um palpite;
4. resposta fica travada;
5. quando todos respondem ou o tempo acaba, começa a revelação;
6. resposta correta aparece;
7. o jogo mostra a distância de cada palpite;
8. pontos são distribuídos;
9. ranking atualiza;
10. próxima pergunta.

Simples. Sem transformar cada pergunta num episódio de novela.

## 9. Tempo para responder

Padrão do MVP:

- **20 segundos por pergunta**.

Na sala, o dono pode escolher:

- rápido: 10 segundos;
- normal: 20 segundos;
- tranquilo: 30 segundos.

Quando o jogador envia, não pode alterar o palpite.

Isso evita o clássico “ih, vi que fulano respondeu rápido, vou mudar”.

## 10. Como digitar o palpite

O campo deve abrir teclado numérico.

O jogador pode informar apenas o número.

A unidade já fica visível ao lado.

Exemplo:

> Quantos litros cabem numa piscina olímpica?
>
> [ 2.000.000 ] litros

O sistema deve aceitar separadores comuns de milhar e decimal sem fazer frescura.

## 11. O que acontece se o tempo acabar

Se o jogador não enviar nada:

- recebe **0 ponto** na rodada;
- continua normalmente na partida.

Não precisa expulsar ninguém porque demorou para pensar quantas formigas existem no planeta.

## 12. A revelação

Essa é uma das partes mais importantes do jogo.

A resposta não deve simplesmente aparecer como um número morto na tela.

A revelação mostra:

1. resposta correta;
2. palpite do jogador;
3. diferença;
4. quão perto ele chegou;
5. posição naquela rodada;
6. uma curiosidade curta sobre a resposta.

No multiplayer, todos os palpites aparecem numa mesma comparação visual.

Exemplo:

Resposta correta: **78.838**

- Ana: 80.000
- Luiz: 120.000
- Pedro: 1.000.000 — alguém claramente perdeu a mão.

Essa tela precisa ser divertida o suficiente para virar print.

## 13. Pontuação

A pontuação usa a **diferença percentual** entre o palpite e a resposta correta.

Quanto menor o erro, mais pontos.

### Faixas do MVP

- acertou exatamente: **1.000 pontos** — **NA MOSCA!**;
- erro de até 1%: **900 pontos**;
- erro de até 5%: **750 pontos**;
- erro de até 10%: **600 pontos**;
- erro de até 25%: **400 pontos**;
- erro de até 50%: **200 pontos**;
- erro acima de 50%: **50 pontos**;
- não respondeu: **0 ponto**.

A ideia é premiar aproximação sem exigir que o jogador entenda fórmula nenhuma.

## 14. Exemplo de pontuação

Resposta correta: **100**.

- palpite 100 → 1.000;
- palpite 101 → 900;
- palpite 105 → 750;
- palpite 110 → 600;
- palpite 125 → 400;
- palpite 150 → 200;
- palpite 900 → 50.

Sim, quem chutar 900 quando a resposta era 100 ainda ganha 50 pontos de consolação. Não precisamos humilhar a pessoa além do necessário; a tela de resultado já fará isso.

## 15. Ranking da rodada

No multiplayer, além dos pontos, os jogadores são ordenados por proximidade.

A tela mostra:

- quem chegou mais perto;
- segundo e terceiro;
- demais palpites;
- quem acertou exatamente, se houver.

Se duas pessoas derem o mesmo palpite, recebem a mesma pontuação.

## 16. Partida multiplayer

O dono escolhe:

- 5 ou 10 rodadas;
- categorias;
- tempo de resposta.

Ao iniciar, todos recebem a mesma pergunta simultaneamente.

Os palpites dos outros ficam **escondidos até a revelação**.

Nada de copiar coleguinha.

Depois de cada revelação, o ranking geral aparece por alguns segundos antes da próxima pergunta.

## 17. Fim da partida

Ao terminar, o jogo mostra:

- campeão;
- placar completo;
- quantidade de “Na Mosca” de cada um;
- pergunta em que cada jogador chegou mais perto;
- maior desastre da partida;
- CTA de revanche;
- CTA de compartilhar.

### Maior desastre

Pode ser o palpite com maior erro percentual da partida.

Isso é estatística inútil? É.

É exatamente por isso que alguém vai compartilhar.

## 18. Desempate

Se dois jogadores terminarem com a mesma pontuação:

1. vence quem teve mais respostas “Na Mosca”;
2. depois, quem teve menor erro percentual acumulado;
3. persistindo empate, vitória compartilhada.

Nada de roleta escondida decidindo campeão.

## 19. Partida solo

No modo solo:

1. jogador começa imediatamente;
2. recebe 10 perguntas;
3. pontua normalmente;
4. vê o resultado de cada uma;
5. no fim recebe um placar total e uma classificação divertida.

Exemplos de classificação:

- 0–1.999: **Chutou de olhos fechados**;
- 2.000–3.999: **Confiante sem motivo**;
- 4.000–5.999: **Sabe umas coisas**;
- 6.000–7.499: **Quase especialista**;
- 7.500–8.999: **Perigosamente bom**;
- 9.000–10.000: **Vai tomar no cu, você sabia as respostas?**

Os nomes podem mudar depois. O espírito não.

## 20. Revanche

### Solo

**Jogar novamente** inicia outra sequência com perguntas diferentes sempre que possível.

### Multiplayer

Mantém:

- sala;
- jogadores;
- configurações.

E troca as perguntas.

Ninguém deveria precisar recriar a sala só porque quer dar o troco.

## 21. Banco de perguntas

O conteúdo é o coração do jogo.

Um banco ruim mata o Na Mosca mesmo que a interface seja linda.

Cada pergunta deve obedecer a alguns critérios:

- resposta verificável;
- enunciado sem ambiguidade;
- unidade explícita;
- resposta com data de referência quando necessário;
- curiosidade interessante na revelação;
- dificuldade estimável, não impossível.

Pergunta boa faz a pessoa pensar:

> “Caralho, não faço ideia… mas deve ser mais ou menos isso.”

Pergunta ruim faz a pessoa pensar:

> “Como é que eu poderia saber essa merda?”

Parece parecido. Não é.

## 22. Categorias iniciais

O MVP pode trabalhar com:

- Brasil;
- Mundo;
- Ciência e natureza;
- Cinema e TV;
- Música;
- Esportes;
- Tecnologia;
- Corpo humano;
- Comida;
- Curiosidades absurdas.

O jogador solo pode receber mistura geral.

Na sala, o dono pode selecionar uma ou mais categorias.

## 23. Dificuldade

Cada pergunta recebe nível interno:

- fácil;
- média;
- difícil.

Uma partida comum deve misturar os três níveis.

Não mostrar necessariamente “difícil” antes da pergunta, porque isso influencia o chute.

## 24. Perguntas que mudam com o tempo

Perguntas como população, preço, número de assinantes ou recordes precisam indicar referência.

Exemplo:

> Em 2025, aproximadamente quantos habitantes tinha o Brasil?

Se a resposta pode mudar e a pergunta não diz quando, a pergunta está errada. Simples assim.

## 25. Compartilhamento

O resultado deve virar conteúdo compartilhável.

Exemplos:

> Fiz 7.250 no Na Mosca. Em uma eu errei por 0,8%. Vem tentar me passar.

Ou:

> A resposta era 42 mil. O cidadão chutou 8 milhões. Conheça meus amigos.

No multiplayer, o compartilhamento não deve expor informação privada além do apelido usado na sala.

## 26. Retenção

O jogo precisa dar motivo para voltar sem virar cassino disfarçado.

Boas ferramentas:

- recorde pessoal;
- sequência de dias no Desafio do Dia;
- estatísticas de precisão;
- categorias favoritas;
- histórico das melhores respostas.

Tudo isso pode vir depois do loop principal funcionar.

## 27. Monetização

### Gratuito

- partida rápida;
- salas;
- categorias básicas;
- compartilhamento;
- anúncio depois de uma partida ou em pontos de pausa naturais.

### Pago, no futuro

Pode incluir:

- remover anúncios;
- pacotes de categorias;
- salas com configurações especiais;
- histórico completo;
- estatísticas avançadas;
- criação de desafios personalizados.

**Nunca interromper pergunta com anúncio.** Se o jogador está pensando e aparece propaganda de shampoo, nós merecemos perder esse jogador.

## 28. Abandono e reconexão

### Multiplayer

Se alguém cair:

- pode voltar para a mesma sala durante a partida;
- se perder uma pergunta, recebe 0 naquela rodada;
- volta normalmente na seguinte.

Se o dono cair, outro participante assume a sala.

A partida não deve ser encerrada por isso.

## 29. Respostas inválidas

O sistema deve rejeitar:

- campo vazio;
- texto não numérico;
- valor fora do intervalo permitido, quando houver;
- números absurdos que ultrapassem limite técnico.

A mensagem deve explicar o problema sem parecer erro bancário.

Exemplo:

> Esse número não cabe nem no universo dessa pergunta. Tenta de novo.

## 30. O que não entra no MVP

- poderes especiais;
- roubar resposta;
- cartas de vantagem;
- apostas;
- moedas virtuais;
- personagens;
- mapa 3D;
- chat;
- vídeo;
- sistema de clãs;
- ranking mundial complexo;
- pergunta gerada por IA sem revisão;
- qualquer mecânica que transforme “chuta um número” em tutorial de quinze minutos.

## 31. Jornada resumida

### Solo

**Home → Jogar agora → Pergunta → Palpite → Revelação → Pontos → Próxima pergunta → Resultado final → Compartilhar/Jogar de novo.**

### Multiplayer

**Home → Criar/Entrar → Sala → Configurar → Pergunta → Palpites secretos → Revelação → Ranking → Próxima rodada → Placar final → Revanche.**

## 32. Quando o jogo está funcionando de verdade

O Na Mosca funciona quando:

- a pessoa entende a regra em uma frase;
- consegue começar em segundos;
- toda pergunta gera um palpite, mesmo sem conhecimento;
- a revelação é divertida;
- respostas absurdas viram motivo de zoação;
- o jogador termina pensando “só mais uma”;
- compartilhar o resultado faz sentido sem precisar implorar por compartilhamento.

A pergunta chama o jogador. O chute prende. A revelação faz ele querer jogar de novo.