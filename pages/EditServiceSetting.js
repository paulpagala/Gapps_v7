import * as React from 'react';
import ServiceSetting from './ServiceSetting';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography'
import { useGlobalContext } from '../context/global';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link'


export default function EditServiceSetting() {
    const { checkInOptions, checkInRestriction, checkInAndOutRestriction, dailyCheckInRestriction, dailyCheckInAndOutRestriction, calendarRestriction, parkingAreaName } = useGlobalContext();
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
    //    console.log(parkingAreaName)
    function saveUpdate() {

        week.map((week, weekIndex) => (calendarRestriction.map((day, dayIndex) => (parkingAreaName.map((parkingArea, index) => (
            patchServiceSetting('https://zh66xn42vk.execute-api.ap-southeast-1.amazonaws.com/stage/parkingarea',
                {
                    "parkingArea": parkingArea,
                    "calendarRestriction": day + week,
                    "updateKey": "checkInOptions",
                    "updateValue": checkInOptions
                })
                .then((data) => {
                    console.log(data); // JSON data parsed by `data.json()` call
                }),
            patchServiceSetting('https://zh66xn42vk.execute-api.ap-southeast-1.amazonaws.com/stage/parkingarea',
                {
                    "parkingArea": parkingArea,
                    "calendarRestriction": day + week,
                    "updateKey": "checkInRestriction",
                    "updateValue": checkInRestriction
                })
                .then((data) => {
                    console.log(data); // JSON data parsed by `data.json()` call
                }),
            patchServiceSetting('https://zh66xn42vk.execute-api.ap-southeast-1.amazonaws.com/stage/parkingarea',
                {
                    "parkingArea": parkingArea,
                    "calendarRestriction": day + week,
                    "updateKey": "checkInAndOutRestriction",
                    "updateValue": checkInAndOutRestriction
                })
                .then((data) => {
                    console.log(data); // JSON data parsed by `data.json()` call
                }),
            patchServiceSetting('https://zh66xn42vk.execute-api.ap-southeast-1.amazonaws.com/stage/parkingarea',
                {
                    "parkingArea": parkingArea,
                    "calendarRestriction": day + week,
                    "updateKey": "dailyCheckInRestriction",
                    "updateValue": dailyCheckInRestriction
                })
                .then((data) => {
                    console.log(data); // JSON data parsed by `data.json()` call
                }),
            patchServiceSetting('https://zh66xn42vk.execute-api.ap-southeast-1.amazonaws.com/stage/parkingarea',
                {
                    "parkingArea": parkingArea,
                    "calendarRestriction": day + week,
                    "updateKey": "dailyCheckInAndOutRestriction",
                    "updateValue": dailyCheckInAndOutRestriction
                })
                .then((data) => {
                    console.log(data); // JSON data parsed by `data.json()` call
                })
        ))))))
    }

    return (
        //  <React.Fragment>
        <Container component="main" maxWidth="lg" sx={{ mb: 2, ml: 11, mt: '10%' }}>
            {/* <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Typography sx={{ color: 'grey', fontSize: '21px' }}>Service setting</Typography>
                <Typography sx={{ ml: '1%', fontWeight: 'bold', color: 'black', fontSize: '21px' }}> &gt; </Typography>
                <Typography sx={{ ml: '1%', fontWeight: 'bold', color: 'black', fontSize: '21px' }}>Edit service details</Typography>
            </Box> */}
            <Breadcrumbs separator='>' aria-label="breadcrumb">
                <Link href='/parkingDashboard' style={{ textDecoration: 'none', color: '#6F8191', fontSize: 19 }}>
                    Service setting
                </Link>
                {/* <Link href='/parkingArea' style={{ textDecoration: 'none', color: '#6F8191', fontSize: 19 }}>
                    {parkingAreaName}
                </Link> */}
                <Typography color="text.primary" sx={{ fontSize: 19, fontWeight:'bold'}}> Edit service details</Typography>
            </Breadcrumbs>
            <Typography sx={{ mt: '1%', fontWeight: '1000', color: 'black', fontSize: '43px' }}>Edit service details</Typography>
            <Typography sx={{ mt: '1%', color: 'black', fontSize: '21px' }}>Fill out the fields below to edit service details</Typography>
            <ServiceSetting />
            <Button variant="contained" onClick={saveUpdate} sx={{ ml: '84%', width: 180, height: 50, background: '#5BADFA' }}>Save</Button>
        </Container>
        // {/* </React.Fragment>    */}
    )
}