import React from 'react';
import styled from 'styled-components';

const TwitterHandle = () => {
  return (
    <Wrapper>
      @JoshWComeau
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 32px;
  left: 32px;
  z-index: 100000000;
  color: #ff00f6;
`

export default TwitterHandle;
