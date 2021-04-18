import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { Form, Button} from 'semantic-ui-react'
import {LinkContainer} from 'react-router-bootstrap'

export default class Garden extends React.Component {

    state = {
        pageData: this.props.pageData,
        data:{}
      }
    
      handleChange = (e,{value})=> {
       this.setState({ value });
       this.setState(prevState => ({
        pageData:{
          ...prevState.pageData,
          "Dripping Tap": value
        }
      }));
     
      }
    
      getData = (e) => {

        let data=JSON.stringify({
            "appliance": e.target.name,
            "maximumLimit": e.target.value,
            "timeUnit": "WEEK"
        })
        this.setState((prevState)=>({pageData:this.state.pageData + data}));
      }

onNextClick = () => {
    fetch('http://localhost:3000/limits', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: this.state.pageData
        }).then((response) => response.json())
          .then((responseJson) => {
              this.setState({userLimits: this.state.pageData})

        }).catch((error) => {
          console.error(error);
        });
}


render() {
    console.log(this.state.pageData);
    
  return (
   
      <Row>
        <Col>
            <Form size='massive'>
              <Form.Field inline>
                <label style={{color:'slateblue'}}>If you have a garden, how many times do you water it with a hose in a month?</label>
                <input type='number' className='textfield' name="Watering Garden" onBlur={this.getData}/>
              </Form.Field>
              <Form.Field inline>
                <label style={{color:'slateblue'}}>How many minutes, on average, does watering the garden take? </label>
                <input type='number' className='textfield'name="Watering Minutes" onBlur={this.getData}/>
              </Form.Field>
              <Form.Field inline>
                <label style={{color:'slateblue'}}>If you have a car, how many times do you wash it in a month?</label>
                <input type='number' className='textfield'name="Car wash" onBlur={this.getData}/>
              </Form.Field>
                <Form.Field inline>
                    <label style={{color:'slateblue'}}>How many minutes, on average, does washing your car take? </label>
                    <input type='number'className='textfield' name="Car wash minutes" onBlur={this.getData}/>
                </Form.Field>
            </Form>
            <br/>
            <div style={{float:'left'}}>
                <Button content='Previous' icon='left arrow' labelPosition='left' size='huge' onClick={this.props.onPreviousClick}/>
            </div>
            <div style={{float:'right'}}>
            <LinkContainer to='/action'>
                <Button content='Next' icon='right arrow' labelPosition='right' color='teal' size='huge' onClick={this.onNextClick}/>
            </LinkContainer>
            </div>
            
        </Col>
      </Row>
  )}
}
