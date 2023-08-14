import styled from "styled-components";
import PromotionBackground from '../../imgs/promotion.png'

export const PromotionPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${PromotionBackground});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 70px 70px 120px;
`

export const PromotionContentBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 74vh;
  }
`

export const PromotionTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #ffffff;
  margin-top: 1.3rem;
  
  p {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 25px;
    line-height: 25px;
  }
  `

export const PromotionTitleBox = styled.div`
  
  margin-bottom: 25px;
  display: flex;
  align-items: flex-start;
  gap: 16px;

  h1 {
    font-size: 2.6rem;
    font-weight: bold;
  }
`

export const GauthLoginButton = styled.button`
  width: 170px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 6px;
  border: none;
  outline: none;
  color: #2E80CC;
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span {
    font-size: 0.89rem;
    font-weight: 600;
  }
`