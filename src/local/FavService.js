const FAVS_KEY = 'favs'

let favs = {
  liked: []
}

const sub = []

//* simmple observer subscribe pattern //
export const subscribe = (el) => {
  if (sub.indexOf(el) === -1) { sub.push(el) }
}

//* simmple observer unsubscribe pattern //
export const unsubscribe = (el) => {
  if (sub.indexOf(el) === -1) { sub.slice(sub.indexOf(el), 1) }
}

//* simmple observer notify pattern //
export const notifySubscibersOfChange = () => {
  sub.forEach(v => {
    if (v.onFavsChange) v.onFavsChange()
  })
}

/**
 * Loads the favorites from local storage
 */
export const load = () => {
  favs = JSON.parse(localStorage.getItem(FAVS_KEY))
}

/**
 * Saves favorites to the local storage and notifies subscribers
 */
export const save = () => {
  localStorage.setItem(FAVS_KEY, JSON.stringify(favs))
  notifySubscibersOfChange()
}

/**
 * Validates a photo being as liked, based on the Unsplash API mocel for and image.
 * @param {image} params Unsplash Image Object
 * @returns Boolean
 */
export const isLiked = (params) => {
  return favs.liked.find((v) => v.id === params.photo.id)
}

/**
 * Toggles an image as liked or unliked
 * @param {image} params Unsplash Image Object
 */
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

/**
 * Returns an array of likeed images, based on the local storage, of liked images
 * @returns {Array}
 */
export const all = () => {
  load()
  return favs.liked
}

/**
 * Inits the local mode, if not already instantiated
 */
const initIfNot = () => {
  if (favs === undefined) {
    favs = {
      liked: []
    }
  }
}
