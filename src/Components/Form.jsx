import React from "react";
import { useState } from "react";




const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    userName: '',
    email: ''
})

const [show, setShow] = useState(false)
const [error,setError] = useState(false)

const handeleSubmit=(event)=>{
  const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const esValido= expReg.test(user.email)


  event.preventDefault()
  if(user.userName.length > 5 && esValido ===true ){
    setShow(true)
    setError(false)
  }else{
    setError(true)
  }
}


  return (
  
    
    <div>
      <form onSubmit={handeleSubmit}>
        <input type="text" placeholder='Usuario' disabled={show}  value={user.userName} onChange={(e) => setUser({...user, userName: e.target.value})}/>
        <input type="email" placeholder='Email' disabled={show}  value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
        <button>Send</button>
        {error && 'Por favor verifique su información nuevamente'}
      </form>
      {show ? <p>'Gracias {user.userName}  , te contactaremos cuando antes vía mail'</p> : null}
    </div>
  );
};

export default Form;
