# browse-with-u

An AI companion that browses the web WITH you, not for you.

## How to run

```
pnpm i
pnpm dev
```

### Hackathon Deliverables

- 3 minute demo
  > user is looking for food and agent finds him food that fits his itinerary and preferences (allergies etc)
  > user is filling up a job application for supabase and agent gives recommendations
  > user is writing a report, toggling between reading blogs/articles and his google doc, and agent gives suggestion
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

- store list of 10 most recent page states from user browsing (STM) (DONE)
- store user-defined information (LTM) (DONE)
  > LTM is a single string
- identify objectives (DONE)
  > input: list of page states,
  > output: objective of the user
- give suggestions to objectives based on LTM and STM (DONE)
  > input: objective, LTM, STM
  > output: suggestions

P0 demo:

- user is looking for food and agent finds him food that fits his itinerary and preferences (allergies etc)
  > user searches for "food near me"
  > popup shows "ramen nagi is 50 meters away from you, does not have peanuts" (based on LTM that user loves ramen and is allergic to peanuts)
- user is filling up a job application for supabase and agent gives recommendations
  > user is on the page for "job application for supabase"
  > popup returns resume in bullet points and user can easily crtl-c and crtl-v

P1/P2

preprocessing:

- We have a function that extracts domain and query params from url/trims the url of unnecessary content (DONE)
- page states store url params and domain instead of entire url (DONE)
- Agent has a functional window of recent page states.
- Agent can add things to LTM using user's answers to preference questions
- Agent can identify if user is in scrolling mode (dont track page states)
- use screenshots to get more context
- press tab to autocomplete

P1/P2 demo:

- agent asks preference questions and adds to LTM
- press tab to autocomplete while filling up job application
- agent only collects page states when user is not in scrolling mode
- agent can interpret data from screenshots effectively.

Preference questions: yes/no questions regarding user preferences (do u like ramen? | are u allergic to peanuts?) + if not, what? (user can provide a text)

short term memory (page states) is collected by the pages he has visited
long term memory is user defined + user-added information based on preference questions

preference questions: yes/no questions to user preferences (do u like ramen? | are u allergic to peanuts?)
add-on: if not, what isit? (user can provide a text)
