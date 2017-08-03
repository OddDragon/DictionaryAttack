var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true; 
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false; 
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
  
  for(var i=0; i<354985; i++){
    var patt = new RegExp(pw);
    var res = patt.test(wordsFile);}
  if res = True{
    results = "That's a word, and subsequently vulnerable to a dictionary attack. Try again."}
  else{
    results = "That password is not vulnerable to a dictionary attack! Good job."}
}
