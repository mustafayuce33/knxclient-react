import React from 'react';
import "./TableView.css"

interface FormProps {
    items?: any[],
    tableName: string
}

class Table extends React.Component<FormProps> {

    renderTableHeader() {

        if (this.props.items.length > 0) {
            let header = Object.keys(this.props.items[0])
            return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
            })
        }

    }

    getItemPropValue(itemProp : any) {

        if (typeof itemProp === "object") {
            return JSON.stringify(itemProp);
        }

        return itemProp;
    }

    renderTableData() {

        return this.props.items.map((item, index) => {

            return (
                <tr>
                    {
                        Object.values(item).map((itemProp) => {
                            return (<td>{
                                this.getItemPropValue(itemProp)
                            }</td>);
                        })
                    }
                </tr>)
        });
    }

    render() {
        return (
            <div className = {"tableContainer"}>
                <h4 id='title'>{this.props.tableName}</h4>
                <table id='logtable'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table