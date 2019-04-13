import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Style/Container';

const Out = styled.div`
  background-color: var(--white);
`;
const In = styled.div`
  overflow: hidden;
  height: 79px;
  line-height: 79px;
`;
const Logo = styled.ul`
  float: left;
  width: 30%;
  h1 {
    font-weight: 900;
    font-size: 1.5rem;
  }
`;
const Ul = styled.ul`
  overflow: hidden;
  float: left;
  width: 70%;
`;
const Li = styled.li`
  float: left;
  width: 16.6666666667%;
  text-align: center;
  transition: all 0.5s;
  font-weight: ${props => (props.current ? '900 ' : 'transparent')};
`;

const HeaderLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
  <Out>
    <Container>
      <In>
        <Logo>
          <h1>KIMSCHOOL</h1>
        </Logo>
        <Ul>
          <Li current={pathname === '/'}>
            <HeaderLink to="/">홈으로</HeaderLink>
          </Li>
          <Li current={pathname === '/introduces'}>
            <HeaderLink to="/introduces">학원소개</HeaderLink>
          </Li>
          <Li current={pathname === '/prices'}>
            <HeaderLink to="/prices">수강료</HeaderLink>
          </Li>
          <Li current={pathname === '/contacts'}>
            <HeaderLink to="/contacts">오시는길</HeaderLink>
          </Li>
          <Li current={pathname === '/posts'}>
            <HeaderLink to="/posts">취업후기</HeaderLink>
          </Li>
          <Li current={pathname === '/calls'}>
            <HeaderLink to="/calls">문의하기</HeaderLink>
          </Li>
        </Ul>
      </In>
    </Container>
  </Out>
));
