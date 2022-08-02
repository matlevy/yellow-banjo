const FAVS_KEY = 'favs'

let favs = {
  liked: []
}

export const load = () => {
  favs = localStorage.getItem('favs')
}

export const save = () => {
  localStorage.setItem(FAVS_KEY, JSON.stringify(favs))
}

export const like = (params) => {
  console.log(params)
  initIfNot()
  if (!favs.liked.find((v) => v.id === params.id)) {
    favs.liked.push(createFavorite(params.id))
  }
  save()
}

const createFavorite = (id = '') => {
  return { id }
}

const initIfNot = () => {
  if (favs === undefined) {
    favs = {
      liked: []
    }
  }
}
