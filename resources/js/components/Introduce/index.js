import React from 'react';
import styled from 'styled-components';
import Container from '../Style/Container';

const Grid = styled.div`
  display: grid;
`;

const Box = styled.div`
  padding: 5rem 0;

  text-align: center;
  &:nth-child(1) {
    background-color: var(--yellow);
    a {
      display: inline-block;
      border: 1px solid var(--black);
      padding: 0.5rem 1.5rem;
      margin-top: 2rem;
    }
  }
  &:nth-child(2) {
    background-color: var(--pink);
  }
  &:nth-child(3) {
    background-color: var(--green);
  }
`;

const BoxTitle = styled.h2`
  font-size: 3rem;
  font-weight: 900;
`;
const BoxDesc = styled.h2`
  font-size: 1.2rem;
  width: 70%;
  margin: 2rem auto;
`;

const Cgrid = styled.div`
  display: grid;
  width: 85%;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
`;

const CgridBox = styled.div`
  width: 80%;
  margin: 2rem auto 0;
  background-color: var(--white);
  padding: 4rem 2rem;
`;

const Ibox = styled.div`
  i {
    color: var(--white);
    background-color: var(--black);
    width: 6rem;
    height: 6rem;
    line-height: 6rem;
    border-radius: 50%;
  }
`;
const Ctitle = styled.h3`
  margin: 1rem 0;
  font-weight: 900;
  font-size: 1.2rem;
`;

const Cdesc = styled.p`
  margin: 1rem 0 0;
  font-size: 0.5rem;
`;

const Index = () => (
  <Container>
    <Grid>
      <Box>
        <BoxTitle>Every One Can be WebEngineer.</BoxTitle>
        <BoxDesc>
          일본 도쿄에 위치한 KIMSCHOOL은 <br />
          현직 IT프로그래머가 운영하는 전문IT교육기관으로 <br />
          기술업무지원, 홈페이지 및 어플리케이션 제작 업무를 하고 있습니다.
        </BoxDesc>
      </Box>
      <Box>
        <BoxTitle>KIMSCHOOL만의 특징</BoxTitle>
        <BoxDesc>
          두꺼운 자바책은 필요 없습니다. KIMSCHOOL과 함께 최소한의 시간으로 최대한의 효과를!
        </BoxDesc>
        <Cgrid>
          <CgridBox>
            <Ibox>
              <i className="fas fa-globe-asia fa-3x" />
            </Ibox>
            <Ctitle>일본현지교육</Ctitle>
            <Cdesc>
              일본 도쿄에 위치한 KIMSCHOOL은 신주쿠에 인접한 타카다노바바에 위치하고 있어 교통이
              편리합니다. 아르바이트 후, 퇴근 후에도 수업참여가 가능합니다.
            </Cdesc>
          </CgridBox>
          <CgridBox>
            <Ibox>
              <i className="fas fa-language fa-3x" />
            </Ibox>
            <Ctitle>비지니스 일본어 교육</Ctitle>
            <Cdesc>
              일본어&한국어 네이브티브 선생님의 일상 회화 중심이 아닌 일본에서 IT업무에서 사용되는
              일본어가 학습이 가능합니다.
            </Cdesc>
          </CgridBox>
          <CgridBox>
            <Ibox>
              <i className="fas fa-american-sign-language-interpreting fa-3x" />
            </Ibox>
            <Ctitle>면접 연습</Ctitle>
            <Cdesc>
              선배들과 현직 강사의 지도로 일본 IT인사담당자들이 주로 묻는 질문과 면접 매너와
              준비사항에 대해서 철저하게 학습 후 완벽한 면접이 가능하도록 지도하고 있습니다.
            </Cdesc>
          </CgridBox>
          <CgridBox>
            <Ibox>
              <i className="fas fa-users-cog fa-3x" />
            </Ibox>
            <Ctitle>사후관리 및 업무지원 서비스</Ctitle>
            <Cdesc>
              KIMSCHOOL에서는 취업은 '시작'이라고 생각합니다. 취업후에도 매주 토요일 진행되는
              사후관리와 실무자에게 직접 문의가 가능하며, 신속한 해결이 가능합니다.
            </Cdesc>
          </CgridBox>
        </Cgrid>
      </Box>
      <Box>
        <BoxTitle>About Us</BoxTitle>
        <BoxDesc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec
          auctor in, mattis vitae leo.
        </BoxDesc>
      </Box>
    </Grid>
  </Container>
);

export default Index;
