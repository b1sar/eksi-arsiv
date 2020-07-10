import React, {Component} from 'react';
import './Entry.css';

class Entry extends Component {

    render() {
        return (
            <div>
                <div className="entry">
                <div className="entry-baslik"><h2>{this.props.objex['@_title']}</h2></div>
                <p>{this.props.objex['#text']}</p>
                <div className="stylim">
                    
                    <div className="face">
                        <i className="fa fa-facebook"></i>
                    </div>
                    <div className="tw">
                        <i className="fa fa-twitter"></i>
                    </div>
                    <div className="fc">
                        <i>1</i>
                    </div>
                    <div className="ed">
                        <i>{this.props.objex['@_date']}</i>
                    </div>
                    <div className="nick">
                        <i>{this.props.nick}</i>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Entry;