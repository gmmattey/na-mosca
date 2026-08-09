# Na Mosca — regras de design e copy

> Este documento é uma trava de qualidade para protótipo, Design System e implementação. Se alguma orientação visual anterior conflitar com ele, **este documento prevalece até a próxima revisão explícita**.

## 1. O jogo não pode parecer gerado por IA

O resultado final não pode ter cara de template genérico de landing page, dashboard SaaS ou “app bonito” montado por prompt.

O teste é simples:

> se escondermos o logo, ainda dá para reconhecer que esta interface pertence a um jogo de estimativa, precisão e números?

Se a resposta for “poderia ser qualquer app”, o design falhou.

## 2. Proibido o kit visual automático de IA

Não usar como solução padrão:

- card para cada pedaço de informação;
- card dentro de card;
- bento grid só porque está na moda;
- glassmorphism;
- blur decorativo;
- degradê roxo/azul de startup;
- glow neon gratuito;
- bolhas 3D abstratas;
- ilustração genérica de personagem sorrindo;
- ícones aleatórios dentro de círculos coloridos;
- dezenas de pills/badges;
- hero com título enorme + subtítulo genérico + três cards logo abaixo;
- sombra macia em toda superfície;
- cantos arredondados iguais em absolutamente tudo;
- centralizar todo conteúdo por preguiça;
- dashboard como referência para tela de jogo.

Cards só existem quando **agrupam uma unidade funcional real**.

Preferir:

- hierarquia;
- espaço;
- escala;
- linha;
- contraste;
- número;
- movimento;
- composição.

A tela de pergunta, por exemplo, não precisa de um card contendo a pergunta, outro contendo o palpite e outro contendo o cronômetro. A própria tela é a composição.

## 3. Tipografia não pode ser “fonte padrão de IA”

As combinações anteriores `Space Grotesk + Manrope` deixam de ser direção preferencial.

Evitar usar automaticamente famílias muito recorrentes em templates gerados por IA, como:

- Inter;
- Manrope;
- Space Grotesk;
- Poppins;
- DM Sans;
- Sora.

Isso não significa que essas fontes sejam ruins. Significa que **não serão escolhidas por inércia**.

### Direção tipográfica preferida do Na Mosca

Ponto de partida para o Design System:

- **Barlow Condensed** — títulos, placares, números e momentos de impacto;
- **Barlow** — interface, perguntas, botões e textos de apoio.

Por quê:

- números ficam fortes e compactos;
- tem energia de placar/competição sem cair em fonte gamer;
- suporta valores longos melhor que uma grotesca larga;
- cria identidade coerente com precisão, alvo, escala e comparação.

O protótipo pode propor outra família, mas precisa justificar a troca pelo **caráter do jogo**, não por tendência visual.

### Testes obrigatórios da fonte

Antes de aprovar:

- `8` e `0` precisam ser claramente diferentes;
- `1.000.000` precisa caber bonito em tela pequena;
- números grandes precisam funcionar sem parecer calculadora bancária;
- unidade precisa continuar legível;
- pergunta longa não pode virar bloco esmagado;
- pesos precisam ter contraste real.

Quando tecnicamente disponível, usar números tabulares apenas em placares/rankings onde alinhamento importa. No palpite protagonista, priorizar composição.

## 4. Copy não pode parecer escrita por ChatGPT

A interface deve parecer escrita por alguém que realmente jogou a porra do jogo.

Evitar frases como:

- “Prepare-se para uma experiência única”;
- “Teste seus conhecimentos de forma divertida”;
- “Descubra o quanto você sabe”;
- “Desafie seus amigos e divirta-se”;
- “Uma experiência intuitiva, rápida e envolvente”;
- “Leve suas habilidades para o próximo nível”;
- “Sua jornada começa aqui”;
- “Pronto para o desafio?”;
- “Você consegue superar seus limites?”;
- qualquer combinação de três adjetivos genéricos para vender a própria tela.

Também evitar:

- explicar em texto o que a interface já mostra;
- título + subtítulo + parágrafo em toda tela;
- microcopy motivacional em cada ação;
- exclamação em tudo;
- emoji como muleta de personalidade;
- piada em toda mensagem.

