import { RootState } from '@/stores';
import { createSelector } from '@reduxjs/toolkit';

export const batchStateSelector = (state: RootState) => state.batch;

export const batchStateAllDataSelector = createSelector(
  batchStateSelector,
  (state) => {
    return {
      ...state,
    };
  },
);
