# Na Mosca — checklist de produção e lançamento

> Produção não é “abriu no meu celular”. Produção é o conjunto inteiro aguentar gente real fazendo coisa que a gente não imaginou.

## 1. Produto

- [ ] fluxo solo completo sem beco sem saída;
- [ ] multiplayer completo se fizer parte da versão lançada;
- [ ] regras iguais ao documento funcional;
- [ ] pontuação validada pelos testes canônicos;
- [ ] nenhum tutorial longo obrigatório;
- [ ] primeira partida começa rápido;
- [ ] resultado e revelação estão claros;
- [ ] revanche funciona em poucos toques;
- [ ] compartilhamento gera preview bonito.

## 2. Conteúdo

- [ ] mínimo de 40 perguntas aprovadas para teste público inicial;
- [ ] nenhuma pergunta `candidate` publicada por engano;
- [ ] fontes revisadas;
- [ ] perguntas temporais têm data explícita;
- [ ] mistura de dificuldade razoável;
- [ ] nenhuma categoria domina o lote;
- [ ] perguntas chatas descartadas sem dó.

## 3. Backend e dados

- [ ] projeto Supabase correto: `auê-games` (20T reaproveitado);
- [ ] auditoria do 20T concluída antes de migration destrutiva;
- [ ] migrations versionadas;
- [ ] RLS revisado;
- [ ] Auth anônimo funcionando;
- [ ] RPC de pergunta não vaza resposta;
- [ ] RPC de palpite calcula resultado no servidor;
- [ ] reconexão multiplayer testada;
- [ ] expiração de sala funcionando;
- [ ] nenhuma key sensível no frontend.

## 4. Frontend/PWA

- [ ] mobile-first em Android/iPhone;
- [ ] Chrome/Safari/Edge básicos testados;
- [ ] viewport pequeno testado;
- [ ] teclado numérico não quebra layout;
- [ ] loading/erro/offline tratados;
- [ ] PWA manifest válido;
- [ ] favicon/ícones;
- [ ] meta title/description;
- [ ] Open Graph;
- [ ] `robots.txt`/indexação decididos conscientemente;
- [ ] Lighthouse usado como sinal, não religião.

## 5. Acessibilidade

- [ ] contraste aceitável;
- [ ] texto não depende só de cor;
- [ ] foco de teclado visível;
- [ ] botões com área de toque decente;
- [ ] animações respeitam redução de movimento;
- [ ] número/unidade compreensíveis por leitor de tela;
- [ ] tempo de rodada não cria barreira desnecessária.

## 6. Segurança

Executar integralmente o checklist de `docs/seguranca-idade-e-moderacao.md`.

Além disso:

- [ ] dependências auditadas;
- [ ] build sem secret;
- [ ] URLs de callback corretas;
- [ ] CORS mínimo necessário;
- [ ] teste manual de DevTools tentando descobrir resposta;
- [ ] teste de dupla submissão;
- [ ] teste de sala inválida/expirada.

## 7. Legal e privacidade

- [ ] controlador e contato definidos;
- [ ] política de privacidade pública;
- [ ] termos públicos;
- [ ] retenção definida;
- [ ] fluxo de exclusão;
- [ ] idade/classificação revisadas conforme regra vigente;
- [ ] fornecedores reais listados;
- [ ] cookies/consentimento avaliados;
- [ ] publicidade desligada no baseline inicial;
- [ ] revisão jurídica antes de monetização/escala.

## 8. Analytics

- [ ] eventos mínimos implementados;
- [ ] sem nickname em analytics;
- [ ] funil solo visível;
- [ ] funil multiplayer visível se lançado;
- [ ] evento de revanche confiável;
- [ ] compartilhamento medido;
- [ ] convite medido;
- [ ] dados de teste separados ou filtráveis.

## 9. Infraestrutura zero-custo

- [ ] Cloudflare Pages no Free;
- [ ] Supabase no Free;
- [ ] nenhum recurso pago habilitado automaticamente;
- [ ] alerta/monitoramento manual de quota definido;
- [ ] storage desnecessário inexistente;
- [ ] realtime usado só quando precisa;
- [ ] domínio próprio não é bloqueador.

## 10. Pré-lançamento

Fazer três círculos, não jogar a URL no mundo de uma vez.

### Círculo 1 — nós mesmos

- fluxos completos;
- abuso básico;
- mobile real;
- perguntas.

### Círculo 2 — 5 a 15 pessoas conhecidas

Objetivo: descobrir se entendem sem explicação.

### Círculo 3 — 30 a 100 jogadores reais

Objetivo: medir comportamento, não opinião.

Só depois pensar em divulgação mais ampla.

## 11. Gate de lançamento público

Não lançar publicamente se houver qualquer um destes:

- resposta correta vazando antes da hora;
- pontuação manipulável pelo cliente;
- erro que trava partida com frequência;
- política/legal básico ausente;
- pergunta ambígua aparecendo regularmente;
- evento principal de analytics quebrado;
- segredo ou key exposta;
- necessidade de plano pago não aprovada.

## 12. Pós-lançamento — primeiras 72 horas

Observar:

- erros;
- abandono;
- conclusão;
- revanche;
- perguntas denunciadas/estranhas;
- consumo Supabase;
- compartilhamentos;
- comportamento no mobile.

Não lançar 15 features novas porque alguém deu uma ideia no WhatsApp.

## 13. Regra final

O objetivo do lançamento não é provar que fizemos tudo certo.

É colocar uma versão pequena, segura e mensurável na rua e descobrir onde estávamos errados.