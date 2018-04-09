'use strict';

const AWS = require('aws-sdk');

class S3Writer {
  constructor() {
    this.s3 = new AWS.S3();
  }

  writeEntries() {
    let entries = []
    let json = JSON.stringify(entries, null, 2);
    let params = {
      Bucket: 'vicn.io',
      Key: `victorTest.json`,
      Body: json,
      ACL: 'public-read',
      ContentType: 'application/json'
    };
    return this.s3.putObject(params).promise()
      .then(() => { 
          console.log('DONE DONE DONNNNNNE!')
       })
       .catch(err => {
            console.error('Write entry error!', err)
       })
  }

}

let myWriter = new S3Writer();

myWriter.writeEntries()

