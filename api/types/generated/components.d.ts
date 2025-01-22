import type { Schema, Struct } from '@strapi/strapi';

export interface CartDetailsCartItem extends Struct.ComponentSchema {
  collectionName: 'components_cart_details_cart_items';
  info: {
    displayName: 'Cart Item';
    icon: 'shoppingCart';
  };
  attributes: {
    cart_Products: Schema.Attribute.Relation<
      'oneToMany',
      'api::product.product'
    >;
    cart_Quantity: Schema.Attribute.BigInteger;
    cart_Total: Schema.Attribute.Decimal;
  };
}

export interface CategoryComponentCategoryComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_category_component_category_components';
  info: {
    displayName: 'Category Component';
    icon: 'filter';
  };
  attributes: {
    category_Description: Schema.Attribute.RichText;
    category_Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    categoryName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OrderDetailsOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_order_details_order_items';
  info: {
    description: '';
    displayName: 'Order Item';
    icon: 'chartCircle';
  };
  attributes: {
    order_CustomerEmail: Schema.Attribute.Email & Schema.Attribute.Required;
    order_CustomerName: Schema.Attribute.String & Schema.Attribute.Required;
    order_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    order_ProductsOrdered: Schema.Attribute.Relation<
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface OrderDetailsOrderdProductsComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_order_details_orderd_products_component_s';
  info: {
    description: '';
    displayName: 'Ordered Products';
  };
  attributes: {
    orderedProducts_product: Schema.Attribute.Relation<
      'oneToMany',
      'api::product.product'
    >;
    orderedProducts_qauntity: Schema.Attribute.BigInteger;
    orderedProducts_Total: Schema.Attribute.BigInteger;
  };
}

export interface ProductDetailsProductDetails extends Struct.ComponentSchema {
  collectionName: 'components_product_details_product_details';
  info: {
    displayName: 'Product Details';
    icon: 'crown';
  };
  attributes: {
    product_Category: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    product_Description: Schema.Attribute.RichText;
    product_Discount: Schema.Attribute.Decimal;
    product_Featured: Schema.Attribute.Boolean;
    product_Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    product_Name: Schema.Attribute.String;
    product_Price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    product_SKU: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    product_Stock: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    product_Tags: Schema.Attribute.Text;
  };
}

export interface ProductReviewsProductReviews extends Struct.ComponentSchema {
  collectionName: 'components_product_reviews_product_reviews';
  info: {
    description: '';
    displayName: 'Product Reviews';
    icon: 'archive';
  };
  attributes: {
    review_Comment: Schema.Attribute.RichText;
    review_Name: Schema.Attribute.String & Schema.Attribute.Required;
    review_Products: Schema.Attribute.Relation<
      'oneToMany',
      'api::product.product'
    >;
    review_Rating: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
  };
}

export interface SearchComponentsSearchFilter extends Struct.ComponentSchema {
  collectionName: 'components_search_components_search_filters';
  info: {
    description: '';
    displayName: 'searchFilter';
    icon: 'search';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    priceRange: Schema.Attribute.JSON;
    searchPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Search Products...'>;
    searchTerm: Schema.Attribute.String;
    sortBy: Schema.Attribute.Enumeration<
      ['Name ASC ', 'Name DESC', 'Price ASC', 'Price DESC']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cart-details.cart-item': CartDetailsCartItem;
      'category-component.category-component': CategoryComponentCategoryComponent;
      'order-details.order-item': OrderDetailsOrderItem;
      'order-details.orderd-products-component': OrderDetailsOrderdProductsComponent;
      'product-details.product-details': ProductDetailsProductDetails;
      'product-reviews.product-reviews': ProductReviewsProductReviews;
      'search-components.search-filter': SearchComponentsSearchFilter;
    }
  }
}
