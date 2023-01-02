import * as React from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel';
import useLocalStorage from '../hooks/useLocalStorage';
import { useGlobalContext } from '../context/global';




const BookingAvailability = props => {
  const {bookingStart,setBookingStart,bookingEnd,setBookingEnd} = useGlobalContext();


  const [bookingScheduleStart, setBookingScheduleStart] = React.useState('');
  const handleChangeBookingScheduleStart = (event) => {
    setBookingScheduleStart(event.target.value);
    setBookingStart([...bookingStart,event.target.value])
  };

  const [bookingScheduleEnd, setBookingScheduleEnd] = React.useState('');
  const handleChangeBookingScheduleEnd = (event) => {
    setBookingScheduleEnd(event.target.value);
    setBookingEnd([...bookingEnd,event.target.value])
  };

  const array = [];
  const timeArray = ['7:00AM',
    '7:30 AM',
    '8:00 AM',
    '8:30 AM',
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 NN',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM']
  for (let i = 1; i <= 22; i++) {
    // Add each number to the array
    array.push(i);
  }
  let MenuItemsStart = array.map((index) => (
    <MenuItem key={index} value={index}>{timeArray[index]}</MenuItem>))

  const subArr = array.slice(bookingScheduleStart)

  let MenuItemsEnd = subArr.map((index) => (
    <MenuItem key={index} value={index}>{timeArray[index]}</MenuItem>))

  return (
    <Box sx={{ mb: 1, display: 'flex', flexDirection: "row", alignItems: 'center', alignContent: 'stretch' }}>
      <Box sx={{ width: 100 }}>
        <Typography sx={{ color: 'black', ml: 3 }}>{props.day}</Typography>
      </Box>
      <FormControl sx={{ my: 2, ml: 3.5, alignItems: 'center' }}>
        <InputLabel id="demo-simple-select-label">Select time</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth-label"
          value={bookingScheduleStart}
          onChange={handleChangeBookingScheduleStart}
          label="Select time"
          sx={{ width: 150 }}
        // placeholder='Select time'
        >
          {MenuItemsStart}
        </Select>
      </FormControl>
      <Typography sx={{ color: 'black', ml: 3 }}>-</Typography>
      <FormControl sx={{ my: 2, ml: 3.5, alignItems: 'center' }}>
        <InputLabel id="demo-simple-select-label">Select time</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth-label"
          value={bookingScheduleEnd > bookingScheduleStart ? bookingScheduleEnd : null}
          onChange={handleChangeBookingScheduleEnd}
          label="Select time"
          sx={{ width: 150 }}
        >
          {MenuItemsEnd}
        </Select>
      </FormControl>
    </Box>
  );
}

export default BookingAvailability;