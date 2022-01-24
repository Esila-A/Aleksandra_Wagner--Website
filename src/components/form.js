// const Form = () => {

//   return (
//     <div className="form">
//       <h2 className="form_header">FORMULARZ KONTAKTOWY</h2>
//       <form>
//         <label>
//           Imię
//           <input type="text" placeholder="wpisz imię"></input>
//         </label>
//         <label>
//           Email
//           <input type="email" placeholder="wpisz email"></input>
//         </label>
//         <label>
//           Wiadmość
//           <input type="text" placeholder="wpisz wiadomość"></input>
//         </label>
//       </form>
//     </div>
//   )
// }

// export default Form;

import React, {useState} from "react";
import {send} from "emailjs-com";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
      setForm (prevState => {
        return {
          ...prevState,
          [name]: value,
        }
      });
  };

  const [notice, setNotice] = useState(
    <button type="submit" className="submit">WYŚLIJ</button>
  )

  const handleSubmit = (e) => {
    e.preventDefault();

    send (
      "service_0ru1bbl",
      "template_ys9ci8a",
      form,
      "user_y5LyArSJd8PVIrx90Mux4"
    )
    .then(() => {
      setNotice (
        <p className="positive">WYSŁANO!</p>
      );
    })
    .catch(() => {
      setNotice (
        <p className="negative">COŚ POSZŁO NIE TAK...<br/>SPRÓBUJ JESZCZE RAZ</p>
      )
    });
  };

  return (
    <div className="form" id="form">
      <h2 className="form_header">FORMULARZ KONTAKTOWY</h2>
      <form className="form_content" onSubmit={handleSubmit}>
        <label className="requests">
          <p className="text">Imię</p>
          <input type="text" name="name" placeholder="wpisz swoje imię" value={form.name} onChange={handleChange} className="input-fields input-fields--one" required={true}/>
        </label>
        <label className="requests">
          <p className="text">Email</p>
          <input type="email" name="email" placeholder="wpisz swój email" value={form.email} onChange={handleChange} className="input-fields input-fields--one" required={true}/>
        </label>
        <label className="requests">
          <p className="text">Wiadomość</p>
          <textarea name="message" placeholder="wpisz wiadomość" value={form.message} onChange={handleChange} className="input-fields input-fields--two" required={true}/>
        </label>
        {notice}
      </form>
    </div>
  )
}

export default Form;

