import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  background-color: #eeeeee;
`;

export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block
    height: 56px;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
  height: 100%;
  width: 960px;
  margin: 0 auto;
  background-color: green;
`;
