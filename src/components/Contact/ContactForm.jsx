import React from "react";
import Input from "../common/Input";
import { useFormik } from "formik";
import { contactSchema } from "../../utils/validationSchema";
import InputTextArea from "../common/InputTextArea";
import PrimaryButton from "../common/PrimaryButton";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    inquiry: "",
    email: "",
    message: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,

    onSubmit: async (values) => {
      console.log("create values", values);
      const serviceId = "service_s8s9yx5";
      const templateId = "template_0g7a7a9";
      const publicKey = "MUifSMFgHlfDEU31D";

      const templateParams = {
        from_name: values?.firstName + values?.lastName,
        from_email: values?.email,
        to_name: "SHM GILLANI",
        message: values?.message,
      };

      emailjs
        ?.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('response', response);
        })
        .catch((err) => console.log("err", err));
    },
  });

  const { firstName, lastName, inquiry, email, message } = formik.values;

  const {
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    handleSubmit,
    setValues,
  } = formik;
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
        <Input
          label="First Name"
          labelClass="font-poppins font-[400] text-[14px] text-white mb-2"
          placeholder="Shm"
          inputDivClass="w-full lg:w-[50%]"
          name="firstName"
          value={firstName}
          inputClass="h-[45px] font-poppins font-[400] text-[14px] text-white border border-solid border-[#4bffa5] rounded-[5px] bg-slate-900 pl-[2%] w-full outline-none"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.firstName}
          touched={touched.firstName}
        />
        <Input
          label="Last Name"
          labelClass="font-poppins font-[400] text-[14px] text-white mb-2"
          placeholder="Gillani"
          inputDivClass="w-full lg:w-[50%]"
          name="lastName"
          value={lastName}
          inputClass="h-[45px] font-poppins font-[400] text-[14px] text-white border border-solid border-[#4bffa5] rounded-[5px] bg-slate-900 pl-[2%] w-full outline-none"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.lastName}
          touched={touched.lastName}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-2 mt-2 lg:mt-5">
        <Input
          label="Inquiry"
          labelClass="font-poppins font-[400] text-[14px] text-white mb-2"
          placeholder="Frontend/Backend/Devops"
          inputDivClass="w-full lg:w-[50%]"
          name="inquiry"
          value={inquiry}
          inputClass="h-[45px] font-poppins font-[400] text-[14px] text-white border border-solid border-[#4bffa5] rounded-[5px] bg-slate-900 pl-[2%] w-full outline-none"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.inquiry}
          touched={touched.inquiry}
        />
        <Input
          label="Email"
          labelClass="font-poppins font-[400] text-[14px] text-white mb-2"
          placeholder="example@gmail.com"
          inputDivClass="w-full lg:w-[50%]"
          name="email"
          value={email}
          inputClass="h-[45px] font-poppins font-[400] text-[14px] text-white border border-solid border-[#4bffa5] rounded-[5px] bg-slate-900 pl-[2%] w-full outline-none"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.email}
          touched={touched.email}
        />
      </div>
      <InputTextArea
        label="Message"
        labelClassName="font-poppins font-[400] text-[14px] text-white mb-2"
        placeholder="Hello..."
        divClassName="w-full mt-5"
        name="message"
        value={message}
        textareaClassName="h-[150px] font-poppins font-[400] text-[14px] text-white border border-solid border-[#4bffa5] rounded-[5px] bg-slate-900 px-[2%] pt-2 w-full outline-none resize-none"
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.message}
        touched={touched.message}
      />
      <div className="text-end mt-5">
        <PrimaryButton
          className={
            "w-[30%] font-montserrat text-[14px] text-center font-[500] h-[45px] rounded-[5px]"
          }
          label="Submit"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ContactForm;
