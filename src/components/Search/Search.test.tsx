import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { Search } from './Search';

describe('Search', () => {
  it('renders an accesible search box', () => {
    render(<Search value="" onChange={() => {}} />);
    expect(screen.getByRole('searchbox', { name: /search/i })).toBeVisible();
  });

  it('is controlled by the value prop', () => {
    render(<Search value="abc" onChange={() => {}} />);
    expect(screen.getByRole('searchbox', { name: /search/i })).toHaveValue(
      'abc'
    );
  });

  it('calls the onChange when a user types', async () => {
    const user = userEvent.setup();

    const mockOnChange = vi.fn();

    render(<Search value={undefined!} onChange={mockOnChange} />);

    await user.type(screen.getByRole('searchbox', { name: /search/i }), 'abc');

    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenLastCalledWith('abc');
  });
});
