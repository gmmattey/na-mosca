# Chuta Essa! — documentação funcional

> Um jogo de estimativa pra provar duas coisas: ninguém sabe de porra nenhuma e, mesmo assim, todo mundo chuta um número com convicção.

## 1. O que é

**Chuta Essa!** é um jogo de perguntas numéricas.

A pessoa não precisa saber a resposta exata. Precisa chegar o mais perto possível.

A graça está em estimar, revelar, comparar e descobrir quem quase acertou e quem viajou bonito.

## 2. Objetivo

Quanto menor o erro do palpite, maior a pontuação.

No multiplayer vence quem termina com mais pontos.

No solo, o jogador tenta bater o próprio resultado e compartilhar os melhores momentos.

## 3. Modos

### Partida rápida — MVP

- solo;
- 10 perguntas;
- sem conta obrigatória;
- entrada imediata.

### Sala com amigos — MVP

- todos recebem as mesmas perguntas;
- palpites ficam secretos até a revelação;
- ranking atualiza a cada rodada.

### Desafio do Dia — depois

Mesmo conjunto diário para todo mundo, com comparação e compartilhamento.

## 4. Jogadores

### Solo

1 jogador.

### Sala

- mínimo: 2;
- recomendado: 3–8;
- máximo MVP: 10.

## 5. Entrada

Home:

- **Jogar agora**;
- **Criar sala**;
- **Entrar em sala**.

Sem muralha de login.

Quem entra em sala usa apelido.

## 6. Estrutura de pergunta

Cada pergunta precisa de:

- enunciado;
- resposta numérica correta;
- unidade;
- categoria;
- fonte;
- dificuldade;
- curiosidade/reveal curto;
- mínimo/máximo quando necessário;
- data de referência quando o número muda no tempo.

## 7. Respostas aceitas no MVP

- inteiras;
- decimais simples;
- sempre numéricas;
- resposta correta maior que zero.

Datas, câmbio dinâmico e intervalos complexos ficam fora do MVP salvo referência explícita.

## 8. Fluxo da rodada

1. pergunta aparece;
2. cronômetro começa;
3. jogador manda palpite;
4. palpite trava;
5. todos respondem ou o tempo acaba;
6. revelação começa;
7. resposta correta aparece;
8. distância fica clara;
9. pontos são distribuídos;
10. ranking atualiza;
11. próxima pergunta.

## 9. Tempo

Padrão: **20 segundos**.

Sala pode usar:

- 10 s;
- 20 s;
- 30 s.

Palpite enviado não pode ser alterado.

## 10. Entrada numérica

Abrir teclado numérico.

Unidade sempre visível.

Aceitar separadores comuns sem fazer frescura.

## 11. Sem resposta

Tempo acabou sem envio:

- 0 ponto;
- jogador continua normalmente.

## 12. Revelação

A revelação é o coração do jogo.

Mostrar:

- resposta correta;
- palpite;
- diferença;
- erro percentual;
- pontos;
- posição;
- comparação visual;
- curiosidade curta.

No multiplayer, todos os palpites aparecem na mesma visualização.

## 13. Pontuação canônica

A pontuação usa erro percentual absoluto.

- exato: **1.000**;
- até 1%: **900**;
- até 5%: **750**;
- até 10%: **600**;
- até 25%: **400**;
- até 50%: **200**;
- acima de 50%: **50**;
- sem resposta: **0**.

A UI não precisa explicar fórmula.

## 14. Acerto exato

O nome visual atual do estado é:

**CRAVOU!**

O antigo texto `NA MOSCA!` pertence ao working title e não deve aparecer em novos artefatos.

## 15. Ranking da rodada

Ordenar por proximidade.

Mesma resposta recebe mesma pontuação.

Mostrar rapidamente quem ficou mais perto sem transformar a tela em tabela de BI.

## 16. Multiplayer

Host escolhe:

- 5 ou 10 rodadas;
- categorias;
- 10/20/30 segundos.

Todos recebem a mesma pergunta.

Palpites ficam ocultos até reveal.

## 17. Fim da partida

Mostrar:

- campeão;
- placar;
- acertos exatos;
- melhor aproximação;
- maior desastre;
- revanche;
- compartilhar.

