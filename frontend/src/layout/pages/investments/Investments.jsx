import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCardsData } from '../credit-cards/Add-Card/redux/fetchCard';
import { useAuthContext } from '../../../hooks/useAuthContext';
import CustomCreditCard from '../../../components/shared/customCard/customCard';
import { Grid, Typography } from '@mui/material';


const Investments = () => {
  const dispatch = useDispatch();
  const { card, cardLoading, error } = useSelector(state => state.cards)
  const { user } = useAuthContext();
  const token = user?.token;

  useEffect(() => {
    dispatch(fetchCardsData(token))
  }, [])

  return (
    <div>
      <Typography>
        This is Investments page
      </Typography>
      <Grid container spacing={2}>
        {
          card?.map(cardDetail => (
            <Grid item xs={12} md={4}>
              <CustomCreditCard
                cardDetails={{
                  currentBalance: cardDetail.balance,
                  cardHolder: cardDetail.name,
                  validThru: cardDetail.valid,
                  cardNumber: cardDetail.cardNumber
                }}
              />
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default Investments
