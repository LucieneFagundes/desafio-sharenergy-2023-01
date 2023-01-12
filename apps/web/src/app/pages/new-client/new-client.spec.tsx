import { render } from '@testing-library/react';

import NewClient from './new-client';

describe('NewClient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewClient />);
    expect(baseElement).toBeTruthy();
  });
});
