import React from 'react';
import styled from 'styled-components';

const Category = styled.h1`
  margin: 5rem 0 1rem;
  font-weight: 900;
  font-size: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 330px;
  grid-gap: 29px;
`;

const Box = styled.div`
  padding: 1rem;
  box-shadow: var(--box-shadow);
  border-top: 2px solid var(--primary);
  font-size: 0.9rem;
  position: relative;
`;

const Title = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 900;
  margin: 1rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--secondary);
`;

const Description = styled.p`
  height: 120px;
`;
const Portfolio = styled.p``;

const Level = styled.li``;

const Times = styled.p`
  position: absolute;
  font-weight: 900;
  left: 10%;
  bottom: 6%;
`;
const Price = styled.p`
  position: absolute;
  font-weight: 900;
  right: 10%;
  bottom: 6%;
  color: var(--blue);
`;

const Layer = ({ prices }) => (
  <React.Fragment>
    {/* JAVA */}
    <Category>JAVA</Category>
    <Grid>
      {prices.map(price => (price.category === 1 ? (
        <Box key={price.id}>
          <React.Fragment>
            <Title>{price.title}</Title>
            <Description>{price.description}</Description>
            <div>
              <ul>
                <li>
                  <span>포트폴리오 : </span>
                  {price.portfolio}
                </li>
                <li>
                  <span>난이도 : </span>
                  {price.level === 1 && (
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  )}
                  {price.level === 2 && (
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                  )}
                  {price.level === 3 && (
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                  )}
                </li>
              </ul>
            </div>
            <Times>{price.times}</Times>
            <Price>￥ {price.price}</Price>
          </React.Fragment>
        </Box>
      ) : null))}
    </Grid>

    {/* Web */}
    <Category>WEB</Category>
    <Grid>
      {prices.map(price => (price.category === 2 ? (
        <Box key={price.id}>
          <React.Fragment>
            <Title>{price.title}</Title>
            <Description>{price.description}</Description>
            <div>
              <ul>
                <li>
                  <span>포트폴리오 : </span>
                  {price.portfolio}
                </li>
                <li>
                  <span>난이도 : </span>
                  {price.level === 1 && (
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  )}
                  {price.level === 2 && (
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                  )}
                  {price.level === 3 && (
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                  )}
                </li>
              </ul>
            </div>
            <Times>{price.times}</Times>
            <Price>￥ {price.price}</Price>
          </React.Fragment>
        </Box>
      ) : null))}
    </Grid>

    {/* Android/Ios */}
    <Category>Android&IOS</Category>
    <Grid>
      {prices.map(price => (price.category === 3 ? (
        <Box key={price.id}>
          <React.Fragment>
            <Title>{price.title}</Title>
            <Description>{price.description}</Description>
            <div>
              <ul>
                <li>
                  <span>포트폴리오 : </span>
                  {price.portfolio}
                </li>
                <li>
                  <span>난이도 : </span>
                  {price.level === 1 && (
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  )}
                  {price.level === 2 && (
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                  )}
                  {price.level === 3 && (
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                  )}
                </li>
              </ul>
            </div>
            <Times>{price.times}</Times>
            <Price>￥ {price.price}</Price>
          </React.Fragment>
        </Box>
      ) : null))}
    </Grid>
  </React.Fragment>
);

export default Layer;
