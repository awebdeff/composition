function createProgrammer(name) {
  const programmer = { name }

  return {
    ...programmer,
    ...canCode(programmer)
  }
}

function canCode({ name }) {
  return {
    code: () => console.log(`${name} is coding...`)

  }
}

function canAngular({ name }) {
  return {
    angular: () => console.log(`${name} is creating Angular app..`)

  }
}

function canNodejs({ name }) {
  return {
    nodejs: () => console.log(`${name} is programming on Nodejs...`)

  }
}

function canPython({ name }) {
  return {
    python: () => console.log(`${name} is programming on Python...`)

  }
}

function createFrontend(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canAngular(programmer)
  }
}

function createBackend(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canNodejs(programmer)
  }
}

function createFullstack(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canAngular(programmer),
    ...canNodejs(programmer)
  }
}

function createMegaproger(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canAngular(programmer),
    ...canNodejs(programmer),
    ...canPython(programmer)
  }
}

const programmer = createProgrammer('Programmer')
programmer.code()

const frontend = createFrontend('Frontend')
frontend.code()
frontend.angular()

const backend = createBackend('Max')
backend.code()
backend.nodejs()

const fullstack = createFullstack('John')
fullstack.code()
fullstack.angular()
fullstack.nodejs()

const megaproger = createMegaproger('Vasilisk')
megaproger.code()
megaproger.angular()
megaproger.nodejs()
megaproger.python()
