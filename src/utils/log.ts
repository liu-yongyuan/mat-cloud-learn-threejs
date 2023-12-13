import { BaseEnv } from './env';

export const logStandPrefix = `[mat-log] [biz-env: ${BaseEnv}] [${new Date().toLocaleString()}]`;

const log = (prefix: string, ...args: any) => {
  if (BaseEnv === 'prod') {
    return;
  }
  console.log(logStandPrefix, `[${prefix}]`, ...args);
};

export { log };
