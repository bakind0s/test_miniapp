// Конфигурация приложения
const CONFIG = {
    // Telegram Bot API
    BOT_TOKEN: '8366332467:AAFsabD9yHy2oY4ti75rTI775wdIk12c4UY',
    
    // ID администраторов для получения результатов
    ADMIN_CHAT_IDS: [
        '422053793', // Первый админ
        '7943651369' // Второй админ - замените на ID второго админа
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
        },
        PSM25: {
            name: 'PSM-25',
            description: 'Шкала психологического стресса',
            questionsCount: 25
        },
        BURNOUT: {
            name: 'Опросник выгорания',
            description: 'Профессиональное выгорание',
            questionsCount: 22
        },
        ANXIETY: {
            name: 'Шкала тревоги',
            description: 'Ситуационная и личностная тревожность',
            questionsCount: 40
        },
        DEPRESSION: {
            name: 'Шкала депрессии',
            description: 'Оценка депрессивных симптомов',
            questionsCount: 21
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
