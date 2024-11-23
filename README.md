# browse-with-u

An AI companion that browses the web WITH you, not for you.

## How to run

```
pnpm i
pnpm dev
```

### Hackathon Deliverables
- 3 minute demo
- 1 minute video
- 1 main visual

### What?
An agent that identifies your objectives and provides suggestions.

Use case (need to come up with more)
- user is looking for food and agent finds him food that fits his itinerary and preferences (allergies etc)
- form filling 
- writing thrive map report
- user is doing research on a topic, and is constantly alternating between reading blogs/articles and his google doc that stores his learnings/ideas

### How? 
1. Agent collects data from the page states visited by the user
2. Agent identifies objectives
3. Agent provides suggestions to objectives based on STM and LTM

- STM: short term memory: current and past page states (with functional limit)
- LTM: long term memory: user defined information (resume, travel itinerary, google docs, mum's name, preferences etc)

P0 Core functionalities
- Agent can store page states from user browsing (STM)
- Agent can store user-defined information (LTM)
- Agent can identify objectives 
- Agent can give suggestions based on LTM and STM


P1:
- Agent can add things to LTM using user's answers to preference questions

Preference questions: yes/no questions regarding user preferences (do u like ramen? | are u allergic to peanuts?) + if not, what? (user can provide a text)


short term memory (page states) is collected by the pages he has visited
long term memory is user defined + user-added information based on preference questions

preference questions: yes/no questions to user preferences (do u like ramen? | are u allergic to peanuts?)
add-on: if not, what isit? (user can provide a text)
