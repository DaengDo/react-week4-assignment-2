import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App 컴포넌트', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) =>
    selector({ restaurants: [], restaurant: {}, categories: [] }),
  );

  const { queryByText } = render(<App />);
  // getByText는 텍스트가 없는 경우 에러가 난다.

  context('랜더되면', () => {
    it('레스토랑 앱의 제목과 목록이 출력된다.', () => {
      expect(queryByText(/Restaurants/)).not.toBeNull();
      expect(queryByText(/정돈/)).toBeNull();
    });
  });

  context('초기에 실행할 때', () => {
    it('setRestaurants 액션을 디스패치한다.', () => {
      expect(dispatch).toBeCalledWith({
        type: 'setRestaurants',
        payload: { restaurants: [] },
      });
    });
  });
});
