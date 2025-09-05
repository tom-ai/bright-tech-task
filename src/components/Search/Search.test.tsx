import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('Search', () => {
  it('filters files that relate to the search term', async () => {
    // user types a query
    // files that relate to that query are displyaed
    // no folders are displayed
    // files within folders are considered as part of the search

    const search = userEvent.setup();

    // render(<FileExplorer items={testData} />);
    render(<App />);

    await search.type(
      screen.getByRole('searchbox', { name: /search/i }),
      'Handbook'
    );

    const results = screen.getAllByRole('listitem');

    expect(results).toHaveLength(1);

    expect(screen.getByText('Handbook')).toBeVisible();
  });
});
