import {test , expect} from '@playwright/test';

test.describe('Group1',async()=>{

    test('Test1',async() =>{
        console.log("this is Test1......")
    });

    test('Test2',async()=>{
        console.log("this is Test2...")
    });

});

test.describe('Group2',async()=>{

    test('Test1',async() =>{
        console.log("this is Test1......")
    });

    test('Test2',async()=>{
        console.log("this is Test2...")
    });

});

//  npx playwright test grouping_describe.spec.ts --project=chromium --grep "Group1"
// to execute particular group we can use this command

//Nested Groups

test.describe('E-Commerce', () => {

    test.describe('Login to app', () => {

        test('Valid login check', async () => {
            console.log(" this is Test1 .......")
        });

        test('Invalid login check', async () => {
            console.log(" this is Test2 .......")
        });
    });

    test.describe('Cart', () => {

        test('Add item to cart', async () => {
            console.log(" this is Test3 .......")
        });

        test('Remove item from cart', async () => {
            console.log(" this is Test4 .......")
        });

    });

});

// npx playwright test grouping_describe.spec.ts --project=chromium --grep "E-Commerce"
// to execute complete nested group 

//  npx playwright test grouping_describe.spec.ts --project=chromium --grep "Cart"
//  To execute particular part in nested group