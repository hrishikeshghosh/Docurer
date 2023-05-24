import { Configuration, OpenAIApi } from "openai";

export default async (req, res) => {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ flag: false, message: "Invalid Method" });
    }

    const { prompt } = req.query;
    
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openAi = new OpenAIApi(configuration);

    const response = await openAi.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 100,
      temperature: 1,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      // stop: ["\\n"],
    });

    res.status(201).json({ chat: response.data.choices[0].text });
  } catch (error) {
    res.status(401).json({ message: "There was an error" });
    console.log(error);
  }
};

