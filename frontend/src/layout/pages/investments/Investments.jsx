import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCardsData } from '../credit-cards/Add-Card/redux/fetchCard';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { Grid, Typography } from '@mui/material';
import CardSkelton from './Skelton/Card-Skelton';

const Investments = () => {

  const dispatch = useDispatch();
  const { card, cardLoading } = useSelector(state => state.cards)
  const { user: { token } } = useAuthContext();

  useEffect(() => {
    dispatch(fetchCardsData(token))
  }, [dispatch, token])

  return (
    <div>
      <Typography> This is Investments page</Typography>
      <Grid container spacing={2}>
        {
          card?.map(cardDetail => (
            <Grid item xs={12} md={4}>
              <CardSkelton
                cardLoading={cardLoading}
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

export default Investments;
