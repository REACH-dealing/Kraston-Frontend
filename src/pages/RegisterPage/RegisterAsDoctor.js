import React, { useState } from 'react';
import "./RegisterPageStyle.css";
import { Button } from 'react-bootstrap';
import MintButton from '../../Common/MintButton';
// import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash } from "react-icons/fa";
function RegisterAsDoctor() {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const [selectGender , setGender] = useState('');
  const handleGenderType = (gender)=>{
    setGender(gender);
  }
  return (
    <div>
      <div className='registerAsPatient'>
      <h2 className='text-center'>جــــــــــراســــــــــــــتون</h2>
      <p className='fw-bolder text-center mb-5 mt-3'>Register as physiotherapist </p>
      <form>
        <div className='EnterNameItems mt-4'>
          <div className='d-flex flex-column'>
            <label className='fw-bolder mb-2'>First Name</label>
            <input type='text' placeholder='Abdullah' required className='nameInput me-3'/>
          </div>
          <div className='d-flex flex-column'>
            <label className='fw-bolder mb-2'>Last Name</label>
            <input type='text' placeholder='Ahmed' required className='nameInput'/>
          </div>
        </div>
        <div className='d-flex flex-column x'>
          <label className='fw-bolder mt-5 mb-2'>Email</label>
          <input type='email' required placeholder='Abdullah@gmail.com' className='email'/>
        </div>
        <div className="d-flex flex-column position-relative">
          <label htmlFor="password" className="fw-bolder mb-3 mt-4">Password</label>
            <input
              id="password"
              placeholder="1234kk@2"
              type={passwordVisible ? "text" : "password"}
              required
              className="passwordFiled"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <span
              className="passwordToggleIcon"
              onClick={() => setPasswordVisible(!passwordVisible)}
              >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
        </div>
        <div className='d-flex flex-column'>
          <label className='fw-bolder mt-5 mb-2'>Nationality ID</label>
          <input type='' required placeholder='3333111100005555' className='nationality' id='Id'/>
        </div>
        <div className='d-flex flex-column'>
          <label className='fw-bolder mt-5 mb-2'>Nationality</label>
          <select className='nationality' >
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div>
        <div className='d-flex flex-column'>
          <label className='fw-bolder mt-5 mb-2'>Date Of Birth</label>
            <input type='date' className='dates'/>
        </div>

        <div className='d-flex flex-column '>
          <label className='fw-bolder mt-5 mb-2'>Phone Number</label>
          <div className='d-flex  mt-5 mb-3'>
            <div className='d-flex align-items-center align-items-center phoneCode'>
              <img src='/assets/images/Group 481318.png' className='pb-2' width={'25px'} alt='phone number'/>
              <p className='pt-1 ms-1 me-3'>+966</p>
            </div>
            <div>
              <input type='' placeholder='Your Phone Number' className='phone ms-3'/>
            </div>
          </div>
        </div>
        <div className='d-flex'>
          <div className='d-flex flex-column'>
            <label className='fw-bolder mt-5 mb-2'>Country</label>
            <input className='country'/>
          </div>
          <div className='d-flex flex-column ms-3'>
            <label className='fw-bolder mt-5 mb-2'>city</label>
            <input className='city'/>
          </div>
        </div>
        <div>
          <label className='fw-bolder mt-5 mb-2'>Gender</label>
          <div className='d-flex '>
            <div className='mt-3 ms-4'>
              <input type='radio'
              checked={selectGender === 'female'}
              onClick={()=>handleGenderType('female')}
               className=''/>
              <label className='ms-3' style={{color:"#4A525A"}}>Female</label>
              </div>
            <div className='ms-5'>
              <input type='radio' 
              checked={selectGender === 'male'}
              onClick={()=>handleGenderType('male')}
              className=''/>
              <label className='ms-3 mt-3' style={{color:"#4A525A"}}>Male</label>
            </div>
          </div>
        </div>

        <div>
        <div className='d-flex flex-column'>
          <label className='fw-bolder mt-5 mb-3'>specialization
          </label>
          <select className='nationality'>
            <option>Choose Your specialization</option>
            <option></option>
            <option></option>
          </select>
        </div>
        </div>
        <div className='d-flex flex-column mt-4 '>
          <label className='fw-bolder mt-3 mb-2'>certificates <span style={{color:"#646464"}}> (optional)</span></label>
          <div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
          <div>
          <input type='' placeholder='Upload certificates' className='certificates me-2'/>
          </div>
          <div className='d-flex align-items-center phoneCode ms-3'>
            <p className='mt-2 ms-3 text-center me-3 '>+</p>
          </div>
          </div>
        </div>
        <div className='d-flex flex-column mt-4 '>
          <label className='fw-bolder mt-3 mb-2'>medical accreditations<span style={{color:"#646464"}}>  (optional)</span></label>
          <div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
          <div>
          <input type='' placeholder='Upload medical Accreditations' className='certificates me-2'/>
          </div>
          <div className='d-flex align-items-center phoneCode ms-3'>
            <p className='mt-2 ms-3 text-center me-3'>+</p>
          </div>
          </div>
        </div>
        <p className='text-center fw-bolder mt-5'>By continuing, you agree graston's <span className='span'>Terms of use</span> And <span className='span'>privacy policy</span></p>
        <div className='RegisterBtn'>
          <MintButton text={'Register'}/>
        </div>
        <h6 className='mt-5 fw-bolder'>OR</h6>
              <Button variant='light' className='fw-bolder d-block w-100 googleBtn mt-4'><img src='/assets/images/google.png' className='me-3' width={'22px'} alt='google'/>Login With Google</Button>
              <Button className=' facebookBtn fw-bolder d-block mt-5'><img src='/assets/images/facebook icon.png' className='me-3' width={'22px'} alt='facebook'/>Login With Facebook</Button>
      </form>
    </div>
    </div>
  )
}

export default RegisterAsDoctor;
