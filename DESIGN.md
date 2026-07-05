# Design Document

## Challenge Name

DeskVault Support Portal

## Vulnerability Concept

This challenge demonstrates insecure client-side authorization. The web page stores a user's role in `localStorage` and trusts that value to decide whether the analyst dashboard should be shown.

## Real-World Parallel

Real applications sometimes store display preferences, tokens, or role labels in the browser. Storing data in the browser is not automatically wrong, but trusting browser-controlled data for authorization is dangerous. A real backend must verify permissions on the server before returning protected information.

## Difficulty

Easy.

## Skills Tested

- Opening browser DevTools
- Inspecting the Application tab
- Understanding `localStorage`
- Recognizing client-side trust issues
- Refreshing a page to test changed browser state

## Intended Learning Outcome

Students should learn that anything stored or checked only on the client side can be viewed and changed by the user. Security decisions must be enforced by trusted server-side logic.
