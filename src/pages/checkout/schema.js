import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Wrong format").required("Required"),
  phone: yup.string().required("Required"),
  address: yup.string().required("Required"),
  zip: yup.string().required("Required"),
  city: yup.string().required("Required"),
  country: yup.string().required("Required"),
  // e_money_number: yup.string().required("Required"),
  // e_money_pin: yup.string().required("Required"),
});

export default schema;
