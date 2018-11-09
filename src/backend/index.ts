import * as sdk from 'botpress/sdk'

const onServerStarted = (bp: typeof sdk) => {
  bp.logger.warn('🤯  My module worked?!')
}

const onServerReady = (bp: typeof sdk) => {
  bp.logger.warn("Now you're ready!")
}

const config: sdk.ModuleConfig = {
  // Configuration relative to your module
}

const entryPoint: sdk.ModuleEntryPoint = {
  onServerReady,
  onServerStarted,
  config,
  definition: {
    name: 'quick-start-module',
    fullName: 'Quick Start Module'
  }
}

export default entryPoint
