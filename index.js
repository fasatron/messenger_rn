import { AppRegistry } from 'react-native'
import Amplify from 'aws-amplify'

import { App } from '@components'

import { name as appName } from './app.json'
import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig)

AppRegistry.registerComponent(appName, () => App)
