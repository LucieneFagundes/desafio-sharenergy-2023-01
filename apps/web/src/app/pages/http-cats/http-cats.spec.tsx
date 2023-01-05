import { render } from '@testing-library/react';

import HttpCats from './http-cats';

describe('HttpCats', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HttpCats />);
    expect(baseElement).toBeTruthy();
  });
});
