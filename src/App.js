import './App.css';
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import FormPage from './component/formPage';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      age: 0,
      value:''
    }
  }

  handleChange = () =>{

  }

  valueChange = () =>{

  }


  render(){
    return (
    <div className="component_wrapper">
      <FormPage/>
      <div className="form-wrapper">
        <div className="inputname">
           <div>Name</div>
           <TextField
             id="standard-password-input"
             label="Enter your name"
             type="name"
             className="textfields"
             margin="normal"
           />
        </div>
        <div className="inputname">
           <div>Email</div>
           <TextField
             id="standard-password-input"
             label="Enter your Email"
             type="email"
             margin="normal"
             className="textfields"
           />
        </div>
        <div className="inputname">
           <div>Age(optional)</div>
           <TextField
             id="standard-password-input"
             label="Age"
             type="age"
             margin="normal"
             className="textfields"
           />
        </div>
        <div className="inputname">
           <div>Which option best describes your current role?</div>
           <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             className="textfields"
             value={this.state.age}
             onChange={this.handleChange}
           >
             <MenuItem value={10}>Ten</MenuItem>
             <MenuItem value={20}>Twenty</MenuItem>
             <MenuItem value={30}>Thirty</MenuItem>
           </Select>
        </div>
        <div className="inputname">
          <div>Would you recommend freeCodeComp to a friend?</div>
          <RadioGroup aria-label="gender" name="gender1" value={this.state.value} onChange={this.valueChange}>
             <FormControlLabel value="Definitly" control={<Radio />} label="Definitly" />
             <FormControlLabel value="Maybe" control={<Radio />} label="Maybe" />
             <FormControlLabel value="Not sure" control={<Radio />} label="Not sure" />
             <FormControlLabel
               value="disabled"
               disabled
               control={<Radio />}
               label="(Disabled option)"
             />
           </RadioGroup>
        </div>

        <div className="inputname">
          <div>What is your favorite feature of freeCodeComp?</div>
          <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             className="textfields"
             value={this.state.age}
             onChange={this.handleChange}
           >
             <MenuItem value={10}>Ten</MenuItem>
             <MenuItem value={20}>Twenty</MenuItem>
             <MenuItem value={30}>Thirty</MenuItem>
           </Select>
        </div>

        <div className="inputname">
          <div>What would you like to see improved? (Check all that apply)</div>
          <FormGroup >
           <FormControlLabel
              control={
               <Checkbox     value="checkedA" />
             }
             label="Secondary"
           />
           <FormControlLabel
              control={
               <Checkbox
                 // checked={state.checkedB}
                 // onChange={handleChange('checkedB')}
                 value="checkedB"
                 // color="primary"
               />
             }
             label="Primary"
           />
           <FormControlLabel  control={<Checkbox value="checkedC" />} label="Uncontrolled" />
           <FormControlLabel  control={<Checkbox value="checkedD" />} label="Disabled" />
           <FormControlLabel  control={<Checkbox  />} label="Disabled" />
           <FormControlLabel
              control={
               <Checkbox
                 // checked={state.checkedF}
                 // onChange={handleChange('checkedF')}
                 value="checkedF"
                 // indeterminate
               />
             }
             label="Indeterminate"
           />
           <FormControlLabel
              control={
               <Checkbox
                 // checked={state.checkedG}
                 // onChange={handleChange('checkedG')}
                 value="checkedG"
               />
             }
             label="Custom color"
           />
           <FormControlLabel
              control={<Checkbox  value="checkedH" />}
             label="Custom icon"
           />
           <FormControlLabel
              control={
               <Checkbox
                 // icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                 checkedIcon={<CheckBoxIcon fontSize="small" />}
                 value="checkedI"
               />
             }
             label="Custom size"
           />
         </FormGroup>
        </div>

        <div className="inputname">
          <div>Any comments or suggestions?</div>
          <TextField
             id="standard-password-input"
             label="Enter your comments here..."
             type="comments"
             className="textfields"
             margin="normal"
             style={{border: '1px solid black'}}
           />
        </div>
        
       <div className="button-wrapper">
         <Button  className="submit">
           Submit
         </Button>
       </div>
      </div>
      </div>

      );
  }
  }
 

export default App;
