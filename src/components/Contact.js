import React  from "react";
import { useForm } from 'react-hook-form';
import emailjs from "emailjs-com";
import { Input } from "@material-tailwind/react";


function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, message, attachment } = data;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('attachment', attachment[0]);

    try {
      await emailjs.sendForm('service_jifj1y1', 'template_2t2v6hd', formData, 'lZ5atB2ijXg4NHxvN');
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} placeholder="Name" />
      {errors.name && <span>Name is required</span>}

      <input {...register('email', { required: true })} placeholder="Email" />
      {errors.email && <span>Email is required</span>}

      <textarea {...register('message', { required: true })} placeholder="Message" />
      {errors.message && <span>Message is required</span>}

      <input type="file" {...register('attachment', { required: true })} />
      {errors.attachment && <span>Attachment is required</span>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact;
