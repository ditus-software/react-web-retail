# @ditus/react-web-retail

[![License: MIT](https://img.shields.io:/github/license/ditus-software/react-web-retail)](LICENSE.md)
[![build/test](https://github.com/ditus-software/react-web-retail/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ditus-software/react-web-retail/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/ditus-software/react-web-retail/badge.svg?branch=master)](https://coveralls.io/github/ditus-software/react-web-retail?branch=master)
[![contributor covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE-OF-CONDUCT.md)

This repo contains UI components based on Material UI for use in web-based
retail applications. The repo is open source and will remain so. All components
have multi-language/translation support and can be themed.

## Installation

```bash
npm i @ditus/react-web-retail
```

## Demo

To view the components, type:

```bash
npm i
npm run storybook
```

## Components

The following components are included in the package. For demo's and to view
components in actual size, run storybook as indicated above.

### Cart Empty

The Cart Empty component displays a message stating that the customers shopping
cart is empty.

![Choking Hazard component](docs/components/cart-empty.png)

### Choking Hazard

The Choking Hazard component displays a warning on products that contain small
parts and could be harmful to younger children.

![Choking Hazard component](docs/components/choking-hazard.png)

### Featured Product Attributes

The Featured Product Attributes component displays a subset of product
attributes that consumers would be more interested in.

![Product Attributes component](docs/components/featured-product-attributes.png)

### Low Stock

The Low Stock component displays a message when a product is low on quantity.

![Low Stock component](docs/components/low-stock.png)

### Price

The Price component displays the price of a product.

![Price component](docs/components/price.png)

### Product Attribute

The Product Attribute component displays a single name/value pair representing
an attribute of the product, such as the product's color or dimensions.

![Product Attribute component](docs/components/product-attribute.png)

### Product Attributes

The Product Attributes component displays a list of product attributes.

![Product Attributes component](docs/components/product-attributes.png)

### Rating Linear Progress

The Rating Linear Progress component displays a styled Linear Progress bar that
displays the rating for a product.

![Rating Linear Progress component](docs/components/rating-linear-progress.png)

### Rating Summary Bar

The Rating Summary Bar component displays the ratings for a single star (1
through 5) on the Rating Summary component.

![Rating Summary Bar component](docs/components/rating-summary-bar.png)

### Save Coupon

The Save Coupon component displays a message indicating how much the consumer
will save with a coupon that is automatically applied at checkout.

![Save Coupon component](docs/components/save-coupon.png)

### Sponsored

The Sponsored component displays the word 'sponsored' and is meant to be
displayed when a product is promoted for advertising reasons.

![Sponsored component](docs/components/sponsored.png)

## Roadmap

See the [open
issues](https://github.com/ditus-software/react-web-retail/issues) for a
list of proposed features (and known issues).

## License

This project is licensed under the terms of the [MIT license](LICENSE.md).
