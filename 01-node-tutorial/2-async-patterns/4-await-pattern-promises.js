const { readFile, writeFile } = require('fs')
const util = require('util')

// Idea of this is to wrap the function in a promise.
// all arguments parsed inside the variable is parsed across into the wrapped function
// You may lose track of the parameter intellisense for the real function though.
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFilePromise('../content/first.txt', 'utf8')
    const second = await readFilePromise('../content/second.txt', 'utf8')
    await writeFilePromise(
      '../content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()