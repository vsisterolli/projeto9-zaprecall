import styled from "styled-components"
import React from "react";

const deckOptions = ["React", "HTML/CSS"]

export default function SelectList({deck, setDeck}) {
    
    return (
    <>   
        <SelectionList value={deck} onChange={(e) => setDeck(e.target.value)} data-identifier="deck-selector" name="decks">
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
