import styled from "styled-components";

export const DetailContainer = styled.div`
  svg {
    transform: ${props => !props.detailActive && "rotate(0.75turn)"};
    cursor: pointer;
  }
  color: ${props => !props.detailActive && "rgba(0, 0, 0, 0.5)"};
  margin: 30px 0 38px 0;
`;

export const DetailNumber = styled.span`
  font-size: 24px;
  color: #007eff;
  opacity: ${props => (!props.detailActive ? 0.5 : 1)};
  font-weight: 600;
`;

export const DetailTitle = styled.span`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const DetailContent = styled.div`
  margin-top: 26px;
  line-height: 24px;
`;

export const DetailTitleContainer = styled.div`
  display: flex;
`;

export const DetailBorder = styled.div`
  border-bottom: 1px solid #c0c0c0;
`;

export const DetailLink = styled.span`
  color: #007eff;
  font-weight: 600;
`;

export const LinkContainer = styled.div`
  margin-left: 28px;
`;
