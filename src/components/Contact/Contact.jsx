import React from "react";
import "./contact.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const schema = yup
    .object({
      name: yup.string().max(50).required("Merci de saisir votre nom"),
      email: yup
        .string()
        .email("Merci de saisir une adresse mail valide")
        .max(255)
        .required("Merci de saisir une adresse mail valide"),
      phone: yup
        .number()
        .typeError("Merci de saisir un numéro de téléphone valide")
        .required("Merci de saisir un numéro de téléphone valide"),
      message: yup.string().required("Merci de saisir votre message"),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, r) => {
    alert("Merci pour votre message, il sera traité au plus vite");
    const templateId = "template_euwt61g";
    const serviceId = "service_22tc9ge";
    sendFeedback(serviceId, templateId, {
      name: data.name,
      phone: data.phone,
      email: data.email,
      subject: data.subject,
      message: data.message,
      reply_to: r.target.reset(),
    });
  };

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, "YhMcAjlGjofcqcTTs")
      .then((res) => {
        console.log("succes");
      })
      .catch((err) => console.error("Il y a une erreur"));
  };

  return (
    <div className="container-form bt-8">
      <h1 className="titre-form p-2 ">
        Contact<i class="fa-regular fa-paper-plane ms-3"></i>
      </h1>

      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name"> Votre nom et prénom :</label>
              <br />
              <input
                className=""
                type="text"
                id="name"
                name="name"
                placeholder="Nom et Prenom "
                {...register("name")}
              />

              {errors.name && <p id="c-yup">{errors.name.message}</p>}

              <div className="form-group">
                <label htmlFor="email" className="label-contact  ">
                  Votre adresse mail :
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="exemple@gmail.com"
                  {...register("email")}
                />
                {errors.email && <p id="c-yup">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="label-contact   ">
                  Votre N° de Téléphone :
                </label>
                <br />
                <input
                  className="form-group"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="+12345678"
                  {...register("phone")}
                />
                {errors.phone && <p id="c-yup">{errors.phone.message}</p>}
              </div>
              <div>
                <label htmlFor="Sujet"></label>
                <br />
                {/* <select
            className="select-contact center m-auto justify-center bg-cyan-500 outline center  outline-1 outline-cyan-500 w-full md:w-1/4 gray-800 p-2 rounded"
            name="Subject"
            {...register('subject')}
          >
            <option defaultValue className='outline center     bg-cyan-500  font-bold outline-1 outline-cyan-500 w-full md:w-1/4  p-2 rounded center m-auto'>Sujet</option>
            <option value="devis" className='outline  bg-cyan-500 hover:cyan-500 hover:bg-white center font-bold outline-1 outline-cyan-500 w-full md:w-1/4  p-2 rounded center m-auto'>Devis</option>
            <option value="questions" className='outline center  bg-cyan-500 font-bold outline-1 outline-cyan-500 w-full md:w-1/4  p-2 rounded m-auto'>Questions</option>
            <option value="Autre" className='outline center  bg-cyan-500  font-bold outline-1 outline-cyan-500 w-full md:w-1/4  p-2 rounded center m-auto center m-auto'>Autre</option>
          </select> */}
              </div>
              <div className="form-group">
                <label htmlFor="message"> Message :</label>
                <br />
                <textarea
                  className="message-contact  "
                  placeholder="Merci de renseigner vos questions ou commentaires"
                  id="message"
                  cols="50"
                  rows="10"
                  name="message"
                  {...register("message")}
                ></textarea>
                {errors.message && <p id="c-yup">{errors.message.message}</p>}
              </div>
              {/* <label htmlFor="checkbox" className="label-contact">
            <input type="checkbox" /> En cochant cette case, j'accepte de
            recevoir des informations sur les différentes offres disponibles.
          </label> */}
              <div id="contact"></div>

              <div className="form-group">
                <button className="" type="Submit" value="Envoyer">
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    
    </div>
  );
};

export default ContactForm;
