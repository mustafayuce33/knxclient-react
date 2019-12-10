import React from 'react';
import "./ConnectionStateContainer.css"

enum ConnectionState {
    Connecting,
    Connected,
    Disconnecting,
    Disconnected
}

interface FormProps {
    data: {
        state: ConnectionState
    }[],
    mqtt: any
}

export default class ConnectionStateContainer extends React.Component<FormProps> {

    /**
     *
     */
    constructor(props) {
        super(props);

        setTimeout(() => {
            this.props.mqtt.publish('mqtt/refresh', '');
        }, 3000);
    }

    private ConnectionState() {

        if (this.props.data.length > 0) {
            return this.props.data[0].state === ConnectionState.Connected ? "dotconnected" : "dotdisconnected";
        }
        return "dotdisconnected"
    }

    render() {
        return (
            <div className={"headerdiv"}>
                <span className= { this.ConnectionState() }></span>
            </div>
        )
    }
}