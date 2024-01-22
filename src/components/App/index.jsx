import { useState } from 'react';
import { Tabs } from '../Tabs';
import { tabs } from '../../utils/tabs';
import { Contents } from '../Contents';
import './style.scss';

function App() {
  const [selectedTab, setSelectedTab] = useState(1);

  const changeTab = (ind) => {
    setSelectedTab(ind);
  };

  return (
    <div className='App'>
      <Tabs count={tabs.length} changeTab={changeTab} selectedTab={selectedTab} />

      <Contents selectedTab={tabs[selectedTab - 1]} />
    </div>
  );
}

export default App;
