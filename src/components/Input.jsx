import React, {useContext} from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useFormik } from "formik";
//import { Neon } from "./Neon";
//import { Vyveska } from "./Viveska";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormLabel,
  RadioGroup,
  Radio,
  Autocomplete,
  TextField,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {useState} from "react";
import 'dayjs/locale/ru';
import dayjs from "dayjs";
import {AppContext} from "../App";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
});

function Input() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
    const [value, setValue] = useState(null);

    const { inputFields, setInputFields, image1, setImage1 } = useContext(AppContext);

    //добавление в контекст
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setInputFields((prevState) => ({
            ...prevState,
            [id]: value
        }));
        debugger
    };
//добавление даты в контекст
    const handleDateChange = (date) => {
        alert(date.$d);
        setInputFields(prevState => ({
            ...prevState,
            dateOne: date.$d
        }));
        debugger;
    };

    //состояние монтажа
    const [mountOrNot, setMountOrNot] = useState('');
    const handleMountOrNotChange = (mnt) => {
        setMountOrNot(mnt.target.value);
    };

    //добавление картинки
    //const [image1, setImage1] = useState();
    function addImage1(e) {
        setImage1(URL.createObjectURL(e.target.files[0]));
    }

    const [image2, setImage2] = useState();
    function addImage2(e) {
        setImage2(URL.createObjectURL(e.target.files[0]));
    }

  return (
    //<form onSubmit={handleInputChange} width='80%'>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <br />
        <FormControl fullWidth>
            {/* тут збс сделал*/}
<TextField id="number" label="Номер техноложки" variant="outlined" value={inputFields.number} onChange={handleInputChange}/><br/>
<TextField id="name" label="Название" variant="outlined" value={inputFields.name} onChange={handleInputChange}/><br/>
<TextField id="costumer" label="Заказчик" variant="outlined" value={inputFields.costumer} onChange={handleInputChange}/><br/>

          <center>
              <form onChange={handleInputChange}>
              <RadioGroup
              aria-labelledby="type-label"
              row
              value={mountOrNot}
              onChange={handleMountOrNotChange}>
            <FormControlLabel
                value="mount"
                control={<Radio id='mountOrNot'/>}
                checked={inputFields.mountOrNot === "mount"}
                label="Монтаж"/>
            <FormControlLabel
                value="send"
                control={<Radio id='mountOrNot'/>}
                checked={inputFields.mountOrNot === "send"}
                label="Отправка"/>
            <FormControlLabel
                value="self"
                control={<Radio id='mountOrNot'/>}
                checked={inputFields.mountOrNot === "self"}
                label="Самовывоз"
            />
          </RadioGroup>
              </form>
          </center>

          {inputFields.mountOrNot === "mount" ? (
              <TextField id="address" label="Монтаж по адресу" variant="outlined" value={inputFields.address} onChange={handleInputChange}/>
          ) : inputFields.mountOrNot === "send" ? (
              <TextField id="address" label="Отправить по адресу" variant="outlined" value={inputFields.address} onChange={handleInputChange}/>
          ) : inputFields.mountOrNot === "self" ? (
              "Заказчик заберет сам"
          ) : (
              "Выберите монтаж / отправка / самовывоз"
          )}
            <br/>
          <TextField id="manager" label="Менеджер" variant="outlined" value={inputFields.manager} onChange={handleInputChange}/><br/>

            {/*добавление даты*/}
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
                <DatePicker
                    label="Дата составления заявки"
                    id="dateOne"
                    value={dayjs(inputFields.dateOne)}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} id="dateOne-input" />}
                />
            </LocalizationProvider><br/>

            {/*ещё какие то параметры*/}
            <TextField id="work" label="Фронт работ" variant="outlined" onChange={formik.handleChange}/><br/>
            <TextField id="folder" label="Путь к папке" variant="outlined" onChange={formik.handleChange} width='80%'/><br/>

            {/*кнопка добавления изображения 1*/}
            <label htmlFor="file-upload">
                <Button variant="contained" component="span">
                    Загрузить файл с габаритами
                </Button>
            </label>
            <input
                id="file-upload"
                type="file"
                onChange={addImage1}
                style={{ display: "none" }}
            />
        </FormControl>
        </ThemeProvider>
    //</form>
  );
}

export default Input;
