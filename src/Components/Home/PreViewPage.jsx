import React from "react";
import "../Style/PreViewPage.css";

import ServicesSection from "./section";
import ConnectionDiagram from "./ConnectionDiagram";
import PrevNavBar from "../Navbars/PrevNavBar";
import ContactForm from "./form";

const PreViewPage = () => {
  return (
    <>
      <PrevNavBar />
      <div className="langfuse-container">
        <header className="langfuse-header">
          <h1>Улучши опыт обучения в университете</h1>
          <p>
            Станьте частью уникальных сообществ университета и получите доступ к
            интерактивным курсам для повышения навыков и учебных результатов —
            абсолютно бесплатно!
          </p>
        </header>
        <section className="langfuse-tools">
          <h2>Всё, что нужно для эффективного обучения</h2>
          <p className="langfuse-subheader">
            На платформа каждый курс имеет сообщество, рейтинговую таблицу,
            магазин, лекции и семинары.
          </p>
          <ServicesSection />
        </section>
        <section className="langfuse-tools">
          <h2>На платформе внедрены элементы геймификации</h2>
          <p className="langfuse-subheader">
            Благодаря этим элементам пользователям удаётся значительно улучшить
            результаты своего обучения.
          </p>
          <ConnectionDiagram />
        </section>
        <section className="langfuse-tools" id="contact-form">
          <h2>Пожалуйста, присоединяйтесь к нашему списку</h2>
          <h2>ожидания, заполнив форму ниже</h2>
          {/* <div className="form-image-container"> */}
          {/* <div className="image-placeholder">
              <img src="/formm.png" alt="" />
            </div> */}
          <ContactForm />
          {/* </div> */}
        </section>
      </div>
    </>
  );
};

export default PreViewPage;
