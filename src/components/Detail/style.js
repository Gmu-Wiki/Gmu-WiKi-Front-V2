import styled from "styled-components";

export const DetailContainer = styled.div`
  svg {
    transform: ${props => !props.detailActive && "rotate(0.75turn)"};
    cursor: pointer;
  }
  color: ${props => !props.detailActive && "rgba(0, 0, 0, 0.5)"};
  margin: 38px 0 38px 0;
`;

export const DetailNumber = styled.span`
  font-size: 24px;
  color: #007eff;
  opacity: ${props => (!props.detailActive ? 0.5 : 1)};
  font-weight: 600;
  margin-right: 8px;
`;

export const DetailTitle = styled.span`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const DetailContent = styled.div`
  margin-top: 28px;
  margin-left: 8px;
  line-height: 24px;
  display: flex;
  align-items: ${props => (props.detailContent ? "center" : "initial")};
  flex-direction: column;
`;

export const DetailTitleContainer = styled.div`
  display: flex;
`;

export const ArrowContainer = styled.div`
  margin-right: 8px;
`;

export const DetailBorder = styled.div`
  border-bottom: 1px solid #d9d9d9;
`;

export const DetailLink = styled.span`
  color: #007eff;
  font-weight: 600;
`;

export const LinkContainer = styled.div`
  margin-left: 28px;
`;
