import Header from "../../components/Header";
import { useState } from "react";
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Label } from "@mui/icons-material";

// const NuevoServicio = () => {
//     return (
//     <Box m="20px">
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//             <Header title="Servicios" subtitle="Nuevo Servicio"></Header>
//         </Box>
//     </Box>
//     );
// };
// export default NuevoServicio;
const NuevoServicio = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [age, setAge] = useState('');

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  return (
    <Box m="20px">
      <Header title="Crear Servicio" subtitle="Formulario para dar de alta servicio técnico" />
      <hr/>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
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
              width="50%"
              gap="30px"
              gridTemplateColumns="repeat(3, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                select
                label="Cliente"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.selectCliente}
                name="selectcliente"
                error={!!touched.selectcliente && !!errors.selectcliente}
                helperText={touched.selectcliente && errors.selectcliente}
                sx={{ gridColumn: "span 1"}}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
          
                </TextField>

              <Box 
                sx={{ 
                  gridColumn: "span 2", gridRow: "span 1",
                  border: "1px solid white", borderRadius:" 5px"
                  }}>
              </Box>

              <TextField
                multiline
                maxRows={4}
                variant="filled"
                type="text"
                label="Causa del Servicio"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.causa_servicio}
                name="causa_servicio"
                error={!!touched.causa_servicio && !!errors.causa_servicio}
                helperText={touched.causa_servicio && errors.causa_servicio}
                sx={{ gridColumn: "span 2", gridRow: "0"}}
              />
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fecha y Horario"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              /> */}
              <Box sx={{ gridColumn: "span 1" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker label="Fecha y Hora del Servicio"/>
                </LocalizationProvider>
              </Box>
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              /> */}
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              /> */}
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              /> */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Telefono Adicional"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="teladicional"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="start" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Crear Servicio
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  selectcliente: yup.string().required("requerido"),
  causa_servicio: yup.string().required("requerido"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Telefono no valido")
    .required("required"),
    teladicional: yup.string().required("requerido"),
});
const initialValues = {
  causa_servicio: "",
  teladicional: "",
};

export default NuevoServicio;