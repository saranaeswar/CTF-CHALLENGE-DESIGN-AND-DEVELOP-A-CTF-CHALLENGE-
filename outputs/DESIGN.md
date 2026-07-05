# Design Document

## Challenge Name

DeskVault Support Portal

## Vulnerability Concept

This challenge demonstrates a hidden signup page vulnerability. The signup portal exists in the HTML but is hidden with the `hidden` attribute, so a student can reveal it using browser DevTools.

## Real-World Parallel

Real applications sometimes hide unfinished admin pages, debug buttons, or registration routes in the front end. Hiding an element does not protect it. Real access control must happen on the server.

## Difficulty

Easy.

## Skills Tested

- Opening browser DevTools
- Inspecting the Elements tab
- Reading HTML attributes
- Modifying page HTML in DevTools
- Recognizing hidden UI is not access control

## Intended Learning Outcome

Students should learn that front-end hiding is only a display choice. Sensitive flows such as signup, admin access, or verification must be protected by real authorization checks.
