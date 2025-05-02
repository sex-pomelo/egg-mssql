'use strict';

exports.keys = '123456';
exports.mssql = {
  clients: {
    db1: {
      server: '127.0.0.1',
      user: 'sa',
      port: 11433,
      password: '',
      database: 'plat',
      options: {
        encrypt: false,
        enableArithAbort: true,
        // trustServerCertificate: true, // Set to true if using self-signed certificates
      },
    },
    db2: {
      server: '127.0.0.1',
      user: 'sa',
      port: 11433,
      password: '',
      database: 'plat',
      options: {
        encrypt: false,
        enableArithAbort: true,
        // trustServerCertificate: true, // Set to true if using self-signed certificates
      },
    },
  },
};
