module.exports = {
  apps: [{
    name: 'node-aws',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-228-15-5.sa-east-1.compute.amazonaws.com',
      key: '~/rede-key.pem',
      ref: 'origin/master',
      repo: 'git@github.com:Biciato/node-aws.git',
      path: '/home/ubuntu/node-aws',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
