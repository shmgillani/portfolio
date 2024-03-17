import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(25, "First Name cannot be more than 25 characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .max(25, "Last Name cannot be more than 25 characters")
    .required("Last Name is required"),
  inquiry: Yup.string()
    .max(25, "Inquiry cannot be more than 25 characters")
    .required("Inquiry is required"),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .max(250, "Message cannot be more than 250 characters")
    .required("Message is required"),
});
