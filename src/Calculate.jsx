import { useState } from 'react';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const calculateDailyRate = createAsyncThunk(
  'calculate/dailRate',
  async (formData, thunkAPI) => {
    console.log(formData);
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
    age: '',
    weight: '',
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

      age: e.target.elements.age.value,
      weight: e.target.elements.weight.value,
      desiredWeight: e.target.elements.desiredWeight.value,
      bloodType: e.target.elements.bloodType.value,
    };

    console.log(formData);
    dispatch(calculateDailyRate(formData));
    setForm({
      height: '',
      weight: '',
      age: '',
      desiredWeight: '',
      bloodType: '',
    });
    e.currentTarget.reset();
  };

  return (
    <div>
      <Title>Calculate your daily calorie intake right now</Title>
      <form onSubmit={onSubmit}>
        <Form>
          <WrapperInputLeft>
            <Input
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
              name="age"
              placeholder="Age *"
              value={form.age}
              onChange={onChange}
              required
              //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            />
            <Input
              type="text"
              name="weight"
              placeholder="Current weight*"
              value={form.weight}
              onChange={onChange}
              required
              //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            />
          </WrapperInputLeft>
          <WrapperInputRight>
            <Input
              type="text"
              name="desiredWeight"
              placeholder="Desired weight *"
              value={form.desiredWeight}
              onChange={onChange}
              required
              //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            />

            <BloodTypeInput
              placeholder="Blood type *"
              type="text"
              readonly
              disabled
            />
            <RadioButtonWrapper>
              <RadioButtonDiv>
                <input
                  type="radio"
                  value="1"
                  id="1"
                  name="bloodType"
                  onChange={onChange}
                  required
                />
                <label htmlFor="1">1</label>
              </RadioButtonDiv>
              <RadioButtonDiv>
                <input
                  type="radio"
                  id="2"
                  value="2"
                  name="bloodType"
                  onChange={onChange}
                  required
                />
                <label htmlFor="2">2</label>
              </RadioButtonDiv>
              <RadioButtonDiv>
                <input
                  type="radio"
                  value="3"
                  name="bloodType"
                  onChange={onChange}
                  required
                />
                <label htmlFor="">3</label>
              </RadioButtonDiv>
              <RadioButtonDiv>
                <input
                  type="radio"
                  value="4"
                  name="bloodType"
                  onChange={onChange}
                  required
                />
                <label htmlFor="">4</label>
              </RadioButtonDiv>
            </RadioButtonWrapper>
          </WrapperInputRight>
        </Form>
        <WrapperButton>
          <Button type="submit">Start losing weight</Button>
        </WrapperButton>
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
  line-height: 140%;
  margin-bottom: 34px;

  @media (min-width: 768px) {
    width: 504px;
    font-weight: 700;
    font-size: 34px;
    line-height: 140%;
    margin-bottom: 68px;
  }

  @media (min-width: 1280px) {
  }
`;

const Form = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 40px;
  }
`;

const RadioButtonWrapper = styled.div`
  padding: 0;
  display: flex;
  column-gap: 24px;
  width: 240px;
  margin-bottom: 40px;
`;

const RadioButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }

  label::before {
    content: '';
    border: 1px solid #e0e0e0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  input {
    cursor: pointer;
    width: 40px;

    opacity: 0;
    position: absolute;
  }
  input:checked {
    & + label::before {
      display: flex;
      justify-content: center;

      align-items: center;
      content: '???';

      width: 20px;
      height: 20px;
      border: 1px solid #e0e0e0;
    }
    & + label {
      color: #fc842d;
    }
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  width: 240px;
  outline: none;
  padding-bottom: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #454647;
  background-color: #fff;
`;

const BloodTypeInput = styled.input`
  border: none;
  background-color: #fff;
  width: 240px;
  outline: none;
  padding-bottom: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #454647;
  margin-top: 32px;

  @media (min-width: 768px) {
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 13px;
  }
`;

// const InputRadioButton = styled.input`
//   width: 20px;
//   height: 20px;
//   margin-right: 8px;
// `;

/* const BloodTypeParagraph = styled.p`
  font-weight: 700;
font-size: 14px;
line-height: 1.2;
letter-spacing: 0.04em;
color: #9B9FAA;
` */

const Button = styled.button`
  width: 210px;
  height: 43px;
  background: #fc842d;
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
  color: #ffffff;
`;
const WrapperInputLeft = styled.div`
  padding: 0;
  width: 240px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

const WrapperInputRight = styled.div`
  padding: 0;
  width: 240px;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
