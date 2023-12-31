
import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';
Button
function App() {

  const[principle,setPrinciple]=useState(" ")
  const[rate,setRate]=useState(" ")
  const[year,setYear]=useState(" ")
  const[interest,setInterest]=useState(0)


const calculateInterest=(e)=>{
  e.preventDefault()
 console.log(principle,rate,year);


if(!principle|| !rate || !year){
  alert('please fill the form completely')
}
else{
  setInterest(principle*rate*year/100)
}
}

const resetForm=()=>{
  setPrinciple(" ")
  setRate(" ")
  setYear(" ")
  setInterest(0)
}
  return (
    <>
      <div className='app'>

        <div className='container'>
          {/* heading  */}
          <div className='heading-text'>
            <h3 className='title'>Simple Interest Calculator</h3>
            <p className='title-para'>Calculate Simple Interest</p>
          </div>

          <div className='amount-card'>
            <div className='card-text'>

              <h3 className='total-amount'>₹{interest}</h3>
              <p className='total-para'>Total simple Interest</p>
            </div>

          </div>

          <form onSubmit={calculateInterest}>
            {/* to hold text field */}
            <div className='text-fields'>

              {/* principal amount */}
              <div className='input'>
              <TextField value={principle || " "} onChange={e=>setPrinciple(e.target.value)}
               className='outlined-basic' id="outlined-basic" label="principle Amount" variant="outlined" />
              </div>
              {/* interest */}
              <div className='input'>
              <TextField value={rate || " "} onChange={e=>setRate(e.target.value)} className='outlined-basic' id="outlined-basic" label="rate of interest (p.a)%" variant="outlined" />
              </div>
              {/* year */}
              <div className='input'>
              <TextField value={year || " "} onChange={e=>setYear(e.target.value)} className='outlined-basic' id="outlined-basic" label="Time period(yr)" variant="outlined" />
              </div>
               
               <div className='btn-group'>
               <Stack direction="row" spacing={2}>
      

               <Button  type='submit' className='btn' style={{backgroundColor:'black'}} variant="contained">Calculate</Button>
<Button onClick={resetForm} className='btn' variant="outlined" style={{backgroundColor:'green',color:'white'}}>Reset</Button>
</Stack>
               </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
