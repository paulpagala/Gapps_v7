import * as React from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Paper from '@mui/material/Paper';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
//
import Editor from "../components/Editor";
import useLocalStorage from '../hooks/useLocalStorage';
import { useGlobalContext } from '../context/global';
// import RichTextEditor from "react-rte";
import MUIRichTextEditor from "mui-rte";
// import { convertToRaw } from 'draft-js'
import { createTheme, ThemeProvider } from "@mui/material/styles";





export default function AddressForm() {
  const { setPaidAmount, setGcashNumber, setPaymentRestriction, setCancellationRestriction, setEarliestDateRestriction, setRTE } = useGlobalContext()

  // amount to be paid
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const handleChange = event => {
    setValue(event.target.value);
    setPaidAmount(event.target.value);
    if (!Number.isInteger(Number(event.target.value))) {
      setError(true);
    } else {
      setError(false);
    }
  };

  //phone number
  const phoneRegex = /^(09|\+639)\d{9}$/
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = React.useState(false);

  const handleChangeNumber = (event) => {
    setPhoneNumber(event.target.value);
    setGcashNumber(event.target.value)
    if (!phoneRegex.test(event.target.value)) {
      setErrorPhoneNumber(true);
    } else {
      setErrorPhoneNumber(false);
    }
  };



  const [costOfServiceBooking, setcostOfServiceBooking] = React.useState('');

  const handleChangeCostOfServiceBooking = (event) => {
    setcostOfServiceBooking(event.target.value);
    setPaymentRestriction(event.target.value)
  };

  const [cancelDeadline, setCancelDeadline] = React.useState('');
  const [errorCancellationDeadline, setErrorCancellationDeadline] = React.useState('');

  const handleChangeCancelDeadline = (event) => {
    setCancelDeadline(event.target.value);
    setCancellationRestriction(event.target.value);
    if (event.target.value) {
      setErrorCancellationDeadline('')
    }
    else {
      setErrorCancellationDeadline('solid red 5px')
    }
  };

  const [earliestBook, setEarliestBook] = React.useState('');
  const [errorEarliestDate, setErrorEarliestDate] = React.useState('');


  const handleChangeEarliestBook = (event) => {
    setEarliestBook(event.target.value);
    setEarliestDateRestriction(event.target.value)
    if (event.target.value) {
      setErrorEarliestDate('')
    }
    else {
      setErrorEarliestDate('solid red 5px')
    }
    // } else {
    //   setErrorEarliestDate(false);
    // }
  };

  // const [rteValue, setRteValue] = React.useState();
  // const [editorValue, setEditorValue] = React.useState(
  //   RichTextEditor.createEmptyValue()
  // );

  // const onChange = (editorValue) => {
  //   setEditorValue(editorValue);
  //   setRteValue(editorValue.toString("markdown"));
  // };
  // console.log(rteValue);
  // const toolbarConfig = {
  //   // Optionally specify the groups to display (displayed in the order listed).
  //   display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  //   INLINE_STYLE_BUTTONS: [
  //     { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
  //     { label: 'Italic', style: 'ITALIC' },
  //     { label: 'Underline', style: 'UNDERLINE' }
  //   ],
  //   BLOCK_TYPE_DROPDOWN: [
  //     { label: 'Normal', style: 'unstyled' },
  //     { label: 'Heading Large', style: 'header-one' },
  //     { label: 'Heading Medium', style: 'header-two' },
  //     { label: 'Heading Small', style: 'header-three' }
  //   ],
  //   BLOCK_TYPE_BUTTONS: [
  //     { label: 'UL', style: 'unordered-list-item' },
  //     { label: 'OL', style: 'ordered-list-item' }
  //   ]
  // }


  // const style = {
  //   width: '600px',
  //   height: '400px',
  //   border: '1px solid #ccc'
  // };
  // const [style, setStyle] = React.useState({ width: '800px', height: '600px' });




  // console.log(earliestBook)
  const save = (data) => {
    console.log(data);
  };

  const [valueRTE, setValueRTE] = React.useState("");

const handleChangeRTE = (event) => {
  const plainText = event.getCurrentContent().getPlainText() // for plain text
  // const rteContent = convertToRaw(event.getCurrentContent()) // for rte content with text formating
  // rteContent && setValueRTE(JSON.stringify(rteContent))
  setValueRTE(plainText);
  setRTE(plainText)
};
console.log(valueRTE);

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    }
  }
});

