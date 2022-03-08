import 'react-native-gesture-handler'
import { AppRegistry, LogBox } from 'react-native'
import Amplify from 'aws-amplify'

import { App } from '@components'

import { name as appName } from './app.json'
import awsconfig from './src/aws-exports'

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
])

Amplify.configure(awsconfig)

AppRegistry.registerComponent(appName, () => App)
