import type { Item } from '../../types/models';

export function FileExplorer({ items }: { items: Item[] }) {
  return (
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
            <p>{item.type}</p>
            <time>{item.added}</time>
          </li>
        );
      })}
    </ul>
  );
}
