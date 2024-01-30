import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import CreditCard from '../../../components/Credit-Card/CreditCard'
import CustomModal from '../../../components/modal/CustomModal'
import { SEE_ALL } from '../../../utils/constants'
import styles from "./style.module.scss"
import { cardDetails } from '../../../utils/CardList'
import CardListing from '../../../components/Credit-Card/CardListing'

const Dashboard = () => {
<<<<<<< Updated upstream
  const [open, setOpen] = useState(false)

  const showAllCards = () => {
    setOpen(true)
  }
=======
  
let map;
let service;
let infowindow;

function initMap() {
  const sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 15,
  });

  const request = {
    query: "Museum of Contemporary Art Australia",
    fields: ["name", "geometry"],
  };

  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}

window.initMap = initMap;
>>>>>>> Stashed changes

  return (
    <div className={styles.dashboardWrapper}>
      <Box className={styles.cardWrapper}>
        <Typography>My Cards</Typography>
        <Typography className={styles.seeAllCards}
          onClick={showAllCards}>
          {SEE_ALL}
        </Typography>
      </Box>
      <Box display="flex">
        <CreditCard backSideCard />
        <CreditCard />
      </Box>
      <CustomModal open={open} setOpen={setOpen} children={<CardListing/> } />
    </div>
  )
}

export default Dashboard
