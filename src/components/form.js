import React, { useState, useEffect, useCallback } from "react";
import { send } from "emailjs-com";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";


// reCaptcha //
const SubmitButton = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }

    const token = await executeRecaptcha("");
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <button className="submit" onClick={handleReCaptchaVerify}>
      WYŚLIJ
    </button>
  );
};


// Email JS //
const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const [notice, setNotice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    send(
      "service_ozxzrdl",
      "template_ys9ci8a",
      form,
      "user_y5LyArSJd8PVIrx90Mux4"
    )
      .then(() => {
        setNotice("success");
      })
      .catch(() => {
        setNotice("error");
      });
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfxQt0fAAAAAAWbGJoDNtHG8sXBUYvvsOS6pjt3">
      <div className="attempt" id="form">
        <div className="form">
          <h2 className="form_header">FORMULARZ KONTAKTOWY</h2>
          <form id="form" className="form_content" onSubmit={handleSubmit}>
            <label className="requests">
              <p className="text">Imię</p>
              <input
                type="text"
                name="name"
                placeholder="wpisz swoje imię"
                value={form.name}
                onChange={handleChange}
                className="input-fields input-fields--one"
                required={true}
              />
            </label>
            <label className="requests">
              <p className="text">Email</p>
              <input
                type="email"
                name="email"
                placeholder="wpisz swój email"
                value={form.email}
                onChange={handleChange}
                className="input-fields input-fields--one"
                required={true}
              />
            </label>
            <label className="requests">
              <p className="text">Wiadomość</p>
              <textarea
                name="message"
                placeholder="wpisz wiadomość"
                value={form.message}
                onChange={handleChange}
                className="input-fields input-fields--two"
                required={true}
              />
            </label>
            {!notice ? <SubmitButton /> : ""}
            {notice === "success" ? <p className="positive">WYSŁANO!</p> : ""}
            {notice === "error" ? (
              <button className="negative" onClick={handleSubmit}>
                COŚ POSZŁO NIE TAK... SPRÓBUJ JESZCZE RAZ!
              </button>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default Form;
