# SauceDemo end-user test plan

## Application Overview

Test plan for the SauceDemo e-commerce demo site based on UI exploration. Covers the five core end-user operations: login, browsing products, adding to cart, checkout, and order completion.

## Test Scenarios

### 1. SauceDemo core user flows

**Seed:** `tests/seed.spec.ts`

#### 1.1. User can log in and view the product catalog

**File:** `tests/sauce-demo/login.spec.ts`

**Steps:**
  1. Open the SauceDemo homepage at https://www.saucedemo.com
    - expect: The login page is displayed with the Swag Labs branding and the username/password fields.
  2. Enter standard_user in the username field and secret_sauce in the password field
    - expect: The credentials are accepted as typed.
  3. Click the Login button
    - expect: The user is redirected to the inventory page and sees the product catalog.

#### 1.2. User can browse products and add an item to the cart

**File:** `tests/sauce-demo/browse-and-add-to-cart.spec.ts`

**Steps:**
  1. Start from the inventory page after login
    - expect: The catalog shows multiple products with names, descriptions, prices, and Add to cart buttons.
  2. Review the visible product list and choose one item, such as Sauce Labs Backpack
    - expect: The selected product details are visible and the Add to cart button is available for that item.
  3. Click Add to cart on the chosen product
    - expect: The button changes state to reflect the item being added, and the cart badge count increases to 1.
  4. Open the shopping cart from the cart icon/link
    - expect: The cart page displays the added product with quantity, description, and pricing details.

#### 1.3. User can manage cart contents before checkout

**File:** `tests/sauce-demo/cart-management.spec.ts`

**Steps:**
  1. Open the cart page after adding one or more products
    - expect: The cart shows the selected product(s), pricing details, and checkout controls.
  2. Click Continue Shopping
    - expect: The user returns to the inventory page and can continue browsing products.
  3. Add a second item to the cart if needed, then reopen the cart
    - expect: The cart badge and cart summary update to include both selected items.
  4. Click Checkout
    - expect: The user is taken to the checkout information page.

#### 1.4. User can enter checkout information and review the order

**File:** `tests/sauce-demo/checkout-review.spec.ts`

**Steps:**
  1. On the Checkout: Your Information page, enter a valid first name, last name, and postal code
    - expect: The form accepts the input values without error.
  2. Click Continue
    - expect: The user is taken to the Checkout: Overview page showing the order summary and totals.
  3. Review the item list, item total, tax, and total amount
    - expect: The order summary matches the selected cart contents and includes the correct total values.
  4. Click Cancel or proceed to finish based on the intended path
    - expect: The app either returns to the previous page or continues to the final confirmation step.

#### 1.5. User can complete the purchase and confirm the order

**File:** `tests/sauce-demo/purchase-confirmation.spec.ts`

**Steps:**
  1. From the Checkout: Overview page, click Finish
    - expect: The user is redirected to the checkout complete confirmation page.
  2. Verify the confirmation page content
    - expect: The page shows a success message, a confirmation that the order has been dispatched, and a Back Home action.
  3. Click Back Home
    - expect: The user returns to the inventory page and the cart is reset for a fresh shopping session.
