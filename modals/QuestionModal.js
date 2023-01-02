import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import question_logo_source from "../public/question.svg";
import { useState } from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from '../context/global';
import CheckedModal from './CheckedModal';
import success_logo_source from "../public/success-svgrepo-com.svg";

const QuestionModal = props => {
  const { parkingStatus, setParkingStatus, calendarRestriction, parkingAreaName } = useGlobalContext();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  // var namevar = "username";
  // var floor = "floor";
  // var area = "parking area";

  // const [contents, setContents] = useState([
  //     {title:'Switch Parking service to inactive?', body:'Making this service inactive will automatically disable all parking areas', id: 1 },
  //     {title:'Save changes?', body:'Are you sure you want to save changes made this ' +{namevar} , id: 2 },
  //     {title:'Delete '+ {namevar}, body:'Are you sure you want to remove ' + {namevar} + ' from the [parking area/area floor/slot] list?', id: 3 },
  //     {title:'Switch' +{floor} + 'to inactive?', body:'Making this floor inactive will automatically disable all slots', id: 4 },
  //     {title:'Switch '+{area}+' to inactive?', body:"Making this parking area inactive will automatically disable all floors and their slots", id: 5 }
  // ]);

  const [open, setOpen] = React.useState(true);
  const [openCheck, setOpenCheck] = React.useState(true)

  function openDialog() {
    setOpen(props.status)
  }
  useEffect(() => {
    const getData = () => {
      openDialog();
    };
    getData();
  }, [props.status]);


  const handleClose = () => {
    setOpen(false);
    setParkingStatus(false)
  };

  const proceedStatus = () => {
    setOpen(false);
    // setParkingStatus(false)
    setOpenCheck(true)
  }
  async function patchParkingStatus(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  const week = [1, 2, 3, 4, 5]
  const sendApi = () => {
    setOpenCheck(false)
    week.map((week, weekIndex) => (calendarRestriction.map((day, dayIndex) => (parkingAreaName.map((parkingArea, index) => (
      patchParkingStatus('https://zh66xn42vk.execute-api.ap-southeast-1.amazonaws.com/stage/parkingarea',
        {
          "parkingArea": parkingArea,
          "calendarRestriction": day + week,
          "updateKey": "parkingStatus",
          "updateValue": !parkingStatus
        })
        .then((data) => {
          console.log(data); // JSON data parsed by `data.json()` call
        })))))))

  }

  // console.log(openChecked)





  return (
    <div>

      <Container component="main" maxWidth="lg" sx={{ mb: 2, ml: 11 }}>


        <Dialog
          // fullScreen
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          sx={{ backgroundColor: '#22222279', textAlign: 'center' }}
        >
          <Box sx={{ justifyContent: 'center', mt: 5 }}>
            <Image src={question_logo_source} alt="question_logo" width={135} height={135} />
          </Box>
          <DialogTitle id="responsive-dialog-title">

            <div >
              <b><p>{props.title}</p></b>
            </div>

          </DialogTitle>
          <DialogContent sx={{ pl: 5, pr: 5 }}>
            <DialogContentText sx={{ fontSize: 18 }}>

              <div >
                <p>{props.body}</p>
              </div>

            </DialogContentText>
          </DialogContent>

          <div sx={{ display: "flex", direction: "row" }}>
            <Button autoFocus variant='outlined' onClick={handleClose} sx={{ backgroundColor: '#FFF', mb: 5, width: '35%' }}>
              Cancel, go back
            </Button>
            <Button autoFocus variant='contained' onClick={proceedStatus} sx={{ backgroundColor: '#5BADFA', mb: 5, ml: 2, width: '35%' }}>
              Proceed
            </Button>
          </div>

        </Dialog>

      </Container>

      {proceedStatus ? (<Dialog
        // fullScreen
        fullScreen={fullScreen}
        open={openCheck}
        onClose={sendApi}
        aria-labelledby="responsive-dialog-title"
        sx={{ backgroundColor: '#22222279', textAlign: 'center' }}
      >
        <Box sx={{ justifyContent: 'center', mt: 5 }}>
          <Image src={success_logo_source} alt="success_logo" width={135} height={135} />
        </Box>
        <DialogTitle id="responsive-dialog-title">

          <div>
            <p>{props.successTitle}</p>
          </div>

        </DialogTitle>
        <DialogContent sx={{ pl: 5, pr: 5, width: 500 }}>
          <DialogContentText>

            <div>
              <p>{props.successBody}</p>
            </div>

          </DialogContentText>
        </DialogContent>
        <Button autoFocus variant='contained' onClick={sendApi} sx={{ backgroundColor: '#5BADFA', maxWidth: 200, mb: 5, ml: '33%' }}>
          Okay, got it!
        </Button>
      </Dialog>) : null}

    </div>
  );
}

export default QuestionModal;