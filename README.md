# Chuta Essa!

> Um jogo de estimativa, palpite e falsa confiança pra descobrir quem chega perto e quem fala um número absurdo com convicção.

> **Nota técnica:** o repositório ainda se chama `na-mosca`. Esse slug é legado e não define mais o nome do produto.

## A ideia, sem reunião de alinhamento

O jogo faz uma pergunta cuja resposta é um número. Todo mundo chuta. Quanto mais perto da resposta correta, mais pontos.

Ninguém precisa saber a resposta exata. A graça está em pensar “não faço a menor ideia, mas 37 mil parece razoável” e depois descobrir que você quase acertou — ou foi parar em outro planeta.

É trivia sem cara de prova. Mais palpite, menos enciclopédia.

## Nome canônico

O nome oficial do produto é **Chuta Essa!**.

A exclamação faz parte da marca.

Não usar `Na Mosca` em novos materiais de produto, design, marketing ou loja. Referências antigas ainda existentes em documentos históricos devem ser interpretadas como **Chuta Essa!** até serem naturalmente revisadas.

## Como joga

1. O jogador entra numa partida solo ou cria uma sala.
2. O jogo mostra uma pergunta de estimativa numérica.
3. Cada pessoa manda um número.
4. O palpite fica travado.
5. Quando todos respondem ou o tempo termina, começa a revelação.
6. A resposta correta aparece junto da distância dos palpites.
7. Quanto mais perto, mais pontos.
8. No fim, placar, melhores aproximações e maiores desastres.

Exemplo:

**“Quantos litros de água cabem numa piscina olímpica?”**

Um chuta 500 mil. Outro manda 2 milhões. Sempre aparece alguém colocando 80 bilhões.

A revelação é o coração da experiência.

## Modos do MVP

### Solo

10 perguntas, entrada imediata e sem login obrigatório.

### Sala com amigos

Uma pessoa cria a sala, manda link/código e todos respondem às mesmas perguntas ao mesmo tempo.

Os palpites dos outros ficam escondidos até a revelação.

### Depois do MVP

Desafio do Dia, estatísticas, histórico, packs de categorias e outros formatos só entram quando o loop principal estiver provado.

## Pontuação

A regra canônica usa erro percentual:

- acerto exato: **1.000 pontos**;
- erro até 1%: **900**;
- até 5%: **750**;
- até 10%: **600**;
- até 25%: **400**;
- até 50%: **200**;
- acima de 50%: **50**;
- sem resposta: **0**.

O jogador não precisa entender a fórmula. Precisa sentir que a pontuação foi justa.

## A experiência que precisamos entregar

O ciclo é:

**leu → chutou → travou → revelou → comparou → quis outra.**

A pergunta domina a tela. O palpite é gigante. O cronômetro é discreto. A revelação precisa ser visual e satisfatória.

Nada de dashboard, card pra cada frase ou formulário burocrático.

## Multiplataforma desde o começo

Uma única base de código por jogo deve gerar:

- Web/PWA;
- Android;
- iOS.

A implementação segue a fundação compartilhada do **Auê Games**: React + TypeScript + Vite + Capacitor, com diferenças de plataforma isoladas em adapters.

Web é o ponto de entrada universal e indexável. Android e iOS são cascos nativos do mesmo produto, não três implementações diferentes.

## Conteúdo

O conteúdo é combustível.

Pergunta boa:

- tem resposta verificável;
- deixa a unidade explícita;
- permite estimativa;
- gera curiosidade na revelação;
- não parece prova escolar;
- usa data de referência quando o número pode mudar.

Pergunta boa faz a pessoa pensar:

> “Caralho, não faço ideia… mas deve ser mais ou menos isso.”

## Design

A identidade nasce de:

- número;
- aproximação;
- precisão;
- alvo abstrato;
- escala;
- marcador;
- distância.

O design não pode parecer template gerado por IA. A regra específica está em `docs/regras-design-e-copy.md`.

A direção tipográfica atual é **Barlow Condensed** para impacto/números e **Barlow** para interface, sujeita a validação no protótipo — nunca por moda ou conveniência.

## Distribuição

Canais planejados a partir da mesma base:

- Web/PWA em produção;
- Google Play;
- Apple App Store;
- itch.io;
- CrazyGames;
- Microsoft Store via PWA;
- outros canais depois de provar encaixe.

## Monetização

O jogo principal é gratuito.

Publicidade só entra em pausas naturais, nunca durante uma pergunta ativa.

No futuro, pago pode incluir remoção de anúncios, packs, estatísticas, histórico ou personalizações — nunca vantagem competitiva.

## O que NÃO entra agora

- poderes;
- moedas virtuais;
- chat;
- clãs;
- avatar 3D;
- ranking mundial complexo;
- IA gerando perguntas sem revisão;
- features só para deixar o produto “mais completo”.

Se a pergunta e a revelação não forem gostosas, nenhuma firula salva.

## Documentação principal

Ler nesta ordem:

1. `docs/00-nome-canonico.md`
2. `docs/documentacao-funcional.md`
3. `docs/jornada-ux-ui.md`
4. `docs/identidade-visual.md`
5. `docs/regras-design-e-copy.md`
6. `docs/brief-prototipo.md`
7. arquitetura, dados, conteúdo, monetização e handoff conforme a fase.

## A régua

**Chuta Essa!** merece continuar se alguém abrir por curiosidade, jogar várias perguntas sem perceber e mandar pelo menos um resultado pra outra pessoa.

Se em grupo começar aquele “eu falei que era por aí”, melhor ainda.