const RESET_IMAGE = 'RESET_IMAGE'
const UPDATE_NEW_ITEM = 'UPDATE_NEW_ITEM'
const RESET_NEW_ITEM = 'RESET_NEW_ITEM'

export const resetImage = () => ({
    type: RESET_IMAGE
})

export const updateNewItem = (item) => ({
    type: UPDATE_NEW_ITEM,
    payload: item
})

export const resetNewItem = () => ({
    type: RESET_NEW_ITEM
})

const initialState = {
    item: 'Name your item',
    description: "describe you item",
    tags: [],
    imageurl: "http://via.placeholder.com/350x250",
    created: new Date(),
    itemowner: {
        fullname:'',
        email:''
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
      case RESET_IMAGE: {
        return { ...state, imageurl: initialState.imageurl };
      }
      case UPDATE_NEW_ITEM: {
        console.log("hello this is the image url",initialState.imageurl)
        return { ...state, ...action.payload };
      }
      case RESET_NEW_ITEM: {
          return {...initialState}
      }
      default: {
        return state;
      }
    }
  };