import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider, connect } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Storage from './Store'
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'

const { store, persistor } = Storage()

const mapStateToProps = (state) => ({
    darkTheme: state.darkTheme
})

const ConnectedApp = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <HashRouter>
                <ConnectedApp/>
            </HashRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
