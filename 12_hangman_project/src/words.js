var TURKISH_WORDS = [
  'kalem',
  'tahta',
  'bacak',
  'radyo',
  'sehpa',
  'tabak',
  'kilit',
  'rende',
  'makas',
  'dolap',
  'tepsi',
  'lamba',
  'rende',
  'kazak',
  'kumru',
  'geyik',
  'banyo',
  'biber',
  'gurur',
]

function randomWord() {
  return TURKISH_WORDS[Math.floor(Math.random() * TURKISH_WORDS.length)]
}

export { randomWord }
