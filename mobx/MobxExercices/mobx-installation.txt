npm i mobx mobx-react --save
npm i metro-react-native-babel-preset @babel/preset-flow @babel/plugin-proposal-decorators --save-dev


{
  "presets": [
    "module:metro-react-native-babel-preset"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
}
