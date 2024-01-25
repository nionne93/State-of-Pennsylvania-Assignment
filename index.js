

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


var check = function() {
    if(document.getElementById('email').value == document.getElementById('confirm-email').value){
        document.getElementById('alertEmail').style.color =  'green';
        document.getElementById('alertEmail').innerHTML = '<span>Match!</span>';
    } else if(document.getElementById('email').value !== document.getElementById('confirm-email').value){
            document.getElementById('alertEmail').style.color =  'red';
            document.getElementById('alertEmail').innerHTML = '<span>Email Not Matching...</span>'
                
        formSubmit.addEventListener('click', function(event){
        event.preventDefault()})
}
            }        
        
var dontSubmit = function() {

  if(document.getElementById('email').value !== document.getElementById('confirm-email').value){
    alert("Email Does Not match")
  }
}

