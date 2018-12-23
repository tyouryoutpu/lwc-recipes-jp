import { createElement } from 'lwc';
import ApexWireMethodToProperty from 'c/apexWireMethodToProperty';
import { registerLdsTestWireAdapter } from '@salesforce/wire-service-jest-util';
import getContactList from '@salesforce/apex/ContactController.getContactList';

const mockContacts = require('./data/contacts.json');

const getContactListAdapter = registerLdsTestWireAdapter(getContactList);

describe('c-apex-wire-method-to-property', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        // Prevent data saved on mocks from leaking between tests
        jest.clearAllMocks();
    });

    describe('Render UI', () => {
        it('with two contacts', () => {
            const element = createElement('c-apex-wire-method-to-property', {
                is: ApexWireMethodToProperty
            });
            document.body.appendChild(element);
            getContactListAdapter.emit(mockContacts);
            return Promise.resolve().then(() => {
                const details = element.shadowRoot.querySelectorAll('p');
                expect(details.length).toBe(2);
            });
        });
    });
});
