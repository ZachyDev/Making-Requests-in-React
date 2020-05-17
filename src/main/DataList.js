import React, { Component } from 'react';
import axios from 'axios';
export class DataList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             companies: [],
             hasError: ''
        }
    }
    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/ZachyDev/ZachyAPI/companies')
            .then(res => {
                console.log(res.data);
                this.setState({ companies: res.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({ hasError: 'Error in fetching the data' })
            })
    }
    
    render() {
        const { companies,hasError } = this.state;
        const companyDetails = companies.map(company => <div key = { company.id }><li>{ company.description }</li></div>)
        return (
            <div>
            <h1>Company Description</h1>
             { companyDetails } 
             { hasError }
            </div>
        )
    }
}

export default DataList
