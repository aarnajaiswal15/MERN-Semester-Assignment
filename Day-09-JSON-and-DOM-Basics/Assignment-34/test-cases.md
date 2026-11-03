
# Assignment 34 – Test Scenarios

| Test | Function | Input | Expected Result |
|---|---|---|---|
| 1 | validateCatalogue() | Valid product array | true |
| 2 | validateCatalogue() | Empty array | false |
| 3 | findProductById() | ID: 1 | Laptop |
| 4 | findProductById() | ID: 10 | undefined |
| 5 | filterByCategory() | Electronics | Laptop, Mobile |
| 6 | calculateTotalValue() | All products | 79000 |

## Conclusion

The catalogue data was stored in JSON format.
Reusable JavaScript utility functions were created
to validate, search, filter and calculate product data.

All test scenarios were checked against their expected results.
