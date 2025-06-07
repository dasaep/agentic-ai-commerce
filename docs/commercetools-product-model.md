# Commercetools Apparel Product Model

This document outlines a sample product model for men's apparel using [commercetools](https://docs.commercetools.com/learning-model-your-product-catalog/product-modeling/overview). It is inspired by categories on [Amazon Men's Clothing](https://www.amazon.com/Men-Clothing/b/ref=dp_bc_3?ie=UTF8&node=1040658) and demonstrates how to structure product data, attributes and categories.

## Categories

Below is an example category tree for men's apparel. Each category includes a suggested slug and parent category.

| Category              | Slug                | Parent         |
|-----------------------|--------------------|----------------|
| Men's Clothing        | `mens-clothing`    | *(root)*       |
| Tops                  | `tops`             | Men's Clothing |
| T‑Shirts              | `t-shirts`         | Tops           |
| Shirts & Dress Shirts | `shirts`           | Tops           |
| Sweaters & Hoodies    | `sweaters-hoodies` | Tops           |
| Pants                 | `pants`            | Men's Clothing |
| Jeans                 | `jeans`            | Pants          |
| Shorts                | `shorts`           | Pants          |
| Outerwear             | `outerwear`        | Men's Clothing |
| Activewear            | `activewear`       | Men's Clothing |
| Suits & Sport Coats   | `suits`            | Men's Clothing |

Categories can be imported via the commercetools Category API. Products can then be assigned to one or more of these categories.

## Product Type

A product type defines the set of attributes shared by products. Below is an example of a `mens-apparel` product type with typical apparel attributes. Attribute constraints are simplified for readability.

| Attribute Name | Type          | Required | Notes                                                   |
|----------------|--------------|----------|---------------------------------------------------------|
| `title`        | Text         | Yes      | Product name shown to shoppers                          |
| `description`  | Text         | No       | Detailed description                                    |
| `brand`        | Text         | No       | Brand or manufacturer                                   |
| `size`         | Enum         | Yes      | Sizes such as `XS`, `S`, `M`, `L`, `XL`                 |
| `color`        | Enum         | Yes      | Colors offered (e.g. `Black`, `Blue`, `Gray`)           |
| `material`     | Text         | No       | Cotton, polyester, etc.                                 |
| `fit`          | Enum         | No       | `Regular`, `Slim`, `Relaxed`                            |
| `pattern`      | Text         | No       | Stripe, solid, plaid, etc.                              |
| `sleeveLength` | Enum         | No       | Short, long, sleeveless (for tops)                      |

The `size` and `color` attributes are commonly used as variant attributes to create different product variants (for example size/color combinations).

## Pricing Structure

Pricing on commercetools can be represented with multiple price objects on a variant. Here is a basic structure showing list price, sale price and a promotional price:

```json
{
  "value": { "currencyCode": "USD", "centAmount": 5000 },
  "country": "US",
  "customerGroup": null,
  "channel": null,
  "validFrom": null,
  "validUntil": null,
  "tiers": [],
  "discounted": null,
  "custom": {
    "type": { "key": "price-type" },
    "fields": {
      "type": "list"
    }
  }
}
```

A product variant may include multiple price objects, for example:

1. **List Price** – regular price (e.g. $50.00)
2. **Sale Price** – discounted price during a sale period (e.g. $40.00)
3. **Promotional Price** – special promotions like "Buy One Get One 5% Off". This can be modeled using a cart discount or custom fields referencing the promotion details.

Commercetools also supports [Cart Discounts](https://docs.commercetools.com/api/projects/cartDiscounts) to handle buy‑one‑get‑one or percentage discounts at checkout.

## Example Product Draft

```json
{
  "productType": { "key": "mens-apparel" },
  "name": { "en": "Classic Crew Neck Tee" },
  "slug": { "en": "classic-crew-neck-tee" },
  "categories": [
    { "key": "t-shirts" },
    { "key": "tops" }
  ],
  "masterVariant": {
    "sku": "tee-001-black-m",
    "attributes": [
      { "name": "size", "value": "M" },
      { "name": "color", "value": "Black" },
      { "name": "material", "value": "100% Cotton" }
    ],
    "images": [
      { "url": "https://example.com/image1.jpg" }
    ],
    "prices": [
      {
        "value": { "currencyCode": "USD", "centAmount": 2000 },
        "custom": { "fields": { "type": "list" } }
      },
      {
        "value": { "currencyCode": "USD", "centAmount": 1500 },
        "custom": { "fields": { "type": "sale" } }
      }
    ]
  }
}
```

This example shows a single variant but additional variants can be added for other sizes or colors. Promotional pricing like "Buy One Get One 5% Off" would be implemented using a cart discount rather than stored directly on the product.

## References

- [commercetools Product Modeling Overview](https://docs.commercetools.com/learning-model-your-product-catalog/product-modeling/overview)
- [Amazon Men's Clothing Categories](https://www.amazon.com/Men-Clothing/b/ref=dp_bc_3?ie=UTF8&node=1040658)

