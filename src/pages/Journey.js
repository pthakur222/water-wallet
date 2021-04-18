
import React, {Component } from 'react';
import Header from '../components/Header'
import Meta from '../components/Meta'
import {Container, Icon, Card }  from 'semantic-ui-react';
import Stepper from 'react-stepper-enhanced';
import Questions from './Questions';
import Kitchen from './Kitchen';
import Washroom from './Washroom';
import Garden from './Garden';
  // page content
  const pageTitle = `Let's try and save water`
  const header = 'Water Usage Calculator'
 
class Journey extends Component {

  constructor() {
    super();
    this.state = {
      steps: [{
        title: <Icon name='home' size='huge' color='purple'/>
      }, {
        title: <Icon name='food' size='huge'color='teal'/>,
      }, {
        title: <Icon name='bath' size='huge' color='olive'/>
      }, {
        title: <Icon name='sun' size='huge' color='yellow'/>,
      }],
      currentStep: 0,
      pageData:{},
    };
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrevious = this.onClickPrevious.bind(this);
  //  this.handleVisibility = this.handleVisibility.bind(this);
  }


  onClickNext=(data)=> {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1,
      pageData: data
    });
    console.log(data,'data');
    
  }

  onClickPrevious(){
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep - 1
    });
   
  }


  renderContent(step){
    switch(step){
      case 0: return (<Questions onNextClick={this.onClickNext}/>)
               
      case 1: return <Kitchen onNextClick={this.onClickNext} onPreviousClick={this.onClickPrevious} pageData={JSON.stringify(this.state.pageData)}/>;
               
      case 2: return <Washroom onNextClick={this.onClickNext} onPreviousClick={this.onClickPrevious} pageData={this.state.pageData}/>;
               
      default: return <Garden onNextClick={this.onClickNext} onPreviousClick={this.onClickPrevious} pageData={this.state.pageData}/>;
    }
  }

render(){
  const { steps, currentStep} = this.state;

  return (
    <Container fluid>
      <Meta title={pageTitle}/>
      <Header head={header} />  
      <div>
        <Stepper steps={ steps } activeStep={ currentStep }/>
        <br/>
        <Card fluid style={{backgroundColor:'#e3e5e6db', padding:'25px', margin:'5px'}}>
       
            {this.renderContent(currentStep)}
      
        </Card>
      </div>
    </Container>

  )
}
 }


export default Journey


 