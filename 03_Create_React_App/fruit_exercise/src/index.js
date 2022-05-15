import foods from './foods'
import { choice, remove } from './helpers'

let fruit = choice(foods)
console.log(`Biraz ${fruit} alabilir miyim?`)

let remaining = remove(foods, fruit)
console.log(
  `Üzgünüm hepimiz dışarıdayız dolapta ${remaining.length} çeşit meyve kaldı `
)
