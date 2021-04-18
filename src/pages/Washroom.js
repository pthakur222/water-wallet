import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { Form, Button} from 'semantic-ui-react'

export default class Washroom extends React.Component {
  
    state = {
        pageData: this.props.pageData,
        data:{},
        value:'',
        value1:'',
        value2:''
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

      handleChange1 = (e,{value1})=> {
        this.setState({ value1 });
        this.setState(prevState => ({
         pageData:{
           ...prevState.pageData,
           "Dripping Tap": value1
         }
       }));
       }

       handleChange2 = (e,{value2})=> {
        this.setState({ value2});
        this.setState(prevState => ({
         pageData:{
           ...prevState.pageData,
           "Dripping Tap": value2
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
  const {value,value1,value2} = this.state;
  console.log('check',this.state.pageData);
  
  return (
   
      <Row>
        <Col>
            <Form size='massive'>
              <Form.Field inline>
                <label style={{color:'slateblue'}}>How many baths does your household take per week?  </label>
                <input type='number' className='textfield' name="Bath" onBlur={this.getData}/>
                </Form.Field>
                <Form.Field inline>
                    <label style={{color:'slateblue'}}>Do you fill the bath up to the top?  </label>
                </Form.Field>
                <Form.Group inline>
                  <Form.Radio
                    label='Yes'
                    value='Yes'
                    checked={value === 'Yes'}
                    onChange={this.handleChange}
                    style={{fontSize:'1em', padding: '0px'}} 
                  />
                  <Form.Radio
                    label='No'
                    value='No'
                    checked={value === 'No'}
                    onChange={this.handleChange}
                    style={{fontSize:'1em'}} 
                  />
                </Form.Group>
                <Form.Field inline>
                    <label style={{color:'slateblue'}}>Do you leave the tap running when shaving? </label>
                </Form.Field>
                <Form.Group inline>
                  <Form.Radio
                    label='Yes'
                    value1='Yes'
                    checked={value1 === 'Yes'}
                    onChange={this.handleChange1}
                    style={{fontSize:'1em', padding: '0px'}} 
                  />
                  <Form.Radio
                    label='No'
                    value1='No'
                    checked={value1 === 'No'}
                    onChange={this.handleChange1}
                    style={{fontSize:'1em'}} 
                  />
                </Form.Group>
                <Form.Field inline>
                    <label style={{color:'slateblue'}}>Do you leave the tap running while brushing your teeth? </label>
                </Form.Field>
                <Form.Group inline>
                  <Form.Radio
                    label='Yes'
                    value2='Yes'
                    checked={value2 === 'Yes'}
                    onChange={this.handleChange2}
                    style={{fontSize:'1em', padding: '0px'}} 
                  />
                  <Form.Radio
                    label='No'
                    value2='No'
                    checked={value2 === 'No'}
                    onChange={this.handleChange2}
                    style={{fontSize:'1em'}} 
                  />
                </Form.Group>
              <Form.Field inline>
                <label style={{color:'slateblue'}}>How many times does your household take a shower in a week? </label>
                <input type='number' className='textfield' name="Shower" onBlur={this.getData} />
              </Form.Field>
              <Form.Field inline>
                <label style={{color:'slateblue'}}>How many minutes, on average, does one shower last? </label>
                <input type='number' className='textfield' name="Washing Machine" onBlur={this.getData}/>
              </Form.Field>
                <Form.Field inline>
                    <label style={{color:'slateblue'}}>How many times do you flush your toilet per week? </label>
                    <input type='number' className='textfield'name="Toilet" onBlur={this.getData}/>
                </Form.Field>
                
               
            
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
