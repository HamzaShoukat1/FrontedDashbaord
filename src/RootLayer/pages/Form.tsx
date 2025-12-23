import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/shared/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp = /^[0-9]{10,15}$/;

const userSchema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  address1: yup.string().required("Required"),
  address2: yup.string().required("Required"),
});

export default function Form() {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                label="First Name"
                name="firstName"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                label="Email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                label="Contact Number"
                name="contact"
                value={values.contact}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                label="Address 1"
                name="address1"
                value={values.address1}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                label="Address 2"
                name="address2"
                value={values.address2}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
