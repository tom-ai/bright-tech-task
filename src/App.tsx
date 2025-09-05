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
        <h1>Bright Tech Task</h1>
      </header>
      <main>
        <Search value={query} onChange={setQuery} />
        <FileExplorer items={items} />
      </main>
    </>
  );
}

export default App;
