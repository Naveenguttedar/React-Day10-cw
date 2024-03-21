import styled from 'styled-components';
function Controls() {
  return (
    <Wrapper class="controls">
      <Row class="row from">
        <Icons class="icons">
          <i id="from" class="fas fa-volume-up"></i>
          <i id="from" class="fas fa-copy"></i>
        </Icons>
        <select></select>
      </Row>
      <li class="exchange"><i class="fas fa-exchange-alt"></i></li>
      <Row class="row to">
        <select></select>
        <Icons class="icons" position={"right"}>
          <i id="to" class="fas fa-volume-up"></i>
          <i id="to" class="fas fa-copy"></i>
        </Icons>
      </Row>
    </Wrapper>
  )
}
const Wrapper= styled.ul`
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
const Icons=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
${props=>(props.position=='right'?`padding-left: 25px;
border-left: 1px solid #ccc;`:`padding-right: 25px;
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
const Row=styled.li`
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
