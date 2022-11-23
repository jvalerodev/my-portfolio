import * as Yup from 'yup';

const contactSchema = Yup.object({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email('Enter a valid email.')
    .required('Email address is required.'),
  subject: Yup.string().required('Subject is required.'),
  msg: Yup.string().required('Message is required.')
});

export default contactSchema;
