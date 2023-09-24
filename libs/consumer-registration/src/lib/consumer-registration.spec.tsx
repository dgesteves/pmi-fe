import { render } from '@testing-library/react';

import ConsumerRegistration from './consumer-registration';

describe('ConsumerRegistration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsumerRegistration />);
    expect(baseElement).toBeTruthy();
  });
});
