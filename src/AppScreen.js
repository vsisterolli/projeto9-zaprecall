import styled from "styled-components";

const AppScreen = styled.section`
    
    display: ${props => props.actualScreen === props.screen ? "flex": "none"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    background: #FB6B6B;
    border: 1px solid #DBDBDB;

    header {
        margin-bottom: 48px;
    }

    .container {
        display: flex;
    }

    h1 {
        font-family: 'Righteous';
        font-size: 36px;
        line-height: 45px;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        padding: 0;
    }

    h2 { 
        font-family: 'Righteous';
        font-size: 24px;
        line-height: 45px;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        padding: 0;
    }

    .screen0 {
        margin-bottom: 50px;
        margin-top: 80px;
    }

    .screen1 {
        margin-left: 18px;
    }

    input {
        width: 246px;
        height: 43px;
        padding: 10px;
        border: 0px;
        background: #FFFFFF;
        margin-bottom: 18px;
        border-radius: 5px;
    }

`;

export default AppScreen;