# Chuta Essa! — Protótipos de tela v1

Protótipo visual aprovado em 2026-08-09 para orientar a implementação do **Chuta Essa!**.

## Arquivos visuais

As telas aprovadas estão em:

`docs/design/prototipos/chuta-essa-v1/telas/`

Há **um HTML estático por tela**, de `01-splash-loading.html` até `14-resultado-da-sala.html`. Esses arquivos usam os tokens e estilos do Design System versionado em `docs/design/design-system/` e são a referência visual que o Antigravity deve abrir e comparar durante implementação e QA.

Os `.md` desta pasta não substituem os HTMLs: eles registram precedência, jornada, regra de uso e handoff. O HTML registra a composição visual aprovada.

## Autoridade e precedência

Este pacote define **jornada, composição, hierarquia e estados de tela**.

As fontes continuam separadas de propósito:

1. `docs/documentacao-funcional.md` manda na **regra do jogo**;
2. `docs/design/design-system/` manda em **tokens, componentes, tipografia, motion e assets**;
3. os HTMLs em `telas/` mandam na **composição e sequência visual aprovada**;
4. `docs/regras-design-e-copy.md` continua sendo gate anti-IA.

Se o protótipo divergir da regra funcional, a regra funcional vence. Se uma implementação visual ignorar o Design System sem justificativa, o Design System vence.

## Jornada solo MVP aprovada

```text
Splash
→ onboarding (somente na primeira utilização; pode pular)
→ Home
→ Pergunta / Palpite
→ Revelação / resultado da rodada
→ próxima pergunta
→ Resultado final
→ Jogar de novo / Compartilhar
```

**Não existe anúncio nesse caminho do MVP.**

A tela de anúncio existente no estudo original foi mantida apenas como cenário **FUTURO — FORA DO MVP**. Se monetização for introduzida depois, o anúncio só pode ocupar uma pausa natural **depois** da revelação/resultado e **antes** da próxima pergunta. Nunca entre palpite e revelação.

## Telas aprovadas

### Jornada solo

1. Splash / Loading
2. Onboarding — mecânica
3. Onboarding — pontuação
4. Home
5. Pergunta / Palpite
6. Revelação / resultado da rodada
7. Resultado final

### Suporte

8. Configurações / Som — referência de suporte/futuro, fora da fatia solo MVP inicial
9. Erro / Sem conexão / Timeout

### Cenário futuro

10. Anúncio intersticial — fora do MVP

### Sala / multiplayer

11. Criar sala
12. Entrar em sala
13. Sala / Lobby
14. Resultado da sala

## Correções feitas antes de tornar o protótipo canônico

O export revisado pelo usuário foi conferido contra a documentação funcional e recebeu estes ajustes de coerência antes do versionamento:

- monetização removida da jornada principal;
- anúncio proibido entre palpite e revelação;
- onboarding explicitamente limitado à primeira utilização e pulável;
- configuração multiplayer corrigida de `10/15/20` para **5/10 rodadas**;
- timer multiplayer corrigido de `15/20/30` para **10/20/30 segundos**;
- seleção de **categorias** explicitada na criação de sala;
- opção de **Notificações** removida por não existir regra de produto que a peça hoje;
- tela de configurações marcada como suporte/futuro, não como obrigação da fatia solo MVP.

## Multiplayer — regras que a tela precisa respeitar

O host escolhe:

- **5 ou 10 rodadas**;
- **categorias**;
- **10, 20 ou 30 segundos** por pergunta.

A sala continua sem login obrigatório, com código/link, apelido e palpites secretos até a revelação.

## Como o Antigravity deve usar isto

- Giam abre primeiro o HTML da tela/estado aplicável em `telas/` e usa o handoff para entender a intenção.
- Guinho implementa usando `docs/design/design-system/`, sem redesenhar a interface por conta própria.
- Marcelinho compara a entrega com o HTML aprovado, com o Design System e com a documentação funcional.
- Nenhuma tela deste pacote abre escopo sozinha. Se estiver marcada como futuro/suporte, não entra numa fatia MVP só porque existe desenho.

Leia também `HANDOFF.md` nesta pasta para a especificação tela a tela.
