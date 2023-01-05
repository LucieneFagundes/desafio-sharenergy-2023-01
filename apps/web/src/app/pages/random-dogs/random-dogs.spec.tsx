import { render } from '@testing-library/react';

import RandomDogs from './random-dogs';

describe('RandomDogs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RandomDogs />);
    expect(baseElement).toBeTruthy();
  });
});
