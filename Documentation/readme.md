# wegowhereFrontendTask

- This is the solution of this [Assignment](https://wegowhere.notion.site/Full-Stack-Task-e71d0a28cef944d8b46723623dabaa81). To be a better solution, current frontend solution is integrated with the API of this [backend solution](https://github.com/htetaungkhant/wegowhereBackendTask.git). So, to be able to smoothly run the frontend solution, you need to quickly start the backend microservices first before you start this current frontend application.
- Another reason for using our own proxy [backend solution](https://github.com/htetaungkhant/wegowhereBackendTask.git) is cause of security. Because we can completely embedded the [omise payment gateway](https://docs.opn.ooo/documents-api) at our proxy backend. For example, if we use omise secret key at the frontend, attackers can get that secret key by doing "reverse engineering" method of our binary bundle.

## For dependancies installation, run
```sh
npm install
```

Recommended Nodejs Version is ***20.13.1*** or higher. 

## Quick Start
### For IOS, run
```sh
npx expo run:ios
```

### For Android, run
```sh
npx expo run:android
```

To test this project at the **test mode** of Omise payment gateway, you can use these [example cards](https://docs.opn.ooo/api-testing).

I used "react navigation" instead of "expo router" according to the useful tip of the question.

Currently, I just stored the data of the cards into the redux store. So, I didn't persist the data of the cards into the async storage for security reason. The better way is to encrypt the data of the cards before storing into the redux store. Or the best is storing at the Backend. I will fix this later.

If you would like to know details of this project, you can check each git commit.

## Further Steps (Remaining...)
- To upgrade the authentication system such as otp.
