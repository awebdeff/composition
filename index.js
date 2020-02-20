class Programmer {
  constructor(name) {
    this.name = name

  }

  code() {
    console.log(`${this.name} is coding...`)
  }
}

class Frontend extends Programmer {
  angular() {
    console.log(`${this.name} is creating Angular app..`)
  }
}

class Backend extends Programmer {
  nodejs() {
    console.log(`${this.name} is programming on Nodejs...`)
  }
}

const programmer = new Programmer('Programmer')
programmer.code()