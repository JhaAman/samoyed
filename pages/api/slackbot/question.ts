/*
  The entry point for the Slack Bolt app.
*/

import { NextApiRequest, NextApiResponse } from "next";

// Setup OpenAI object
import OpenAIConstructor from "openai-api";
import { simple_hash } from "../answer/quick";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAIConstructor(OPENAI_API_KEY || ""); // the openai object

// Entry point for the function
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: {},
    body: { email, questionText, threadMessages },
    method,
  } = req;
  res.send({ message: "Answer" });

  const email_hash = simple_hash(email);

  const prompt = promptTemplate + questionText + `AI:`;

  switch (method) {
    case "POST":
      const aiResponse = await getOpenAIRes(prompt, email_hash);
      const answer = aiResponse.data.choices[0].text.trim();

      res.status(200).json({ answer: answer });
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

async function getOpenAIRes(prompt: string, hash: string) {
  const res = await openai.complete({
    engine: "davinci-plus", // old version was davinci-codex
    prompt: prompt,
    maxTokens: 256,
    temperature: 0.5,
    topP: 1,
    stop: "---",
    user: hash,
  });
  return res;
}

export default handler;

export const promptTemplate = `The following is a conversation with a ReactJS engineer and a helpful and descriptive AI chatbot that helps them develop. The AI always ends their responses with "---".

---

User: 
I'm trying to use useHistory and import it, but it won't let me use the history object, what to do?
\`\`\`
import { useHistory } from "react-router-dom";

function HomeButton() {
  function handleClick() {
    history.push("/home");
  }
}
\`\`\`

AI: 
Looks like you've imported the useHistory hook, but you haven't used it yet. You'll need to use it in the function you've defined.
Here's an example:
\`\`\`
import { useHistory } from "react-router-dom";

function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
\`\`\`

---

User:
`;
