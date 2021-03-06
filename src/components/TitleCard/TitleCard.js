import React from 'react';
import styled, { keyframes } from 'styled-components';

import bokehBg from '../../../assets/cool-bokeh.mp4';
import { colors } from '../../../presentation/theme';

const TitleCard = () => {
  return (
    <Wrapper>
      <WordVideo autoPlay loop src={bokehBg} />

      <Svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="title-card-mask" x={0} y={0} width="100%" height="100%">
            <rect x={0} y={0} width="100%" height="100%" fill="#FFF" />
            <Line1 textAnchor="middle" x={800} y={300}>
              Rejecting bongo kittens,
            </Line1>
            <Line2 textAnchor="middle" x={800} y={500}>
              achieving 3D blooms,
            </Line2>
            <Line3 textAnchor="middle" x={800} y={700}>
              and other lessons learned
            </Line3>
          </mask>
        </defs>
        <rect
          mask="url(#title-card-mask)"
          fill="#FFF"
          x={0}
          y={0}
          width="100%"
          height="100%"
        />
      </Svg>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF;
  animation: ${fadeIn} 3500ms ease-in;
`;

const WordVideo = styled.video`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const Svg = styled.svg`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const Text = styled.text`
  font-weight: 900;
  letter-spacing: -5px;
  font-family: 'Oswald', sans-serif;
`;

const Line1 = styled(Text)`
  font-size: 144px;
`;
const Line2 = styled(Text)`
  font-size: 144px;
`;
const Line3 = styled(Text)`
  font-size: 144px;
`;

export default TitleCard;
