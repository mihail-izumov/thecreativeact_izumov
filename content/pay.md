---
title: Оплата
tags: 
link: /pay
---
# Оплата

## Оплата доступа
123

## Оплата

<div id="yookassa-form-container"></div>

<script>
// Динамически загружаем форму
fetch('/payment-form.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('yookassa-form-container').innerHTML = html;
    // Подгружаем скрипт ЮKassa
    const script = document.createElement('script');
    script.src = 'https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js';
    document.body.appendChild(script);
  });
</script>

123