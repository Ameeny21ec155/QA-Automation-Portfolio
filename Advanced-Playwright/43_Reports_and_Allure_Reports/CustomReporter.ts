import {
    Reporter,
    TestCase,
    TestResult,
    FullResult
} from '@playwright/test/reporter';

class CustomReporter implements Reporter {

    onTestBegin(test: TestCase) {
        console.log(`Starting test: ${test.title}`);
    }

    onTestEnd(test: TestCase, result: TestResult) {
        console.log(`Finished test: ${test.title}`);
        console.log(`Status: ${result.status}`);
    }

    onEnd(result: FullResult) {
        console.log(`Test run finished with status: ${result.status}`);
    }
}

export default CustomReporter;