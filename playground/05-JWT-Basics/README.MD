### Generate a random JWT secret [Source](https://mojitocoder.medium.com/generate-a-random-jwt-secret-22a89e8be00d)
```javascript
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
