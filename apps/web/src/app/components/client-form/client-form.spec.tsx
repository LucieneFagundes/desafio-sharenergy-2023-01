import { render } from '@testing-library/react';

import ClientForm from './client-form';

describe('ClientForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientForm />);
    expect(baseElement).toBeTruthy();
  });
});
