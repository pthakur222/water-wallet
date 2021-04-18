
import React, {Component } from 'react';
import Header from '../components/Header'
import {Card,Button }  from 'semantic-ui-react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
let jsonData ={
        "company": "THAMES_WATER", 
    
        "monthlyUsage": 100000.0, 
    
        "applianceLimits": [ 
    
            { 
    
                "appliance": "Washing machine", 
    
                "maximumLimit": 2, 
    
                "timeUnit": "WEEK" 
    
            }, 
    
            { 
    
                "appliance": "Handwashing dishes", 
    
                "maximumLimit": 2, 
    
                "timeUnit": "WEEK" 
    
            }, 
    
            { 
    
                "appliance": "Dishwasher", 
    
                "maximumLimit": 4, 
    
                "timeUnit": "WEEK" 
    
            }, 
    
            { 
    
                "appliance": "Kettle", 
    
                "maximumLimit": 2, 
    
                "timeUnit": "DAY" 
    
            }, 
    
            { 
    
                "appliance": "Handwashing food - bowl", 
    
                "maximumLimit": 5, 
    
                "timeUnit": "WEEK" 
    
            }, 
    
            { 
    
                "appliance": "Bath - full", 
    
                "maximumLimit": 0, 
    
                "timeUnit": "WEEK" 
    
            }, 
    
            { 
    
                "appliance": "Tap running - teeth", 
    
                "maximumLimit": 14, 
    
                "timeUnit": "WEEK" 
    
            }, 
    
            { 
    
                "appliance": "Tap running - shaving", 
    
                "maximumLimit": 7, 
    
                "timeUnit": "WEEK" 
    
            }, 
    
            { 
    
                "appliance": "Shower", 
    
                "maximumLimit": 6, 
    
                "timeUnit": "WEEK" 
    
            }, 
    
            { 
    
                "appliance": "Toilet", 
    
                "maximumLimit": 5, 
    
                "timeUnit": "DAY" 
    
            }, 
    
            { 
    
                "appliance": "Garden hose", 
    
                "maximumLimit": 4, 
    
                "timeUnit": "MONTH" 
    
            }, 
    
            { 
    
                "appliance": "Car wash", 
    
                "maximumLimit": 0, 
    
                "timeUnit": "MONTH" 
    
            } 
    
        ] 
    
    } 


class ActionPlan extends Component {

  constructor() {
    super();
    this.state = {
        value1: 1,
        value2: 3,
        value3: 3,
        value4: 3,
        value5: 3,
        value6: 3,
        value7: 3,
        value8: 3,
        value9: 3,
        modalShow: false,
        setModalShow: true


    }
  }

  componentDidMount=()=> {
    fetch('http://localhost:3000/savings', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: this.state.pageData
        }).then((response) => response.json())
          .then((responseJson) => {
              this.setState({userLimits: jsonData})

        }).catch((error) => {
          console.error(error);
        });
  }

  calculate=(e)=> {
      
   this.setState({modalShow: !this.state.modalShow})
  }

render(){
 // const { steps, currentStep, animation, duration } = this.state;

  return (
    <Card fluid style={{padding:'30px'}}>
      <Header head='Action Plan' /> 
      <br/> 
<div>
            <h3 style={{color:'blue'}}>Use the washing machine {this.state.value1} times less per week </h3>
            <br/>
            <InputRange
                maxValue={2}
                minValue={0}
                value={this.state.value1}
                onChange={value1 => this.setState({ value1 })} />
                <br/>
             </div>
    <div>
        <h3 style={{color:'pink'}}>Use the dishwasher {this.state.value2} times less per week  </h3>
        <br/>
        <InputRange
            maxValue={4}
            minValue={0}
            value={this.state.value2}
            onChange={value2 => this.setState({ value2 })} />
            <br/>
         </div>
   <div>
        <h3 style={{color:'powderblue'}}>Handwash the dishes {this.state.value3} minutes less each time  </h3>
        <br/>
        <InputRange
            maxValue={6}
            minValue={0}
            value={this.state.value3}
            onChange={value3 => this.setState({ value3 })} />
            <br/>
        </div>
        <div>
        <h3 style={{color:'grey'}}>Fill the kettle {this.state.value4} times less per week   </h3>
        <br/>
        <InputRange
            maxValue={8}
            minValue={0}
            value={this.state.value4}
            onChange={value4 => this.setState({ value4 })} />
            <br/>
        </div>
        <div>
        <h3 style={{color:'aquamarine'}}>Handwash the food {this.state.value5} minutes less each time </h3>
        <br/>
        <InputRange
            maxValue={8}
            minValue={0}
            value={this.state.value5}
            onChange={value5 => this.setState({ value5 })} />
            <br/>
        </div>
        <div>
        <h3>Use the bath {this.state.value6} times less per month  </h3>
        <br/>
        <InputRange
            maxValue={8}
            minValue={0}
            value={this.state.value6}
            onChange={value6 => this.setState({ value6 })} />
            <br/>
        </div>
        <div>
        <h3 style={{color:'coral'}}>Run the tap when brushing my teeth 1 times less per day  </h3>
        <br/>
        </div>
        <div>
         <h3 style={{color:'brown'}}>Run the tap when shaving 2 times less per week  </h3>
         <br/>
         </div>
         <div>
         <h3 style={{color:'teal'}}>Shower {this.state.value7} times less per week  </h3>
         <br/>
         <InputRange
             maxValue={8}
             minValue={0}
             value={this.state.value7}
             onChange={value7 => this.setState({ value7 })} />
             <br/>
         </div>
         <div>
         <h3 style={{color:'bisque'}}>Water the garden {this.state.value8} minutes less each time  </h3>
         <br/>
         <InputRange
             maxValue={20}
             minValue={0}
             value={this.state.value8}
             onChange={value8 => this.setState({ value8 })} />
             <br/>
         </div>
         <div>
         <h3 style={{color:'green'}}>Wash the car {this.state.value9} minutes less each time </h3>
         <br/>
         <InputRange
             maxValue={20}
             minValue={0}
             value={this.state.value9}
             onChange={value9 => this.setState({ value9 })} />
             <br/>
         </div>
        <br/>
        <br/>
        <div >
        <Button content='Calculate' style={{align:'center'}}  color='teal' size='huge' onClick={this.calculate}/>
       
       {this.state.modalShow ?  <div><br/><br/><h4 style={{fontFamily: 'cursive', color:'teal', fontSize:'50px'}}>Here it is..........You can save £14.50 and 430L of water per month!  </h4>
<br/></div>
            :''
        }
       
        </div>
    </Card>

  )
}
 }


export default ActionPlan


 