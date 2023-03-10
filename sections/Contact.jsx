"use client";

import styles from "../styles";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import SelectField from '../components/SelectField';

//React
import React, { useRef } from "react";
import useForm from "../hooks/useForm";

import emailjs from "@emailjs/browser";

import TextField from "../components/TextField";

//Iconos
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Contact = () => {
  //Referenciando formulario
  const dataForm = useRef();

  //Inicializando inputs del formu
  const { form, onSubmit, handleFormChange } = useForm({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    service: "",
  });

  const selectOptions = [{ value: 'Desarrollo Web', label: 'Desarrollo Web'}, { value: 'Posicionamiento SEO', label: 'Posicionamiento SEO'}];

  //Acción al enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qqon0i9",
        "template_u7bvmaa",
        dataForm.current,
        "urmYlWrYx4xiuE0Wf"
      )
      .then(
        (result) => {
          alert("¡Tu mensaje fue enviado!");
          window.location.reload(false);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div
      className={`${styles.paddings} w-full flex gap-[5rem] mt-[5rem] mb-0 items-center justify-between`}
      id="contacto"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-16`}
      >
        {/* Sección informativa */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-1 text-white"
        >
          <div className="section__title">
            <section className="flex gap-5 items-center mb-6 z-50">
              <div className="w-[100px] h-[2px] bg-primary-blue"></div>
              <h2 className="text-[1.5rem] font-[400]">CONTACTO</h2>
            </section>
          </div>
          <h3 className="text-[3rem] font-bold mb-5">¿Quieres que hablemos?</h3>
          <h4 className="text-[1.2rem]">
            Llena el formulario y nos pondremos en contacto, o puedes
            contactarnos por los siguientes medios:
          </h4>
          <ul>
            <li className="my-[1rem] flex items-center gap-3 text-[1.2rem]">
              <AiOutlineMail color="#139cb5" size="30px" />{" "}
              androdev.tech@gmail.com
            </li>
            <li className="my-[1rem] flex items-center gap-3 text-[1.2rem]">
              <BsPhoneVibrate color="#139cb5" size="30px" />
              +57 313 361 6796
            </li>
          </ul>
          <h4 className="my-[2rem] text-[1.2rem]">
            Follow Androdev in social media
          </h4>
          <ul className="flex gap-[2rem]">
            <li className="my-[1rem]">
              <a
                className="flex items-center"
                href="https://www.instagram.com/juanelcj/"
              >
                <AiFillLinkedin
                  className="mr-[1rem]"
                  size="2rem"
                  color="#139cb5"
                />
                <span>Linkedin</span>
              </a>
            </li>
            <li className="my-[1rem] flex">
              <a
                className="flex items-center"
                href="https://www.linkedin.com/in/david-romero-58b7621a8/"
              >
                <FiInstagram
                  className="mr-[1rem]"
                  size="2rem"
                  color="#139cb5"
                />
                Instagram
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Sección Formulario */}
        <motion.form
          variants={fadeIn("left", "tween", 0.2, 1)}
          onSubmit={handleSubmit}
          ref={dataForm}
          className="flex flex-col flex-[0.80] border-solid border-[#ababab5b] border-[1px] text-cener py-10 px-[1rem] lg:px-[2rem] bg-[#1f3346a4] rounded-2xl text-white"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Nombre completo */}
            <fieldset className="w-full text-white px-4">
              <label htmlFor="servicio">Nombre Completo <span className="text-red-500">*</span></label>
              <TextField
                className="py-[1rem]"
                fieldClassName={`${styles.formField}`}
                placeholder="Nombre Completo"
                value={form.name}
                handler={handleFormChange}
                name="name"
                type="text"
                typeField="input"
              />
            </fieldset>

            {/* Número de teléfono */}
            <fieldset className="w-full text-white px-4">
              <label htmlFor="servicio">Teléfono Completo <span className="text-red-500">*</span></label>
              <TextField
                className="py-[1rem]"
                fieldClassName={`${styles.formField}`}
                placeholder="Numero celular"
                value={form.phoneNumber}
                handler={handleFormChange}
                name="phoneNumber"
                type="number"
                typeField="input"
              />
            </fieldset>
          </div>

          {/* Email completo */}
          <div className="flex flex-col lg:flex-row my-6">
            <fieldset className="w-full text-white px-4">
              <label htmlFor="servicio">Correo Electrónico <span className="text-red-500">*</span></label>
              <TextField
                className="py-[1rem]"
                fieldClassName={`${styles.formField}`}
                placeholder="Correo electronico"
                value={form.email}
                handler={handleFormChange}
                name="email"
                type="email"
                typeField="input"
              />
            </fieldset>

            {/* Selector de servicios */}
            <fieldset className="w-full text-white px-4 flex flex-col gap-[1.38rem]">
              <label htmlFor="servicio">Selecciona un Servicio <span className="text-red-500">*</span></label>
              <SelectField
                placeholder='¿Qué servicio Necesitas?'
                value={form.service}
                handler={handleFormChange}
                name='service'
                options={selectOptions}
                backgroundColor='transparent'
                colorPlaceholder='#9ca3af'
                borderBottom='1px solid white'
              />
            </fieldset>
          </div>

          {/* Campo de texto de resumen */}
          <fieldset className="w-full text-white px-4">
          <label htmlFor="servicio">Cuéntanos de tu proyecto...</label>
            <TextField
              className="flexborder-solid border-white text-cener py-[1rem]"
              fieldClassName="p-5 my-[0.5] w-full text-[1rem] bg-[transparent] border-[1px] border-white border-solid focus:outline-primary-blue"
              value={form.message}
              placeholder="Hablanos de tu proyecto..."
              handler={handleFormChange}
              name="message"
              type="textarea"
              typeField="textarea"
              cols="30"
              rows="4"
            />
          </fieldset>

          <button className={`${styles.buttonCTA} text-white`} type="submit">
            Enviar
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
