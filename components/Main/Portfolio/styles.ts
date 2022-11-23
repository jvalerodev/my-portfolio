import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: block;
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(34, 197, 94);
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: 0.5s ease-in-out;
  opacity: 0;
  border-radius: 0.375rem;

  &:hover {
    opacity: 1;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
