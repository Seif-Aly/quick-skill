import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    option: "",
    text: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    submitted: false,
    errorMessage: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Post form data to Formspree endpoint
    const response = await fetch("https://formspree.io/f/mbjnqnjq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmissionStatus({ submitted: true, errorMessage: "" });
      setFormData({ name: "", email: "", telegram: "", option: "", text: "" }); // Clear form
    } else {
      const errorMessage = await response.text();
      setSubmissionStatus({ submitted: false, errorMessage });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Имя*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Почта*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="telegram">Телеграм</label>
        <input
          type="text"
          id="telegram"
          name="telegram"
          value={formData.telegram}
          onChange={handleChange}
        />

        <label htmlFor="option">Выберите нужный вариант*</label>
        <select
          id="option"
          name="option"
          value={formData.option}
          onChange={handleChange}
          required
        >
          <option value="">--Пожалуйста, выберите подходящий вариант--</option>
          <option value="option1">Студент</option>
          <option value="option2">Создатель курса</option>
        </select>

        <label htmlFor="name">Предложи свой курс</label>
        <input
          type="text"
          id="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          required
          style={{
            minHeight: "100px",
            maxHeight: "200px",
            width: "100%",
            overflowY: "auto",
            resize: "vertical",
          }}
        />
        <div className="text-muted" style={{ fontSize: 14 }}>
          Какой курс вы планируете создать на платформе и какую пользу он
          принесет сообществу студентов ВШЭ?
        </div>

        <button type="submit">Отправить</button>
        {submissionStatus.submitted && (
          <div className="submit-btnn">
            Спасибо! Мы с тобой обязательно свяжемся!
          </div>
        )}
        {submissionStatus.errorMessage && (
          <div>Ошибка: {submissionStatus.errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
