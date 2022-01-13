export const explain_template = `Question text: 
How does NextJS ssg work?

Answer text:
The main difference is that static site generation is compiled or built only once for multiple users, whereas server side rendering is built when the user navigates to that webpage.

Server side rendering is best for a dashboard, perhaps, where you'd want to populate the data before the user can see anything. Static site generation is best for landing pages, blog posts and other content that doesn't change often and is the same for every user.

###

Question text:`;
export const explain_answer = `

Answer text: `;
export const explain_prompt = `What is the difference between Next Image and a normal img tag? Why use one over the other?`;

// ----------------------------------------------------------------------------

export const code_template = `Question text:
"Hooks can only be called inside the body of a function component" ReactJS Error. What does this mean?
My code looks like this:
\`\`\` JS
function App() {
    return (
        <button onClick={() => React.useState(null)}>Button you can click</button>
    );
}
\`\`\`

Answer:
The error message is saying that the \`onClick\` function is not a valid function component. Here's what you should write instead:

\`\`\` JS
function App() {
    const [clicked, setClicked] = React.useState(false);
    return (
        <button onClick={() => setClicked(!clicked)}>Button you can click</button>
    );
}
\`\`\`

###

Question text:`;

export const code_answer = `

Answer text:`;
