import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import hljs from '../utils/highlightSetup';
import 'highlight.js/styles/github.css';
import { CopyOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

const detectLanguage = (code: string) => {
    try {
        const detectedLanguage = hljs.highlightAuto(code).language;
        return detectedLanguage || 'plaintext';
    } catch (error) {
        console.error('Error detecting language:', error);
        return 'plaintext';
    }
};


const SingleCodeField = ({ code }: { code: string }) => {
    const lang = detectLanguage(code);
    console.log(lang);


    //   success copy modal
    const success = () => {
        Modal.success({
            content: 'Successfully Code Copied',
        });
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            success()
        }).catch((error) => {
            console.error('Failed to copy code:', error);
        });
    };

    return (
        <div className='codeBox' style={{ position: 'relative'}}>
            <SyntaxHighlighter language={lang} style={atomDark}>
                {code}
            </SyntaxHighlighter>
            <button
                onClick={handleCopy}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#52c41a',
                    padding: '5px',
                    fontSize:'1rem'
                }}
            >
                <CopyOutlined />
            </button>
        </div>
    );
};

export default SingleCodeField;
