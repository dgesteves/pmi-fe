import { render } from '@testing-library/react';

import DataPrivacy from './data-privacy';

describe('DataPrivacy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataPrivacy />);
    expect(baseElement).toBeTruthy();
  });
});
