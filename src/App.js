import TelaInicial from "./TelaInicial"
import React from "react"
import GlobalStyle from "./GlobalStyle"
import Game from "./Game"

export default function App() {
    
    const [screen, setScreen] = React.useState(0)
    const [deck, setDeck] = React.useState('Escolha seu deck');
    const [remindQuestion, setRemindQuestion] = React.useState(['false']);
    const [zapsMeta, setZapsMeta] = React.useState();

    return (
        <>
            <GlobalStyle/>
            <TelaInicial zapsMeta={zapsMeta} setZapsMeta={setZapsMeta} setRemindQuestion={setRemindQuestion} deck={deck} setDeck={setDeck} screen={screen} setScreen={setScreen}/>
            <Game zapsMeta={zapsMeta} remindQuestion={remindQuestion} setRemindQuestion={setRemindQuestion} deck={deck} screen={screen}/>
        </>
    )
}