import assert from 'assert'
describe("Verify the Calculator Page is working as expected", () => {
  
  it("Addition Example", () => {
    let input1 = 5
    let input2 = 6
    browser.url("https://www.theonlinecalculator.com/");
    $('//input[@value="'+input1+'"]').click()
    $('//input[@value="+"]').click()
    $('//input[@value="'+input2+'"]').click()
    $('//input[@value="="]').click()
    let actualValue = $('//input[@id="display"]').getValue()
    assert.strictEqual(actualValue, addition(input1, input2))
  }); 
  
});

function addition(number1 :number, number2 :number){
  return (number1+number2).toString();
}

