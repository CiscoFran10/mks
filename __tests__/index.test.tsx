import React from 'react';
import Home from '../src/app/page';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /mks/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
