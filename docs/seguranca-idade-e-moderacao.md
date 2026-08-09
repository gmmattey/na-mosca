# Na Mosca — segurança, idade e moderação

> Segurança boa é a que evita a merda antes de precisar de equipe de Trust & Safety com 40 pessoas.

## 1. Superfície de risco do MVP

O Na Mosca tem risco relativamente baixo porque:

- não tem chat aberto;
- não tem DM;
- não tem upload de foto/vídeo/áudio;
- não tem perfil público complexo;
- não tem compra dentro da rodada;
- não tem aposta;
- não tem conteúdo gerado por IA em tempo real.

Os principais riscos são:

- nickname abusivo;
- automação/bot;
- tentativa de manipular pontuação;
- abuso de criação de salas;
- vazamento da resposta correta;
- exposição indevida de dados técnicos;
- acesso de menores a eventual conteúdo/ads inadequados.

## 2. Nickname

No MVP:

- limite curto de caracteres;
- normalização básica;
- filtro de termos claramente ofensivos, discriminatórios, sexuais ou de impersonação;
- sem busca pública por nickname;
- nickname vale apenas na sala;
- host pode remover participante em caso de abuso.

Não tentar construir moderação linguística perfeita no primeiro dia.

## 3. Sala

- código não sequencial e difícil de adivinhar em massa;
- limite de tentativas de entrada;
- expiração automática;
- limite de salas criadas por sessão/IP em janela razoável;
- Turnstile quando padrão de abuso justificar;
- host não pode acessar resposta secreta por privilégio de interface.

## 4. Integridade do jogo

- cliente nunca envia pontos oficiais;
- resposta correta não deve chegar ao cliente antes da revelação;
- funções sensíveis autoritativas no backend/RPC;
- RLS habilitado por padrão;
- service role nunca no frontend;
- eventos realtime não carregam resposta de outros jogadores antes da hora.

## 5. Idade

### Postura do MVP

O Na Mosca não é direcionado a crianças, mas é suficientemente simples para poder ser acessado por esse público.

Portanto, antes de produção pública:

1. revisar orientação definitiva vigente da ANPD sobre aferição de idade;
2. verificar se o navegador/OS fornece sinal etário utilizável;
3. escolher mecanismo proporcional ao risco;
4. evitar coletar documento/biometria por conta própria se solução menos invasiva for suficiente;
5. registrar a decisão de produto e fundamento técnico/jurídico.

### Conteúdo

Pacote base deve ser adequado a público geral/adolescente.

Não entra no MVP:

- sexo explícito;
- drogas como incentivo de consumo;
- violência gráfica;
- aposta;
- desafio perigoso;
- pacote +18.

Qualquer versão +18 futura é outro problema de produto e precisa de revisão separada.

## 6. Publicidade

No primeiro lançamento, preferir **sem publicidade** para criar baseline de retenção.

Quando ads entrarem:

- nunca no meio de pergunta/rodada;
- nunca usar perfilamento comportamental dirigido a criança ou adolescente;
- bloquear categorias de anúncio incompatíveis com a classificação do produto;
- rever consentimento/cookies e políticas do fornecedor;
- medir impacto na revanche.

## 7. Rate limit inicial

Sem números tratados como religião, mas criar limites para:

- criação de sala;
- entrada repetida com código inválido;
- submissão de palpite duplicada;
- chamada repetitiva de RPC de pergunta;
- geração de sessões anônimas em massa.

Primeiro observar, depois ajustar.

## 8. Incidente

Se houver suspeita de vazamento ou acesso indevido:

1. bloquear vetor de abuso;
2. preservar logs mínimos necessários;
3. identificar dados e usuários potencialmente afetados;
4. avaliar obrigação de comunicação conforme LGPD/regulação vigente;
5. corrigir por migration/patch rastreável;
6. registrar causa raiz.

## 9. Checklist de segurança antes de produção

- [ ] RLS em todas as tabelas expostas;
- [ ] nenhuma service key no bundle;
- [ ] RPCs validam `auth.uid()`;
- [ ] resposta correta protegida;
- [ ] nickname filtrado;
- [ ] sala expira;
- [ ] rate limits definidos;
- [ ] dependências sem vulnerabilidade crítica conhecida;
- [ ] headers básicos de segurança configurados;
- [ ] política de idade revisada;
- [ ] política de privacidade publicada;
- [ ] canal de contato definido;
- [ ] fluxo de exclusão testado.

## 10. Regra final

O objetivo não é deixar o jogo impossível de atacar.

É não entregar a chave da casa embaixo do tapete e depois agir surpreso.