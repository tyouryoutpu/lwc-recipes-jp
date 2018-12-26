import { createElement } from 'lwc';
import ApexImperativeMethod from 'c/apexImperativeMethod';
import getContactList from '@salesforce/apex/ContactController.getContactList';

jest.mock('@salesforce/apex/ContactController.getContactList');

describe('c-apex-imperative-method', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        // Prevent data saved on mocks from leaking between tests
        jest.clearAllMocks();
    });

    describe('Render UI', () => {
        it('with two contacts from Apex', () => {
            // Create initial element
            const element = createElement('c-apex-imperative-method', {
                is: ApexImperativeMethod
            });
            document.body.appendChild(element);
            // Select div for default message check
            const button = element.shadowRoot.querySelector('lightning-button');
            button.dispatchEvent(new CustomEvent('click'));
            // return expect(getContactList()).resolves.toBe('peanut butter');
            return Promise.resolve().then(() => {
                // Select div for conditionally changed text content
                const details = element.shadowRoot.querySelectorAll(
                    'p:not([class])'
                );
                expect(details.length).toBe(2);
            });
        });
    });
});
