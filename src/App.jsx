import React, { useReducer } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Controls from './components/Controls.jsx';
import TextBox from './components/TextBox.jsx';
async function fetchData(src_lang_code, target_lang_code, src_text) {
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const API_KEY = import.meta.env.VITE_MY_API_KEY;
    console.log(API_KEY)
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: new URLSearchParams({
            source_language: src_lang_code,
            target_language: target_lang_code,
            text: src_text
        })
    };

    try {
        const response = await fetch(url, options);
        let result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}
function reducer(state, action) {
    switch (action.type) {
        case "SET_SOURCE_TEXT": {
            return { ...state, source_text: action.text };
        }
        case "SET_TRANSLATED_TEXT": {
            return { ...state, translated_text: action.text };
        }
        case "SET_SRC_LANG": {
            return { ...state, srcLang: action.lang_code };
        }
        case "SET_TARGET_LANG": {
            return { ...state, targetLang: action.lang_code };
        }
        default: {
            return state;
        }

    }
}
function App() {
    const [state, dispatch] = useReducer(reducer, {
        source_text: "",
        translated_text: "",
        //by default languages
        srcLang: "en",
        targetLang: "hi"
    }
    )
    console.log(state)
    const handleFetch = async () => {
        dispatch({ type: "SET_TRANSLATED_TEXT", text: "Translating..." });
        try {
            const res = await fetchData(state.srcLang, state.targetLang, state.source_text);
            dispatch({ type: "SET_TRANSLATED_TEXT", text: res.data.translatedText });
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };
    return (
        <Container>
            <GlobalStyle />
            <Wrapper>
                <TextBox textValue={state.source_text} _setText={(input) => dispatch({ type: "SET_SOURCE_TEXT", text: input })} />
                <TextBox textValue={state.translated_text} _setText={(input) => dispatch({ type: "SET_TRANSLATED_TEXT", text: input })} position={"right"} />
            </Wrapper>
            <Controls _state={state} _dispatch={dispatch} />
            <Button onClick={() => handleFetch()}>Translate Text</Button>
        </Container>
    )
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
}
body{
display: flex;
align-items: center;
justify-content: center;
padding: 0 10px;
min-height: 100vh;
background: #5372F0;
}`
const Container = styled.div`
max-width: 800px;
width: 600px;
padding: 30px;
background: #fff;
border-radius: 5px;
box-shadow: 0 10px 20px rgba(0,0,0,0.01);`

const Wrapper = styled.div`
display:flex;
border-top-left-radius:5px;
border-top-right-radius:5px;
border-top: 1px solid #ccc;
border-right:1px solid #ccc;
`
const Button = styled.button`
width: 100%;
padding: 14px;
outline: none;
border: none;
color: #fff;
cursor: pointer;
margin-top: 20px;
font-size: 17px;
border-radius: 5px;
background: #5372F0;
`
export default App
