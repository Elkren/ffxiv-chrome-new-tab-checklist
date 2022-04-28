import styled from "styled-components";
import Dropdown from "./components/Dropdown";

const ContentWrapper = styled.div`
  padding: 1rem;
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

function App() {
  return (
    <ContentWrapper>
      <Heading>FFXIV Checklist Tracker</Heading>
      <DropdownWrapper>
        <Dropdown text="Daily" />
        <Dropdown text="Weekly" />
      </DropdownWrapper>
    </ContentWrapper>
  );
}

export default App;
