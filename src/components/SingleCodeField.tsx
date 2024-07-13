import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import hljs from '../utils/highlightSetup';
import 'highlight.js/styles/github.css';


const detectLanguage = (code:string) => {
  try {
    const detectedLanguage = hljs.highlightAuto(code).language;
    return detectedLanguage || 'plaintext';
  } catch (error) {
    console.error('Error detecting language:', error);
    return 'plaintext';
  }
};

const SingleCodeField = ({ code }:{code:string}) => {
  const lang = detectLanguage(code);
  console.log(lang); // This should now log the correct language
  return (
    <SyntaxHighlighter language={lang} style={atomDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export default SingleCodeField;
