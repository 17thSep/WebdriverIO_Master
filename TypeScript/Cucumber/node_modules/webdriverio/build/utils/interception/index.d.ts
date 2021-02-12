import { WaitForOptions } from '../../types';
import { MockFilterOptions, MockOverwrite, MockResponseParams, Matches } from './types';
import type Protocol from 'devtools-protocol';
export default class Interception {
    url: string;
    filterOptions: MockFilterOptions;
    browser: WebdriverIO.Browser;
    respondOverwrites: {
        overwrite?: MockOverwrite;
        params?: MockResponseParams;
        sticky?: boolean;
        errorReason?: Protocol.Network.ErrorReason;
    }[];
    matches: Matches[];
    constructor(url: string, filterOptions: MockFilterOptions | undefined, browser: WebdriverIO.Browser);
    get calls(): Matches[] | Promise<Matches[]>;
    waitForResponse({ timeout, interval, timeoutMsg, }?: WaitForOptions): Promise<boolean>;
}
//# sourceMappingURL=index.d.ts.map