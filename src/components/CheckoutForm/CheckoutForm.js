import { Form, Formik } from "formik";
import { addNewOrder } from "../../utils/firebaseFetching";
import { useCartContext } from "../../context/CartState";
import { serverTimestamp } from "firebase/firestore";
import TextField from "./TextField";
import * as Yup from "yup";
import { useState } from "react";
import ButtonLoader from "../Loader/ButtonLoader";

const CheckoutForm = ({ setId }) => {
  const { items } = useCartContext();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, resetForm) => {
    setLoading(true);
    const order = {
      purcharse_data: {
        firsName: values.firstName,
        lastName: values.lastName,
        email: values.email.toLowerCase(),
        phone: values.phone,
      },
      products: items,
      date: serverTimestamp(),
    };
    const orderId = await addNewOrder(order);
    setId(orderId);
    resetForm({ values: "" });
    setLoading(false);
  };
  const emailRegEx =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    lastName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
      phone: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    email: Yup.string()
      .email("Email is invalid", emailRegEx)
      .required("Email is required"),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email"), null], "Email must match")
      .required("Confirm email is required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          confirmEmail: "",
          phone:"",
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
      >
        {(formik) => (
          <Form className="form">
            <div className="form__group">
              <TextField
                label="First name"
                name="firstName"
                type="text"
                className="form__item"
              />
              <TextField
                label="Last name"
                name="lastName"
                type="text"
                className="form__item"
              />
              <TextField
                label="Phone Number"
                name="phone"
                type="text"
                className="form__item"
              />
            </div>
            <TextField label="Email" name="email" type="text" />
            <TextField label="Confirm Email" name="confirmEmail" type="text" />
            <button type="submit" className="form__submit">
              {loading ? <ButtonLoader /> : "Complete la compra"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CheckoutForm;
