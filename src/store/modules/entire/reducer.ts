const initialState = {}
interface IAction {
  type: string
}
function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
