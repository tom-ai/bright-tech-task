import { useState } from 'react';
import { FileExplorer } from './components/FileExplorer';
import { Search } from './components/Search';
import { useDocuments } from './hooks/useDocuments';
import { Header } from './components/Header';

function App() {
  const [query, setQuery] = useState('');

  const { items } = useDocuments(query);

  return (
    <>
      <Header />
      <main>
        <Search value={query} onChange={setQuery} />
        <FileExplorer items={items} />
      </main>
    </>
  );
}

export default App;
