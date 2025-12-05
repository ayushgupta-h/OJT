const faqData = [
  {
    id: 'what-is-react',
    question: 'What is React and how does it differ from Angular?',
    answer: 'React is a JavaScript library for building user interfaces, focusing on the view layer. Unlike Angular, which is a full-fledged MVC framework, React is opinionated only about rendering and state management, often requiring additional libraries for routing and complex state handling.',
    tag: 'React'
  },
  {
    id: 'virtual-dom-explained',
    question: 'How does the Virtual DOM work?',
    answer: 'The Virtual DOM is a lightweight copy of the actual DOM. When state changes, React updates the Virtual DOM first. It then compares this new version with the previous one (diffing) and updates only the parts of the real DOM that have changed (reconciliation), improving performance.',
    tag: 'React'
  },
  {
    id: 'react-hooks-introduction',
    question: 'What are React Hooks and why should I use them?',
    answer: 'Hooks are functions that let you use state and other React features without writing a class. They allow you to reuse stateful logic between components (via custom hooks) and organize code by related pieces rather than by lifecycle methods.',
    tag: 'React'
  },
  {
    id: 'useeffect-dependency-array',
    question: 'What is the purpose of the dependency array in useEffect?',
    answer: 'The dependency array tells React when to re-run the effect. If the array is empty ([]), the effect runs only once on mount. If it contains values, the effect runs whenever any of those values change. Omitting it causes the effect to run on every render.',
    tag: 'React'
  },
  {
    id: 'state-vs-props',
    question: 'What is the difference between State and Props?',
    answer: 'Props (short for properties) are read-only inputs passed from a parent to a child component. State is mutable data managed within the component itself. State changes trigger re-renders, while props updates trigger re-renders in the child component receiving them.',
    tag: 'React'
  },
  {
    id: 'react-context-api',
    question: 'When should I use the React Context API?',
    answer: 'Context is designed to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language. It is best used to avoid "prop drilling" where you pass props through intermediate components that do not need them.',
    tag: 'React'
  },
  {
    id: 'controlled-vs-uncontrolled',
    question: 'What are Controlled vs. Uncontrolled components?',
    answer: 'In a controlled component, form data is handled by a React component via state. In an uncontrolled component, form data is handled by the DOM itself, typically accessed using a ref. Controlled components are generally preferred for better integration with React logic.',
    tag: 'React'
  },
  {
    id: 'react-memo-optimization',
    question: 'What is React.memo and when should I use it?',
    answer: 'React.memo is a higher-order component that memoizes the result. It prevents a functional component from re-rendering if its props have not changed. It is useful for optimizing performance in components that render often with the same props.',
    tag: 'React'
  },
  {
    id: 'usecallback-vs-usememo',
    question: 'What is the difference between useCallback and useMemo?',
    answer: 'useMemo returns a memoized value (the result of a function), while useCallback returns a memoized function itself. useMemo is used to avoid expensive calculations, whereas useCallback is used to prevent function reference changes that might trigger unnecessary re-renders in child components.',
    tag: 'React'
  },
  {
    id: 'react-keys-importance',
    question: 'Why are "keys" important in React lists?',
    answer: 'Keys help React identify which items have changed, been added, or been removed. They must be stable, unique, and predictable. Using indexes as keys is discouraged if the order of items may change, as it can negatively impact performance and component state.',
    tag: 'React'
  },
  {
    id: 'ssr-vs-csr',
    question: 'What is the difference between SSR and CSR?',
    answer: 'Server-Side Rendering (SSR) generates HTML on the server for each request, improving SEO and initial load time. Client-Side Rendering (CSR) renders the page in the browser using JavaScript, which can result in a slower initial paint but faster subsequent navigation.',
    tag: 'General'
  },
  {
    id: 'nextjs-benefits',
    question: 'Why is Next.js popular for React development?',
    answer: 'Next.js offers a production-ready framework with built-in features like Server-Side Rendering (SSR), Static Site Generation (SSG), file-system based routing, and API routes, solving many configuration challenges associated with vanilla React.',
    tag: 'React'
  },
  {
    id: 'css-box-model',
    question: 'Explain the CSS Box Model.',
    answer: 'The CSS Box Model essentially wraps every HTML element in a box. It consists of: margins (space outside the border), borders (the line around the content), padding (space between content and border), and the actual content area.',
    tag: 'CSS'
  },
  {
    id: 'flexbox-vs-grid',
    question: 'When should I use CSS Grid vs. Flexbox?',
    answer: 'Flexbox is designed for one-dimensional layouts (either a row OR a column). CSS Grid is designed for two-dimensional layouts (rows AND columns simultaneously). Use Flexbox for alignment and distribution within a container, and Grid for the overall page layout.',
    tag: 'CSS'
  },
  {
    id: 'semantic-html-a11y',
    question: 'Why is Semantic HTML important?',
    answer: 'Semantic HTML introduces meaning to the web page rather than just presentation. Tags like <header>, <article>, and <footer> clearly describe their content to search engines (SEO) and screen readers (Accessibility), making the web more inclusive.',
    tag: 'General'
  },
  {
    id: 'javascript-event-loop',
    question: 'How does the JavaScript Event Loop work?',
    answer: 'JavaScript is single-threaded. The Event Loop monitors the Call Stack and the Callback Queue. If the Call Stack is empty, it pushes the first event from the Queue to the Stack, effectively handling asynchronous operations like callbacks and promises.',
    tag: 'JavaScript'
  },
  {
    id: 'promises-async-await',
    question: 'How do async/await differ from Promises?',
    answer: 'Async/await is syntactic sugar built on top of Promises. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and debug compared to chaining .then() and .catch() methods.',
    tag: 'JavaScript'
  },
  {
    id: 'closures-javascript',
    question: 'What is a Closure in JavaScript?',
    answer: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.',
    tag: 'JavaScript'
  },
  {
    id: 'hoisting-explained',
    question: 'What is Hoisting in JavaScript?',
    answer: 'Hoisting is a mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. Note that only declarations are hoisted, not initializations. let and const are hoisted but remain in a "temporal dead zone".',
    tag: 'JavaScript'
  },
  {
    id: 'typescript-advantages',
    question: 'Why use TypeScript over JavaScript?',
    answer: 'TypeScript adds static typing to JavaScript. This catches errors at compile-time rather than runtime, provides better IDE support (intellisense), improves code maintainability, and makes refactoring large codebases significantly safer.',
    tag: 'JavaScript'
  },
  {
    id: 'redux-core-principles',
    question: 'What are the core principles of Redux?',
    answer: 'Redux is based on three principles: 1) Single source of truth (one store), 2) State is read-only (can only be changed by dispatching actions), and 3) Changes are made with pure functions (reducers).',
    tag: 'React'
  },
  {
    id: 'prop-drilling-solutions',
    question: 'How can you avoid Prop Drilling?',
    answer: 'Prop drilling can be avoided by using Component Composition (passing components as children), the Context API for global data, or state management libraries like Redux, Zustand, or Recoil.',
    tag: 'React'
  },
  {
    id: 'rest-vs-graphql',
    question: 'What is the main difference between REST and GraphQL?',
    answer: 'REST exposes multiple endpoints for different resources, often leading to over-fetching or under-fetching data. GraphQL exposes a single endpoint and allows the client to specify exactly what data structure they need.',
    tag: 'General'
  },
  {
    id: 'web-accessibility-aria',
    question: 'What are ARIA attributes?',
    answer: 'WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications) defines a set of attributes that can be added to HTML to improve accessibility for users with disabilities, particularly when standard HTML elements fall short in describing dynamic content.',
    tag: 'General'
  },
  {
    id: 'react-fragment-usage',
    question: 'What is a React Fragment?',
    answer: 'A React Fragment (<React.Fragment> or <>) allows you to group a list of children without adding extra nodes to the DOM. This is useful when a component needs to return multiple elements but a parent container div is unnecessary or breaks the layout.',
    tag: 'React'
  }
];

