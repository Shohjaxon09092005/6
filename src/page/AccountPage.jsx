import React, { useRef, useState } from 'react'
import rasm1 from '../image/accountHero.png'
import rasm2 from '../image/vektor1.png'
import rasm3 from '../image/avatar.png'
import rasm4 from '../image/qalam.png'
import '../style/accountPage.css'
function AccountPage() {
  
  const[ism, setIsm ]=useState(localStorage.getItem("l_name") ?localStorage.getItem("l_name") :"John Doe1")
  const[pochta, setPochta ]=useState(localStorage.getItem("l_email") ?localStorage.getItem("l_email") :"john.doe@gmail.com")
  const[parol, setParol ]=useState( localStorage.getItem("l_password") ?localStorage.getItem("l_password") :"************")
  const[tel, setTel ]=useState( localStorage.getItem("l_phone") ? localStorage.getItem("l_phone") :"+1 000-000-0000")
  const[manzil, setManzil ]=useState( localStorage.getItem("l_address") ? localStorage.getItem("l_address") :"St 32 main downtown, Los Angeles, California, USA")
  const[sana, setSana ]=useState( localStorage.getItem("l_birth") ? localStorage.getItem("l_birth") :"01-01-1992")
  let name = useRef()
  let email = useRef()
  let password = useRef()
  let phone = useRef()
  let address = useRef()
  let birth = useRef()

console.log(name);
function handleSubmit(e){
  e.preventDefault()
  closeModal()
  setIsm(name.current.value)
  setPochta(email.current.value)
  setParol(password.current.value)
  setTel(phone.current.value)
  setManzil(address.current.value)
  setSana(birth.current.value)
  localStorage.setItem("l_name",name.current.value)
  localStorage.setItem("l_email",email.current.value)
  localStorage.setItem("l_password",password.current.value)
  localStorage.setItem("l_phone",phone.current.value)
  localStorage.setItem("l_address",address.current.value)
  localStorage.setItem("l_birth",birth.current.value)
  
}
  function openModal() {
    document.querySelector(".modal").classList.add("show")
    document.querySelector("body").style.overflow = "hidden"

  }
  function closeModal() {
    document.querySelector(".modal").classList.remove("show")
    document.querySelector("body").style.overflow = "unset"
  }
  return (
    <main>
      <div className="modal">
        <form onSubmit={(e)=>handleSubmit(e)} className='form'>
          <span onClick={closeModal} className='closeBtn'>close</span>
          <input ref={name} type="text" placeholder='fullname' />
          <input ref={email} type="text" placeholder='email' />
          <input ref={password} type="password" placeholder='password' />
          <input ref={phone} type="number" placeholder='phone number' />
          <input ref={address} type="text" placeholder='address' />
          <input ref={birth} type="date" placeholder='Birthday' />
          <button type="submit">Change</button>
        </form>
      </div>
      <section className='accountHero'>
        <div className="container">
          <img src={rasm1} alt="" />
          <button> <img src={rasm2} alt="" />Upload new cover</button>
          <div className="avatar__card">
            <div className="ok">
              <img src={rasm3} alt="" />
              <img onClick={openModal} className='qalam' src={rasm4} alt="" />
            </div>

            <h4>{ism}</h4>
            <span>{pochta}</span>
          </div>
        </div>
      </section>
      <section className='accountNav'>
        <div className="container">
          <ul>
            <li className='account__item active_item' >Account</li>
            <li className='account__item '>History</li>
            <li className='account__item '>Payment methods</li>
          </ul>
        </div>
      </section>
      <section className='accountMain'>
        <div className="container">
          <h2>Account</h2>
          <ul>
            <li className='accountMain__item'>
              <div>
                <span>Name</span>
                <h4>{ism}</h4>
              </div>
              <button>Change</button>

            </li>
            <li className='accountMain__item'>
              <div>
                <span>Email</span>
                <h4>{pochta}</h4>
              </div>
              <button>Change</button>

            </li>
            <li className='accountMain__item'>
              <div>
                <span>Password</span>
                <h4>{parol}</h4>
              </div>
              <button>Change</button>

            </li>
            <li className='accountMain__item'>
              <div>
                <span>Phone number</span>
                <h4>{tel}</h4>
              </div>
              <button>Change</button>

            </li>
            <li className='accountMain__item'>
              <div>
                <span>Address</span>
                <h4>{manzil}</h4>
              </div>
              <button>Change</button>

            </li>
            <li className='accountMain__item'>
              <div>
                <span>Date of birth</span>
                <h4>{sana}</h4>
              </div>
              <button>Change</button>

            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default AccountPage