Object.assign(myTheme, {
  overrides: {
    MUIRichTextEditor: {
      root: {
        backgroundColor: "white"
      },
      toolbar: {
        border: "1px solid gray",
        backgroundColor: "darkgray",
        borderTopLeftRadius: "18px",
        borderTopRightRadius: "18px",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px"
      },
      container: {
        display: "flex",
        flexDirection: "column"
      },
      editor: {
        backgroundColor: "white",
        padding: "20px",
        height: "200px",
        maxHeight: "200px",
        overflow: "auto",
        borderRight: "1px solid gray",
        borderBottom: "1px solid gray",
        borderLeft: "1px solid gray",
        borderBottomLeftRadius: "18px",
        borderBottomRightRadius: "18px"
      },
      placeHolder: {
        backgroundColor: "white",
        paddingLeft: 20,
        width: "inherit",
        borderRight: "1px solid gray",
        borderTop: "1px solid gray",
        borderLeft: "1px solid gray",
        marginTop: -3
      },
      anchorLink: {
        color: "#333333",
        textDecoration: "underline"
      }
    }
  }
});


  return (

    <React.Fragment>

      <Paper variant="outlined" sx={{ my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 } }}>
        <Box>
          <Typography sx={{ ml: 3, fontWeight: 'bold' }}>Rules & guidelines</Typography>
          <Typography sx={{ ml: 3, mt: 2 }}>Cost of service booking</Typography>
        </Box>
        <FormControl sx={{ ml: 3, display: 'block' }}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={costOfServiceBooking}
            onChange={handleChangeCostOfServiceBooking}
          >
            <FormControlLabel value="Free of charge" control={<Radio />} label="Free of charge" />
            <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
          </RadioGroup>
        </FormControl>

        {costOfServiceBooking === 'Paid' ?
          (<Paper variant="outlined" sx={{ mr: 10, ml: 10, my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }, backgroundColor: '#FAFAFA' }}>
            <Box>
              <Typography component="b1" variant="b1" sx={{ color: 'black' }} gutterBottom>
                Booking Price
              </Typography>
              <Typography component="b1" variant="b1" sx={{ color: 'black', ml: 21 }} gutterBottom>
                Receiving GCash number wallet
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <FormControl>

                <TextField
                  variant="outlined"
                  value={value}
                  onChange={handleChange}
                  error={error}
                  helperText={error ? 'Please enter a valid amount' : ''}
                  placeholder="0.00"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">PHP</InputAdornment>, min: 0
                  }}

                />
              </FormControl>
              <FormControl sx={{ ml: 6, width: 400 }} >
                <TextField
                  value={phoneNumber}
                  variant="outlined"
                  onChange={handleChangeNumber}
                  error={errorPhoneNumber}
                  helperText={errorPhoneNumber ? 'Please enter a valid phone number' : ''}
                  placeholder="Enter GCash number"
                  InputProps={{ min: 0 }}
                />
              </FormControl>
            </Box>
          </Paper>)
          : null}


        <Box>
          <Box>
            <Typography component="b1" variant="b1" sx={{ color: 'black', ml: 3 }} gutterBottom>
              Earliest date employees can book
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <TextField
              id="outlined-number"
              // label="Number of Slots"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={earliestBook}
              onChange={handleChangeEarliestBook}
              sx={{ width: '86px', ml: 3, border: errorEarliestDate, borderRadius: 2 }}
              inputProps={{ min: 0, }}
              placeholder="0"
            />
            <Typography component="subtitle1" variant="subtitle1" sx={{ color: 'black', ml: 3 }}>days before the booking</Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Box>
            <Typography component="b1" variant="b1" sx={{ color: 'black', ml: 3 }} gutterBottom>
              Cancellation deadline
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <TextField
              id="outlined-number"
              // label="Number of Slots"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={cancelDeadline}
              onChange={handleChangeCancelDeadline}
              sx={{ width: '86px', ml: 3, border: errorCancellationDeadline, borderRadius: 2 }}
              inputProps={{ min: 0 }}
              placeholder="0"
            />
            <Typography component="subtitle1" variant="subtitle1" sx={{ color: 'black', ml: 3 }}>minutes before the booking</Typography>
          </Box>
          <Typography component="subtitle1" variant="subtitle1" sx={{ color: '#6F8191', display: 'block', ml: 3 }} gutterBottom>
            Employees can cancel <strong>{Math.floor((cancelDeadline) / 60)} hour and {(cancelDeadline) % 60} minutes </strong>  before the booking
          </Typography>
        </Box>
      </Paper>

      <Paper variant="outlined" sx={{ my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 } }}>
        <Box sx={{ ml: 3 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Policies</Typography>
          <Typography variant="body1" color="#6F8191" sx={{ mt: 1 }}>
            Enter guidelines, rules, regulations, or directions for your service
          </Typography>
          <Box sx={{ width: '778px', height: '587px', mt: 2 }}>
            {/* <Editor /> */}
            {/* <RichTextEditor
              value={editorValue}
              onChange={onChange}
              toolbarConfig={toolbarConfig}
              className="editor"
              placeholder="Enter your text here..." /> */}
               <ThemeProvider theme={myTheme}>
              <MUIRichTextEditor
      label="Type something here..."
      onSave={save}
      inlineToolbar={true}
      onChange={handleChangeRTE}
    />
    </ThemeProvider>
          </Box>

        </Box>

      </Paper>

    </React.Fragment>

  );
}