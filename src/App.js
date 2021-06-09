import React, {useState} from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import './App.css'
const defaultColumnProperties = {
    sortable: true,
};

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this._columns = [
            {
                key: "id",
                name: "ID",
                sortDescendingFirst: true
            },
            {
                key: "title",
                name: "Title",
                editable: true,
            },
            {
                key: "count",
                name: "Count",
                editable: true,
            }
        ]

        let rows = [];
        for (let i = 1; i < 1000; i++) {
            rows.push({
                id: i,
                title: "Title " + i,
                count: i * 1000
            });
        }
        this.state = {rows, selectedIndexes: []};
    }

    rowGetter = i => {
        return this.state.rows[i];
    };


    render() {

        const rowText = this.state.selectedIndexes.length === 1 ? "row" : "rows";
        return (
            <div>
        <span>
          {this.state.selectedIndexes.length} {rowText} selected
        </span>
                <ReactDataGrid
                    rowKey="id"
                    columns={this._columns}
                    rowGetter={this.rowGetter}
                    rowsCount={this.state.rows.length}
                    minHeight={500}
                    className={"rdg-light"}
                    enableCellSelect={true}
                    cellRangeSelection={{
                        onStart: args => {
                            console.info("temp====>", args);
                        },
                        onUpdate: args => {
                            console.info("onUpdate====>", args);

                        },
                        onComplete: args => {

                        }
                    }}
                />
                <div style={{height: 50}}/>
                <div style={{margin: 50, borderWidth: 20, borderStyle: 'solid'}}>
                    <pre>import ReactDataGrid from "react-data-grid";</pre>
                </div>
            </div>
        );
    }
}


