import * as S from "./style";
import * as I from "../../assets";

const InquiryModal = ({ postInquiry, setShowModal }) => {
  return (
    <>
      <S.ModalOverlay onClick={() => setShowModal(false)} />
      <S.InquiryModalContainer>
        <I.X onClick={() => setShowModal(false)} />
        <h2>문의 완료</h2>
        <p>
          문의가 성공적으로 전송되었습니다. 승인 여부는 등록하신 메일로 전송 될
          예정입니다.
        </p>
        <button onClick={postInquiry}>확인</button>
      </S.InquiryModalContainer>
    </>
  );
};

export default InquiryModal;
