import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import { RoutePages } from './RoutePages'

class App extends React.Component {

    render() {
        return (
            <Router>
                <RoutePages />
            </Router>
        )
    }
}

export default App;