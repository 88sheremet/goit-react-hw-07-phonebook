import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://63c6dd55dcdc478e15cb2575.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI)=>{
    try{
        const response = await axios.get('/contacts');
        // console.log(response.data)
        return response.data;
    }
   catch(error){
   return thunkAPI.rejectWithValue(error.message);
   }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI)=>{
    try{
        const response = await axios.delete(`/contacts/${contactId}`);
       
        return response.data.id;
    }
   catch(error){
    return thunkAPI.rejectWithValue(error.message);
   }
})