import { screen } from '@testing-library/react';

describe('<App />', () => {
  it('should render the App', () => {
    expect(
      screen.getByRole('heading', {
        name: /welcome to/i,
        level: 2,
      })
    ).toBeInTheDocument();
  });
});
