# react-native-skeleton

## Set up

Run the folllowing commands:

```shell
$ git clone <this_repo_url> <directory_with_new_project_name>
$ cd <directory_with_your_new_project_name>
$ yarn install
$ yarn rename <"NewProjectName">
$ yarn install
$ yarn ios-gems
$ yarn android-gems
```

## Set up VSCode

Install the following plugins:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- [ES7 Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

- [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)

## Running the app

Start the application on Android:

```shell
$ yarn run-android
```

Start the application on iOS:

```shell
$ yarn pods
$ yarn run-ios
```

Once the application has been deployed to the device/simulator, you can restart the metro bundler running

`$ yarn start`

## Recommended tools

- [Cocoapods v1.9.0](https://github.com/CocoaPods/CocoaPods)
- [Reactotron](https://github.com/infinitered/reactotron)
- [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint)
- [Prettier](https://prettier.io/)

## Linting

To preserve code styling, we add a pre-commit hook that will check the staged using `eslint`.

You can lint the code manually:

`$ yarn lint`

This will run against all files in the `src` folder.

To run the pre-commit hook manually:

`$ yarn lint-staged`

If you faced issue when committing, check the issues reported. Each issue should contain the violated rule. Go to [eslint rules](https://eslint.org/docs/rules/) page and check the rule documentation.

## Relevant technologies

- [React Native](https://facebook.github.io/react-native/docs/getting-started)
- [Redux-Saga](https://github.com/redux-saga/redux-saga)
- [React Navigation](https://github.com/react-navigation/react-navigation)
- [React Native Config](https://github.com/luggit/react-native-config)
- [CircleCI](https://circleci.com/)
- [Fastlane](https://fastlane.tools/)

## App Structure

- **.circleci**: contains circleci setup
- **android**: contains android project
- **ios**: contains ios project
- **scripts**: contains scripts
- **src**: app code
  - **app**: app navigation setup here
  - **constants**: app constants
  - **navigation**: app navigation setup here
  - **res**: common resources
    - **colors**: app colors
    - **fonts**: app fonts
    - **images**: app images
    - **strings**: app strings and localizations
    - **styles**: common styles
  - **services**: add common global services here
    - **networking**: firebase services setup here
    - **networking**: network service setup here
    - **reactotron**: reactotron tool setup here
    - **storage**: Async Storage setup here
  - **state**: app store setup here (managed with Redux)
    - **ducks**: ducks files following:
      - [Ducks Modular Redux](https://github.com/erikras/ducks-modular-redux)
      - [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action)
  - **utils**: helper methods
  - **views**: components declaration here
    - **ScreenA**: example screen
    - **ScreenB**: example screen
    - **shared**: any component to be used for more than one module of the application should go here

## Adding new images (example image in src/res/images/)

- Name the image file with your naming style
- Add the image file to src/res/images/
- Run `yarn images`

## Adding custom fonts (example font in src/res/fonts/)

- Name the fonts file with its full name
- Add the fonts file to src/res/fonts/
- Run `yarn link-pkgs`
- Run `yarn fonts`

## NOTES

- Don't manually edit files `src/res/images/index.ts` and `src/res/fonts/index.ts`. Instead, use scripts `yarn images` and `yarn fonts`.

- This app uses `react-native-config` for handling global configurations (like server url, google api key, ..etc).
