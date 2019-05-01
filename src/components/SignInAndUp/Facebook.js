import React from 'react'

import firebaseApp from '../../Firbase/FirebaseAuth'

class Facebook extends React.Component {

    state = {
        user: null
    }

    login = () => {
        const auth = firebaseApp.auth
        const provider = new firebaseApp.auth.FacebookAuthProvider();

        auth().signInWithPopup(provider)
            .then(({ user }) => {
                this.setState({ user })
            })
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.login}>
                    Login with Facebook
        </button>
            </React.Fragment>
        )
    }
}

export default Facebook;