## 5. Como a copy deve soar

Curta, concreta, falada e situacional.

Boas direções:

- “Manda teu chute.”
- “Agora já foi.”
- “38 metros.”
- “Você chutou 41.”
- “Porra. Quase.”
- “Errou por 0,8%.”
- “NA MOSCA!”
- “Mais uma?”

A graça vem da situação e do resultado, não de um redator tentando provar que é engraçado.

## 6. Regra de densidade

Uma tela de rodada deve ter **um protagonista visual**.

Exemplos:

- pergunta;
- palpite;
- revelação;
- ranking.

Elementos auxiliares não ganham caixas próprias só para “organizar”.

Se a tela tiver cinco retângulos arredondados competindo entre si, voltar para a composição.

## 7. Formas têm origem na mecânica

A linguagem visual deve nascer de:

- alvo;
- proximidade;
- escala;
- eixo;
- marcador;
- distância;
- ponto;
- intervalo;
- número.

Não inventar uma biblioteca decorativa desconectada da mecânica.

## 8. Imagem e ilustração

Não usar arte genérica de IA como base da identidade.

Se houver ilustração:

- deve ter função;
- deve conversar com a pergunta/revelação;
- deve usar uma linguagem gráfica própria e repetível;
- não pode parecer pacote aleatório de imagens geradas em estilos diferentes.

Pouca ilustração é melhor que muita ilustração sem sistema.

## 9. Componentes não são o Design System inteiro

O Design System precisa definir também:

- escala tipográfica;
- espaçamento;
- ritmo;
- grid;
- tratamento de números;
- estados de proximidade;
- movimento;
- comportamento de reveal;
- densidade;
- safe areas;
- hierarquia por fase do jogo.

Não entregar uma página com 25 cards de componentes e chamar isso de Design System.

## 10. Desktop não vira landing page de IA

A versão desktop deve adaptar o jogo, não transformar a home em site de startup.

Evitar:

- hero gigante com mockup flutuante;
- três benefícios em cards;
- seção “como funciona” em três passos com ícones redondos;
- depoimentos falsos;
- números de métricas inventados;
- FAQ só para preencher página.

SEO precisa de conteúdo real, mas conteúdo real pode ser bem diagramado sem parecer template de SaaS.

## 11. Protótipo usa texto real

Não usar lorem ipsum nem copy provisória genérica nas telas principais.

O protótipo deve usar:

- perguntas reais do banco candidato;
- números plausíveis;
- feedbacks reais;
- apelidos naturais;
- erros reais;
- estados de jogo reais.

Design com conteúdo falso mascara problema de layout.

## 12. Critério anti-IA antes de aprovar uma tela

Perguntar:

1. esta tela poderia ser de qualquer startup se trocarmos o logo?
2. tem card demais?
3. tem texto explicando o óbvio?
4. a fonte foi escolhida pelo jogo ou por moda?
5. existe algum degradê/glow/blur sem função?
6. o elemento principal da rodada está óbvio em dois segundos?
7. a copy parece uma pessoa falando ou uma IA vendendo produto?
8. a tela tem alguma decisão visual específica da mecânica do Na Mosca?

Se três ou mais respostas forem ruins, redesenhar antes de avançar.

## 13. Regra para OpenDesign / Figma / qualquer agente

O agente de design deve:

- ler este documento antes de gerar telas;
- respeitar a identidade específica do jogo;
- não completar espaços vazios com cards;
- não escolher fonte por conveniência;
- não reescrever copy para “mais profissional”;
- não adicionar funcionalidade para deixar a tela “mais rica”;
- mostrar primeiro a hierarquia e a mecânica, depois decoração;
- explicar qualquer desvio relevante destas regras.

## 14. Estado do nome

`Na Mosca` deve ser tratado, por enquanto, como **working title**.

Não investir em wordmark final, símbolo dependente do nome, domínio pago ou assets de loja definitivos até a validação de naming terminar.

O Design System pode evoluir em cima da ideia de **estimativa + proximidade + precisão**, que continua válida mesmo se o nome mudar.