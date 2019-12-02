import React from 'react';

function EnterName(props){
    return(
        <React.Fragment>
            <form>
                <label>
                    Name:
                </label>
                <input
                type="text"
                name="name"
                value={props.name}
                onChange={props.handleChange}>
                </input>
                <button>Submit</button>
            </form>
            <h3>
                Your name is {props.name}
            </h3>
        </React.Fragment>
    )
}

export default EnterName;