var searchInput = document.getElementById('search-input');

var resultsList = document.getElementById('results-list');

function renderList(listData) {

  resultsList.innerHTML = "";

  if (listData.length === 0) {
    resultsList.innerHTML = "<p>No questions found.</p>";
    return;
  }

  for (var i = 0; i < listData.length; i++) {

    var item = listData[i];

    var htmlCode = "<div class='faq-item'>";

    htmlCode += "<button class='faq-question'>";
    htmlCode += item.question;
    htmlCode += "<i class='fas fa-chevron-down'></i>";
    htmlCode += "</button>";

    htmlCode += "<div class='faq-answer'>";

    htmlCode += "<p>" + item.answer + "</p>";
    htmlCode += "<span class='faq-tag'>" + item.tag + "</span>";
    htmlCode += "</div>";

    htmlCode += "</div>";

    resultsList.innerHTML += htmlCode;
  }
}

searchInput.oninput = function () {

  var val = searchInput.value.toLowerCase();

  var filteredData = faqData.filter(function (item) {
    return item.question.toLowerCase().includes(val) || item.tag.toLowerCase().includes(val);
  });

  if (val.length > 0) {

    renderList(filteredData);
  } else {

    renderList(faqData);
  }
};

function menuClick(tagName) {
  document.getElementById('click').checked = false;
  searchInput.value = "Tag: " + tagName;

  var filteredData = faqData.filter(function (item) {
    return item.tag === tagName;
  });

  renderList(filteredData);
}

resultsList.addEventListener('click', function (e) {

  var btn = e.target.closest('.faq-question');

  if (!btn) return;


  btn.classList.toggle('active');

  var panel = btn.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {

    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});

function checkDeepLink() {
        const hash = window.location.hash.substring(1); 
        if (hash) {
            const targetElement = document.getElementById(hash);
            if (targetElement) {
                targetElement.classList.add('highlighted');
                const btn = targetElement.querySelector('.faq-question');
                const panel = targetElement.querySelector('.faq-answer');
                if(btn && panel) { btn.classList.add('active'); panel.style.maxHeight = panel.scrollHeight + "px"; }
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    function copyLink(id) {
        const url = window.location.href.split('#')[0] + '#' + id;
        navigator.clipboard.writeText(url).then(() => { alert("Link copied!\n" + url); });
    }

    renderList(faqData);
    setTimeout(checkDeepLink, 100);


    // This is a pure React Functional Component
    // Since we don't have Babel (JSX), we use React.createElement
    
    function PageRating() {
      // Use standard React Hook
      const [rating, setRating] = React.useState(0);

      return React.createElement(
        'div', 
        { className: 'react-box' }, // properties (props)
        [
          React.createElement('span', { key: 'text' }, `Rate this FAQ: ${rating} `),
          React.createElement(
            'button', 
            { 
              key: 'btn',
              className: 'react-btn',
              onClick: () => setRating(rating + 1) 
            }, 
            '👍 Like'
          )
        ]
      );
    }

    // Mount the component to the div with id="react-root"
    const root = ReactDOM.createRoot(document.getElementById('react-root'));
    root.render(React.createElement(PageRating));
