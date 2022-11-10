(()=>{"use strict";function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e&&(this.formElement=e,this.publishableKey=e.getAttribute("data-publishable-key"),this.accountId=e.getAttribute("data-account")?e.getAttribute("data-account"):"",this.idPrefix=e.getAttribute("data-id")?e.getAttribute("data-id"):"",this.locale=give_stripe_vars.preferred_locale,this.fieldsFormat=give_stripe_vars.cc_fields_format,this.isSingleInputField="single"===this.fieldsFormat,this.isMounted=!1,this.fontStyles=[],0!==Object.keys(give_stripe_vars.element_font_styles).length&&this.fontStyles.push(give_stripe_vars.element_font_styles))}var r,a,i;return r=t,(a=[{key:"setupStripeElement",value:function(){var e={};return 0!==this.accountId.trim().length&&(e={stripeAccount:this.accountId}),Stripe(this.publishableKey,e)}},{key:"getElements",value:function(e){var t={locale:this.locale};return this.fontStyles.length>0&&(t={fonts:this.fontStyles,locale:this.locale}),e.elements(t)}},{key:"createElement",value:function(e,t){var r=[],a=this.getElementsToMountOn(),i={style:this.getElementStyles(),classes:this.getElementClasses()};return a.forEach((function(t,a){"card"===t[0]?i.hidePostalCode=!!give_stripe_vars.checkout_address:"cardNumber"===t[0]?i.placeholder=give_stripe_vars.card_number_placeholder_text:"cardCvc"===t[0]?i.placeholder=give_stripe_vars.card_cvc_placeholder_text:delete i.placeholder,r.push(e.create(t[0],i))})),"cardNumber"===a[0][0]&&r[0].addEventListener("change",(function(e){var r="diners"===e.brand?"dinersclub":e.brand;t.querySelector(".card-type").className="card-type "+r})),r}},{key:"destroyElement",value:function(e){e.forEach((function(e,t){e.destroy()}))}},{key:"getElementStyles",value:function(){return{base:give_stripe_vars.element_base_styles,complete:give_stripe_vars.element_complete_styles,empty:give_stripe_vars.element_empty_styles,invalid:give_stripe_vars.element_invalid_styles}}},{key:"getElementClasses",value:function(){return{focus:"focus",empty:"empty",invalid:"invalid"}}},{key:"getElementsToMountOn",value:function(){var e={cardNumber:"#give-card-number-field-".concat(this.idPrefix),cardCvc:"#give-card-cvc-field-".concat(this.idPrefix),cardExpiry:"#give-card-expiration-field-".concat(this.idPrefix)};return this.isSingleInputField&&(e={card:"#give-stripe-single-cc-fields-".concat(this.idPrefix)}),Object.entries(e)}},{key:"mountElement",value:function(e){var t=this.getElementsToMountOn();Array.from(e).forEach((function(e,r){e.mount(t[r][1])}))}},{key:"unMountElement",value:function(e){var t=this.getElementsToMountOn();Array.from(e).forEach((function(e,r){e.unmount(t[r][1])}))}},{key:"createPaymentMethod",value:function(e,t,r){var a={};if(this.isSingleInputField||(a.name=e.querySelector('input[name="card_name"]').value),!give_stripe_vars.stripe_card_update){var i=e.querySelector('input[name="give_first"]').value,n=e.querySelector('input[name="give_last"]').value,l=e.querySelector('input[name="give_email"]').value;a.name="".concat(i," ").concat(n),a.email=l,e.querySelector("[id^=give-purchase-button]").setAttribute("disabled","disabled")}if(give_stripe_vars.checkout_address&&!give_stripe_vars.stripe_card_update){var s=e.querySelector(".card-address").value,o=e.querySelector(".card-address-2").value,c=e.querySelector(".card-city").value,u=e.querySelector(".card_state").value,d=e.querySelector(".card-zip").value,v=e.querySelector(".billing-country").value;a.address={line1:s||"",line2:o||"",city:c||"",state:u||"",postal_code:d||"",country:v||""}}t.createPaymentMethod({type:"card",card:r[0],billing_details:a}).then((function(t){if(t.error){var r=jQuery(e),a='<div class="give_errors"><p class="give_error">'.concat(t.error.message,"</p></div>"),i=e.getAttribute("data-id");return Give.form.fn.resetDonationButton(r),void(e.querySelector("#give-stripe-payment-errors-".concat(i)).innerHTML=a)}e.querySelector('input[name="give_stripe_payment_method"]').value=t.paymentMethod.id,e.submit()}))}},{key:"triggerStripeModal",value:function(e,t,r,a){var i=e.querySelector('input[name="give-form-id-prefix"]'),n=e.querySelector("#give-stripe-checkout-modal-donate-button-".concat(i.value)),l=e.querySelector('input[name="card_name"]'),s={};a.forEach((function(e){s.cardName=!1,e.addEventListener("ready",(function(e){s[e.elementType]=!1,s.cardName="card"===e.elementType})),e.addEventListener("change",(function(e){s[e.elementType]=e.complete,Object.values(s).every((function(e){return!0===e}))?n.removeAttribute("disabled"):n.setAttribute("disabled","disabled")}))})),null!==l&&l.addEventListener("keyup",(function(e){s.cardName=""!==e.target.value,Object.values(s).every((function(e){return!0===e}))?n.removeAttribute("disabled"):n.setAttribute("disabled","disabled")})),null!==n&&n.addEventListener("click",(function(i){var l=i.target,s=l.nextElementSibling;n.getAttribute("data-is_legacy_form")?(l.value=give_global_vars.purchase_loading,s.style.display="inline-block"):(l.value="",s.classList.add("sequoia-loader"),s.classList.add("spinning"),s.classList.remove("give-loading-animation")),t.createPaymentMethod(e,r,a),i.preventDefault()}))}}])&&e(r.prototype,a),i&&e(r,i),Object.defineProperty(r,"prototype",{writable:!1}),t}();document.addEventListener("DOMContentLoaded",(function(e){Array.from(document.querySelectorAll(".give-form-wrap")).forEach((function(e){var r=e.querySelector(".give-form");if(null!==r&&r.getAttribute("data-publishable-key")){var a=give_stripe_vars.hasOwnProperty("stripe_card_update")&&parseInt(give_stripe_vars.stripe_card_update),i=r.querySelector('input[name="give-form-id-prefix"]'),n=new t(r),l=n.setupStripeElement(),s=n.getElements(l),o=n.createElement(s,r),c=Give.form.fn.getInfo("stripe-checkout-type",r);d(!1),document.addEventListener("give_gateway_loaded",d),r.onsubmit=function(e){var t=u(),s=t.selectedGatewayId,c=t.isStripeModalCheckoutGateway;if((a||"stripe"===s)&&(n.createPaymentMethod(r,l,o),e.preventDefault()),c){var d=r.querySelector(".give-stripe-checkout-modal"),v=d.querySelector(".give-stripe-checkout-donation-amount"),p=d.querySelector(".give-stripe-checkout-donor-email"),m=r.querySelector(".give-final-total-amount").textContent,y=r.querySelector('input[name="give_email"]').value,f=r.querySelector('input[name="give_validate_stripe_payment_fields"]');d.classList.add("give-stripe-checkout-show-modal"),null!==v&&(v.innerHTML=m),null!==p&&(p.innerHTML=y),f.setAttribute("value","1");var g=r.querySelector(".give-stripe-checkout-modal-close");null!==g&&g.addEventListener("click",(function(e){r.querySelector("#give-stripe-checkout-modal-".concat(i.value)).classList.remove("give-stripe-checkout-show-modal");var t=r.querySelector(".give-submit");null!==t&&(t.value=t.getAttribute("data-before-validation-label"),t.nextElementSibling.style.display="none",t.removeAttribute("disabled"),r.querySelector('input[name="give_validate_stripe_payment_fields"]').setAttribute("value","0")),e.preventDefault()})),e.preventDefault()}}}function u(){var e=r.querySelector('input[name="give-gateway"]'),t=e?e.value:"",a="modal"===c;return{formGateway:e,selectedGatewayId:t,isCheckoutTypeModal:a,isStripeModalCheckoutGateway:e&&"stripe_checkout"===t&&a}}function d(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=u(),i=t.selectedGatewayId,s=t.isStripeModalCheckoutGateway;a||"stripe"===i||s?n.mountElement(o):e&&n.unMountElement(o),s&&n.triggerStripeModal(r,n,l,o)}}))}))})();
