import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../css/Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_haeun', 'template_wy5c84k', form.current, {
        publicKey: 'buct_rLzSlUdgJ7fs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div id='Contact' className='Contact'>
    <h3>Contact</h3>
    <div className='information'>
      <div>
      <p><img src='../Img/email.png'/></p>
      <CopyToClipboard text="qkrgkdms7324@gmail.com" onCopy={()=>alert("클립보드에 복사되었습니다")}>
      <text>qkrgkdms7324@gmail.com <img src='../Img/copyicon.png'/> </text>
      </CopyToClipboard>
      </div>
      <div>
      <p><img src='../Img/call.png'/></p>
      <CopyToClipboard text="01025287324" onCopy={()=>alert("클립보드에 복사되었습니다")}>
      <text>010.2528.7324 <img src='../Img/copyicon.png'/> </text>
      </CopyToClipboard>
      </div>
    </div>
    {/* <div>
    <p>send Email</p>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" 
      placeholder='내용을 입력해주세요'/>
      <input type="submit" value="Send" />
    </form>
    </div> */}
    </div>
  );
};

export default Contact;