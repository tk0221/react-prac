class BMI {
  constructor (height, weight) {
    this.height = height
    this.weight = weight
    this.bmi = this.calc()
  }
  calc () {
    const heightM = this.height / 100
    return this.weight / (heightM * 2)
  }
  print () {
    let res = 'standard'
    if (this.bmi >= 25) res = 'over'
    else if (this.bmi >= 18.5) res = 'standard'
    else res = 'under'
    console.log('BMI =', this.bmi, res)

  }
}

const bmi = new BMI(160, 60)
bmi.print()