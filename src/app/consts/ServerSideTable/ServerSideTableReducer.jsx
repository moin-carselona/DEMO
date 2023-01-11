export const tableReducer = (state, { type, payload }) => {
    const PAGE_CHANGED = 'PAGE_CHANGED';
    const PAGE_SIZE_CHANGED = 'PAGE_SIZE_CHANGED';
    const PAGE_SORT_CHANGED = 'PAGE_SORT_CHANGED';
    const PAGE_FILTER_CHANGED = 'PAGE_FILTER_CHANGED';
    const TOTAL_COUNT_CHANGED = 'TOTAL_COUNT_CHANGED';
    switch (type) {
        case PAGE_CHANGED:
            return {
                ...state,
                queryPageIndex: payload,
            };
        case PAGE_SIZE_CHANGED:
            return {
                ...state,
                queryPageSize: payload,
            };
        case PAGE_SORT_CHANGED:
            return {
                ...state,
                queryPageSortBy: payload,
            };
        case PAGE_FILTER_CHANGED:
            return {
                ...state,
                queryPageFilter: payload,
            };
        case TOTAL_COUNT_CHANGED:
            return {
                ...state,
                totalCount: payload,
            };
        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
};