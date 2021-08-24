export const sortActions = {
    changeSortId: (id: string) => ({
        type: 'CHANGE_SORT_ID',
        sortId: id
    } as const)
}


