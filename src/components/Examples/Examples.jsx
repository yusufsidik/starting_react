import { useState } from "react";

import { EXAMPLES } from "../../data";
import TabButton from "../TabButton";
import Section from "../Section";
import Tabs from "../Tabs";

export default function Examples(){
  const [selectTopic, setSelectTopic] = useState();

  function handleSelect(selectedButton){
    setSelectTopic(selectedButton);
  }

  return(
    <>
      <Section title="Examples" id="examples">
        <Tabs 
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton isSelected={selectTopic === "components"} onClick={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectTopic === "jsx"} onClick={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectTopic === "props"} onClick={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectTopic === "state"} onClick={() => handleSelect("state")}>State</TabButton>
          </>
        }>

          {!selectTopic && (<p>Please select a topic</p>) }
          {selectTopic &&  (
            <div id="tab-content">
              <h3>{EXAMPLES[selectTopic].title}</h3>
              <p>{EXAMPLES[selectTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectTopic].code}</code>
              </pre>
            </div>
          )}
        </Tabs>
        
      </Section>
    </>
  )
}