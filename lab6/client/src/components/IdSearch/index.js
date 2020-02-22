import React from "react";


class IdSearch extends React.Component {

    readId(event) {

        // Stop (prevent) the 'default' form action
        event.preventDefault();

        // Find the element with 'id="id"'

        let element = document.querySelector("#id");
        let requestId = element.value; 

        fetch('http://localhost:80/id/' + requestId)
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
                reporting.innerHTML = "hello";
            }

        });

        requestId = "";
    }

    render() {
        return(
            <div>
                 <h2>Pokemon ID</h2>
                 <form onSubmit={this.readId}>
                    <input id="id" type="text" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default IdSearch;