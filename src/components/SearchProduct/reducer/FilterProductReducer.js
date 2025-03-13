export const initialState = {
    limit: 12,
    q: "",
    order: "",
    sortBy: "",
    skip: 0,
  };
  
  export const TYPE_ACTION = {
    CHANGE_SORT: "CHANGE_SORT",
    CHANGE_PAGE: "CHANGE_PAGE",
    CHANGE_QUERY: "CHANGE_QUERY",
    CHANGE_REMOVE_QUERY: "CHANGE_REMOVE_QUERY",
    CHANGE_INITIAL: "CHANGE_INITIAL",
    CHANGE_RESET: "CHANGE_RESET",
  };
  
  export const filterProductReducer = (state, action) => {
    switch (action.type) {
      case TYPE_ACTION.CHANGE_SORT:
        console.log(action, "action");
        const { order, sortBy } = action.payload;
        return {
          ...state,
          order,
          sortBy,
        };
      case TYPE_ACTION.CHANGE_PAGE:
        return {
          ...state,
          skip: action.payload,
        };
      case TYPE_ACTION.CHANGE_QUERY:
        return {
          ...state,
          q: action.payload,
        };
      case TYPE_ACTION.CHANGE_INITIAL:
        return {
          ...state,
          ...action.payload,
        };
      case TYPE_ACTION.CHANGE_RESET:
          delete state.q
          delete state.order
          delete state.sortBy
          delete state.skip
        return {
          ...state,
          limit: 12,
          q: "",
          order: "",
          sortBy: "",
          skip: 0,
        };
      default:
        return state;
    }
  };