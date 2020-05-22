import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl'

import messages_es from "./data/data_es.json";
import messages_en from "./data/data_en.json";

import Movies from "./components/MoviesList";


const messages = {
    'es': messages_es,
    'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];  // language without region code

ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language]}>
<Movies  messages={messages[language]}/>
</IntlProvider>

, document.getElementById("root"));