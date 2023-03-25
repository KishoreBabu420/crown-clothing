import { createContext, useContext, useEffect, useReducer } from 'react';

import { createAction } from '../utils/reducers/reducer.util';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: 'SET_CATEGORIES_MAP',
};

const INITIAL_STATE = {
  categoriesMap: {},
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        categoriesMap: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer `);
  }
};

export const CategoriesProvider = ({ children }) => {
  // const [categoriesMap, setCategoriesMap] = useState({});

  const [{ categoriesMap }, dispatch] = useReducer(
    categoriesReducer,
    INITIAL_STATE,
  );

  const setCategoriesMap = (categoriesMap) => {
    dispatch(
      createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap),
    );
  };

  const value = { categoriesMap, setCategoriesMap };

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => {
  return useContext(CategoriesContext);
};
