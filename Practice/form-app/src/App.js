// import './App.css';
// import React ,{useState} from 'react'

// function App() {
//   const [data, setData] = useState({
//     firstName:"",
//     lastName:"",
//     email:"",
//   });
//   const [sucess, setSucess] = useState(false);
//   const [valid, setValid] = useState(false);
//   function handleOnChange(event){
//     const {name,value}=event.target
//     setData(prev=>{
//       return{
//         ...prev 
//         [name]=value
//       }
//     })
//   }
//   function handleSubmit(event){
//     event.preventDefault()
//     if(data.firstName!=='' && data.lastName!=='' && data.email!==''){
//       setValid(true)
//     }
//     setSucess(true)
    
//   }
//   return (
//     <div className="App">
//       <form className='form' onSubmit={handleSubmit}>
//         {sucess&&valid?<div>Sucessfully Submitted</div>:null}

//         <input type="text" placeholder='First Name' name='firstName' onChange={handleOnChange} value={data.firstName} />
//         {sucess&&data.firstName===''&&<span>*Please Enter First Name</span>}

//         <input  type="text" placeholder='Last Name' name='lastName' onChange={handleOnChange}  value={data.lastName} />
//         {sucess&&data.lastName===""&&<span>*Please Enter Last Name</span>}

//         <input type="email" placeholder='Email' name='email' onChange={handleOnChange} value={data.email} />
//         {sucess&&data.email===""&&<span>*Please Enter Email</span>}

//         <button type='submit'>Register</button>
//       </form>
    
//     </div>
//   );
// }

// export default App;


import React,{useState} from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName:"",
    lastName:"",
    email:""
  });
  const [sucess, setSucess] = useState(false);
  const [check, setCheck] = useState(false);
  const handleFirstName= (event) =>{
    setValues({...values, firstName:event.target.value})
  }
  const handleLastName= (event) =>{
    setValues({...values, lastName:event.target.value})
  }
  const handleEmail= (event) =>{
    setValues({...values, email:event.target.value})
  }

 const handleSubmit=(event)=>{
  event.preventDefault()
  if(values.firstName&&values.lastName&&values.email){
    setCheck(true)
  }
  setSucess(true)
  }
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {sucess&&check?<div class="success-message">Success! Thank you for registering</div>:null}
        <input
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleFirstName}
          
        />
        {/* Uncomment the next line to show the error message */}
        {sucess && !values.firstName?<span id="first-name-error">Please enter a first name</span>:null}
        <input
        value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleLastName}
        />
        {/* Uncomment the next line to show the error message */}
       {sucess&& !values.lastName? <span id="last-name-error">Please enter a last name</span>:null}
        <input
        value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleEmail}
        />
        {/* Uncomment the next line to show the error message */}
        {sucess && !values.email?<span id="email-error">Please enter an email address</span>:null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}