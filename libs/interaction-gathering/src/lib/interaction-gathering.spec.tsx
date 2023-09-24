import { render } from '@testing-library/react';

import InteractionGathering from './interaction-gathering';

describe('InteractionGathering', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InteractionGathering />);
    expect(baseElement).toBeTruthy();
  });
});
