import { documents } from './data/documents';
import { useEffect, useState } from 'react';
import type { Item } from './types/models';

function App() {
  const [docs, setDocs] = useState<Item[]>([]);

  useEffect(() => {
    setDocs(documents);
  }, []);

  return (
    <>
      <h1>Bright Tech Task</h1>
    </>
  );
}

export default App;
