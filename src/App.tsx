import { useState } from 'react';
import { FileExplorer } from './components/FileExplorer';
import { Search } from './components/Search';
import { useDocuments } from './hooks/useDocuments';

function App() {
  const [query, setQuery] = useState('');

  const { items } = useDocuments(query);

  return (
    <>
      <header>
        <hgroup>
          <h1>Uploaded Documents</h1>
          <h2>BrightHR Tech Task</h2>
        </hgroup>
      </header>
      <main>
        <Search value={query} onChange={setQuery} />
        <FileExplorer items={items} />
      </main>
      <footer>
        <p>Made by Tom Harris for BrightHR | Tech Task | September 2025</p>
        <a href="https://github.com/tom-ai">github.com/tom-ai</a>
      </footer>
    </>
  );
}

export default App;
