function HomeScreen({onPlay,onCreateRoom,onJoinRoom}){
const {Button}=window.ChutaEssaDesignSystem_d442e3;
return (<div style={{height:'100%',background:'var(--bg-dark)',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'56px 28px 40px'}}>
<div style={{display:'flex',flexDirection:'column',gap:8,alignItems:'center',marginTop:60}}>
<div style={{font:'700 56px/1 var(--font-display)',color:'var(--text-on-dark)'}}>Chuta Essa<span style={{color:'var(--accent-primary)'}}>!</span></div>
<div style={{font:'var(--text-body)',color:'var(--text-on-dark-muted)',textAlign:'center'}}>Chuta um numero. Descobre onde voce foi parar.</div>
</div>
<div style={{background:'var(--surface-game-raised)',border:'1px solid var(--border-on-dark)',borderRadius:'var(--radius-lg)',padding:20}}>
<div style={{font:'var(--text-label)',letterSpacing:'var(--tracking-label)',color:'var(--text-on-dark-muted)',marginBottom:8}}>CIENCIA E NATUREZA</div>
<div style={{font:'var(--text-question)',color:'var(--text-on-dark)'}}>Em media, quantos quilometros separam a Terra da Lua?</div>
</div>
<div style={{display:'flex',flexDirection:'column',gap:12}}>
<Button variant="primary" onClick={onPlay}>Jogar agora</Button>
<Button variant="secondary" onClick={onCreateRoom}>Criar sala</Button>
<Button variant="ghost" onClick={onJoinRoom}>Entrar em sala</Button>
</div>
</div>);
}
window.Screens=window.Screens||{};window.Screens.HomeScreen=HomeScreen;