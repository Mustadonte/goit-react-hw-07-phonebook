import { createReducer } from '@reduxjs/toolkit';

export const filterReducer = createReducer('', {
  setFilter: (_, action) => action.payload,
});
