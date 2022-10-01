import TelaInicial from "./TelaInicial"
import React from "react"
import GlobalStyle from "./GlobalStyle"
import Game from "./Game"

export default function App() {
    
    const [screen, setScreen] = React.useState(0)
    const [deck, setDeck] = React.useState('Escolha seu deck');

    return (
        <>
            <GlobalStyle/>
            <TelaInicial deck={deck} setDeck={setDeck} screen={screen} setScreen={setScreen}/>
            <Game screen={screen}/>
        </>
    )
}