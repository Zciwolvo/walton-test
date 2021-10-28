import './App.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Homepage } from "./containers/homepage";
import { Aktualnosci } from "./containers/aktualnosci";
import { Kontakt } from "./containers/kontakt";
import { Realizacje } from './containers/realizacje';
import { Referencje } from './containers/referencje';
import { Serwis } from './containers/serwis';

function App() {
    return ( <
        Router basename="walton-test">
        <
        Switch >
        <
        Route path = "/"
        exact component = { Homepage }
        /> <
        Route path = "/Aktualności"
        exact component = { Aktualnosci }
        />   <
        Route path = "/kontakt"
        exact component = { Kontakt }
        />  <
        Route path = "/Realizacje"
        exact component = { Realizacje }
        />  <
        Route path = "/Referencje"
        exact component = { Referencje }
        /> <
        Route path = "/Serwis"
        exact component = { Serwis }
        />    < /
        Switch > <
        /Router >
    )


}

export default App;