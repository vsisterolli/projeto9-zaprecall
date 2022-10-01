import React from 'react';
import styled from 'styled-components';
import SelectList from './SelectList';
import AppScreen from './AppScreen';

export default function TelaInicial({deck, setDeck, screen, setScreen}) {
    return(
        <AppScreen actualScreen={0} screen={screen}>
            <img src="assets/big logo.svg" alt="logo ZapRecall"></img>
            <h1 className="screen0">ZapRecall</h1>
            <SelectList deck={deck} setDeck={setDeck}/>
            <input data-identifier="goals-input" type="number" placeholder="Qual sua meta de zaps?"/>
            <BeginButton data-identifier="start-btn" onClick={() => setScreen(screen+1)}>Iniciar Recall!</BeginButton>
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

`