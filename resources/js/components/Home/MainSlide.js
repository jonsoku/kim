import React from 'react';
import styled from 'styled-components';

const SlideWrapper = styled.div`
  position: relative;
`;

const SlideDiv = styled.div`
  overflow: hidden;
`;
const SlideUl = styled.ul`
  width: ${props => (props.width ? props.width : null)};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : null)};
  transition: all 0.5s;
`;
const SlideLi = styled.li`
  float: left;
  width: 100vw;
  height: auto;
  min-height: 680px;
`;
const SlideImg = styled.img`
  width: 100%;
  height: 100%;
`;

/* SlideButton */

const SlideButton = styled.div``;

const Dots = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  bottom: 3%;
  transform: translate(-50%, -50%);
`;
const Dot = styled.div`
  margin: 0 0.3rem;
  width: 1.5rem;
  height: 0.4rem;
  background-color: ${props => (props.bgc ? props.bgc : null)};
`;
const Arrows = styled.div`
  display: flex;
  color: var(--white);
`;
const Arrow = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  &:first-child {
    left: 5%;
    top: 50%;
  }
  &:last-child {
    right: 5%;
    top: 50%;
  }
`;

const MainSlide = ({
  images, length, handleLeftArrow, handleRightArrow, page, moveTo,
}) => (
  <SlideWrapper>
    <SlideDiv>
      <SlideUl width={`${100 * length}vw`} marginLeft={`${-100 * page}vw`}>
        {images.map(image => (
          <SlideLi key={image.id}>
            <SlideImg src={image.image} alt="1" />
          </SlideLi>
        ))}
      </SlideUl>
    </SlideDiv>
    <SlideButton>
      <Dots>
        {images.map(image => (
          <Dot
            key={image.id}
            onClick={() => moveTo(image.id)}
            bgc={image.id === page ? 'var(--black)' : 'var(--white)'}
          />
        ))}
      </Dots>
      <Arrows>
        <Arrow onClick={() => handleLeftArrow()}>
          <i className="fas fa-chevron-left fa-2x" />
        </Arrow>
        <Arrow onClick={() => handleRightArrow()}>
          <i className="fas fa-chevron-right fa-2x" />
        </Arrow>
      </Arrows>
    </SlideButton>
  </SlideWrapper>
);

export default MainSlide;
