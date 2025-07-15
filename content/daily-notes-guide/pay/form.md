---
draft:
---
# Цифровой дневник – Гид

<div id="yookassa-form-container" style="
    background: white;
    padding: 25px;
    border-radius: 8px;
    margin: 20px 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
"></div>

<script>
// Динамически загружаем форму
fetch('/payment-form.html')
  .then(response => {
    if (!response.ok) throw new Error('Failed to load form');
    return response.text();
  })
  .then(html => {
    const container = document.getElementById('yookassa-form-container');
    container.innerHTML = html;
    
    // Подгружаем скрипт ЮKassa
    const script = document.createElement('script');
    script.src = 'https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js?v=1.25.0';
    script.onerror = () => console.error('Failed to load YooKassa script');
    document.body.appendChild(script);
  })
  .catch(error => {
    console.error('Error loading payment form:', error);
    document.getElementById('yookassa-form-container').innerHTML = `
      <p style="color: red">Ошибка загрузки формы оплаты. Пожалуйста, попробуйте позже.</p>
    `;
  });
</script>
