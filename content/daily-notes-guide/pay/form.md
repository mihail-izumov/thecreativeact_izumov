---
draft:
---
# Цифровой дневник – Гид

# Форма оплаты

Какой-то текст перед формой.

<div class="payment-form-container" style="background-color: #ffffff; padding: 2rem 1rem; border-radius: 8px;">
<link rel="stylesheet" href="https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css?v=1.25.0">
<form class="yoomoney-payment-form" action="https://yookassa.ru/integration/simplepay/payment" method="post" accept-charset="utf-8">
    <div class="ym-products">
        <div class="ym-block-title ym-products-title">Товары</div>
        <div class="ym-product">
            <div class="ym-product-line">
                <span class="ym-product-description"><span class="ym-product-count">1×</span>Цифровой дневник - Гид</span>
                <span class="ym-product-price" data-price="50" data-id="218" data-count="1">50,00&nbsp;₽</span>
            </div>
            <input disabled="" type="hidden" name="text" value="Цифровой дневник - Гид">
            <input disabled="" type="hidden" name="price" value="50">
            <input disabled="" type="hidden" name="quantity" value="1">
            <input disabled="" type="hidden" name="paymentSubjectType" value="commodity">
            <input disabled="" type="hidden" name="paymentMethodType" value="full_prepayment">
            <input disabled="" type="hidden" name="tax" value="1">
        </div>
    </div>
    <input value="" type="hidden" name="ym_merchant_receipt">
    <div class="ym-customer-info">
        <div class="ym-block-title">О покупателе</div>
        <input name="cps_email" class="ym-input" placeholder="Email" type="text" value="">
    </div>
    <div class="ym-hidden-inputs">
        <input name="shopSuccessURL" type="hidden" value="https://runscale.ru/">
        <input name="shopFailURL" type="hidden" value="https://ya.ru/">
    </div>
    <input name="customerNumber" type="hidden" value="тест">
    <div class="ym-payment-btn-block ym-before-line ym-align-space-between">
        <div class="ym-input-icon-rub ym-display-none">
            <input name="sum" placeholder="0.00" class="ym-input ym-sum-input ym-required-input" type="number" step="any" value="50">
        </div>
        <button data-text="Заплатить" class="ym-btn-pay ym-result-price">
            <span class="ym-text-crop">Заплатить</span>
            <span class="ym-price-output">50,00&nbsp;₽</span>
        </button>
        <img src="https://yookassa.ru/integration/simplepay/img/iokassa-gray.svg?v=1.25.0" class="ym-logo" width="114" height="27" alt="ЮKassa">
    </div>
    <input name="shopId" type="hidden" value="1026515">
</form>
</div>

<script src="https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js?v=1.25.0"></script>

Текст после формы.
