import type { Item } from '../../types/models';

export function FileExplorer({ items }: { items: Item[] }) {
  return (
    <section>
      <ul className="file-list">
        {items.map((item) => {
          return (
            <li key={item.name}>
              <ItemView item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function ItemView({ item }: { item: Item }) {
  if (item.type !== 'folder') {
    return (
      <article>
        <header>
          <time>{item.added}</time>
        </header>
        {item.name}
        <footer>{item.type}</footer>
      </article>
    );
  }

  return (
    <details>
      <summary role="button" className="outline">
        {item.name}
      </summary>
      {item.files.map((item) => (
        <ItemView item={item} key={item.name} />
      ))}
    </details>
  );
}
