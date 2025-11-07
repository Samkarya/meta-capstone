import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../api';

export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return action.payload;
  }
  return state;
};

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const times = fetchAPI(today);
    dispatch({ type: 'UPDATE_TIMES', payload: times });
  }, []);

  const handleDateChange = (date) => {
    const times = fetchAPI(date);
    dispatch({ type: 'UPDATE_TIMES', payload: times });
  };

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    }
  };

  return (
    <div>
      <h1>Table Reservation</h1>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;