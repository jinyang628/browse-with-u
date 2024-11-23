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
Agent stores 2 modes of memory:
- short term memory: current and past page states (with functional limit)
- long term memory: user defined information (resume, travel itinerary, google docs, mum's name, preferences etc)

short term memory (page states) is collected by the pages he has visited
long term memory is user defined + user-added information based on preference questions

preference questions: yes/no questions to user preferences (do u like ramen? | are u allergic to peanuts?)
add-on: if not, what isit? (user can provide a text)

### END ACTIONS
Data collection:
- STM
1. Agent can collect and store page states 
- LTM
1. Agent can collect and store user-defined information
2. Agent can ask preference questions and store answers to LTM

Objective identification:
- Agent can identify user objectives based on STM

Suggestions:
- Agent can give suggestions based on LTM and STM

P0
- Agent can store page states from user browsing
- Agent can store user-defined information
- Agent can identify objectives 
- Agent can give suggestions based on LTM and STM

### Identifying user objectives

1. What user searched for
2. The pages user has visited
