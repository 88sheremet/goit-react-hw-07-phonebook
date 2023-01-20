import { createSlice } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log(action)
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload.message;
      })
      .addCase(deleteContact.pending, (state)=>{
        state.contacts.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action)=>{
        state.contacts.isLoading = false;
        state.contacts.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload.message;
        state.contacts.items = state.contacts.items.filter((item)=>{ return item.id !== action.payload})
        // const index = state.contacts.items.findIndex(
        //   contact => contact.id === action.payload
        // );
        // state.contacts.items.splice(index, 1);
      })
  },
});

export const contactsReducer = contactSlice.reducer;

export const { addContactAction, deleteContactAction } = contactSlice.actions;
