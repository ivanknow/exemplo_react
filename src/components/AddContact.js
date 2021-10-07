import React from 'react';
import history from './history'


class AddContact extends React.Component {

  state = {name:"",email:""}
 add = (e) => {
   e.preventDefault();
   if(this.state.name === "" || this.state.email === ""){
     alert("fill it");
     return;
   }

   //console.log(this.state);
   this.props.handleAddContact(this.state);
   this.setState({name:"",email:""});
   //this.props.history.push("/");
   history.push('/');
 }
  render() {
    return (<div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={this.add}>
        <div className="field">
          <label>Name</label>
          <input value={this.state.name} type="text" placeholder="Name" onChange={(e)=>{this.setState({name:e.target.value})}}/>
        </div>
        <div className="field">
          <label>E-mail</label>
          <input value={this.state.email} type="text" placeholder="E-mail" onChange={(e)=>{this.setState({email:e.target.value})}}/>
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>)
  };
}

export default AddContact;
