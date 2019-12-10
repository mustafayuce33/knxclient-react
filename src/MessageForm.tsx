import React from 'react';

export default class MessageForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const groupAddress = (this as any).groupAddress.value;
        const dptType = (this as any).dptType.value;

        fetch('http://127.0.0.1:3025/v1/datapoint/match', {
            method: 'post',            
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                "data": {
                    "groupAddress": groupAddress,
                    "dptType": dptType
                }
            })
        }).then(function (response) {
            if (response.status === 200) {
                alert("Successfully matched");
            }
            else {
                alert("Match error");
            }
            
        });

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Group Address </label>
                <input type="text" ref={(groupAddress) => (this as any).groupAddress = groupAddress} />
                <label style={{marginLeft: "15px"}}>Dpt Type </label>
                <input type="text" ref={(dptType) => (this as any).dptType = dptType} />
                <input style={{marginLeft: "10px"}} type="submit" value="Match" />
            </form>
        );
    }
}