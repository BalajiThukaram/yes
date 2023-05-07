import React ,{useState}from "react";
import "./alert.css";
import axios from 'axios'


function MessageSender() {

  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const handleSmsClick = () => {
    axios.post('/api/sms/caretaker')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEmergencySmsClick = () => {
    axios.post('/api/send/emergency')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleWhatsappClick = () => {
    axios.post(`https://api.callmebot.com/whatsapp.php`, null,{params:{
        phone:+919499051835,
        text:whatsappMessage,
        api:5681421
    }})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEmergencyWhatsappClick = () => {
    axios.post('https://api.callmebot.com/whatsapp.php', null,{params:{
      phone:+919176000110,
      text:whatsappMessage,
      api:6769441
    }})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEmailClick = () => {
    axios.post('/api/mail/care', { text: emailMessage })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEmergencyEmailClick = () => {
    axios.post('/api/mail/emailhospi', { text: emailMessage })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="message-sender-container">
      <div className="sms-container">
        <h2>SMS</h2>
          <div className="whatsapp-buttons-container">
            <button className="caretaker-button"onClick={handleSmsClick}>Caretaker</button>
            <button className="emergency-button"onClick={handleEmergencySmsClick}>Emergency</button>
        </div>
      </div>
      <div className="whatsapp-container">
        <h2>WhatsApp</h2>
        <div className="whatsapp-input-container">
          <input type="text" placeholder="Enter message..."value={whatsappMessage} onChange={(e) => setWhatsappMessage(e.target.value)} />
          <div className="whatsapp-buttons-container">
            <button className="caretaker-button"onClick={handleWhatsappClick}>Caretaker</button>
            <button className="emergency-button"onClick={handleEmergencyWhatsappClick}>Emergency</button>
          </div>
        </div>
      </div>
      <div className="email-container">
        <h2>Email</h2>
        <div className="email-input-container">
          <input type="text" placeholder="Enter message..." value={emailMessage} onChange={(e) => setEmailMessage(e.target.value)}/>
          <div className="email-buttons-container">
            <button className="caretaker-button"onClick={handleEmailClick}>Caretaker</button>
            <button className="emergency-button"onClick={handleEmergencyEmailClick}>Emergency</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
