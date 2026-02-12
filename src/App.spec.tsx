import { render, screen } from '@testing-library/react-native';
import { BenefitsListScreen } from './features/benefits/BenefitsListScreen';

describe('BenefitsListScreen', () => {
  it('renders the benefits challenge screen', () => {
    render(<BenefitsListScreen />);

    expect(screen.getByText('Coverflex Benefits Challenge')).toBeTruthy();
    expect(screen.getByTestId('benefits-screen')).toBeTruthy();
  });
});
