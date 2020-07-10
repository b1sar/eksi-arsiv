import React from 'react';

class Form extends React.Component {

    render() {
        let temp = <input type="file" name="file" onChange={this.props.onChange}/>;
        return ( 
        <div>
            <input type="file" id="files" className="hidden" onChange={this.props.onChange}/>
        <label htmlFor="files">Select file</label>
        </div>
        )
    }

}

export default Form;