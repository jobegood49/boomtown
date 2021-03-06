import gql from 'graphql-tag'

/**
 * Item and user-related queries and mutations.
 */

export const VIEWER_QUERY = gql`
  query {
    viewer {
      id
      email
      fullname
      bio
    }
  }
`

const ItemFields = gql`
  fragment ItemFields on Item {
    id
    title
    imageurl
    description
    created
    tags {
      id
      title
    }
    itemowner {
      id
      fullname
      email
      bio
    }
    borrower {
      id
      fullname
      email
      bio
    }
    #
    # See the Apollo docs for instructions on how to use fragments:
    # https://www.apollographql.com/docs/angular/features/fragments.html
  }
`
export const ITEM_QUERY = gql`
  query item($filter: ID!) {
    # @TODO: Query an item by its id and return the ItemFields fragment.
    items(filter: $filter) {
      ...ItemFields
    }
  }
  ${ItemFields}
`

export const ALL_ITEMS_QUERY = gql`
  query AllItems($filter: ID) {
    items(filter: $filter) {
      ...ItemFields
    }
  }
  ${ItemFields}
`

export const ALL_USER_ITEMS_QUERY = gql`
  query user($id: ID!) {
    # @TODO: Query the bio, email, fullname, items, and borrowed for the user by id
    # Use the ItemFields fragment for the items and borrowed fields.
    user(id: $id) {
      bio
      email
      fullname
      items {
        ...ItemFields
      }
      borrowed {
        ...ItemFields
      }
    }
  }
  ${ItemFields}
`

export const ALL_TAGS_QUERY = gql`
  query {
    tags {
      id
      title
    }
  }
`

export const ADD_ITEM_MUTATION = gql`
  mutation addItem($item: NewItemInput!, $image: Upload!) {
    addItem(item: $item, image: $image) {
      id
    }
  }
`

/**
 * Auth-related queries and mutations.
 */

// export const ADD_ITEM_MUTATION = gql`
//   mutation addItem($item: NewItemInput!, $image: Upload!) {
//     # @TODO: Pass the item and image into the addItem mutation as arguments
//     # and return the new item id when the mutation is complete.
//   }
// `

// /**
//  * Auth-related queries and mutations.
//  */

// export const VIEWER_QUERY = gql`
//   query {
//     # @TODO: Query the id, email, fullname, and bio fields for the viewer.
//   }
// `
export const LOGOUT_MUTATION = gql`
  mutation {
    # @TODO: Run the logout mutation.
      logout
  }
`

export const SIGNUP_MUTATION = gql`
  mutation signup($user: SignUpInput!) {
    # @TODO: Pass the user into the signup mutation as an argument
    # and return the id of the new user when the mutation is complete.
    signup(user: $user) {
      id
    }
  }
`

export const LOGIN_MUTATION = gql`
  # @TODO: Pass the user into the login mutation as an argument
  # and return the id of the new user when the mutation is complete.
  mutation($user: LoginInput!) {
    login(user: $user)
  }
`
