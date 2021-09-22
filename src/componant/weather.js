

import React from 'react';

import Component from 'React';

class weather extends Component {


    render() {

        return ( <div>

            <p>{this.props.weather.description}</p>
               <p>{this.props.weather.date}</p>
               
            </div>)
        
    }
}

export default weather