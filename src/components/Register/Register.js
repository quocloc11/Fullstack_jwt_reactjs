import './Register.scss'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {registerNewUser} from "../../services/userService"
const Register = (props)=>{
    const [email,setEmail]= useState("")
    const [phone,setPhone]= useState("")
    const [username,setUsername]= useState("")
    const [password,setPassword]= useState("")
    const [confirmPassword,setConfirmPassword]= useState("")
    const defaultValidInput={
        isValidEmail:true,
        isVaildPhone:true,
        isValidPassword:true,
        isValidConfirmPassword:true
    }
    const [objCheckInput,setObjCheckInput] = useState(defaultValidInput)
    let history = useHistory();
    const handleLogin=()=>{
        history.push("/Login");
       
        
    }
    useEffect(()=>{
        // axios.get('http://localhost:8080/api/v1/test-api').then(data=>{
        //     console.log('axios',data)
        // })
        
    },[])

    const isValidInputs=()=>{
        setObjCheckInput(defaultValidInput)

        if(!email){
            toast.error('Email is required')
            setObjCheckInput({...defaultValidInput,isValidEmail:false})
            return false
        }
        let regx= /\S+@\S+\.\S+/;
        if(!regx.test(email)){
            setObjCheckInput({...defaultValidInput,isValidEmail:false})

            toast.error('Please enter a vaild email adress')
            return false
        }

        if(!phone){
            toast.error('Phone is required')
            setObjCheckInput({...defaultValidInput,isVaildPhone:false})

            return false
        }
        if(!password){
            toast.error('Password is required')
            setObjCheckInput({...defaultValidInput,isValidPassword:false})

            return false
        }
        if(password != confirmPassword){
            toast.error('Your Password is not same')
            setObjCheckInput({...defaultValidInput,isValidConfirmPassword:false})

            return false
        }
        
            return true
        }

    const hanleRegister=async ()=>{
        let check = isValidInputs()
        if(check === true){
          let response= await registerNewUser(email,phone,username,password)
          let serverData= response.data
          if(+serverData.EC ===0){
            toast.success(serverData.EM)
            history.push("/Login");

          } else{
            toast.error(serverData.EM)
          }
        }
        
    }
    return (
         <div className="register-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <div className='brand'>
                            Quoc Loc
                        </div>
                        <div className='detail'>
                            Tranquocloc
                        </div>
                    </div>
                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
                    <div className='brand d-sm-none'>
                            Quoc Loc
                        </div>
                        <div className='form-group'>
                        <label>Email:</label>
                        <input type='text' className={objCheckInput.isValidEmail ? 'form-control': 'form-control is-invalid'} placeholder='Email address '
                            value={email} onChange={(event)=>setEmail(event.target.value)}
                        />
                        </div>
                        <div className='form-group'>
                        <label>Phone number:</label>
                        <input type='text' className={objCheckInput.isVaildPhone ? 'form-control': 'form-control is-invalid'} placeholder='Phone number '
                        value={phone} onChange={(event)=>setPhone(event.target.value)}

                        />
                        </div>
                        <div className='form-group'>
                        <label>Username:</label>
                        <input type='text' className='form-control' placeholder='Username'
                        value={username} onChange={(event)=>setUsername(event.target.value)}

                        />
                        </div>
                        <div className='form-group'>
                            <label>Password:</label>
                            <input type='password' className={objCheckInput.isValidPassword ? 'form-control': 'form-control is-invalid'} placeholder='Password'
                             value={password} onChange={(event)=>setPassword(event.target.value)}

                            />
                        </div>
                        <div className='form-group'>
                            <label>Re-enter password:</label>
                            <input type='password' className={objCheckInput.isValidConfirmPassword ? 'form-control': 'form-control is-invalid'} placeholder='Re-enter-password'
                              value={confirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)}

                            />
                        </div>
                        <button className='btn btn-primary' onClick={()=>hanleRegister()}>Register</button>
                       
                        <hr/>
                        <div className='text-center'>
                        <button className='btn btn-success' onClick={()=>handleLogin()}>
                          Already've an account. Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
export default Register