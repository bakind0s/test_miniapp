// Пример конфигурации приложения
const CONFIG = {
    // Telegram Bot API
    BOT_TOKEN: 'YOUR_BOT_TOKEN_HERE',
    
    // ID администраторов для получения результатов
    ADMIN_CHAT_IDS: [
        'YOUR_FIRST_ADMIN_ID', // Первый админ
        'YOUR_SECOND_ADMIN_ID' // Второй админ
    ],
    
    // Базовый URL для API запросов
    API_BASE_URL: 'https://api.telegram.org/bot',
    
    // Настройки приложения
    APP_NAME: 'Психологические тесты',
    VERSION: '0.3',
    
    // Настройки тестов
    TESTS: {
        SAN: {
            name: 'САН',
            description: 'Самочувствие - Активность - Настроение',
            questionsCount: 30
        }
    }
};

// Функция для получения полного URL API
function getApiUrl(method) {
    return `${CONFIG.API_BASE_URL}${CONFIG.BOT_TOKEN}/${method}`;
}

// Функция для отправки данных в Telegram
async function sendToTelegram(data) {
    try {
        const response = await fetch(getApiUrl('sendMessage'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Ошибка при отправке в Telegram:', error);
        return null;
    }
}

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, getApiUrl, sendToTelegram };
}