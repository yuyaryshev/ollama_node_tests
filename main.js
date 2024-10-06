import ollama from 'ollama'

const response = await ollama.chat({
  model: 'llama3.1:8b',
  messages: [{ role: 'user', content: 'Why is the sky blue?' }],
});

console.log(response.message.content);