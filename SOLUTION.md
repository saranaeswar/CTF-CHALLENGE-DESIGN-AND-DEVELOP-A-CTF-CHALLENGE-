# Solution: DeskVault Support Portal

## Goal

Find the flag using only browser DevTools.

## Steps

1. Open `challenge/index.html` in the browser.
2. Try any incorrect login, such as `test` / `test`.
3. Notice the hint: "check what the browser stores for this site."
4. Open DevTools.
5. Go to the **Application** tab.
6. In the left sidebar, open **Local Storage** and select the current page.
7. Find the key named `role`. Its value is `guest`.
8. Change the value from `guest` to `analyst`.
9. Refresh the page.
10. The analyst dashboard appears and reveals the flag.

## Flag

`FLAG{local_storage_is_not_a_secret}`

## Why This Works

The page decides whether to show the protected dashboard by checking:

```js
localStorage.getItem("role") === "analyst"
```

Because `localStorage` is controlled by the browser user, it should never be trusted for real access control.
