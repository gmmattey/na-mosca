function ResultScreen({onReplay,onShare}){
const {Button,ScoreCounter,Icon}=window.ChutaEssaDesignSystem_d442e3;
return (<div style={{height:'100%',background:'var(--bg-dark)',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'48px 28px 40px'}}>
<div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
<div style={{font:'var(--text-label)',letterSpacing:'var(--tracking-label)',color:'var(--text-on-dark-muted)'}}>RESULTADO</div>
<ScoreCounter value={7820} size="lg" />
<div style={{font:'var(--text-h2)',color:'var(--accent-primary)'}}>Perigosamente bom</div>
</div>
<div style={{display:'flex',flexDirection:'column',gap:14}}>
<div style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid var(--border-on-dark)',paddingBottom:10}}><span style={{font:'var(--text-body)',color:'var(--text-on-dark-muted)'}}>Acertos exatos</span><span style={{font:'var(--text-body)',color:'var(--text-on-dark)'}}>1</span></div>
<div style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid var(--border-on-dark)',paddingBottom:10}}><span style={{font:'var(--text-body)',color:'var(--text-on-dark-muted)'}}>Melhor aproximacao</span><span style={{font:'var(--text-body)',color:'var(--text-on-dark)'}}>0,8%</span></div>
<div style={{display:'flex',justifyContent:'space-between'}}><span style={{font:'var(--text-body)',color:'var(--text-on-dark-muted)'}}>Maior desastre</span><span style={{font:'var(--text-body)',color:'var(--accent-distance)'}}>8 milhoes de erro</span></div>
</div>
<div style={{display:'flex',flexDirection:'column',gap:12}}>
<Button variant="primary" onClick={onReplay}>Jogar de novo</Button>
<Button variant="secondary" onClick={onShare}><span style={{display:'inline-flex',alignItems:'center',gap:8}}><Icon name="share-2" size={18} />Compartilhar</span></Button>
</div>
</div>);
}
window.Screens=window.Screens||{};window.Screens.ResultScreen=ResultScreen;