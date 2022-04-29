import ChecklistItem from "./ChecklistItem";
import styled from "styled-components";

const ChecklistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export default function Checklist({ data, activeTab, itemClick }) {
  return (
    <ChecklistWrapper>
      {Object.keys(data).map((x) => {
        return (
          <ChecklistItem
            key={x}
            name={x}
            activeTab={activeTab}
            completed={data[x].completed}
            itemClick={itemClick}
          />
        );
      })}
    </ChecklistWrapper>
  );
}
