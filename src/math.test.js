const  add = require ('./math');
it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2, 3];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((prev, cur) => {
    return prev + cur; // Add 'return' here to return the accumulated value
  }, 0);

  expect(result).toBe(expectedResult);
});
it("It should yied NaN when invalid input is given ",()=>{

  const inputs=['invalid',1]

  const result=add(inputs);
  expect(result).toBeNaN();

})
it("should yield a correct sum if an array of numeric string values is provided",()=>{
  const numbers=['1','2','3']
  
  const result=add(numbers);
  const expectedResult=numbers.reduce((prev,cur)=>prev+ + cur,0)
  expect(result).toBe(expectedResult);
})
it("should yield zero if an empty array is provided",()=>{
  const numbers=[]
  const result=add(numbers)
  expect(result).toBe(0)

})
//try catch way 
it("should throw an error when no value passed",()=>{
  try{
    const result=add();
  }catch(error){
    expect(error).toBeDefined()
  }

  
})
//another way without try catch.
it("should trhow an error when no value is passed",()=>{
  const resultFn=(()=>{
    add();
  })
  expect(resultFn).toThrow();
})
it("should throw an error when provided with multiple arguments instead of an array ",()=>{
  const num1=6;
  const num2=9;
  const resultFn=()=>{
    add(num1,num2)

  }
  expect(resultFn).toThrow();

})