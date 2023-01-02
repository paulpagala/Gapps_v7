import * as React from 'react';
import Review from './Review';
import Container from '@mui/material/Container';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link'
import { useGlobalContext } from '../context/global';
import  Button from '@mui/material/Button';


export default function EditReview (){
    const { paidAmount, gcashNumber, paymentRestriction, cancellationRestriction, earliestDateRestriction, RTE,calendarRestriction, parkingAreaName } = useGlobalContext()
    const week = [1, 2, 3, 4, 5]
    async function patchServiceSetting(url = '', data = {}) {
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

    function saveUpdate() {

        week.map((week, weekIndex) => (calendarRestriction.map((day, dayIndex) => (parkingAreaName.map((parkingArea, index) => (
            patchServiceSetting('https://zh66xn42vk.execute-api.ap-southeast-1.amazonaws.com/stage/parkingarea',
                {
                    "parkingArea": parkingArea,
                    "calendarRestriction": day + week,
                    "updateKey": "paymentAmount",
                    "updateValue": paidAmount
                })
                .then((data) => {
                    console.log(data); // JSON data parsed by `data.json()` call
                }),
            patchServiceSetting('https://zh66xn42vk.execute-api.ap-southeast-1.amazonaws.com/stage/parkingarea',
                {
                    "parkingArea": parkingArea,
                    "calendarRestriction": day + week,
                    "updateKey": "paymentRestriction",
                    "updateValue": paymentRestriction
                })
                .then((data) => {
                    console.log(data); // JSON data parsed by `data.json()` call
                }),
            patchServiceSetting('https://zh66xn42vk.execute-api.ap-southeast-1.amazonaws.com/stage/parkingarea',
                {
                    "parkingArea": parkingArea,
                    "calendarRestriction": day + week,
                    "updateKey": "gcashNumber",
                    "updateValue": gcashNumber
                })
                .then((data) => {
                    console.log(data); // JSON data parsed by `data.json()` call
                }),
            patchServiceSetting('https://zh66xn42vk.execute-api.ap-southeast-1.amazonaws.com/stage/parkingarea',
                {
                    "parkingArea": parkingArea,
                    "calendarRestriction": day + week,
                    "updateKey": "cancellationRestriction",
                    "updateValue": cancellationRestriction
                })
                .then((data) => {
                    console.log(data); // JSON data parsed by `data.json()` call
                }),
            patchServiceSetting('https://zh66xn42vk.execute-api.ap-southeast-1.amazonaws.com/stage/parkingarea',
                {
                    "parkingArea": parkingArea,
                    "calendarRestriction": day + week,
                    "updateKey": "earliestDateRestriction",
                    "updateValue": earliestDateRestriction
                })
                .then((data) => {
                    console.log(data); // JSON data parsed by `data.json()` call
                }),
                patchServiceSetting('https://zh66xn42vk.execute-api.ap-southeast-1.amazonaws.com/stage/parkingarea',
                {
                    "parkingArea": parkingArea,
                    "calendarRestriction": day + week,
                    "updateKey": " RTE",
                    "updateValue":  RTE
                })
                .then((data) => {
                    console.log(data); // JSON data parsed by `data.json()` call
                })
        ))))))
    }


    return (
    //  <React.Fragment>
    <Container component="main" maxWidth="lg" sx={{mb: 2, ml:11,mt:'10%'}}>
        <Breadcrumbs separator='>' aria-label="breadcrumb">
                <Link href='/parkingDashboard' style={{ textDecoration: 'none', color: '#6F8191', fontSize: 19 }}>
                    Service setting
                </Link>
                <Typography color="text.primary" sx={{ fontSize: 19, fontWeight:'bold'}}> Edit rules & guidelines</Typography>
            </Breadcrumbs>
        <Typography  sx={{mt:'1%',fontWeight:'1000',color:'black',fontSize:'43px'}}>Edit rules & guidelines</Typography>
        <Typography sx={{mt:'1%',color:'black',fontSize:'21px'}}>Fill out the fields below to edit rules & guidelines</Typography>
        <Review/>
        <Button variant="contained" onClick={saveUpdate} sx={{ ml: '84%', width: 180, height: 50, background: '#5BADFA' }}>Save</Button>
    </Container>
    // {/* </React.Fragment>    */}
    )
}