### Maior desastre

Maior erro percentual da partida.

É estatística inútil e exatamente por isso é compartilhável.

## 18. Desempate

1. mais acertos exatos;
2. menor erro percentual acumulado;
3. vitória compartilhada.

## 19. Solo

10 perguntas.

No fim, placar total + classificação divertida.

Faixas iniciais:

- 0–1.999: **Chutou de olhos fechados**;
- 2.000–3.999: **Confiante sem motivo**;
- 4.000–5.999: **Sabe umas coisas**;
- 6.000–7.499: **Quase especialista**;
- 7.500–8.999: **Perigosamente bom**;
- 9.000–10.000: **Vai tomar no cu, você sabia as respostas?**

Wording pode evoluir. O espírito fica.

## 20. Revanche

### Solo

Nova sequência, evitando repetição quando possível.

### Multiplayer

Mantém sala, jogadores e configurações. Troca perguntas.

## 21. Banco de perguntas

Pergunta boa:

- verificável;
- sem ambiguidade;
- unidade explícita;
- estimável;
- curiosidade interessante;
- referência temporal quando necessário.

A reação desejada é:

> “Caralho, não faço ideia… mas deve ser mais ou menos isso.”

## 22. Categorias iniciais

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

## 23. Dificuldade

Interna:

- fácil;
- média;
- difícil.

Misturar níveis.

Não necessariamente mostrar dificuldade antes da pergunta.

## 24. Perguntas temporais

Se o número muda, a pergunta precisa dizer quando.

Exemplo:

> Em 2025, aproximadamente quantos habitantes tinha o Brasil?

Sem data, pergunta temporal está errada.

## 25. Compartilhamento

O resultado precisa virar conteúdo.

Exemplos:

> “A resposta era 38. Eu chutei 39.”

> “Errei por 0,8%. Chuta essa.”

> “A resposta era 42 mil. O cidadão chutou 8 milhões.”

## 26. Retenção — depois do loop provar valor

- recorde pessoal;
- desafio diário;
- sequência de dias;
- precisão por categoria;
- histórico;
- melhores respostas.

Nada disso salva jogo sem graça.

## 27. Monetização

### Grátis

- solo;
- salas;
- categorias básicas;
- compartilhamento.

### Anúncio

Só em pausas naturais, nunca durante pergunta ativa.

### Pago futuro

- remover anúncios;
- packs;
- configurações extras;
- histórico;
- estatísticas;
- desafios personalizados.

Nunca vender vantagem competitiva.

## 28. Reconexão

Se jogador cair:

- pode voltar para a sala;
- pergunta perdida vale 0;
- continua nas próximas.

Se host cair, outro participante assume.

## 29. Resposta inválida

Rejeitar:

- vazio;
- texto não numérico;
- fora de intervalo;
- valor além de limite técnico.

Mensagem humana, não erro bancário.

## 30. Fora do MVP

- poderes;
- roubo de resposta;
- cartas de vantagem;
- apostas;
- moeda virtual;
- personagens;
- chat;
- vídeo;
- clãs;
- ranking mundial complexo;
- pergunta de IA sem revisão;
- qualquer coisa que transforme “chuta um número” em tutorial de quinze minutos.

## 31. Jornada resumida

### Solo

**Home → Jogar agora → Pergunta → Palpite → Revelação → Pontos → Próxima → Resultado → Compartilhar/Jogar de novo.**

### Multiplayer

**Home → Criar/Entrar → Sala → Configurar → Pergunta → Palpites secretos → Revelação → Ranking → Próxima → Resultado → Revanche.**

## 32. Multiplataforma

Uma base de código deve gerar:

- Web/PWA;
- Android;
- iOS.

Regras, conteúdo e pontuação são compartilhados. Diferenças de canal ficam em adapters conforme a fundação do Auê Games.

## 33. Quando está funcionando

**Chuta Essa!** funciona quando:

- a pergunta gera vontade de chutar;
- reveal dá prazer;
- a pessoa quer “só mais uma”;
- grupo gera zoação;
- resultado é compartilhado;
- convite traz outro jogador.

Tecnologia é só a mesa. A graça é o chute e o reveal.