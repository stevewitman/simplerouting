module.exports = {
  name: 'simplerouting',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/simplerouting',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
