import React, { Component } from "react";
import EmployeeTable from "./EmployeeTable";
import TableHead from "./TableHead";
import SearchBar from "./SearchBar";
import API from "../utils/API";


class ResultsContainer extends Component {
    state = {
        sortOrder: "",
        results: [],
        search: ""
    };

    componentDidMount() {
        // Call search movies with this query by default after all components load
        this.getAll('')
    }

    getAll = query => {
        API.search(query)
            .then(res => {
                console.log(res.data.results)
                console.log(this.state.search.length)
                this.setState({ results: res.data.results })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        // const value = event.target.value;
        const searchTerm = event.target.value.toLowerCase();
        this.setState({
            search: searchTerm
        })
        console.log('Search State', this.state.search)
    };

    handleFormSubmit = event => {
        event.preventDefault();
    }

    sortByFirstName = () => {
        const sortedEmployees = this.state.results.sort((a, b) => {
            if (b.name.first > a.name.first) {
                return -1
            }
            if (a.name.first > b.name.first) {
                return 1
            }
            return 0;
        });

        if (this.state.sortOrder === "DESC") {
            sortedEmployees.reverse();
            this.setState({ sortOrder: "ASC" });
        } else {
            this.setState({ sortOrder: "DESC" });
        }
        this.setState({ results: sortedEmployees })
    }

    render() {
        return (
            <div className="container-flex">
                <div className="container">
                    <SearchBar search={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
                    <table>
                        <TableHead sortByFirstName={this.sortByFirstName} />
                        <EmployeeTable results={this.state.results} filter={this.state.search} />

                    </table>
                </div>
            </div >
        );
    }
}

export default ResultsContainer;