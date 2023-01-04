import React, { Component } from 'react'

export default class register extends Component {
  constructor() {
    super();
    this.state = {
      text1:"",
      text2:"",
      text3:"",
      text4: "",
      err:{text1:"", text2:"",
      text3:"",
      text4: ""}

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
    // const { err } = this.state
  

    if (this.state.text1.length === 0 || this.state.text1.length < 3) {
      
  this.setState({"err.text1":"error:LastName is either empty or lessthan 3 character"})
    
      
    }
    if (this.state.text2.length === 0 || this.state.text2.length < 3) {
      this.setState({"err.text2":"error:LastName is either empty or lessthan 3 character"})
      
    }
    if (this.state.text3.length === 0) {
      this.setState({"errs.text3":"error:Countries field cannot be empty"})
      
    }
    if (this.state.text4.length === 0 || this.state.text4 !== "male" || this.state.text4 !== "female"
      || this.state.text4 !== "other") {
      this.setState({ "errs.text4" : "error:Gender can take only 3 values male ,female or other" })
      
    }

    console.log(this.state.text1, this.state.text2, this.state.text3, this.state.text4)
    
    
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

