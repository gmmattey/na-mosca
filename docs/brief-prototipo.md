# Chuta Essa! — brief do protótipo

> Objetivo: provar que ler uma pergunta, mandar um número e ver a revelação já é divertido. Mobile-first, sem cara de prova, dashboard ou template de IA.

## 1. Fonte da verdade

Antes de desenhar, ler nesta ordem:

1. `docs/00-nome-canonico.md`
2. `docs/documentacao-funcional.md`
3. `docs/jornada-ux-ui.md`
4. `docs/identidade-visual.md`
5. `docs/regras-design-e-copy.md`

Se houver conflito visual, `regras-design-e-copy.md` prevalece.

## 2. Primeira prioridade

Prototipar primeiro a jornada solo inteira:

**Home → Pergunta → Palpite → Confirmação → Revelação → Próxima → Resultado final → Compartilhar/Jogar de novo.**

Só depois fechar multiplayer.

## 3. O que o protótipo precisa provar

- conceito entendido sem tutorial longo;
- solo começa praticamente em um toque;
- digitar um número é gostoso;
- unidade nunca gera dúvida;
- cronômetro não rouba atenção;
- revelação é melhor do que simplesmente mostrar a resposta;
- pontuação parece justa;
- a pessoa quer outra pergunta;
- resultado parece compartilhável.

## 4. Direção visual

Usar:

- fundo escuro como base de gameplay;
- verde-lima `#B9F34A` como energia principal;
- azul `#53A7FF` para apoio/comparação;
- laranja `#FF8A3D` para distância e desastre;
- **Barlow Condensed** para números/títulos;
- **Barlow** para interface;
- alvo abstrato, escala, pontos, marcadores e régua;
- número como protagonista.

Não usar mosca literal.

## 5. Regra anti-IA

Não entregar:

- card para cada informação;
- bento grid;
- glassmorphism;
- degradê roxo/azul;
- glow neon gratuito;
- hero de SaaS;
- Inter/Manrope/Space Grotesk por inércia;
- copy do tipo “prepare-se para uma experiência incrível”.

Espaço vazio é ferramenta. Não preencher por ansiedade.

## 6. Mobile primeiro

Artboard de referência: **390 × 844 px**.

Precisa funcionar bem a partir de 360 px.

CTA principal alcançável com polegar.

Teclado numérico não pode esconder pergunta, unidade ou confirmação.

Safe areas de Android/iOS devem ser consideradas desde o protótipo.

## 7. Home

A pessoa precisa entender o conceito em poucos segundos.

Marca: **Chuta Essa!**

CTA principal:

**Jogar agora**

Secundários:

- **Criar sala**
- **Entrar em sala**

Pode existir uma pergunta real como demonstração viva.

Nada de hero publicitário com três cards de benefício.

## 8. Pergunta

Hierarquia:

1. categoria pequena;
2. pergunta grande;
3. palpite gigante;
4. unidade;
5. cronômetro discreto;
6. CTA **Chutar**.

Exemplo real de composição:

**Quantos metros de altura tem o Cristo Redentor contando o pedestal?**

**38**  
metros

## 9. Palpite

O número reage conforme a pessoa digita.

Separadores aparecem automaticamente.

Não usar label burocrática como “Insira sua resposta numérica”.

A própria pergunta já explicou o que fazer.

## 10. Confirmação

Depois do chute:

> **2.500.000 litros. Agora já foi.**

No solo, transição curta.

No multiplayer:

> **5 de 7 já chutaram.**

Nunca mostrar os números dos outros antes da revelação.

## 11. Revelação — tela principal

Sequência sugerida:

1. marcador do jogador entra;
2. escala se estabelece;
3. resposta correta aparece;
4. distância fica óbvia;
5. pontos entram;
6. curiosidade curta fecha o momento.

Mostrar:

- resposta correta;
- seu palpite;
- erro percentual;
- pontos;
- régua/target;
- posição quando multiplayer;
- curiosidade.

Feedbacks possíveis:

- “Porra. Quase.”
- “Isso foi assustadoramente perto.”
- “Você foi parar em outro planeta.”
- “CRAVOU!”

## 12. Acerto exato

O estado visual canônico do acerto exato não usa mais o working title antigo.

Direção atual:

**CRAVOU!**

- marcador encaixa;
- anel pulsa;
- texto entra forte;
- +1.000 aparece;
- celebração curta.

## 13. Resultado final solo

Mostrar só o que conta uma história:

- pontos totais;
- classificação divertida;
- melhores aproximações;
- acertos exatos;
- melhor resposta;
- maior desastre.

CTAs:

- **Jogar de novo**
- **Compartilhar**

## 14. Multiplayer

Depois do solo aprovado, prototipar:

**Home → Criar/Entrar → Sala → Configurar → Pergunta → Espera → Revelação → Ranking → Próxima → Resultado → Revanche.**

Sala precisa mostrar código, compartilhar, jogadores e configurações sem parecer painel administrativo.

## 15. Compartilhamento

Criar pelo menos três peças:

### Quase

> “A resposta era 38. Eu chutei 39.”

### Desastre

> “A resposta era 42 mil. O Pedro chutou 8 milhões.”

### Convite

> “Errei por 0,8%. Chuta essa.”

A peça precisa funcionar sozinha no WhatsApp/redes.

## 16. Estados obrigatórios

- número inválido;
- tempo acabou;
- pergunta indisponível;
- sala inexistente;
- sala cheia;
- jogador caiu;
- jogador voltou;
- host mudou;
- empate;
- sem resposta.

Mensagens curtas e humanas.

## 17. Movimento obrigatório no protótipo

Simular:

- digitação do número;
- travamento do palpite;
- entrada da régua;
- chegada dos marcadores;
- resposta correta;
- estado `CRAVOU!`;
- transição para próxima pergunta.

## 18. O que não desenhar agora

- loja;
- assinatura;
- perfil social;
- clãs;
- feed;
- chat;
- moedas;
- skins;
- poderes;
- ranking mundial complexo;
- painel administrativo.

## 19. Multiplataforma

O mesmo design precisa servir à base única que será entregue como:

- Web/PWA;
- Android;
- iOS.

Não criar três interfaces independentes. Adaptar safe areas, teclado, compartilhamento e comportamento nativo quando necessário.

## 20. Critério de aprovação

Uma pessoa que nunca viu o projeto consegue:

1. começar;
2. entender a pergunta;
3. chutar;
4. entender a revelação;
5. entender os pontos;
6. querer outra;
7. compartilhar.

E o teste principal:

> se a revelação não der aquele “caralho, eu quase acertei”, ainda não acertamos o **Chuta Essa!**.