import type { ElementHandle } from 'puppeteer-core/lib/cjs/puppeteer/common/JSHandle';
export default class ElementStore {
    private _index;
    private _elementMap;
    set(elementHandle: ElementHandle): string;
    get(index: string): Promise<ElementHandle<Element> | undefined>;
    clear(): void;
}
//# sourceMappingURL=elementstore.d.ts.map