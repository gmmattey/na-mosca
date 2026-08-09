function QuestionScreen({question,guess,setGuess,secondsLeft,onLock}){
const {Timer,Chip,Button,GuessInput}=window.ChutaEssaDesignSystem_d442e3;
return (<div style={{height:'100%',background:'var(--bg-dark)',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'40px 28px'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<Chip>{question.category}</Chip>
<Timer secondsLeft={secondsLeft} secondsTotal={20} />
</div>
<div style={{font:'var(--text-question)',color:'var(--text-on-dark)',textAlign:'center'}}>{question.prompt}</div>
<div style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center'}}>
<GuessInput value={guess} unit={question.unit} onChange={setGuess} />
</div>
<Button variant="primary" onClick={onLock}>Chutar</Button>
</div>);
}
window.Screens=window.Screens||{};window.Screens.QuestionScreen=QuestionScreen;