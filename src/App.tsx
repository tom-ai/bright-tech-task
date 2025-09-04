import documents from './data/documents.json';
import { useEffect, useState } from 'react';
import type { Item } from './types/models';

const typedDocs: Item[] = documents;

function App() {
  const [docs, setDocs] = useState<Item[]>([]);

  useEffect(() => {
    setDocs(typedDocs);
  }, []);

  return (
    <>
      <h1>Bright Tech Task</h1>
    </>
  );
}

export default App;
