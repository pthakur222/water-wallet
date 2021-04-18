import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { Form, Button} from 'semantic-ui-react'

export default class Kitchen extends React.Component {
  
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
          this.props.onNextClick(this.state.pageData)
      }
    
render() {
  const {value} = this.state;
  console.log('check',this.state.pageData);
  
  return (
      <Row>
        <Col>
            <Form size='massive'>
              <Form.Field inline>
                <label style={{color:'slateblue'}}>How many times do you use your washing machine per week? </label>
                <input type='number' className='textfield' name="Washing Machine" onBlur={this.getData}/>
              </Form.Field>
              <Form.Field>
                <label style={{color:'slateblue'}}>How many times do you use your dishwasher per week?</label>
                <h4 style={{color:'grey'}}>(If you do not own or use a dishwasher enter '0')</h4>
                <input type='number' className='textfield' name="Dishwasher" onBlur={this.getData}/>
              </Form.Field>
              <Form.Field inline>
                <label style={{color:'slateblue'}}>How many times does your household wash up by hand each week?</label>
                <input type='number' className='textfield' name="Handwashing dishes" onBlur={this.getData}/>
              </Form.Field>
              {/* <Form.Field inline>
                <label style={{color:'slateblue'}}>What is the flow rate of your taps? </label>
                </Form.Field>
                <Form.Group inline>
                  <Form.Radio
                    label='Slow'
                    value='Slow'
                    checked={value === 'Slow'}
                    onChange={this.handleChange}
                    style={{fontSize:'1em', padding: '0px'}} 
                  />
                  <Form.Radio
                    label='Medium'
                    value='Medium'
                    checked={value === 'Medium'}
                    onChange={this.handleChange}
                    style={{fontSize:'1em'}} 
                  />
                   <Form.Radio
                    label='High'
                    value='High'
                    checked={value === 'High'}
                    onChange={this.handleChange}
                    style={{fontSize:'1em'}} 
                  />
                </Form.Group> */}
                <Form.Field inline>
                    <label style={{color:'slateblue'}}>How many times does your household use the kettle each day?</label>
                    <input type='number' className='textfield' name="Kettle" onBlur={this.getData}/>
                </Form.Field>
                <Form.Field inline>
                    <label style={{color:'slateblue'}}>How many minutes do you spend washing food? E.g. rice, veg, fruit </label>
                    <input type='number' className='textfield' name="Handwashing food" onBlur={this.getData}/>
                </Form.Field>
                <Form.Field inline>
                    <label style={{color:'slateblue'}}>When washing food do you wash under a running tap or use a bowl? </label>
                </Form.Field>
                <Form.Group inline>
                  <Form.Radio
                    label='Tap'
                    value='Tap'
                    checked={value === 'Tap'}
                    onChange={this.handleChange}
                    style={{fontSize:'1em', padding: '0px'}} 
                  />
                  <Form.Radio
                    label='Bowl'
                    value='Bowl'
                    checked={value === 'Bowl'}
                    onChange={this.handleChange}
                    style={{fontSize:'1em'}} 
                  />
                </Form.Group>
            
            </Form>
            <br/>
            <div style={{float:'left'}}>
                <Button content='Previous' icon='left arrow' labelPosition='left' size='huge' onClick={this.props.onPreviousClick}/>
            </div>
            <div style={{float:'right'}}>
                <Button content='Next' icon='right arrow' labelPosition='right' color='teal' size='huge' onClick={this.onNextClick}/>
            </div>
            
        </Col>
      </Row>
  )}
}
