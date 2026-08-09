# Chuta Essa! — regras de design e copy

> Este documento é trava de qualidade para protótipo, Design System e implementação. Se alguma orientação visual anterior conflitar com ele, **este documento prevalece** até revisão explícita.

## 1. O jogo não pode parecer gerado por IA

Se escondermos o logo, a interface ainda precisa parecer um jogo de estimativa, número, proximidade e revelação.

Se puder virar qualquer SaaS trocando cor e texto, falhou.

## 2. Proibido o kit visual automático de IA

Não usar como solução padrão:

- card para cada pedaço de informação;
- card dentro de card;
- bento grid;
- glassmorphism;
- blur decorativo;
- degradê roxo/azul de startup;
- glow neon gratuito;
- bolhas 3D abstratas;
- personagem genérico sorrindo;
- ícones aleatórios dentro de círculos coloridos;
- excesso de pills e badges;
- hero com título enorme + subtítulo genérico + três cards;
- sombra macia em toda superfície;
- cantos arredondados iguais em tudo;
- dashboard como referência para tela de jogo.

Cards só existem quando agrupam uma unidade funcional real.

A tela de pergunta não precisa de um card para pergunta, outro para palpite e outro para cronômetro. **A própria tela é a composição.**

## 3. Tipografia tem que nascer do jogo

Direção preferida:

- **Barlow Condensed** — títulos, números, placares e momentos de impacto;
- **Barlow** — interface, perguntas, botões e apoio.

Evitar escolher por inércia famílias recorrentes em templates de IA, como:

- Inter;
- Manrope;
- Space Grotesk;
- Poppins;
- DM Sans;
- Sora.

Não são fontes ruins. Só não entram porque “todo mundo usa”.

### Testes obrigatórios

- `8` e `0` claramente diferentes;
- `1.000.000` bonito em 360 px;
- números grandes sem cara de banco/calculadora;
- unidade legível;
- perguntas longas sem bloco esmagado;
- pesos com contraste real.

## 4. Copy não pode parecer ChatGPT vendendo produto

Evitar:

- “Prepare-se para uma experiência única”;
- “Teste seus conhecimentos de forma divertida”;
- “Descubra o quanto você sabe”;
- “Desafie seus amigos e divirta-se”;
- “Uma experiência intuitiva, rápida e envolvente”;
- “Leve suas habilidades para o próximo nível”;
- “Sua jornada começa aqui”;
- “Pronto para o desafio?”;
- três adjetivos genéricos em sequência;
- texto explicando o que a interface já mostra;
- título + subtítulo + parágrafo em toda tela;
- microcopy motivacional em cada ação;
- emoji como personalidade;
- piada em toda mensagem.

## 5. Como a copy deve soar

Curta, concreta, falada e situacional.

Boas direções:

- “Chuta essa.”
- “Manda teu chute.”
- “Agora já foi.”
- “38 metros.”
- “Você chutou 41.”
- “Porra. Quase.”
- “Errou por 0,8%.”
- “CRAVOU!”
- “Mais uma?”

A graça vem da situação e do resultado, não de um redator tentando provar que é engraçado.

## 6. Uma tela, um protagonista

Durante a rodada, o protagonista pode ser:

- pergunta;
- palpite;
- revelação;
- ranking.

Elementos auxiliares não ganham caixas próprias só para “organizar”.

## 7. Formas vêm da mecânica

A linguagem visual deve nascer de:

- alvo abstrato;
- proximidade;
- escala;
- eixo;
- marcador;
- distância;
- ponto;
- intervalo;
- número.

Nada de biblioteca decorativa desconectada da brincadeira.

## 8. Imagem e ilustração

Não usar arte genérica de IA como base da identidade.

Se houver ilustração, ela precisa:

- ter função;
- conversar com pergunta/revelação;
- usar linguagem gráfica própria e repetível;
- manter consistência entre peças.

Pouca ilustração boa vale mais que um monte de imagens aleatórias.

## 9. Design System não é catálogo de cards

Precisa definir:

- escala tipográfica;
- espaçamento;
- grid;
- tratamento de números;
- estados de proximidade;
- movimento;
- comportamento da revelação;
- densidade;
- safe areas;
- hierarquia por fase;
- componentes só depois da lógica visual.

Uma página com 25 componentes arredondados não é um Design System completo.

## 10. Desktop não vira landing page de IA

Evitar:

- hero gigante com mockup flutuante;
- três benefícios em cards;
- “como funciona” em três passos com ícones redondos;
- depoimentos falsos;
- métricas inventadas;
- FAQ só para preencher página.

SEO precisa de conteúdo real. Conteúdo real não precisa parecer template SaaS.

## 11. Protótipo usa conteúdo real

Nada de lorem ipsum nas telas principais.

Usar:

- perguntas reais do banco candidato;
- números plausíveis;
- feedbacks reais;
- apelidos naturais;
- erros e estados reais.

Design com conteúdo falso mascara problema de layout.

## 12. Critério anti-IA

Antes de aprovar uma tela, perguntar:

1. poderia ser de qualquer startup se trocarmos o logo?
2. tem card demais?
3. tem texto explicando o óbvio?
4. a fonte foi escolhida pelo jogo ou por moda?
5. existe degradê/glow/blur sem função?
6. o protagonista da fase está óbvio em dois segundos?
7. a copy parece gente falando?
8. existe decisão visual específica da mecânica do Chuta Essa!?

Se três ou mais respostas forem ruins, redesenhar.

## 13. Regra para OpenDesign / Figma / qualquer agente

O agente deve:

- ler `docs/00-nome-canonico.md` antes de tudo;
- ler este documento antes de criar tela;
- respeitar a identidade específica do jogo;
- não preencher vazio com cards;
- não escolher fonte por conveniência;
- não “profissionalizar” a copy apagando a voz do jogo;
- não adicionar feature para enriquecer tela;
- mostrar hierarquia e mecânica antes de decoração;
- justificar qualquer desvio relevante.

## 14. Nome e marca

O nome canônico é **Chuta Essa!**.

Não usar `Na Mosca` em novos artefatos visuais.

Não usar mosca literal como símbolo, mascote ou metáfora principal.

A identidade deve continuar funcionando em torno de **chute + estimativa + proximidade + número**.

## 15. Regra final

Se o protótipo parece “bonito” mas não parece especificamente **Chuta Essa!**, ainda não está pronto.