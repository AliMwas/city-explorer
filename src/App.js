import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locationResult: {},
      searchQuery: '',
      showLocInfo: false
    }
  }

  render() {
    return (
      <div>
        <h3>City Explorer app</h3>
        
        <form onSubmit={this.location} >
          <input type="text" name='city' />
          <input type="submit" value='Explore!' />
        </form>

        {this.state.showLocInfo &&
          
<>
    

  <Card style={{ width: '25rem' }}>
  <Card.Header>City information</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>City name: {this.state.searchQuery}</ListGroup.Item>
    <ListGroup.Item>latitude: {this.state.locationResult.lat}</ListGroup.Item>
    <ListGroup.Item>longitude: {this.state.locationResult.lon}</ListGroup.Item>
  </ListGroup>
  
</Card>
<br></br>
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=12`} alt="city map"/>
</Card>



  </>
        }


      </div>
    )
  }

  location = async (event) => {
    event.preventDefault();
    console.log('inside location')

    // let cityName = e.target.city.value;
    await this.setState({
      searchQuery: event.target.city.value
    })

    console.log('key',process.env.REACT_APP_LOCATIONIQ_KEY);
    
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;

    let locResult = await axios.get(url);
    

    this.setState({
      locationResult: locResult.data[0],
      showLocInfo: true
    })


  }


  
}

export default App;
//GET https://eu1.locationiq.com/v1/search.php?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json
//pk.e7c86617bceaae71ddf431d655c6c756	
