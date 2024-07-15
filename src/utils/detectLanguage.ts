import hljs from '../utils/highlightSetup';



export const detectLanguage = (code: string) => {
    try {
        const detectedLanguage = hljs.highlightAuto(code).language;
        return detectedLanguage || 'plaintext';
    } catch (error) {
        console.error('Error detecting language:', error);
        return 'plaintext';
    }
};