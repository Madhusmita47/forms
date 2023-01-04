import React, { Component } from 'react'

export default class register extends Component {
  constructor() {
    super();
    this.state = {
      text1:"",
      text2:"",
      text3:"",
      text4: "",
      err:""

    }
  }
  handlechange1= (event) => {
  
    this.setState({
      text1:event.target.value
    })
  }
  handlechange2 = (event) => {
  
    this.setState({
      text2:event.target.value
    })
  }
  handlechange3 = (event) => {
  
    this.setState({
      text3:event.target.value
    })
  }
  handlechange4= (event) => {
  
    this.setState({
      text4:event.target.value
    })
  }
  handleclick = () => {
    console.log(this.state.text1.length)
    if (this.state.text1.length === 0 || this.state.text1.length < 3) {
    
      return <>
        this.state.err && <div className="alert alert-danger" role="alert">
             error:firstName is either empty or lessthan 3 character
      </div>
      </>
    }
    if (this.state.text2.length === 0 || this.state.text2.length < 3) {
      return <div className="alert alert-danger" role="alert">
             error:LastName is either empty or lessthan 3 character
          </div>
    }
    if (this.state.text3.length === 0) {
      return <div className="alert alert-danger" role="alert">
             error:Countries field cannot be empty
          </div>
    }
    if (this.state.text4.length === 0 || this.state.text4 !== "male" || this.state.text4 !== "female"
    || this.state.text4!=="other") {
      return <div className="alert alert-danger" role="alert">
             error:Gender can take only 3 values male ,female or other
          </div>
    }
    console.log(this.state.text1, this.state.text2, this.state.text3, this.state.text4)
    return <div className="alert alert-success" role="alert">
       Details successfully submitted
  </div> 
    
  }
  
  render() {
    return (
      <>
        <div className="mb-3 row mx-2">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">First Name</label>
    <div className="col-sm-4">
            <input type="text" readonly className="form-control" id="staticEmail" value={this.state.text1 } onChange={this.handlechange1} />
    </div>
        </div>
        <div className="mb-3 row mx-2">
          <label htmlFor="staticEmail" className=" col-sm-2 col-form-label ">Last Name</label>
       <div className="col-sm-4">
      <input type="text" readonly className="form-control" id="staticEmail" value={this.state.text2 } onChange={this.handlechange2}/>
     </div>
  </div>
          <div className="mb-3 row mx-2">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Country</label>
    <div className="col-sm-4">
      <input type="text" readonly className="form-control" id="staticEmail"  value={this.state.text3 } onChange={this.handlechange3}/>
    </div>
        </div>
        <div className="mb-3 row mx-2">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Gender</label>
    <div className="col-sm-4">
      <input type="text" readonly className="form-control" id="staticEmail"  value={this.state.text4 } onChange={this.handlechange4}/>
    </div>
        </div>
        <div className="form-check mx-3">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Do you want to receive marketing emails
  </label>
        </div>
        <div className="form-check mx-3">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Do you want have a profile image
  </label>
        </div>
        <div >
        <button type="button" className="btn btn-primary mx-3" onClick={this.handleclick}>Submit</button>
        </div>

        <div>
         

        </div>    

</>
    )
  }
}

