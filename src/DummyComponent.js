import React, {Component} from "react";

export default class DummyComponent extends Component {

    constructor(props){
        super(props);
        this.createRow = this.createRow.bind(null,this.props)
    }

    componentDidMount() {
        const trancheArray = ["T1","T2"];
        this.createRow(trancheArray);
    }

    createRow(props,trancheArray) {
        let trancheMap = new Map(props.data);
        let objArr = [];

        trancheMap.forEach((item, key) => {
            const trancheObj = {
                investor:key,
                allocation:"",
                mv:""
            };
            let maxArrayLength = 0;
            for (let arr in item) {
                maxArrayLength = maxArrayLength < item[arr].length ? item[arr].length : maxArrayLength;
            }
            for (let i = 0; i < maxArrayLength; i++) {
                let obj = {};
                for (let tranche of trancheArray) {
                    obj[tranche] = !item[tranche][i] ? trancheObj : item[tranche][i];
                }
                obj["investor"] = key;
                objArr.push(obj);
            }
        })
        console.log("objArr ",objArr);
    }

    render() {
        return (
            <div />
        );
    }
}
