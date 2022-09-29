import styled from 'styled-components';
import { PageProps } from './styleTypes';
import { ConversationSideBar } from '../components/conversations/ConversationSideBar';

export const SIDEBAR_WIDTH = 400;

export const InputField = styled.input`
  font-family: 'Inter';
  background-color: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  font-family: 'Inter';
  font-size: 16px;
  background-color: #2b09ff;
  color: #fff;
  border-radius: 10px;
  padding: 25px 0;
  font-weight: 500;

  transition: 250ms background-color ease;
  transition: 500ms border ease;

  border: 2px solid #2b09ff;
  box-sizing: border-box;

  &:focus {
    background-color: #3415ff;
    border: 2px solid #ffffff;
  }

  &:hover {
    cursor: pointer;
    background-color: #3415ff;
  }

  &:active {
    background-color: #3a1cff;
  }
`;

export const Page = styled.div<PageProps>`
  background-color: #1a1a1a;
  height: 100%;
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

export const ConversationSideBarStyle = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${SIDEBAR_WIDTH}px;
  background-color: #1a1a1a;
  border-right: 1px solid #5454543d;

  & header {
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
    background-color: #151515;
    height: 100px;
    border-bottom: 1px solid #5454543d;

    & h1 {
      font-weight: 500;
    }
  }
`;

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  margin-left: ${SIDEBAR_WIDTH}px;
`;
