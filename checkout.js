{% if first_time_accessed %}

<script>
  var ecommerce = {
      'transaction_id': '{{checkout.order_number  | json}}',
      'affiliation': {{shop.name | json}},
      'value': {{checkout.total_price | money_without_currency | replace: ',', '.' | json}},
      'tax': {{checkout.tax_price | money_without_currency | replace: ',','.' | json}},
      'shipping': {{checkout.shipping_price | money_without_currency | replace: ',','.' | json}},
      'subtotal': {{checkout.subtotal_price | money_without_currency| replace: ',','.' | json}},
      'currency': {{checkout.currency | json}},
       {% for discount in checkout.discounts %}
      'coupon': {{discount.code | json}},
      'discount'  : {{discount.amount | money_without_currency | json}},
       {% endfor %}
      'email': {{checkout.email | json}},
      'items':[{% for line_item in checkout.line_items %}{
                        'item_id '        : {{line_item.product.id | json}},                  
                        'item_variant'    : {{line_item.variant.title | json}},             
                        'item_name '      : {{line_item.product.title | json}},
                        'price'           : {{line_item.product.price | money_without_currency | replace: ',', '.' | json}},
                        'item_brand'      : {{line_item.product.vendor | json}},
                        'item_category'   : {{line_item.product.type | json}},
                        'item_list_name'  : {{line_item.collection.title | json}},
                        'quantity'        : {{line_item.quantity | json}},
                        'discount'		  : {{discount.code | json}}
                    },{% endfor %}],
  };

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-000000');
      window.dataLayer.push({
        'pageType': 'purchase',
        'event': 'purchase',
        ecommerce
        });
</script>

{% endif %}
