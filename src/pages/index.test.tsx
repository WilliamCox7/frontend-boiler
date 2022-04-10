import { render, RenderResult } from '@testing-library/react';
import Index from '@pages/index.page';

let body: RenderResult;

describe('<Index />', () => {
  beforeEach(() => {
    body = render(<Index />);
  });

  it('contains button', () => {
    expect(body.getByText('Test')).toBeInTheDocument();
  });
})