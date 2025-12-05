# OJT
FAQ collapsible and deep-linking


# OJT
FAQ collapsible and deep-linking

My FAQ Page Project
It is a Frequently Asked Questions (FAQ) page that lists questions about React, JavaScript, and CSS.

I wanted to build something that looks good on mobile and has a search bar that actually works without reloading the page!





What it does (Features)

Search Bar: You can type in the box and it filters the questions instantly! It searches both the question text and the tags.

Accordion Animation: When you click a question, the answer slides down smoothly. I used max-height in CSS to do this.

Categories: You can click "React", "JavaScript", etc., in the menu to just show those questions.

Dark Modeish: The background is dark blue (#0A122A) because I think it looks cool for coding topics.

Deep Linking: If you click the little chain icon 🔗 inside an answer, it copies a link. If you paste that link in a new tab, it scrolls right to that question and opens it! (This took me a long time to figure out).

React Button: I added a "Rate this Page" button at the very bottom using React.




 How to run it

 You don't need to install anything or use npm. I used CDNs for React so it runs directly in the browser.

1.  Download the files.

2.  Make sure index.html, style.css, and index.js are in the same folder.

3.  Double-click index.html to open it in Chrome or Firefox.





Tech Stack used

HTML5

CSS3 (Used Flexbox for the menu and layout. Also used Media Queries so it works on phones).

JavaScript (Vanilla JS for the search logic and accordion).

React 18 (I imported it via script tags so I didn't have to set up Webpack/Babel).

FontAwesome (For the magnifying glass and hamburger menu icons).






Things I learned / Challenges

React without JSX: Since I'm not using a build tool like "Create React App," I had to write React using React.createElement. It’s kind of verbose and lots of brackets (( )), but I finally got the counter state to work!

The Mobile Menu: Making the hamburger menu work with just CSS (using the checkbox hack) and then also making it close when you click a link was tricky.

The Search Filter: I learned how to use .filter() and .includes() in JavaScript to sort through the faqData array.






Future Plans

Maybe fetch the questions from a real API instead of a hardcoded array.

Make the rating button actually save the data somewhere (right now it resets if you refresh)
