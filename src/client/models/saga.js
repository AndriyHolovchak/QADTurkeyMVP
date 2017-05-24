// Effects
import { spawn } from 'redux-saga/effects'

// Watchers
import document from './document/saga'

// Subroutines
export default function* root() {
  yield [
    spawn(document)
  ]
}
