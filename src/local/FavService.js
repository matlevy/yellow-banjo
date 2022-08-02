const FAVS_KEY = 'favs'

let favs = {
  liked: []
}

const sub = []

export const subscribe = (el) => {
  if (sub.indexOf(el) === -1) { sub.push(el) }
}

export const unsubscribe = (el) => {
  if (sub.indexOf(el) === -1) { sub.slice(sub.indexOf(el), 1) }
}

export const notifySubscibersOfChange = () => {
  sub.forEach(v => {
    if (v.onFavsChange) v.onFavsChange()
  })
}

export const load = () => {
  favs = JSON.parse(localStorage.getItem(FAVS_KEY))
}

export const save = () => {
  localStorage.setItem(FAVS_KEY, JSON.stringify(favs))
  notifySubscibersOfChange()
}

export const isLiked = (params) => {
  return favs.liked.find((v) => v.id === params.photo.id)
}

export const likeOrNot = (params) => {
  initIfNot()
  if (!isLiked(params)) {
    favs.liked.push(params.photo)
  } else {
    const p = favs.liked.findIndex((v) => v.id === params.photo.id)
    favs.liked.splice(p, 1)
  }
  save()
}

export const all = () => {
  load()
  return favs.liked
}

const initIfNot = () => {
  if (favs === undefined) {
    favs = {
      liked: []
    }
  }
}
