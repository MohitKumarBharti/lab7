let input = prompt("enter your name please");
input = input.toUpperCase();

document.querySelector("#content").innerHTML = `WELCOME  ${input} <br> <br> 
  following are the ways to connect js file with html <br><br>
  We can place script inside the head element is loaded with the webpage and gets executed if any defined event occurs.<br>
  
 We can place a script tag inside the body element of an HTML document too. The script tag inside the body element runs when a web page starts loading in a web browser.<br>

  We can also create a file with extension with .js extension and link it with out html page just above the closing of body tag(preferably).<br>
  
  
  `;
