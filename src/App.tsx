import React from 'react';
// import logo from "./logo.svg";
import "./App.css"
import { Connector, subscribe } from 'mqtt-react';
import _MessageContainer from './EventContainer';
import _ConnectionStateContainer from './ConnectionStateContainer';
import MessageForm from './MessageForm';

const EventContainer = subscribe({ topic: 'mqtt/event' })(_MessageContainer);
const ConnectionStateContainer = subscribe({ topic: 'mqtt/connectionState' })(_ConnectionStateContainer);

const App: React.FC = () => {

    return (
        <Connector mqttProps="ws://127.0.0.1:8000/mqtt">
            <main className="App">
                <header className={"App-header"}>
                    <div className={"divcontainer"}>
                        <div className={"topbar"}><MessageForm /></div>
                        <div className={"topbardelete"}><ConnectionStateContainer /></div>
                    </div>
                    <EventContainer />
                </header>
            </main>
        </Connector >
    );
};

export default App