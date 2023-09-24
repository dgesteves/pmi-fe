import { render } from '@testing-library/react';

import StockTracking from './stock-tracking';

describe('StockTracking', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StockTracking />);
    expect(baseElement).toBeTruthy();
  });
});
