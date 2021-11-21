# GA4-Shopify-dataLayer

### Introduction

This repository is an adaptation of [this one](https://github.com/TechnicalWebAnalytics/dataLayer-shopify/blob/master/dataLayer-allPages.js).
I changed the event names and adapted the objects to Google's predefined schema.
You can find more information [here](https://support.google.com/analytics/answer/10119380?hl=en) and here to [configure your Tag Manager](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce?client_type=gtm#add_shipping_info).

### References

- [Data Layer](https://developers.google.com/tag-platform/devguides/datalayer?hl=en)
- [Shopify Liquid Variables cheat sheet](https://www.shopify.com/partners/shopify-cheat-sheet) 
- [GA4 Events](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [GA4 Objects schema](https://support.google.com/analytics/answer/10119380?hl=en)

### Tag Manager
Add your Google Tag Manager ID ([GTM-XXX)](https://developers.google.com/tag-platform/tag-manager/web?hl=en) ad the end of the [dataLayer-allPages.js](https://github.com/paolobtl/GA4-Shopify-dataLayer/blob/main/dataLayer-allPages.js) file.
If you are going to copy the GTM code from your account remember to **remove** the `<script>` tags.
Within this repository you will also find a Tag Manager container that has and event that fires on these e-commerce events:
`view_item_list|view_item|add_to_cart|view_cart|begin_checkout|shipping_method|payment_method|purchase|search|remove_from_cart`.

Additional events are:

 - `first_time_visitor` fired if a user lands on your website for the
   first time
  - `blog` fired on every blog page also pushes post author,
   post's creation date and title
 - `logState` fired on each page, pushed
   website general info and customer info (**do not** [import sensitive
   data](https://support.google.com/analytics/answer/6366371?hl=en#zippy=,in-this-article) into Analytics), 
 - `homepage` fired on your website's homepage
 - `404` fired if a not found file/page is visited, pushes the URL path

### Data Layer
The data layer is an object used by Google Tag Manager and gtag.js to pass information to tags. Events or variables can be passed via the data layer, and triggers can be set up based on the values of variables.

### Integration
Keep note that this is a base template that attempts to exploit Shopify’s data rendering capabilities and create an ease of integration for dataLayers that can be reused across all Shopify sites. Nonetheless, each site could carry variations that may not be completely compatible with this template.
It is highly recommended to review the entire implementation and make your own configurations if needed.
#### Installation Option 1:

If the  **Checkout page  _cannot be edited_**, use this option. ( Checkout page edits are only available on Shopify Plus. )
| Assets | Integration Type | Asset Type |
| --------|---------|---------|
|*theme.liquid* ( or your primary theme template ) | Modification |**Layout:**  _Online Store > Themes > ... > Edit HTML/CSS > Layout > theme.liquid ( or primary theme template )_|
|purchase | Modification |**Admin Setting:**  _Settings > Checkout > Order Processing > Additional Pixels & Scripts_|
|dataLayer-allPages|Creation|**Snippet:**  _Online Store > Themes > ... > Edit HTML/CSS > Snippets > ( will create Snippet in instructions )_|
|Google Tag Manager|Modification|**Layout:**  _Online Store > Themes > Snippets > dataLayer-allPages.liquid_. Add your GTM-XXXX ID at the end.
**Create the dataLayer-allPages snippet (  _use exact naming and casing!_  )**

-   Create a snippet called  **_dataLayer-allPages_**  and copy over the provided  [dataLayer-allPages.js](https://github.com/paolobtl/GA4-Shopify-dataLayer/blob/main/dataLayer-allPages.js) file in the newly created snippet. 
- In the code, navigate to the `Dynamic Dependencies` section and make any necessary changes.

**Add the code to the layouts**
-   Within the  **theme.liquid**  layout, place this include snippet  `{% include 'dataLayer-allPages' %}`  right before the closing </head> tag
-   Within the  **confirmation page**  admin settings, copy over the provided  [checkout.js](https://github.com/paolobtl/GA4-Shopify-dataLayer/blob/main/checkout.js)  code.( Remember, add your GTM ID as in the _dataLayer-allPages_ file )

**Prerequisite Library**

-   These are already included in the dataLayer build.

#### Installation Option 2:

If the  **Checkout page  _can be edited_**, use this option. ( Checkout page edits are only available on Shopify Plus. )
| Assets | Integration Type | Asset Type |
| --------|---------|---------|
|*theme.liquid* ( or your primary theme template ) | Modification |**Layout:**  _Online Store > Themes > ... > Edit HTML/CSS > Layout > theme.liquid ( or primary theme template )_|
|checkout.liquid | Modification |**Layout:**  _Online Store > Themes > ... > Edit HTML/CSS > Layout > checkout.liquid_|
|dataLayer-allPages|Creation|**Snippet:**  _Online Store > Themes > ... > Edit HTML/CSS > Snippets > ( will create Snippet in instructions )_|
|Google Tag Manager|Modification|**Layout:**  _Online Store > Themes > Snippets > dataLayer-allPages.liquid_. Add your GTM-XXXX ID at the end.
**Create the dataLayer-allPages snippet (  _use exact naming and casing!_  )**

-   Create a snippet called  **_dataLayer-allPages_**  and copy over the provided  [dataLayer-allPages.js](https://github.com/paolobtl/GA4-Shopify-dataLayer/blob/main/dataLayer-allPages.js) file in the newly created snippet. 
- In the code, navigate to the `Dynamic Dependencies` section and make any necessary changes.

**Add the code to the layouts**

-   Within the  **theme.liquid**  layout, place this include snippet  `{% include 'dataLayer-allPages' %}`  right before the closing </head> tag
-   Within the  **checkout.liquid**  layout, place this include snippet  `{% include 'dataLayer-allPages' %}`  right before the closing </head> tag

**Prerequisite Library**

-   These are already included in the dataLayer build.
