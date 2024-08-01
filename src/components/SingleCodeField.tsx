import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { detectLanguage } from '../utils/detectLanguage';

const SingleCodeField = ({ code }: { code: string }) => {
    const [lang, setLang] = useState<string | null>(null); // State to hold detected language

    useEffect(() => {
        // Function to detect language asynchronously
        const fetchLang = async () => {
            try {
                const detectedLang = await detectLanguage(code);
                // Set detected language once resolved
                setLang(detectedLang); 
            } catch (error) {
                console.error('Error detecting language:', error);
            }
        };

        // Invoke the language detection function
        fetchLang(); 
    }, [code]);

    //   Success copy modal
    const success = () => {
        Modal.success({
            content: 'Successfully Code Copied',
        });
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            success();
        }).catch((error) => {
            console.error('Failed to copy code:', error);
        });
    };

    if (!lang) {
        // render a loading state while detecting lang
        return <div>Loading...</div>; 
    }

    return (
        <div className='codeBox' style={{ position: 'relative' }}>
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
                    fontSize: '1rem'
                }}
            >
                <CopyOutlined />
            </button>
        </div>
    );
};

export default SingleCodeField;
