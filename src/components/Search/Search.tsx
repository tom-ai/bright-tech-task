export function Search({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <section>
      <form role="search" onSubmit={(e) => e.preventDefault()}>
        <input
          name="search"
          type="search"
          placeholder="Search"
          aria-label="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
}
