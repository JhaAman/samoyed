/* 
  pages/api/answer/quick.ts
  ------------------------
  The core serverless function that gets answers for questions.
  Deployed to Vercel Serverless.
 */

import { NextApiRequest, NextApiResponse } from "next";
import * as demo from "../../../prompts/demo_prompts";

import OpenAI from "openai-api";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY as string;
const openai = new OpenAI(OPENAI_API_KEY);

type Response = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const {
    query: { id, name },
    body: { question, answerType, email },
    method,
  } = req;

  // TODO: based on the answerType, use the correct prompt
  let template = promptTemplate;
  if (answerType === "Explain") {
    template = demo.explain_template;
  } else if (answerType === "Code") {
    template = demo.code_template;
  }
  // const template = promptTemplate;
  // const demo_prompt = demo.error_prompt;
  const demo_answer = demo.explain_answer;

  const prompt = template + question + demo_answer;

  const email_hash = simple_hash(email);

  switch (method) {
    case "POST":
      const aiResponse = await getAIResponse(prompt, email_hash);
      const answer = aiResponse.data.choices[0].text.trim();
      console.log(answer);
      // Update or create data in your database
      res.status(200).json({ answer: answer });
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function getAIResponse(prompt: string, hash: string) {
  const res = await openai.complete({
    engine: "code-davinci-001", // old version was davinci-codex
    prompt: prompt,
    maxTokens: 256,
    temperature: 0.5,
    topP: 1,
    stop: "###",
    user: hash,
  });
  return res;
}

export const simple_hash = (input: string): string => {
  return Array.from(input)
    .reduce((hash, char) => 0 | (31 * hash + char.charCodeAt(0)), 0)
    .toString();
};

export const promptTemplate = `###

Question Text: 
How do I navigate programmatically in React?

I know I can create <Link /> objects to click and navigate, but how do I navigate based on a programmatic event happening?

Answer text:
You can use the \`useHistory\` hook to programmatically navigate pages in React. This only works in the new functional React style. 

Here's an example:
\`\`\` JS
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

Here's a link to the official [documentation](https://v5.reactrouter.com/web/api/Hooks/usehistory]

###

Question Text:`;
