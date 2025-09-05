import { documents } from './data/documents';
import { useEffect, useState } from 'react';
import type { Item } from './types/models';
import { FileExplorer } from './components/FileExplorer';
import { Search } from './components/Search';

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setItems(documents);
  }, []);

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
