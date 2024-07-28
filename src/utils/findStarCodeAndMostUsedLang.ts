

type Code_Object = {
    _id: string;
    title: string;
    courseCode: string;
    language: string;
    code: string;
    isStar: boolean;
    author: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
};

export type Codes_State_Return_Type = {
    totalStarred: number;
    mostUsedLanguage: string | null
}

const find_StarCode_And_MostUsedLang = (codeArray: Code_Object[]): Codes_State_Return_Type => {
    let totalStarred = 0;
    const languageCount: Record<string, number> = {};


    codeArray.forEach((code) => {
        if (code.isStar) {
            totalStarred++;
        }
        // Count the number of times each lang is used
        if (languageCount[code.language]) {
            languageCount[code.language]++;
        } else {
            languageCount[code.language] = 1;
        }
    });
    // Find the lang with highest count
    let mostUsedLanguage = null;
    let maxCount = 0;
    for (const language in languageCount) {
        if (languageCount[language] > maxCount) {
            maxCount = languageCount[language];
            mostUsedLanguage = language;
        }
    }
    // Format most used lang with its count
    if (mostUsedLanguage) {
        mostUsedLanguage = `${mostUsedLanguage} (${maxCount})`;
    }
    return { totalStarred, mostUsedLanguage };
}



export default find_StarCode_And_MostUsedLang;