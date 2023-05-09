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
components in actual size, run storybook as indicated above. Some components are
internal and are not listed here since they are not exposed. If you don't see a
component that you believe should be here or you would like to see an internal
component made external, submit a request and we will respond promptly.

### Brand Link

Displays the brand name of a product.

![Brand Link component](docs/components/brand-link1.png)

It can also be displayed as a link, if there are many products of the same
brand:

![Brand Link component as a link](docs/components/brand-link2.png)

### Cart Empty

The Cart Empty component displays a message stating that the customers shopping
cart is empty.

![Choking Hazard component](docs/components/cart-empty.png)

### Cart Icon

The Cart Icon component displays a shopping cart icon that can be clicked to
redirect the customer to their shopping cart.

![Cart Icon component](docs/components/cart-icon1.png)

The Cart Icon with a badge specifying the number of products in the shopping
cart:

![Cart Icon component with badge](docs/components/cart-icon2.png)

### Choking Hazard

The Choking Hazard component displays a warning on products that contain small
parts and could be harmful to younger children.

![Choking Hazard component](docs/components/choking-hazard.png)

### Featured Product Attributes

The Featured Product Attributes component displays a subset of product
attributes that consumers would be more interested in.

![Featured Product Attributes component](docs/components/featured-product-attributes.png)

### Featured Taxonomies

The Featured Taxonomies component displays related taxonomies used to categories
products. Customers would usually click a taxonomy to view all products within
that category.

![Featured Taxonomies component](docs/components/featured-taxonomies.png)

### Featured Taxonomy

The Featured Taxonomy component displays a single category or taxonomy of
products, such as dog toys or cat food.

![Featured Taxonomy component](docs/components/featured-taxonomy1.png)

When the mouse is hovered over the component, it appears as:

![Featured Taxonomy component with mouse hovered](docs/components/featured-taxonomy2.png)

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

### Rating Summary

The Rating Summary component displays the ratings for a product broken down by
star rating, including the average rating and total number of ratings.

![Rating Summary component](docs/components/rating-summary.png)

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

### Swatch

The Swatch component displays a variant color or material for a product using a
solid color or image.

This is an example of a solid color:

![Swatch component with solid color](docs/components/swatch1.png)

This is an example of an image:

![Swatch component with image](docs/components/swatch2.png)

### Swatches

The Swatches component displays one or more swatches.

![Swatches component](docs/components/swatches.png)

### Wish List Icon

The Wish List Icon component displays a wish list icon that can be clicked to
redirect the customer to their wish list.

![Wish List Icon component](docs/components/wish-list-icon1.png)

The Wish List Icon with a badge specifying the number of products in the wish
list:

![Wish List Icon component with badge](docs/components/wish-list-icon2.png)

## Roadmap

See the [open
issues](https://github.com/ditus-software/react-web-retail/issues) for a
list of proposed features (and known issues).

## License

This project is licensed under the terms of the [MIT license](LICENSE.md).
