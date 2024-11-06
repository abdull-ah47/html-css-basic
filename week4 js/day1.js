<!DOCTYPE html>
<html>
<head>
  <title>getElementsByClassName Example</title>
</head>
<body>
  <div class="example">First element with class "example"</div>
  <div class="example">Second element with class "example"</div>
  <script>
    // Select all elements with class "example"
    const elements = document.getElementsByClassName('example');
    console.log(elements[0].textContent); // Outputs: First element with class "example"
  </script>
</body>
</html>



//practice question
//get element by class name
//example 1

<!DOCTYPE html>
<html>
<head>
  <title>getElementsByClassName Example</title>
</head>
<body>
  <div class="example">First element with class "example"</div>  
  <div class="example">Second element with class "example"</div>
  <script>
    // Select all elements with class "example"
    const elements = document.getElementsByClassName('example');

    // Loop through each element and change the text color
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = 'blue'; // Change color to blue
    }
  </script>
</body>
</html>


//example 2
<!DOCTYPE html>
<html>
<head>
  <title>getElementsByClassName Example</title>
</head>
<body>
  <div class="example">First element with class "example"</div>  
  <div class="example">Second element with class "example"</div>
  <script>
    // Select all elements with class "example"
    const elements = document.getElementsByClassName('example');
    
    // Loop through each element and add text
    for (let i = 0; i < elements.length; i++) {
      elements[i].textContent += " - Added text";
    }
  </script>
</body>
</html>

//get element by tagname
//example 1
<!DOCTYPE html>
<html>
<head>
  <title>getElementsByTagName Example</title>
</head>
<body>
  <p>This is the first paragraph.</p>
  <p>This is the second paragraph.</p>
  <p>This is the third paragraph.</p>

  <script>
    // Select all <p> elements
    const paragraphs = document.getElementsByTagName('p');
    
    // Loop through each paragraph and change the font size
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.fontSize = "20px";
    }
  </script>
</body>
</html>

{/* example 2 */}
<!DOCTYPE html>
<html>
<head>
  <title>getElementsByTagName Example</title>
</head>
<body>
  <div>This is the first div.</div>
  <div>This is the second div.</div>
  <div>This is the third div.</div>

  <script>
    // Select all <div> elements
    const divs = document.getElementsByTagName('div');
    
    // Loop through each div and set a border
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.border = "2px solid black";
    }
  </script>
</body>
</html>

{//example 3}
<!DOCTYPE html>
<html>
<head>
  <title>getElementsByTagName Background Color Example</title>
</head>
<body>
  <section>This is the first section.</section>
  <section>This is the second section.</section>
  <section>This is the third section.</section>

  <script>
    // Select all <section> elements
    const sections = document.getElementsByTagName('section');
    
    // Loop through each section and change the background color
    for (let i = 0; i < sections.length; i++) {
      sections[i].style.backgroundColor = "lightblue";
    }
  </script>
</body>
</html>
