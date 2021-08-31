import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string(),
  phone: yup.number().required(),
  address: yup.number().required(),
  zip: yup.number().required(),
  city: yup.email().required(),
  country: yup.email().required(),
  e_money_number: yup.number().required(),
  e_money_pin: yup.number().required(),
});

export default schema;
