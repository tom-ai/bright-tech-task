import type { Item } from '../../types/models';

export function FileExplorer({ items }: { items: Item[] }) {
  return (
    <section>
      <ul className="file-list">
        {items.map((item) => {
          return ItemView({ item });
        })}
      </ul>
    </section>
  );
}

function ItemView({ item }: { item: Item }) {
  if (item.type !== 'folder') {
    return (
      <li key={item.name}>
        <article>
          <header>
            <time>{item.added}</time>
          </header>
          {item.name}
          <footer>{item.type}</footer>
        </article>
      </li>
    );
  }

  return (
    <li key={item.name}>
      <details>
        <summary role="button" className="outline">
          {item.name}
        </summary>
        {item.files.map((item) => (
          <ItemView item={item} />
        ))}
      </details>
    </li>
  );
}
