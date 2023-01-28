import { useState } from 'react';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'


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
      <Title>Calculate your daily calorie intake right now</Title>
      <form onSubmit={onSubmit}>
        <Form>
        <Input
        // <input 
          type="text"
          name="height"
          placeholder="Height *"
          value={form.height}
          onChange={onChange}
          required
        //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        
        <Input
          type="text"
          name="currentWeight"
          placeholder="Age *"
          value={form.currentWeight}
          onChange={onChange}
          required
        //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        <Input
          type="text"
          name="age"
          placeholder="Current weight *"
          value={form.age}
          onChange={onChange}
          required
        //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        <Input
          type="text"
          name="desiredWeight"
          placeholder="Desired weight *"
          value={form.desiredWeight}
          onChange={onChange}
          required
        //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        </Form>
        <BloodTypeParagraph>Blood type *</BloodTypeParagraph>
        <RadioButtonDiv>
        <InputRadioButton
          type="radio"
          value="1"
          name="bloodType"
          onChange={onChange}
          required
        />
        1
        <InputRadioButton
          type="radio"
          value="2"
          name="bloodType"
          onChange={onChange}
          required
        />
        2
        <InputRadioButton
          type="radio"
          value="3"
          name="bloodType"
          onChange={onChange}
          required
        />
        3
        <InputRadioButton
          type="radio"
          value="4"
          name="bloodType"
          onChange={onChange}
          required
        />4
        </RadioButtonDiv>
        <Button type="submit">Start losing weight</Button>
      </form>
    </div>
  );
};

export default CalculatorCalorieForm;

const Title = styled.h1`
  display: flex;
  width: 280px;
  color: #212121;
  font-weight: 700;
font-size: 18px;
line-height: 1.4;
margin-bottom: 34px;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  @media (min-width: 768px) {
    /* flex-direction: column; */
  }
`

const RadioButtonDiv = styled.div`
padding: 0;
  display: flex;
  row-gap: 24px;
  width: 240px;
  margin-bottom: 40px
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #E0E0E0;
  width: 240px;
  outline: none;
padding-bottom: 8px;
font-weight: 700;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.04em;

color: #454647;
`

const InputRadioButton = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;

`

const BloodTypeParagraph = styled.p`
  font-weight: 700;
font-size: 14px;
line-height: 1.2;
letter-spacing: 0.04em;
color: #9B9FAA;
`

const Button = styled.button`
  width: 210px;
  height: 43px;
  background: #FC842D;
box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
border-radius: 30px;
border: none;
font-weight: 700;
font-size: 14px;
line-height: 17px;
 display: flex;
align-items: center;
justify-content: center;
letter-spacing: 0.04em;

color: #FFFFFF;
`