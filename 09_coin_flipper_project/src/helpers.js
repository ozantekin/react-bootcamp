function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

export { choice }
