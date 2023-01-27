import { useState } from 'react';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';



axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const calculateDailyRate = createAsyncThunk(
    'calculate/dailRate',
    async (formData, thunkAPI) => {
        console.log(formData)
      try {
        const { data } = await axios.post('/daily-rate', formData);
        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );


const CalculatorCalorieForm = () => {

  const [form, setForm] = useState({
    height: '',
    currentWeight: '',
    age: '',
    desiredWeight: '',
    bloodType: '',
  });

  const dispatch = useDispatch();
  const onChange = e => {
    const { value, name } = e.target;

    setForm(state => ({
      ...state,
      [name]: value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();

    const formData = {
      height: e.target.elements.height.value,
      currentWeight: e.target.elements.currentWeight.value,
      age: e.target.elements.age.value,
      desiredWeight: e.target.elements.desiredWeight.value,
      bloodType: e.target.elements.bloodType.value,
    };

    console.log(formData)
    dispatch(calculateDailyRate(formData));
    setForm({
        height: '',
        currentWeight: '',
        age: '',
        desiredWeight: '',
        bloodType: '',
    })
    e.currentTarget.reset();
  };

  return (
    <div>
      <h1>Calculate your daily calorie intake right now</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="height"
          placeholder="Height *"
          value={form.height}
          onChange={onChange}
          required
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        <input
          type="text"
          name="currentWeight"
          placeholder="Age *"
          value={form.currentWeight}
          onChange={onChange}
          required
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        <input
          type="text"
          name="age"
          placeholder="Current weight *"
          value={form.age}
          onChange={onChange}
          required
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        <input
          type="text"
          name="desiredWeight"
          placeholder="Desired weight *"
          value={form.desiredWeight}
          onChange={onChange}
          required
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        <input
          type="radio"
          value="1"
          name="bloodType"
          onChange={onChange}
          required
        />
        1
        <input
          type="radio"
          value="2"
          name="bloodType"
          onChange={onChange}
          required
        />
        2
        <input
          type="radio"
          value="3"
          name="bloodType"
          onChange={onChange}
          required
        />
        3
        <input
          type="radio"
          value="4"
          name="bloodType"
          onChange={onChange}
          required
        />
        4<button type="submit">Start losing weight</button>
      </form>
    </div>
  );
};

export default CalculatorCalorieForm;
