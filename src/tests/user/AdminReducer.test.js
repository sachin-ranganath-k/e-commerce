import AdminReducer from '../../admin/redux/AdminReducer/AdminReducer';
import * as AdminActions from '../../admin/redux/AdminActions/AdminActions';

describe('AdminReducer', () => {
  it('should return the initial state', () => {
    expect(AdminReducer(undefined, {})).toEqual({
      adminList: [],
      adminLoginApiStatus: "",
      AllCategoriesList: [],
      newCategoryList: [],
      newCategoryAddedSuccess: false,
      brands: {
        newBrandsList: {},
        allBrandsList: [],
        newBrandAddedSuccess: false,
      },
      todayOrdersList: [],
      totalOrdersList:[]
    });
  });

  it('should handle FETCH_ADMIN', () => {
    const payload = [{ id: 1, name: 'Admin 1' }, { id: 2, name: 'Admin 2' }];
    const action = { type: AdminActions.FETCH_ADMIN, payload };
    const expectedState = {
      ...AdminReducer(undefined, {}),
      adminList: payload
    };
    expect(AdminReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADMIN_LOGIN_FAILURE', () => {
    const payload = 'Invalid credentials';
    const action = { type: AdminActions.ADMIN_LOGIN_FAILURE, payload };
    const expectedState = {
      ...AdminReducer(undefined, {}),
      adminLoginApiStatus: payload
    };
    expect(AdminReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SHOW_CATEGORIES', () => {
    const payload = [{ id: 1, name: 'Category 1' }, { id: 2, name: 'Category 2' }];
    const action = { type: AdminActions.SHOW_CATEGORIES, payload };
    const expectedState = {
      ...AdminReducer(undefined, {}),
      AllCategoriesList: payload
    };
    expect(AdminReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_CATEGORY', () => {
    const payload = { id: 3, name: 'Category 3' };
    const action = { type: AdminActions.ADD_CATEGORY, payload };
    const expectedState = {
      ...AdminReducer(undefined, {}),
      newCategoryList: payload
    };
    expect(AdminReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CATEGORY_ADDED_SUCCESS_STATUS', () => {
    const payload = true;
    const action = { type: AdminActions.CATEGORY_ADDED_SUCCESS_STATUS, payload };
    const expectedState = {
      ...AdminReducer(undefined, {}),
      newCategoryAddedSuccess: payload
    };
    expect(AdminReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SHOW_BRANDS', () => {
    const payload = [{ id: 1, name: 'Brand 1' }, { id: 2, name: 'Brand 2' }];
    const action = { type: AdminActions.SHOW_BRANDS, payload };
    const expectedState = {
      ...AdminReducer(undefined, {}),
      brands: {
        ...AdminReducer(undefined, {}).brands,
        allBrandsList: payload
      }
    };
    expect(AdminReducer(undefined, action)).toEqual(expectedState);
  });

})