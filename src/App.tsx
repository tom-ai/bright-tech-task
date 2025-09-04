import { documents } from './data/documents';
import { useEffect, useState } from 'react';
import type { Item } from './types/models';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(documents);
  }, []);

  return (
    <>
      <h1>Bright Tech Task</h1>
      <ul>
        {items.map((item) => {
          if (item.type === 'folder') {
            return (
              <li key={item.name}>
                <details>
                  <summary>{item.name}</summary>
                  {item.files.map((file) => (
                    <>
                      <p>{file.name}</p>
                      <time>{file.added}</time>
                      <p>{file.type}</p>
                    </>
                  ))}
                </details>
              </li>
            );
          }

          return (
            <li key={item.name}>
              <p>{item.name}</p>
              <time>{item.added}</time>
              <p>{item.type}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
