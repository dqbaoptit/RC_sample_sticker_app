import { useState } from 'react';

import { DemoList } from './containers';
import { SearchBar } from './components';

import './App.css';
function App() {
  const [value, setValue] = useState('');
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div className="header">
        <h3 className="header_title">LET'S GIF</h3>
        <SearchBar value={value} onChange={(e) => setValue(e)} />
      </div>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        <DemoList query={value} />
      </div>
    </div>
  );
}
export default App;
