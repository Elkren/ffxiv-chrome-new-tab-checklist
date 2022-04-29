/*global chrome*/
import styled from "styled-components";
import TabButton from "./components/TabButton";
import Checklist from "./components/Checklist";
import data from "./json/data.json";
import { useState, useEffect } from "react";
import update from "immutability-helper";

const ContentWrapper = styled.div`
  height: calc(400px - 60px);
  overflow-y: scroll;
`;

const Header = styled.header`
  height: 60px;
  display: flex;
  align-content: center;
  gap: 0.5rem;
  background-color: #005f73;
  padding-left: 0.5rem;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

function App() {
  const [activeTab, setActiveTab] = useState("daily");
  const [checklist, setChecklist] = useState(data);

  useEffect(() => {
    chrome.storage.sync.get({ checklist: data }, (result) => {
      setChecklist(result.checklist);
    });
  }, []);

  const getCompletedLength = (checklist) => {
    return Object.values(checklist).filter((x) => x.completed === true).length;
  };

  const itemClick = (itemName, activeTab, completed) => {
    const updatedChecklist = update(checklist, {
      [activeTab]: {
        [itemName]: {
          completed: { $set: !completed },
        },
      },
    });
    setChecklist(updatedChecklist);
    chrome.storage.sync.set({ checklist: updatedChecklist });
  };

  return (
    <>
      <Header>
        <TabButton
          type="daily"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          current={getCompletedLength(checklist.daily)}
          total={Object.keys(checklist.daily).length}
        />
        <TabButton
          type="weekly"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          current={getCompletedLength(checklist.weekly)}
          total={Object.keys(checklist.weekly).length}
        />
      </Header>
      <ContentWrapper>
        <Checklist
          data={activeTab === "daily" ? checklist.daily : checklist.weekly}
          activeTab={activeTab}
          itemClick={itemClick}
        />
      </ContentWrapper>
    </>
  );
}

export default App;
