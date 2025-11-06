import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("Empty");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);

    try {
      console.log("from submitted:", formData);
      await emailjs.send(
        "service_8uopav4",
        "template_fifwamv",
        {
          from_name: formData.name,
          to_name: "Kasam",
          from_email: formData.email,
          to_email: "ka276310@gmail.com",
          message: formData.message,
        },
        "hjqc8mAERS1jk5MY3"
      );
      setisLoading(false);
      console.log("sucess");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      isLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      isLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };

  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div
        className="flex flex-col items-center 
      justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary"
      >
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading"> Lets Talk </h2>
          <p className="font-normal text-neutral-400">
            Whether You're Looking to build a new Website, or a Existing
            Platform, or to bring a project to life, <br /> I'm here to help.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Violet"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="Violet@gmail.com"
              autoComplete="name"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="message"
              rows={4}
              className="field-input field-input-focus"
              placeholder="Share your thoughts"
              autoComplete="name"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-center rounded-md cursor-pointer bg-radial from-lavender hover-animation"
          >
            {!isLoading ? "send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
