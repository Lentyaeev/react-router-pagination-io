import fetch from 'isomorphic-fetch'

export const paginatedPage = ({ page }) => {
  return fetch(`https://reqres.in/api/users?page=${page}`).then((response) => response.json())
}
