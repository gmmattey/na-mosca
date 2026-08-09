# Na Mosca — privacidade e termos de uso (pré-lançamento)

> Documento de produto. Deve ser revisado juridicamente antes de produção pública.

## 1. Regra de produto

O Na Mosca coleta o mínimo possível para funcionar.

No MVP:

- não exigir nome real;
- não exigir email para jogar;
- usar sessão anônima do Supabase quando identidade técnica for necessária;
- nickname serve apenas para sala multiplayer;
- não coletar localização precisa;
- não acessar contatos;
- não vender dados pessoais;
- não usar dados de jogo para publicidade comportamental dirigida a crianças ou adolescentes;
- não guardar mais coisa só porque o banco permite.

## 2. Dados tratados no MVP

### Técnicos

- `user_id` anônimo do Supabase Auth;
- identificadores de sessão e sala;
- timestamps;
- eventos técnicos mínimos de uso;
- informações de erro e segurança estritamente necessárias.

### De jogo

- nickname escolhido na sala;
- palpites numéricos;
- pontuação;
- participação em partidas;
- preferências locais quando aplicável.

### Analytics

Analytics deve seguir `docs/analytics-e-metricas.md`.

Não guardar nickname em analytics.

## 3. O que não coletar sem nova decisão

- data de nascimento completa;
- documento de identidade;
- endereço;
- telefone;
- biometria;
- foto;
- microfone/câmera;
- lista de contatos;
- geolocalização precisa;
- dados sensíveis;
- perfil publicitário comportamental.

Se alguma obrigação legal futura exigir mecanismo de aferição de idade, escolher a alternativa mais proporcional e menos invasiva disponível no momento da implementação.

## 4. Finalidades

Os dados podem ser usados para:

- permitir jogar;
- manter sessão e reconexão;
- formar sala multiplayer;
- calcular resultado e ranking;
- prevenir abuso e fraude;
- entender falhas e abandono;
- melhorar a experiência;
- cumprir obrigação legal aplicável.

Não criar finalidade genérica do tipo “para quaisquer fins comerciais”.

## 5. Compartilhamento com fornecedores

Fornecedores previstos no MVP:

- Supabase — autenticação, banco e realtime;
- Cloudflare — hospedagem/CDN, proteção e eventual Turnstile;
- provedor de publicidade somente quando publicidade for ativada.

Antes de produção, a política pública deve informar fornecedores efetivamente usados e apontar para suas políticas quando necessário.

## 6. Retenção

Regra inicial:

- salas e dados transitórios: expirar automaticamente;
- palpites multiplayer: manter apenas pelo tempo necessário para partida, suporte e métricas agregadas;
- analytics: preferir agregação e retenção limitada;
- usuário anônimo sem atividade prolongada: elegível para limpeza periódica;
- logs técnicos: retenção curta e sem conteúdo desnecessário.

Valores exatos de retenção devem ser definidos após observar necessidade real e limitações operacionais do Supabase Free.

Nada de guardar histórico eterno por preguiça.

## 7. Exclusão e direitos do usuário

Antes do lançamento público deve existir um caminho simples para:

- pedir exclusão de dados associados a uma conta identificável;
- solicitar informação sobre tratamento de dados;
- comunicar problema de privacidade;
- retirar consentimento quando consentimento for a base aplicável.

Contato público ainda será definido. Não inventar email jurídico agora.

## 8. Crianças e adolescentes

O jogo não será desenhado como produto infantil.

Mesmo assim, por ser jogo digital simples e compartilhável, deve ser tratado como serviço com possível acesso por adolescentes e potencial acesso por crianças.

Antes de produção pública:

- revisar a versão vigente do ECA Digital e regulamentação da ANPD;
- decidir mecanismo proporcional de aferição/sinalização etária aplicável ao canal Web/PWA;
- revisar classificação indicativa aplicável;
- manter publicidade comportamental para menores fora do produto;
- não lançar pacote +18 sem fluxo separado e revisão específica.

Não assumir que uma caixinha “tenho 18 anos” resolve obrigação legal de aferição de idade.

## 9. Regras essenciais dos Termos de Uso

Os termos públicos devem informar, de forma simples, que:

- o jogo é fornecido no estado em que se encontra, especialmente em fase beta;
- o usuário é responsável pelo nickname que escolhe;
- tentativa de fraude, abuso, automação maliciosa ou exploração da infraestrutura pode gerar bloqueio;
- não há garantia de disponibilidade ininterrupta;
- pontuação e ranking podem ser corrigidos se houver erro técnico ou fraude;
- conteúdo, marca e elementos do jogo não podem ser copiados como produto concorrente sem autorização;
- links de compartilhamento podem deixar de funcionar quando uma sala expira;
- regras podem evoluir com aviso adequado quando a mudança for relevante.

## 10. O que o usuário NÃO transfere para nós

No Na Mosca o usuário praticamente não cria conteúdo autoral além de nickname e palpite.

Não inserir cláusula exagerada dizendo que o usuário cede todos os direitos sobre qualquer coisa que digitar.

## 11. Base legal e texto público

Este documento não fecha sozinho as bases legais de tratamento da LGPD.

Antes de produção, mapear por finalidade qual hipótese legal efetivamente será utilizada e refletir isso na política pública.

## 12. Pendências obrigatórias antes de produção

- [ ] definir controlador/operador responsável e dados de contato;
- [ ] revisar LGPD e ECA Digital vigentes na data do lançamento;
- [ ] definir mecanismo de idade aplicável;
- [ ] fechar prazos de retenção;
- [ ] definir canal de direitos/exclusão;
- [ ] revisar fornecedores reais;
- [ ] revisar publicidade antes de ativar ads;
- [ ] revisão jurídica final do texto público.

## 13. Regra final

Privacidade aqui não é banner bonito de cookie.

É coletar pouco, guardar pouco, explicar direito e não transformar um jogo de chutar número numa operação de vigilância.