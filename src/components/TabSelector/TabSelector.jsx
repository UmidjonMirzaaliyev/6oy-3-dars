import { useState } from "react";

function TabSelector() {
  const [activeTab, setActiveTab] = useState("tab1");

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return <div>Tab 1 content</div>;
      case "tab2":
        return <div>Tab 2 content</div>;
      case "tab3":
        return <div>Tab 3 content</div>;
      default:
        return null;
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <div>
        <button onClick={() => setActiveTab("tab1")} style={{ margin: "5px" }}>
          Tab 1
        </button>
        <button onClick={() => setActiveTab("tab2")} style={{ margin: "5px" }}>
          Tab 2
        </button>
        <button onClick={() => setActiveTab("tab3")} style={{ margin: "5px" }}>
          Tab 3
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>{renderContent()}</div>
    </div>
  );
}

export default TabSelector;
