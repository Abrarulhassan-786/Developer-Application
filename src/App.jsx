import './App.css';
import React from 'react';

class Ap extends React.Component {
  constructor() {
    super()
    this.state = {
      userdata: [{ id: '123', devName: "Abrar", devField: "Front End", edit: false }],
      uid: '',
      dename: '',
      defield: ''
      // userdata:[{id:'123',developername:"Abrar",developerfield:"Web developer"}]
    }
  }
  //creating function add value in table
  addData = () => {
    let obj = { id: this.state.uid, devName: this.state.dename, devField: this.state.defield }
    this.setState({
      userdata: [...this.state.userdata, obj]
    })
  }
  //this is delete function use delete value by click function and get value
  deleteValue = (index) => {
    this.state.userdata.splice(index, 1);
    this.setState({
      userdata: this.state.userdata
    })
  }
  //this is update function use for edit value by onclick function and get value
  updateValue = (index) => {
    this.state.userdata[index].edit = true;
    this.setState({
      userdata: this.state.userdata
    })
  }
  //-----on Chnage Value by taking input from id
  changeinputID = (e, index) => {
    this.state.userdata[index].id = e.target.value;
    this.setState({
      userdata: this.state.userdata
    })
  }
  //-----on Chnage Value by taking input from name
  changeinputName = (e, index) => {
    console.log(e.target.value)
    this.state.userdata[index].devName = e.target.value;
    this.setState({
      userdata: this.state.userdata
    })
  }
  //-----on Chnage Value by taking input from postion field
  changeinputfield = (e, index) => {
    this.state.userdata[index].devField = e.target.value;
    this.setState({
      userdata: this.state.userdata
    })
  }
  //CALLING EIDT FUNCTION which effiect
  editValue = (index) => {
    this.state.userdata[index].edit = false;
    this.setState({
      userdata: this.state.userdata
    })
  }
  //Calling function for all delete data 
  // deleteRecord=()=>{
  //   this.state.userdata = []
  //   this.setState({
  //     userdata:this.state.userdata
  //   })
  // }
  render() {
    return (
      <div className='mainContainer'>
        <h2>Developer list Application
          <hr />
        </h2>
        <p>This Application is for Developer who check list user Expertise and In which they position take More Intersted. Lets Define you Power "THANKS" </p>
       <div className='wrapper'>
        <form action="">
          <input value={this.state.uid} type="text" placeholder='Your Lucky Number' onChange={(e) => this.setState({ uid: e.target.value })} /><br /><br />
          <input value={this.state.dename} type="text" placeholder='Your Name Dev' onChange={(e) => this.setState({ dename: e.target.value })} /><br /><br />
          <input value={this.state.defield} type="text" placeholder='Your Position' onChange={(e) => this.setState({ defield: e.target.value })} />
        </form>
        <button onClick={this.addData} className='submitbtn' >Submit</button>
        </div>
        <table>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
          {
            this.state.userdata.map((val, index) => {
              return <tr key={index}>
                <td>{val.edit ? <input value={val.id} type='text' onChange={(e) => this.changeinputID(e, index)} /> : val.id}</td>
                <td>{val.edit ? <input value={val.devName} type='text' onChange={(e) => this.changeinputName(e, index)} /> : val.devName}</td>
                <td>{val.edit ? <input value={val.devField} type='text' onChange={(e) => this.changeinputfield(e, index)} /> : val.devField}</td>
                <div className='mainbutton'>
                  <button className='deletbtn' onClick={() => this.deleteValue(index)}>Delete</button>
                  {val.edit ?
                    <button className='editBtn' onClick={() => this.editValue(index)}>EDIT</button> :
                    <button className='updatebtn' onClick={() => this.updateValue(index)}>Update</button>}
                </div>
              </tr>
            }
            )
          }
        </table>
      </div>
    )
  }
}
export default Ap;
