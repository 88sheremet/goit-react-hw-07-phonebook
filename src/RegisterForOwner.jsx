import styled from 'styled-components';
import svgLogo from '../src/images/LogoRegisterLK.svg';
import LogoImg from '../src/images/RegisterForOwnerDesktop.png';
import eye from '../src/images/eye.svg';
export const RegisterForOwner = () => {

  return (
    <Container>
      <FormContainer>
        <img src={svgLogo} alt="" />
        <h1>Реєстрація</h1>
        <p>Зареструйтесь всього у декілька кроків</p>
      </FormContainer>

      <List>
        <li>
          <label>Назва закладу</label>
          <input type="text" placeholder="Введіть назву вашого закладу" />
        </li>
        <li>
          <label>Номер вашего телефона</label>
          <input type="number" placeholder="+380" />
        </li>
        <li>
          <label>Email</label>
          <input type="email" placeholder="Введіть ваш email" />
        </li>
        <li>
          <label>Ваше ім’я</label>
          <input type="text" placeholder="Введіть ваше ім’я" />
        </li>
        <li>
          <label>Пароль</label>
          <input type="" placeholder="Введіть пароль" />
          <span>
            <img src={eye} alt="" />
          </span>
          <p>Мінімум 6 символів</p>
        </li>
      </List>
      <ComeInContainer>
        <p>
          Натискаючи на кнопку «Продовжити», ви приймаєте умови ліцензійного
          договору та даєте згоду на обробку своїх персональних даних
        </p>
        <button>Створити кабінет</button>
      </ComeInContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 65px 40px 109px 150px;
  background-image: url('${LogoImg}');
  background-repeat: no-repeat;
  background-position: right;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
  gap: 20px;
  img {
    display: block;
    width: 136.23px;
    height: 29.98px;
  }
  h1 {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 66px;
    color: #222222;
    margin: 0;
  }
  p {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: rgba(34, 34, 34, 0.5);
    margin: 0;
    margin-bottom: 68px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;

  li {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 14px;
  }

  label {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #181818;
  }
  input {
    width: 480px;
    height: 58px;
    border-radius: 10px;
    border: 1px solid #e8e8e8;
    padding-left: 18px;
    padding-top: 18px;
    padding-bottom: 18px;
    /* outline: 1px solid #FFA451; */
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #181818;
  }
  input:focus,
  input:active, input:hover {
    outline: 1px solid #ffa451;
  }

  p {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin: 0;
    color: #787878;
  }

  span{
    position: absolute;
    margin-left: 435px;
    margin-top: 52px;
  }
`;

const ComeInContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 8px; */
  padding: 0;
  width: 480px;
  p {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #787878;
    margin-bottom: 24px;
  }
  button {
    background-color: #ffa451;
    border-radius: 10px;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    height: 62px;
    border: #ffa451;
  }
`;

//for index.css
// li,a{
//     list-style: none;
//   text-decoration: none;
//   }

//   *{
//     box-sizing: border-box;
//   }

//   .oncheck{
//     display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 480px;
//   height: 72px;
//     background-color: #FFF9F3;
//     border: 2px solid #FFA451;
//     border-radius: 10px;
//   }

//   .oncheck2{
//     display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 480px;
//   height: 72px;
//     background-color: #FFF9F3;
//     border: 2px solid #FFA451;
//     border-radius: 10px;
//   }
