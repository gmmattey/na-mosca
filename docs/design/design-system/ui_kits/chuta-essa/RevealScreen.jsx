function RevealScreen({question,guess,onNext}){
const {ProximityBadge,ProximityScale,ScoreCounter,Button}=window.ChutaEssaDesignSystem_d442e3;
const g=Number(guess||0); const a=question.answer;
const err=a?Math.abs(g-a)/a:1;
let state='longe',points=50;
if(g===a){state='cravou';points=1000;} else if(err<=0.01){state='muito_perto';points=900;} else if(err<=0.1){state='muito_perto';points=600;} else if(err<=0.25){state='razoavel';points=400;}
const guessPct=Math.max(6,Math.min(94,50+(g-a)/Math.max(a,1)*40));
const answerPct=50;
return (<div style={{height:'100%',background:'var(--bg-dark)',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'48px 28px 40px'}}>
<div style={{display:'flex',flexDirection:'column',gap:20,alignItems:'center'}}>
<ProximityBadge state={state} />
<div style={{font:'var(--text-guess)',fontSize:96,color:'var(--text-on-dark)'}}>{question.answer.toLocaleString('pt-BR')}</div>
<div style={{font:'var(--text-label)',letterSpacing:'var(--tracking-label)',color:'var(--text-on-dark-muted)'}}>{question.unit.toUpperCase()} &middot; VOCE CHUTOU {g.toLocaleString('pt-BR')}</div>
</div>
<div style={{width:'100%'}}><ProximityScale guessPct={guessPct} answerPct={answerPct} exact={state==='cravou'} /></div>
<div style={{display:'flex',flexDirection:'column',gap:4,alignItems:'center'}}>
<div style={{font:'var(--text-body)',color:'var(--text-on-dark-muted)'}}>{question.reveal}</div>
<ScoreCounter value={points} />
</div>
<Button variant="primary" onClick={onNext}>Proxima</Button>
</div>);
}
window.Screens=window.Screens||{};window.Screens.RevealScreen=RevealScreen;