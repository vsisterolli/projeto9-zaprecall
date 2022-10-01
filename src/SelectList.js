import styled from "styled-components"
import React from "react";
import questionsObj from "./questionsObj";

const deckOptions = ["React", "HTML/CSS", "One Piece"]

export default function SelectList({setRemindQuestion, deck, setDeck}) {
    
    function mudarDeque(e) {
        const aux = Array(questionsObj[e.target.value].questions.length);
        aux.fill('notAnswered')
        setRemindQuestion(aux);
        setDeck(e.target.value);
    }

    return (
    <>   
        <SelectionList value={deck} onChange={(e) => mudarDeque(e)} data-identifier="deck-selector" name="decks">
            <option id="placeholder" disabled>Escolha seu deck</option>
            {deckOptions.map((value, index) => <option data-identifier="deck-option" key={index}>{value}</option>)}
        </SelectionList>
    </>
    )
}

const SelectionList = styled.select`
    width: 246px;
    height: 43px;
    margin-bottom: 18px;

    padding: 8px;
    border: 0px;
    background: #FFFFFF;
    border-radius: 5px;

`
