# Create your Controllers Here,

- Controllers manage your Business logic
- For ex. of an Ecommerce website,
  - Users
  - Cart
  - Products
  - Payments
  - Campaign
  - GiftCards
  - Subscriptions
  - Etc...

### Payment Orders Response Object

```
{
    "msg": "Order Created",
    "status": true,
    "orderDetails": {
        "id": "order_N7w4SKrPVmR10t",
        "entity": "order",
        "amount": 24000,
        "amount_paid": 0,
        "amount_due": 24000,
        "currency": "INR",
        "receipt": "order-receipt#-1",
        "offer_id": null,
        "status": "created",
        "attempts": 0,
        "notes": {
            "key1": "test note from customer",
            "key2": "test note from customer again"
        },
        "created_at": 1701620278
    }
}
```
