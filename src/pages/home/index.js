import styled from "styled-components";
import color from "../../styles/color";


export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7%;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5%;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  `;

export const Icon = styled.img``;

export const TitleText = styled.div`
  font-weight: 600;
  font-size: 1.8em;
`;

export const Creating = styled.button`
  border: none;
  background:${color.white};
`;
