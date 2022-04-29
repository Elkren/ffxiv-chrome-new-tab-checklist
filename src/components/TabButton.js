import styled, { css } from "styled-components";
import Tick from "../svg/Tick";

const SButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  letter-spacing: 2px;
  background-color: inherit;
  border: none;
  outline: none;
  color: white;
  padding: 1rem;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  :hover,
  :focus {
    border-bottom: 2px solid white;
  }

  ${(props) =>
    props.activeTab &&
    css`
      border-bottom: 2px solid white;
    `}
`;

const FractionContainer = styled.div`
  font-size: 0.75rem;
`;

const CountContainer = styled.div`
  width: 1rem;
`;

const SVGWrapper = styled.div`
  height: 16px;
`;

export default function TabButton({
  type,
  activeTab,
  setActiveTab,
  current,
  total,
}) {
  return (
    <SButton onClick={() => setActiveTab(type)} activeTab={activeTab === type}>
      {type}
      <CountContainer>
        <FractionContainer>
          {current === total ? (
            <SVGWrapper>
              <Tick />
            </SVGWrapper>
          ) : (
            <>
              <sup>{current}</sup>/<sub>{total}</sub>
            </>
          )}
        </FractionContainer>
      </CountContainer>
    </SButton>
  );
}
