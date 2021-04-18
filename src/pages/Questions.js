import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { Form, Button, Dropdown} from 'semantic-ui-react'
const Options =[
  { key: 1, text: 'Thames Water', value:' Thames Water' },
  { key: 2, text: 'Wessex Water', value: 'Wessex Water' },
  { key: 3, text: 'Southern Water', value: 'Southern Water' },
]
export default class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
    pageData:{},
    disbaled: true,
    count: 0,
  };
  this.onNextClick = this.onNextClick.bind(this);
}


  getData = (e) => {
    this.setState({ pageData: {
      "monthlyUsage": e.target.value
  }});
  }

  onNextClick=()=>{
   this.props.onNextClick({pageData: this.state.pageData});
   // this.props.getData
  }

  render() {
//  const {value} = this.state;
  return (
      <Row>
        <Col>
            <Form size='massive'>
              <Form.Field inline>
                <label style={{color:'slateblue'}}>What is your monthly water usage? (in litres)</label>
                <input type='number' className='textfield' name='Monthly Usage' onBlur={this.getData}/>
              </Form.Field>
              <Form.Field inline>
                <label style={{color:'slateblue'}}>Who is your water provider?</label>
                <Dropdown
                    placeholder='Select'
                    fluid
                    selection={this.getData}
                    options={Options}
                  />
              </Form.Field>
              {/* <Form.Field inline>
                <label style={{color:'slateblue'}}>Does your home have any dripping taps? </label>
                </Form.Field> */}
                {/* <Form.Group inline>
                  <Form.Radio
                    name='Dripping Tap'
                    label='Yes'
                    value='Yes'
                    checked={value === 'Yes'}
                    onChange={this.handleChange}
                    style={{fontSize:'1em', padding: '0px'}} 
                  />
                  <Form.Radio
                    name='Dripping Tap'
                    label='No'
                    value='No'
                    checked={value === 'No'}
                    onChange={this.handleChange}
                    style={{fontSize:'1em'}} 
                  />
                  </Form.Group> */}
            </Form>
            <br/>
            <div style={{float:'right'}}>
                <Button content='Next' icon='right arrow' labelPosition='right' color='teal' size='huge' onClick={this.onNextClick} />
             
            </div>
            
        </Col>
      </Row>
  )}
}
