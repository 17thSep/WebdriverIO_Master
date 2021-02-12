/// <reference types="node" />
import { EventEmitter } from 'events';
import { PickleFilter } from '@cucumber/cucumber';
import { messages } from '@cucumber/messages';
import CucumberEventListener from './cucumberEventListener';
import type { ReporterOptions } from './types';
declare class CucumberReporter {
    private _options;
    private _cid;
    private _specs;
    private _reporter;
    eventListener: CucumberEventListener;
    failedCount: number;
    private _tagsInTitle;
    private _scenarioLevelReport;
    private _featureStart?;
    private _scenarioStart?;
    private _testStart?;
    constructor(eventBroadcaster: EventEmitter, pickleFilter: PickleFilter, _options: ReporterOptions, _cid: string, _specs: string[], _reporter: EventEmitter);
    handleBeforeFeature(uri: string, feature: messages.GherkinDocument.IFeature): void;
    handleBeforeScenario(uri: string, feature: messages.GherkinDocument.IFeature, scenario: messages.IPickle): void;
    handleBeforeStep(uri: string, feature: messages.GherkinDocument.IFeature, scenario: messages.IPickle, step: messages.Pickle.IPickleStep | messages.TestCase.ITestStep): void;
    handleAfterStep(uri: string, feature: messages.GherkinDocument.IFeature, scenario: messages.IPickle, step: messages.Pickle.IPickleStep | messages.TestCase.ITestStep, result: messages.TestStepFinished.ITestStepResult): void;
    afterHook(uri: string, feature: messages.GherkinDocument.IFeature, scenario: messages.IPickle, step: messages.TestCase.ITestStep, result: messages.TestStepFinished.ITestStepResult): void;
    afterTest(uri: string, feature: messages.GherkinDocument.IFeature, scenario: messages.IPickle, step: messages.Pickle.IPickleStep, result: messages.TestStepFinished.ITestStepResult): void;
    handleAfterScenario(uri: string, feature: messages.GherkinDocument.IFeature, scenario: messages.IPickle, result: messages.TestStepFinished.ITestStepResult): void;
    handleAfterFeature(uri: string, feature: messages.GherkinDocument.IFeature): void;
    emit(event: string, payload: any): void;
    getTitle(featureOrScenario: messages.GherkinDocument.IFeature | messages.IPickle): string | null | undefined;
}
export default CucumberReporter;
//# sourceMappingURL=reporter.d.ts.map