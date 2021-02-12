import Protocols from '@wdio/protocols';
import { WebDriverResponse } from './request';
import { BaseClient } from './types';
export default function (method: string, endpointUri: string, commandInfo: Protocols.CommandEndpoint, doubleEncodeVariables?: boolean): (this: BaseClient, ...args: any[]) => Promise<WebDriverResponse>;
//# sourceMappingURL=command.d.ts.map