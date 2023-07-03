import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
`;

export const Greeting = styled.p`
  font-weight: 700;
`;

export const StyledButton = styled.button`
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: darkblue;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border-width: 0;

  font-weight: 700;
  font-size: 16px;
  line-height: calc(30 / 16);
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  letter-spacing: 0.06em;

  color: #ffffff;

  cursor: pointer;

  transition: background-color 250ms linear, transform 250ms linear;

  align-self: center;

  :hover {
    background-color: darkorchid;
    transform: scale(1.1);
  }

  margin-left: 20px;
`;
