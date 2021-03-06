module.exports = {
  showLogs: true,
  saveDebugData: false,  
  appName: 'Cypress Example',
  batchName: 'Cypress Bitbucket Example',
  matchLevel: 'Strict',
  concurrency: 13,
  apiKey: process.env.APPLITOOLS_API_KEY,
  batchId: process.env.APPLITOOLS_BATCH_ID,
  browser: [
      // { deviceName: 'Nexus 6P', screenOrientation: 'portrait',  name: 'chrome' },
      // { deviceName: 'Nexus 6P', screenOrientation: 'landscape', name: 'chrome' },
      // { deviceName: 'iPhone X', screenOrientation: 'portrait',  name: 'chrome' },
      // { deviceName: 'iPhone X', screenOrientation: 'landscape', name: 'chrome' },
      // { width: 1200, height: 700, name: 'ie10'    },
      // { width: 1200, height: 700, name: 'ie11'    },
      // { width: 1200, height: 700, name:  'edge'    },
      { width: 1200, height: 700, name: 'chrome'  },
      // { width: 1200, height: 700, name: 'firefox' },
      // { width: 1200, height: 700, name: 'safari'  },
      // { width: 800, height: 800, name: 'chrome-one-version-back'  },
      // { width: 800, height: 800, name: 'firefox-two-versions-back' },
      { width: 800, height: 800, name: 'safari-one-version-back'  },
   ],
}

// Replace [CommitSha] with the commit SHA associated with the CI build.
// Replace [ApiKey] with the API key that was set for use with visual testing.
// https://eyes.applitools.com/api/externals/bitbucket/servers/bitbucket.org/commit/[CommitSha]/complete?apiKey=[apiKey]