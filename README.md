# chat-api
Chat api for a processing project I'm working on.
Currently deployed at: https://processing-chat-api.herokuapp.com/

## Endpoints
* /status (GET)
  gets api status
* /messages (GET)
  gets all messages
* /messages(POST)
  creates new message
  Params:
  - name
  - message
  
## Example
```https://processing-chat-api.herokuapp.com/messages?name=kai&message=hello```
creates new message with content hello


## Run locally
npm install
npm run dev to run locally with nodemon :5000
