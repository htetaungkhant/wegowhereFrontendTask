# wegowhereFrontendTask

- [Question](https://wegowhere.notion.site/Full-Stack-Task-e71d0a28cef944d8b46723623dabaa81)

## For dependancies installation, run
```sh
npm install
```

Recommended Nodejs Version is ***20.13.1*** or higher. 

## To start the project
### For IOS, run
```sh
npx expo run:ios
```

### For Android, run
```sh
npx expo run:android
```

To test this project at the **test mode** of Omise payment gateway, you can check example cards [here](https://docs.opn.ooo/api-testing).

I used "react navigation" instead of "expo router" according to the useful tip of the question.

Since I don't have backend solution, I just stored the data of the cards into the redux store. So, I didn't persist the data of the cards into the async storage cause of security reason. The better way is to encrypt the data of the cards before storing into the redux store. And we should use own proxy backend for the omise payment gateway to completely hide the omise secret key from the attackers.

If you would like to know details of this project, you can check each git commit.
