'use client'
import React, { useState } from 'react';
import './DropdownTabs.css';

interface Tab {
  label: string;
  content: React.ReactNode;
}

const DropdownTabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<Tab | null>(tabs[0]);

  return (
    <div className="dropdown-tabs">
      <div className="dropdown">
        <button className="dropbtn">More Info</button>
        <div className="dropdown-content">
          {tabs.map(tab => (
            <div
              key={tab.label}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
      <div className="tab-content">{activeTab && activeTab.content}</div>
    </div>
  );
};

export default DropdownTabs;
