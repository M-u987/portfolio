import emailjs from "@emailjs/browser";

export const sendEmail = (formData) => {
  return emailjs.send(
    "service_gcifqfg",
    "template_0yxr28m",
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    "9satV8MtC6iQodtsZ"
  );
};
