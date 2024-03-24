import styled from 'styled-components';
const indianLanguages = [
  { name: 'English', code: 'en' },
  { name: 'Hindi', code: 'hi' },
  { name: 'Bengali', code: 'bn' },
  { name: 'Telugu', code: 'te' },
  { name: 'Marathi', code: 'mr' },
  { name: 'Tamil', code: 'ta' },
  { name: 'Urdu', code: 'ur' },
  { name: 'Gujarati', code: 'gu' },
  { name: 'Kannada', code: 'kn' },
  { name: 'Odia', code: 'or' },
  { name: 'Malayalam', code: 'ml' }
];

function Controls({_state,_dispatch}) {
  return (
    <Wrapper >
      <Row >
        <Icons >
          <i id="from" className="fas fa-volume-up" onClick={()=>confirm("Work is under progress 🚧 !")}></i>
          <i id="from" className="fas fa-copy"></i>
        </Icons>
        <Select defaultValue={_state.srcLang} onChange={(e)=>_dispatch({type:"SET_SRC_LANG",lang_code:e.target.value})}>
          {
            indianLanguages.map(lang => <option key={lang.code} value={lang.code}>{lang.name} </option>)
          }
        </Select>
      </Row>
      <li ><i className="fas fa-exchange-alt"></i></li>
      <Row >
        <Select defaultValue={_state.targetLang} onChange={(e)=>_dispatch({type:"SET_TARGET_LANG",lang_code:e.target.value})}>
          {
            indianLanguages.map(lang => <option key={lang.code} value={lang.code}>{lang.name} </option>)
          }
        </Select>
        <Icons  position={"right"}>
          <i id="to" className="fas fa-volume-up"onClick={()=>confirm("Work is under progress 🚧 !")}></i>
          <i id="to" className="fas fa-copy"></i>
        </Icons>
      </Row>
    </Wrapper>
  )
}
const Wrapper = styled.ul`
list-style:none;
padding:12 15px;
display: flex;
align-items: center;
justify-content: space-between;
padding:.5rem 1rem;
border:1px solid #ccc;
border-bottom-left-radius:5px;
border-bottom-right-radius:5px;
&>.exchange{
color: #adadad;
cursor: pointer;
font-size: 16px;
transition: transform 0.2s ease;
}
`
const Select = styled.select`
background-color:black;
border:2px solid red;
`
const Icons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
${props => (props.position == 'right' ? `padding-left: 25px;
border-left: 1px solid #ccc;`: `padding-right: 25px;
border-right: 1px solid #ccc;
`)}
gap:.5rem;
width: 38%;
&>i{
display: flex;
align-items: center;
width: 50px;
color: #adadad;
font-size: 14px;
cursor: pointer;
transition: transform 0.2s ease;
justify-content: center;
}
`
const Row = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
&>select{
color: #333;
border: none;
outline: none;
font-size: 18px;
background: none;
padding-left: 5px;
}
`
export default Controls;
