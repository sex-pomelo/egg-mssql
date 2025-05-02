/// <reference types="node" />

import {
    Application,
    Context,
    Agent,
  } from 'egg';

interface EggMssqlOption {
    user: string
    password: string
    server: string
    port: number
    /** Once you set domain, driver will connect to SQL Server using domain login */
    domain?: string
    database: string
    /** Connection timeout in ms (default: 15000) */
    connectionTimeout?: number

    /** Request timeout in ms (default: 15000) */
    requestTimeout ?: number

    /**  Parse JSON recordsets to JS objects (default: false) */
    parseJSON?: boolean

    /** Return row results as a an array instead of a keyed object. Also adds columns array. (default: false) */
    arrayRowMode?: boolean
    
    pool?: {
        /** The minimum of connections there can be in the pool (default: 0). */
        min: number

        /** The maximum number of connections there can be in the pool (default: 10). */
        max: number

        /**The Number of milliseconds before closing an unused connection (default: 30000). */
        idleTimeoutMillis?: number
    }

    options: {
        /** whether or not the connection will be encrypted (default: `true`) */
        encrypt?: boolean

        /** whether or not use UTC time for values without time zone offset (default: true) */
        useUTC?: boolean

        /** Application name used for SQL server logging */
        appName?: string

        enableArithAbort?: boolean,

        /** Set to true if using self-signed certificates(default: false) */
        trustServerCertificate?: boolean 
    },
}


interface EggMssqlOptions {
    clients:  { [key:string]: EggMssqlOption };
}

declare module 'egg' {



interface EggAppConfig {
    mssql: EggMssqlOptions;
}

}