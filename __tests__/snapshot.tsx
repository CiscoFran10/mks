import React from 'react';
import Home from '@/app/page';
import { act } from 'react-dom/test-utils';
import { RenderResult, render } from '@testing-library/react';
import DefaultLayout from '../layouts/default-layout';

it('renders homepage with products', async () => {
  let container!: RenderResult;

  await act(async () => {
    container = render(
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    );
  });

  expect(container).toMatchSnapshot();
});
