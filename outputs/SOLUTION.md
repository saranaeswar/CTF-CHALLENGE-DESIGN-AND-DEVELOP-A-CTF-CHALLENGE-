# Solution: DeskVault Support Portal

## Goal

Find the flag using only browser DevTools.

## Steps

1. Open `challenge/index.html` in the browser.
2. Try any incorrect login, such as `test` / `test`.
3. The page replies with access denied.
4. Open DevTools and go to the **Elements** tab.
5. Find the hidden button:

```html
<button id="openSignup" class="secondary" hidden>Open signup portal</button>
```

6. Remove the `hidden` attribute from the button.
7. Click **Open signup portal**.
8. Enter any username and password in the signup overlay.
9. Click **Sign up**.
10. The verification portal appears and reveals the flag.

## Flag

`FLAG{hidden_signup_portal_found}`

## Why This Works

The signup portal is not protected. It is only hidden with an HTML attribute:

```html
hidden
```

Because users can inspect and modify front-end HTML in DevTools, hidden interface elements should never be treated as secure.
