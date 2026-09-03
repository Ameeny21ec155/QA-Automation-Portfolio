import {test , expect} from "@playwright/test"

test("Validate product & static table",async({page})=>{

// open the webpage

await page.goto('https://sdetqa.vercel.app/autoplay.html ');

// Functional Validations 

const table=page.locator('table').first();
const headers=table.locator('thead th');
const rows=table.locator('tbody tr');

// 1 & 2. Verify row and column count

await expect(headers).toHaveCount(5);
await expect(rows).toHaveCount(4);

// 3. Read all data from 3rd row 
// (index 2 → 3rd row including header) →
//  Expected: Keyboard | Electronics | $79 | 0 | Out of Stock

const thirdRowCells=rows.nth(2).locator('td');
console.log(await thirdRowCells.allTextContents());

await expect(thirdRowCells).toHaveText([ 'Keyboard', 'Electronics', '$79', '0', 'Out of Stock' ]);

// 4. Read all data from the table (excluding header) 
//  Expected: 4 rows of product data 

const tableData: string[][]=[]
const rowCount=await rows.count()

console.log("Product Name \t Category \t Price \t Stock \t Status")
for(let r=0; r<rowCount ;r++){
    const cellValues = await rows.nth(r).locator('td').allInnerTexts(); // Get all cell values for the 
    tableData.push(cellValues); // store the cell values in the tableData array
    console.log(`Row ${r +1}:`,cellValues);
}
console.log ("Particular row:",tableData[1])

//5.Print/Get all product names ->
//  Expected: Laptop , Mouse , Keyboard , Monitor

const productNames=[];

for(let r=0; r<tableData.length; r++){
    //console.log(tableData[r][0]);
    productNames.push(tableData[r][0]);
    
}
console.log("Product Names:",productNames)

// 6.Print products where Stock = 0 → Expected: Keyboard 

const outOfStock=[];

for(let r=0;r<tableData.length;r++){
    if(tableData[r][3]==='0'){
        outOfStock.push(tableData[r][0])
    }
}
expect(outOfStock).toEqual(['Keyboard']);

// 7. Print products where Status = "In Stock" 
// → Expected: Laptop, Mouse, Monitor 

const inStock=[];

for(let r=0;r<tableData.length;r++){
    if(tableData[r][4]==='In Stock'){
        inStock.push(tableData[r][0])
    }
}
console.log("In-stock products:",inStock)
expect(inStock).toEqual(['Laptop','Mouse','Monitor']);

// 8. Count number of products "In Stock" → Expected: 3 
// 9.Count number of products "Out of Stock" → Expected: 1

expect(outOfStock.length).toBe(1);
expect(inStock.length).toBe(3);

// 10. Get price of a specific product (e.g., Mouse) → Expected: $29

let mousePrice;

for(let r=0;r<tableData.length;r++){
    if(tableData[r][0]==='Mouse'){
        mousePrice=tableData[r][2];
        break;
    }
}

expect(mousePrice).toBe('$29');

// Data Processing

// 11. Calculate total price of all products → Expected: 999 + 29 + 79 + 349 = 1456

let totalPrice=0;

for(let i=0;i<tableData.length;i++){
    totalPrice += Number(tableData[i][2].replace('$',''));

}
expect(totalPrice).toBe(1456);
});