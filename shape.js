class Square{
    constructor (logoTitle, logoTextColor, logoShapeColor){
        this.logoTitle = logoTitle;
        this.logoTextColor = logoTextColor;
        this.logoShapeColor = logoShapeColor;
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${this.logoShapeColor}"/><text x="50" y="50" fill="${this.logoTextColor}">${this.logoTitle}</text></svg>`
    }
}
class Triangle{
    constructor (logoTitle, logoTextColor, logoShapeColor){
        this.logoTitle = logoTitle;
        this.logoTextColor = logoTextColor;
        this.logoShapeColor = logoShapeColor;
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,0 0,100 100,100" fill="${this.logoShapeColor}"/><text x="50" y="50" fill="${this.logoTextColor}">${this.logoTitle}</text></svg>`
    }
}
class Circle{
    constructor (logoTitle, logoTextColor, logoShapeColor){
        this.logoTitle = logoTitle;
        this.logoTextColor = logoTextColor;
        this.logoShapeColor = logoShapeColor;
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="${this.logoShapeColor}"/><text x="50" y="50" fill="${this.logoTextColor}">${this.logoTitle}</text></svg>`
    }
}

module.exports = {Square, Triangle, Circle,}