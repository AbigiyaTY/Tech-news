import renderer from 'react-test-renderer';
import Home from './__mock__/Home';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
