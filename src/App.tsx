import React from 'react';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import './styles/_main.scss';
import ruLang from "./lang/ru.json";
import enLang from "./lang/en.json";


const App: React.FC = () => {

    if (!localStorage.getItem('lang')) {
        if (navigator.language === "ru") {
            localStorage.setItem('lang', JSON.stringify(ruLang))
            localStorage.setItem('langType', "ru")
        } else {
            localStorage.setItem('lang', JSON.stringify(enLang))
            localStorage.setItem('langType', "en")
        }
    }

    return (
        <div className="App">
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
