import { createStore } from 'vuex'

import core from './modules/core'
import attachment from './modules/attachment'
export const store = createStore({
   modules: {
      core,
      attachment,
   },
})
