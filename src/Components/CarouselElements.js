import styled from 'styled-components';

export const NEXT = 'NEXT';
export const PREV = 'PREV';

export const Item = styled.div`
  width: 40vw;
  height: 40vh;
  text-align: center;
  padding: 100px;
  background-image: ${(props) => `url(${props.img})`};
  background-size: 80% 80%;
  background-repeat: no-repeat;
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: ${(props) => (props.sliding ? 'none' : 'transform 1s ease')};
  transform: ${(props) => {
    if (!props.sliding) return 'translateX(calc(-85% - 20px ))';
    if (props.dir === PREV) return 'translateX(calc(2 * (-80% - 20px)))';
    return 'translateX(0%)';
  }};
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 60vh;
  overflow: hidden;
  box-shadow: 5px 5px 20px 7px rgba(168, 168, 168, 1);
`;

export const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;

  margin-right: 20px;
  margin-top: 20px;

  order: ${(props) => props.order};
`;

export const SlideButton = styled.button`
    color: #ffffff;
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 100;
    padding: 10px;
    background-color: #5b78c7;
    border: 1px solid white;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  margin-top: 20px;
  text-decoration: none;
  float: ${(props) => props.float};

  &:active {
    position: relative;
    top: 1px;
  }
  &:focus {
    outline: 0;
  }
`;

export const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 90%;
  height: 100%;
`;

export const Code = styled.code`
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  margin: 0;
  padding: 0.2em 0.4em;
`;
