import { render } from '@testing-library/react';

import RandomUsers from './random-users';

describe('RandomUsers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RandomUsers />);
    expect(baseElement).toBeTruthy();
  });
});
