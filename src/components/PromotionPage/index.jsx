import * as S from "./style";
import * as I from "../../assets";
import * as C from "../../components";
import PromotionCom from "../../imgs/PromotionCom.png";
import { gauthLoginUri } from "../../lib/GAuthLoginUrl";

function PromotionPage() {
  return (
    <S.PromotionPageContainer>
      <S.PromotionContentBox>
        <S.PromotionTextBox>
          <S.PromotionTitleBox>
            <h1>GSM 학생들이 키워나가는 지식의 나무</h1>
            <I.Cloud />
          </S.PromotionTitleBox>
          <p>
            G무위키는 앰퍼샌드 팀에서 개발한 GSM만의 나무위키 프로젝트 입니다.{" "}
            <br />
            GSM에 관한 여러 정보를 공유해보세요!
          </p>
          <S.GauthLoginButton
            onClick={() => window.location.replace(gauthLoginUri)}
          >
            <I.GAuthLogo /> <span>Sign in with GAuth</span>
          </S.GauthLoginButton>
        </S.PromotionTextBox>
        <I.PromotionCom />
        {/* <img src={PromotionCom} alt="이미지" /> */}
      </S.PromotionContentBox>
    </S.PromotionPageContainer>
  );
}

export default PromotionPage;
