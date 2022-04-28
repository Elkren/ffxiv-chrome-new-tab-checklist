import styled from "styled-components";

const DropdownWrapper = styled.div`
  padding: 1rem 1rem;
  width: 100%;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover,
  &:focus {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  cursor: pointer;
`;

export default function Dropdown({ text }) {
  return <DropdownWrapper>{text}</DropdownWrapper>;
}
