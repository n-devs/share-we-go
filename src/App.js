import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
// Firebase.
import * as firebase from 'firebase';
// import { RoutePages } from './RoutePages'
// firebase ui
import FirebaseAuth from './Firbase/FirebaseAuth'
import { AppBarBottom } from './components/SignInAndUp'

// firebase app connect
import firebaseApp from './Firbase/firebaseApp'



class App extends React.Component {

    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false,
        },
    };

    state = {
        isSignedIn: undefined,
    };

    /**
     * @inheritDoc
     */
    componentDidMount() {
         firebaseApp.auth().onAuthStateChanged((user) => {
            this.setState({ isSignedIn: !!user });
        });
    }

    /**
     * @inheritDoc
     */
    // componentWillUnmount() {
    //     this.unregisterAuthObserver();
    // }

    render() {
        return (
            <Router>
                {this.state.isSignedIn !== undefined && !this.state.isSignedIn &&
                    <div>
                        <AppBarBottom>
                            <FirebaseAuth uiConfig={this.uiConfig}
                                firebaseAuth={firebaseApp.auth()} />
                        </AppBarBottom>
                    </div>
                }
                {this.state.isSignedIn &&
                    <div >
                        Hello {firebaseApp.auth().currentUser.displayName}. You are now signed In!
            <a onClick={() => firebaseApp.auth().signOut()}>Sign-out</a>
                    </div>
                }
                {/* <RoutePages /> */}
            </Router>
        )
    }
}

export default App;