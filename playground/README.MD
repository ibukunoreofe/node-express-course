https://expressjs.com/en/4x/api.html

To debug using --inspect, you can use both node and nodemon
like 
```bash
nodemon --inspect app.js
```

you need to click the link provided to debug because it contains both host:port/token
like this  ws://127.0.0.1:**9229**/**7e9b6a86-0c35-4127-9d95-1ffb7afd865d**

Same with using chrome://inspect. You need to click it again if the token changes 
else you won't be able to interract

**Important note:** When using nodemon, the token changes 
each time it restarts so just click the new link again
