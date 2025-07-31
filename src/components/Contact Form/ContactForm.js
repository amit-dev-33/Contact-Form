import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import Button from '../Button/Button'
import style from "./contactfrom.module.css"
import service_image from "../../assets/Service 24_7-pana 1.svg"
// import { useState } from "react";

function ContactForm() {

  const formSubmit = (event)=>{
    event.preventDefault();
    console.log(event)

    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event.target[2].value)
  }
  

  return (
    <div className={style.section}>
      <div className={style.left_section}>
        
        <div className={style.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage style={{fontSize:"24px"}}/>}/>
          <Button text="VIA CALL" icon={<MdCall style={{fontSize:"24px"}}/>}/>
        </div>

        <div className={style.bottom_btn}>
          <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdOutlineMail style={{fontSize:"24px"}}/>}/>
        </div>

        <div>
          <form onSubmit={formSubmit}>
            <div className={style.form_input}>
              <label htmlFor="name">name</label>
              <input type="text" />
            </div>
            <div className={style.form_input}>
              <label htmlFor="email">Email</label>
              <input type="text" />
            </div>
            <div className={style.form_input}>
              <label htmlFor="text">Text</label>
              <textarea type="text" rows={8} />
            </div>

            <div style={{display:"flex", justifyContent:"end"}}>
              <Button text="Submit"/>
              </div>

            <div></div>
            
          </form>
        </div>
        
      </div>
      <div className={style.right_section}>
          <img src={service_image} alt="" />
        </div>
    </div>
  )
}

export default ContactForm