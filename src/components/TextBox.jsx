import styled from 'styled-components';
function TextBox({position}) {
    return (
        <TextArea spellcheck="false" position={position} placeholder={position?"Translation":"Enter the Text"}>

        </TextArea>
    )
}
const TextArea = styled.textarea`
height: 250px;
width: 100%;
border: none;
outline: none;
resize: none;
background: none;
font-size: 18px;
border-left: 1px solid #ccc;
padding: 10px 15px;
&::placeholder{
color: #b7b6b6;
}
${props=>(props.position=='right'?`
border-top-right-radius:5px;  
`:` border-top-left-radius:5px;  
`)}
`
export default TextBox;
