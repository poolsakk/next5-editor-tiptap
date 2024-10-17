/** @type {import("next").NextConfig} */

const path = require('path');

module.exports = {
    output: "standalone",
    webpack: (config, { isServer }) => {
        if (!isServer) {
          // Ensure that all imports of 'yjs' resolve to the same instance
          config.resolve.alias['yjs'] = path.resolve(__dirname, 'node_modules/yjs')
        }
        return config
    },
}
