



// Event Listener for the add button
 document.addEventListener('submit', function(e) {
    e.preventDefault();
    // gets the userInput 
    let userInput = document.getElementById('item').value
    //console.log(userInput)
    // creates a new list item 
    let newItem = document.createElement('li')
    //console.log(newItem)
    // adding and Id 
    newItem.setAttribute('id','overkill')
    // creating a text node from the user input 
    let text = document.createTextNode(userInput)
    //console.log(text)
    newItem.appendChild(text)
    // checkmark button
    let checkMark = document.createElement('input')
    newItem.appendChild(checkMark)
    // making sure the  input button is on the left 
    checkMark.style.cssFloat = "left"
    // adding the styling with a line through element.
    checkMark.addEventListener('click', function(c) {
      // checking for a tick mark with ternary operator 
        newItem.style.textDecoration =  checkMark.checked ? 'line-through' : 'none';
      });

     //console.log(checkMark)
     // adding to the input element. 
     checkMark.setAttribute('type','checkbox')
     checkMark.setAttribute('id','checker')

    let deleteItem = document.createElement('button')
       // event listner for the X button 
    deleteItem.addEventListener('click', function(r){
      // removes selected item 
          newItem.remove()
    })
    //console.log(deleteItem)
    deleteItem.setAttribute('id','deleter')
    deleteItem.innerText = 'X';
    newItem.appendChild(deleteItem)
    document.getElementById('list').appendChild(newItem).appendChild(checkMark)
    
  })  
  
  