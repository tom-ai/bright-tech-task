import { documents } from './data/documents';
import { useEffect, useState } from 'react';
import type { Item } from './types/models';
import { FileExplorer } from './components/FileExplorer';
import { Search } from './components/Search';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(documents);
  }, []);

  return (
    <>
      <header>
        <h1>Bright Tech Task</h1>
      </header>
      <main>
        <Search />
        <FileExplorer items={items} />
      </main>
    </>
  );
}

export default App;
