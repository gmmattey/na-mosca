# Chuta Essa! — jornada e UX/UI

> O jogo é um chute, uma revelação e aquela sensação de “caralho, eu quase acertei”. A interface existe para servir isso rápido e bonito.

## 1. Ideia visual em uma frase

**Pergunta grande, número gigante, suspense curto e revelação gostosa.**

## 2. Princípio de UX

A pessoa precisa passar pelo ciclo:

**leu → chutou → travou → revelou → comparou → quis outra.**

Quanto menos a UI atrapalhar esse ritmo, melhor.

## 3. Home

Objetivo: começar rápido.

Prioridade:

1. **Jogar agora**;
2. **Criar sala**;
3. **Entrar em sala**.

Sem login obrigatório, tutorial longo ou três telas de onboarding.

A marca **Chuta Essa!** precisa aparecer com personalidade, mas a home não vira landing page de startup.

## 4. Pergunta

A pergunta domina.

Hierarquia:

1. categoria discreta;
2. pergunta;
3. palpite gigante;
4. unidade;
5. cronômetro;
6. CTA **Chutar**.

Nada de card dentro de card.

## 5. Palpite

O campo numérico precisa parecer parte do jogo, não formulário.

- teclado numérico;
- separadores legíveis;
- valor cresce visualmente;
- unidade sempre presente;
- CTA próximo do polegar.

## 6. Palpite travado

Depois do envio:

> **Agora já foi.**

No multiplayer:

> **5 de 7 já chutaram.**

Não revelar palpite de ninguém antes da hora.

## 7. Revelação

É o principal momento visual.

Sequência:

1. marcador do jogador;
2. escala/régua;
3. resposta correta;
4. distância;
5. pontos;
6. curiosidade.

No multiplayer, palpites dos jogadores aparecem antes da resposta correta.

## 8. Estados de proximidade

Não usar “certo/errado” como prova escolar.

Estados visuais:

- **CRAVOU!** — acerto exato;
- muito perto;
- razoável;
- foi longe.

Cor nunca é a única indicação.

## 9. Ranking parcial

Curto e legível.

Mostrar:

- posição;
- apelido;
- pontos;
- pequena variação de posição quando útil.

Nada de tabela com 15 colunas.

## 10. Resultado solo

Mostrar história da partida:

- total;
- classificação;
- melhores aproximações;
- acertos exatos;
- maior desastre;
- CTA **Jogar de novo**;
- CTA **Compartilhar**.

## 11. Sala multiplayer

Criar/entrar precisa ser simples.

Sala mostra:

- código;
- compartilhar;
- jogadores;
- host;
- configurações resumidas;
- CTA **Começar** para host.

## 12. Configuração

Só o essencial:

- 5 ou 10 perguntas;
- categorias;
- 10/20/30 segundos.

Não criar painel de servidor de Minecraft.

## 13. Resultado multiplayer

Campeão em destaque + ranking curto.

Destaques possíveis:

- mais preciso;
- mais acertos exatos;
- maior desastre;
- mais consistente.

CTAs:

- **Revanche**;
- **Compartilhar**.

## 14. Compartilhamento

Peça precisa funcionar sem contexto.

Exemplos:

> “A resposta era 38. Eu chutei 39.”

> “Errei por 0,8%. Chuta essa.”

> “A resposta era 42 mil. O Pedro chutou 8 milhões.”

## 15. Copy

Curta e falada.

Evitar texto explicando o óbvio ou linguagem de IA/marketing.

Direções:

- “Chuta essa.”
- “Manda teu chute.”
- “Agora já foi.”
- “Porra. Quase.”
- “CRAVOU!”
- “Mais uma?”

## 16. Anti-template

Não usar como padrão:

- cards em excesso;
- bento grid;
- glassmorphism;
- glow;
- degradê roxo/azul;
- hero SaaS;
- fonte genérica de produto de IA.

Ver `docs/regras-design-e-copy.md`.

## 17. Mobile e plataformas

Design nasce mobile-first, referência 390×844 e mínimo 360 px.

Precisa considerar desde o começo:

- safe areas;
- teclado;
- back;
- share nativo;
- deep links;
- Web/PWA;
- Android;
- iOS.

Uma UI, adaptações de plataforma quando necessárias.

## 18. Movimento

Movimento deve servir ao jogo:

- número reagindo;
- palpite travando;
- régua entrando;
- marcadores surgindo;
- resposta chegando;
- `CRAVOU!` com impacto curto.

Nada de animação só para parecer premium.

## 19. Estados de erro

Tratar sem modal gigante:

- número inválido;
- tempo acabou;
- pergunta indisponível;
- sala inexistente;
- sala cheia;
- jogador caiu;
- jogador voltou;
- host mudou.

## 20. Critério final

A jornada está boa quando uma pessoa entra sem ajuda, manda um chute em segundos, entende imediatamente o reveal e sente vontade de responder outra.

Se parecer quiz escolar ou dashboard com cor verde, volta tudo.