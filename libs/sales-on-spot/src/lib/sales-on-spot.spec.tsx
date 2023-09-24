import { render } from '@testing-library/react';

import SalesOnSpot from './sales-on-spot';

describe('SalesOnSpot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SalesOnSpot />);
    expect(baseElement).toBeTruthy();
  });
});
