import React from "react";


class NameSearch extends React.Component {

    readName(event) {

        // Stop (prevent) the 'default' form action
        event.preventDefault();

        // Find the element with 'id="name"'
        let element = document.querySelector("#name");
        let requestName = element.value; 

        fetch('http://localhost:80/id/' + requestName)
        .then((res) => {
            // Parse the string into a JavaScript object and return it
            return res.json();
        })
        .then((processed) => {
            
            // Find the element with 'id="reportingArea"'
            let reporting = document.querySelector("#reportingArea");

            // Does the 'processed' object have a property called 'error'?
            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
            }

        });

        requestName = "";
    }

    render() {
        return(
            <div>
                 <h2>Pokemon ID</h2>
                 <form onSubmit={this.readName}>
                    <input id="name" type="text" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NameSearch;