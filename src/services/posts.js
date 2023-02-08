import apiCalls from 'src/composables/ApiCalls'

function postsService () {
  const { list, post, update, remove, getById } = apiCalls('posts')

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}

function usersService () {
  const { list, post, update, remove, getById } = apiCalls('users')

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}

export default {
  postsService,
  usersService
}