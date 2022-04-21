const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const SET_LAST_USER_ID = 'SET_LAST_USER_ID'

let initialState = {
    users: [],
    lastUserId: 0,
    currentPage: 1,
    pageSize: 10,
    totalUsers: 0,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            };
        case SET_USERS:
            return  {
                ...state,
                users: [...state.users, ...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_LAST_USER_ID:
            return {
                ...state,
                lastUserId: action.lastUserId
            }
        default:
            return state
    }
}

export const toggleFollow = (userId) => ({
    type: TOGGLE_FOLLOW,
    userId
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    page
});
export const setTotalUsers = (totalUsers) => ({
    type: SET_TOTAL_USERS,
    totalUsers
});
export const setLastUserId = (lastUserId) => ({
    type: SET_LAST_USER_ID,
    lastUserId
});
export const toggleFetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching
});


export default usersReducer;