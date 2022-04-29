import styled, { css } from "styled-components";
import Cross from "../svg/Cross";
import Tick from "../svg/Tick";

const ItemWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: 4rem;
  gap: 1rem;
  padding: 0 1rem;
  background-color: initial;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  ${(props) =>
    props.completed &&
    css`
      background-color: #0a9396;
      color: white;
    `}
`;

export default function ChecklistItem({
  name,
  activeTab,
  completed,
  itemClick,
}) {
  return (
    <ItemWrapper
      onClick={() => itemClick(name, activeTab, completed)}
      completed={completed}
    >
      {/* <ItemCheckbox type="checkbox" id={name} name={name} /> */}
      {name}
      {completed ? <Tick /> : <Cross />}
    </ItemWrapper>
  );
}
