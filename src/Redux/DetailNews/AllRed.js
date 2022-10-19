import axios from 'axios';

const GET_NEWS = 'GET_NEWS';

const initialState = { news: [] };

const Api = 'https://inshorts.deta.dev/news?category=technology';

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};

export const fetchNews = () => (dispatch) => {
  axios.get(Api).then((res) => {
    const { data } = res;
    dispatch({
      type: GET_NEWS,
      payload: data,
    });
  });
};

export default fetchReducer;
