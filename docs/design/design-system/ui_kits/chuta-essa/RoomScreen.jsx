function RoomScreen({onStart,onBack}){
const {RoomCodeCard,RankRow,Button,Chip,Icon}=window.ChutaEssaDesignSystem_d442e3;
return (<div style={{height:'100%',background:'var(--bg-dark)',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'48px 28px 40px'}}>
<div style={{display:'flex',alignItems:'center',gap:16}}>
<Icon name="arrow-left" color="var(--text-on-dark-muted)" onClick={onBack} />
<span style={{font:'var(--text-label)',letterSpacing:'var(--tracking-label)',color:'var(--text-on-dark-muted)'}}>SALA</span>
</div>
<div style={{display:'flex',flexDirection:'column',gap:24,alignItems:'center'}}>
<RoomCodeCard code="PATO42" players={4} />
<div style={{display:'flex',alignItems:'center',gap:8,color:'var(--text-on-dark-muted)'}}><Icon name="copy" size={16} /><span style={{font:'var(--text-body-sm)'}}>Copiar codigo</span></div>
<Chip>10 perguntas &middot; 20s</Chip>
</div>
<div style={{display:'flex',flexDirection:'column'}}>
<RankRow position={1} name="Voce (host)" points={0} highlight />
<RankRow position={2} name="Ana" points={0} />
<RankRow position={3} name="Bruno" points={0} />
<RankRow position={4} name="Carol" points={0} />
</div>
<div style={{display:'flex',flexDirection:'column',gap:12}}>
<Button variant="primary" onClick={onStart}>Comecar</Button>
</div>
</div>);
}
window.Screens=window.Screens||{};window.Screens.RoomScreen=RoomScreen;