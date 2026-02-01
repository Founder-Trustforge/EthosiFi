import { streamText } from 'ai'

const result = streamText({
  model: 'alibaba/qwen3-coder',
  prompt: 'What is the history of the San Francisco Mission-style burrito?'
})
