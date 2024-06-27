const {Square, Circle, Triangle} = require('./shape')

describe('Square', function(){
    it('render should return matching string', function(){
        const square = new Square("DTR","Black", "Blue")
        const testSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="Blue"/><text x="50" y="50" fill="Black">DTR</text></svg>'
        expect(square.render()).toEqual(testSvg)
    })
});
describe('Circle', function(){
    it('render should return matching string', function(){
        const circle = new Circle("DTR","black", "blue")
        const testSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="blue"/><text x="50" y="50" fill="black">DTR</text></svg>'
        expect(circle.render()).toEqual(testSvg)
    })
});
describe('Triangle', function(){
    it('render should return matching string', function(){
        const triangle = new Triangle("DTR","black", "blue")
        const testSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,0 0,100 100,100" fill="blue"/><text x="50" y="50" fill="black">DTR</text></svg>'
        expect(triangle.render()).toEqual(testSvg)
    })
})