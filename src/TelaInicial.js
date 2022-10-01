import React from 'react';
import styled from 'styled-components';
import SelectList from './SelectList';
import AppScreen from './AppScreen';

export default function TelaInicial({zapsMeta, setZapsMeta, setRemindQuestion, deck, setDeck, screen, setScreen}) {
    
    const [warning, setWarning] = React.useState("");

    function checkdata() {
        if(deck === "Escolha seu deck")
            setWarning("Escolha um deck primeiro");
        else if(zapsMeta === undefined || zapsMeta <= 0)
            setWarning("Defina a meta de pelo menos 1 zap");
        else setScreen(1);
    }

    return(
        <AppScreen actualScreen={0} screen={screen}>
            <img src="assets/big logo.svg" alt="logo ZapRecall"></img>
            <h1 className="screen0">ZapRecall</h1>
            <SelectList setRemindQuestion={setRemindQuestion} deck={deck} setDeck={setDeck}/>
            <input value={zapsMeta != undefined ? zapsMeta : ""} onChange={(e) => setZapsMeta(e.target.value)} data-identifier="goals-input" type="number" placeholder="Qual sua meta de zaps?"/>
            <BeginButton data-identifier="start-btn" onClick={checkdata}>Iniciar Recall!</BeginButton>
            <h2>{warning}</h2>
        </AppScreen>
    )
}

const BeginButton = styled.button`
    width: 246px;
    height: 54px;

    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: 0px;
    font-family: 'Recursive';
    font-size: 18px;
    line-height: 22px;
    color: #D70900;
    margin-bottom: 20px;

`