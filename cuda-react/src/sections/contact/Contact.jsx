import { useState, useRef } from "react";
import { Section } from "../../components/section/Section";
import "./contact.css";

export default function Contact() {
  const [isClickedName, setIsClickedName] = useState(false);
  const [isClickedEmail, setIsClickedEmail] = useState(false);
  const [isClickedMessage, setIsClickedMessage] = useState(false);

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputMessage = useRef(null);

  const hidePlaceholder = (inputElement, stateObject) => {
    inputElement.current.focus();
    stateObject(true);
  };

  const showPlaceholder = (inputElement, stateObject) => {
    if (inputElement.current.value.length === 0) {
      stateObject(false);
    }
  };

  return (
    <Section
      className='contacts'
      sectionId='contacts'
      title='Get in touch'
      description='1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111'
    >
      <div className='section-form'>
        <form action='#' className='row justify-content-center'>
          <div className='form-user-data row w-100'>
            <div className='col-lg-6 col-md-12 text-center position-relative'>
              <input
                ref={inputName}
                type='text'
                onClick={() => hidePlaceholder(inputName, setIsClickedName)}
                onBlur={() => showPlaceholder(inputName, setIsClickedName)}
              />
              <label
                className={`holder ${isClickedName ? "disabled" : ""}`}
                onClick={() => hidePlaceholder(inputName, setIsClickedName)}
              >
                Your Name<span>*</span>
              </label>
            </div>
            <div className='col-lg-6 col-md-12 text-center position-relative'>
              <input
                ref={inputEmail}
                type='text'
                onClick={() => hidePlaceholder(inputEmail, setIsClickedEmail)}
                onBlur={() => showPlaceholder(inputEmail, setIsClickedEmail)}
              />
              <label
                className={`holder ${isClickedEmail ? "disabled" : ""}`}
                onClick={() => hidePlaceholder(inputEmail, setIsClickedEmail)}
              >
                Your Email<span>*</span>
              </label>
            </div>
          </div>

          <div className='form-user-message w-100 position-relative'>
            <textarea
              ref={inputMessage}
              name='message'
              cols='30'
              rows='10'
              onClick={() => hidePlaceholder(inputMessage, setIsClickedMessage)}
              onBlur={() => showPlaceholder(inputMessage, setIsClickedMessage)}
            ></textarea>
            <label
              className={`holder ${isClickedMessage ? "disabled" : ""}`}
              onClick={() => hidePlaceholder(inputMessage, setIsClickedMessage)}
            >
              Your Message<span>*</span>
            </label>
          </div>

          <a href='https://google.com' className='button form-button'>
            SEND MESSAGE
          </a>
        </form>
      </div>
    </Section>
  );
}
