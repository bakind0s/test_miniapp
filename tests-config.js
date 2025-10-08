// Конфигурация для всех психологических тестов
const testsConfig = {
    // Тест САН (уже реализован)
    san: {
        name: "САН",
        fullName: "Самочувствие - Активность - Настроение",
        description: "Оценка функционального состояния человека",
        questionsCount: 30,
        timeEstimate: "5-7 минут",
        categories: ["wellbeing", "activity", "mood"],
        implemented: true
    },
    
    // Заготовки для будущих тестов
    test2: {
        name: "Тест 2",
        fullName: "Название второго теста",
        description: "Описание второго теста",
        questionsCount: 0,
        timeEstimate: "0 минут",
        categories: [],
        implemented: false
    },
    
    test3: {
        name: "Тест 3", 
        fullName: "Название третьего теста",
        description: "Описание третьего теста",
        questionsCount: 0,
        timeEstimate: "0 минут",
        categories: [],
        implemented: false
    },
    
    test4: {
        name: "Тест 4",
        fullName: "Название четвертого теста", 
        description: "Описание четвертого теста",
        questionsCount: 0,
        timeEstimate: "0 минут",
        categories: [],
        implemented: false
    },
    
    test5: {
        name: "Тест 5",
        fullName: "Название пятого теста",
        description: "Описание пятого теста", 
        questionsCount: 0,
        timeEstimate: "0 минут",
        categories: [],
        implemented: false
    }
};

// Функция для получения информации о тесте
function getTestInfo(testId) {
    return testsConfig[testId] || null;
}

// Функция для получения списка доступных тестов
function getAvailableTests() {
    return Object.keys(testsConfig).filter(testId => testsConfig[testId].implemented);
}

// Функция для получения списка всех тестов
function getAllTests() {
    return Object.keys(testsConfig);
}

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        testsConfig,
        getTestInfo,
        getAvailableTests,
        getAllTests
    };
}
