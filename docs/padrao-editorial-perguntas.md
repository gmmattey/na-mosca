# Na Mosca — padrão editorial das perguntas

> Pergunta boa não é a que prova que o autor sabe uma curiosidade obscura. É a que faz a pessoa pensar: “caralho… eu tenho um chute pra isso”.

## 1. Regra de ouro

Toda pergunta precisa funcionar mesmo quando o jogador **não sabe** a resposta.

O jogo é de estimativa, não de decoreba.

Uma boa pergunta deve permitir algum tipo de referência mental.

Exemplo bom:

> Quantos metros de altura tem a Torre Eiffel hoje?

A pessoa pode imaginar um prédio, comparar mentalmente e chutar.

Exemplo ruim:

> Quantos parafusos existem no modelo X de uma máquina industrial que ninguém conhece?

Ter resposta numérica não transforma qualquer porcaria em pergunta jogável.

## 2. O teste da mesa de bar

Antes de aprovar uma pergunta, imaginar alguém lendo em voz alta para amigos.

Ela passa se provocar pelo menos uma destas reações:

- “ih, essa eu acho que sei”;
- “deve ser uns…”;
- “não é possível que seja tanto”;
- “caralho, eu passei longe”;
- “eu sabia que era por aí”.

Se a reação provável for “tá, mas quem diabos saberia isso?”, revisar ou jogar fora.

## 3. Formato obrigatório

Cada pergunta precisa ter:

- `id` editorial estável;
- `category`;
- `prompt`;
- `answer_numeric`;
- `unit`;
- `difficulty`;
- `reveal_text`;
- `source_label`;
- `source_url`;
- `reference_date` quando o número puder mudar;
- `status`;
- `editorial_notes` para decisão interna quando necessário.

## 4. Status editorial

### `candidate`

Encontramos fonte e a pergunta parece promissora, mas ainda não foi aprovada para jogo.

### `approved`

Passou por revisão factual + revisão de diversão.

### `published`

Está pronta para entrar no banco jogável.

### `disabled`

Já foi válida, mas deve sair de novas partidas.

Motivos comuns:

- fonte mudou;
- número envelheceu;
- enunciado ficou ambíguo;
- pergunta é tecnicamente correta e divertida feito uma multa de trânsito.

## 5. Fonte

Preferência de fonte:

1. órgão ou entidade responsável pelo dado;
2. documentação oficial;
3. instituição científica reconhecida;
4. fonte regulatória ou arquivo oficial;
5. publicação secundária confiável, somente quando não houver fonte primária razoável.

Evitar como fonte principal:

- blog SEO;
- resposta de fórum;
- TikTok;
- lista de curiosidades sem referência;
- resultado do Google sem abrir a fonte;
- texto gerado por IA sem verificação.

Wikipedia pode ajudar a descobrir o caminho, mas não deve ser nossa muleta editorial padrão.

## 6. Números que mudam

Se a resposta puder mudar, a pergunta precisa carregar a data dentro da própria ideia.

Ruim:

> Quantos municípios o Brasil tem?

Melhor:

> Segundo o IBGE, quantos municípios o Brasil tinha na referência usada em 2026?

Melhor ainda, quando fizer sentido:

> Segundo o IBGE, quantos municípios o Brasil tinha na divisão divulgada para 2021?

O jogador precisa saber **qual fotografia do tempo** estamos usando.

## 7. Aproximações

Quando a própria fonte usa “aproximadamente”, o prompt também deve deixar isso claro.

Não transformar estimativa científica em falsa precisão.

Exemplo:

> Aproximadamente quantos quilômetros separam a Terra da Lua em média?

Resposta editorial: `384400`.

## 8. Unidade

A unidade aparece na tela antes do chute.

Ela deve ser a que uma pessoa comum consegue usar mentalmente.

Preferir:

- metros em vez de milímetros gigantes;
- quilômetros em vez de metros astronômicos;
- minutos em vez de segundos para filmes;
- toneladas quando quilos gerariam um número inútil;
- milhões/bilhões somente se a interface suportar claramente a escala.

Não trocar unidade só para tornar a pergunta artificialmente difícil.

## 9. Casas decimais

Pergunta boa raramente precisa que o jogador chute `1296,72`.

O banco pode guardar precisão real, mas a experiência deve aceitar aproximação natural.

Quando possível:

- mostrar resposta arredondada no reveal;
- manter valor bruto para cálculo;
- explicar a precisão na curiosidade.

## 10. Dificuldade

Dificuldade mede **capacidade de estimar**, não apenas raridade do fato.

### `easy`

Há forte referência mental ou o número é culturalmente conhecido.

### `medium`

É possível montar uma estimativa razoável, mas exige comparação.

### `hard`

A escala surpreende e a referência mental é mais fraca, porém ainda existe alguma lógica de chute.

Pergunta impossível não é `hard`. É pergunta ruim.

## 11. Reveal

O reveal não deve repetir apenas o número.

Ruim:

> Resposta: 330 metros.

Bom:

> 330 metros. A Torre Eiffel ganhou seis metros em 2022 quando recebeu uma nova antena de rádio digital.

O `reveal_text` é onde a pergunta paga a curiosidade que criou.

## 12. Evitar pegadinha semântica

Não usar diferença secreta entre:

- altura com antena vs. sem antena;
- versão de cinema vs. streaming;
- população estimada vs. censitária;
- peso líquido vs. bruto;
- capacidade máxima vs. recomendada.

Se existe mais de uma resposta defensável, o enunciado precisa escolher explicitamente uma.

## 13. Conteúdo sensível

Evitar no banco geral:

- número de mortos em tragédias como entretenimento;
- violência gráfica;
- doença apresentada como piada;
- peso/corpo com potencial de humilhação pessoal;
- estatísticas políticas usadas como provocação partidária;
- sexualização gratuita.

Pode existir curiosidade histórica séria, mas não precisamos transformar qualquer desgraça em rodada de festa.

## 14. Mistura de uma partida

Uma partida de 10 perguntas não deve parecer uma prova temática acidental.

Mix recomendado no modo geral:

- no máximo 2 perguntas consecutivas da mesma categoria;
- variar grandezas: distância, quantidade, tempo, peso, área etc.;
- evitar duas perguntas seguidas com escalas quase idênticas;
- misturar fácil, média e difícil;
- evitar duas perguntas do mesmo objeto na mesma partida.

## 15. Repetição

O sistema deve conseguir evitar perguntas recém-vistas localmente.

No começo, um histórico leve de IDs no navegador basta.

Não precisamos criar uma infraestrutura da NASA só para lembrar que o sujeito já respondeu sobre a Torre Eiffel ontem.

## 16. Categorias iniciais

- Brasil
- Mundo
- Ciência e natureza
- Cinema e TV
- Música
- Esportes
- Tecnologia
- Corpo humano
- Comida
- Curiosidades absurdas

A categoria é para ajudar variedade e escolha. Não precisa virar taxonomia acadêmica.

## 17. Critério para publicar

Uma pergunta só vira `published` quando alguém consegue responder “sim” para tudo:

- a fonte sustenta exatamente o número?
- a unidade está explícita?
- a data está explícita se o dado muda?
- existe somente uma interpretação razoável?
- dá para chutar sem saber de cabeça?
- o reveal acrescenta alguma coisa?
- ela é divertida o bastante para ocupar uma das dez vagas de uma partida?

Se uma resposta for “não”, volta para revisão.

## 18. Regra final

O banco de perguntas é parte do produto, não enchimento de banco.

**Cinquenta perguntas ótimas valem mais que cinco mil perguntas geradas automaticamente e revisadas por porra nenhuma.**