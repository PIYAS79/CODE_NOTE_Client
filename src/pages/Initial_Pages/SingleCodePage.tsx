import SingleCodeField from "../../components/SingleCodeField"
import AuthorDetails from "../../components/AuthorDetails"
import { Dropdown, MenuProps } from "antd"




const onMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
};

const items = [
    {
        key: 'star',
        label: 'Star Code',
    },
    {
        key: 'update',
        label: 'Update Code',
    },
    {
        key: 'delete',
        label: 'Delete Code',
    },
];


const codeX = `const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    }).catch((error) => {
      console.error('Failed to copy code:', error);
    });
  };
`


const SingleCodePage = () => {
    return (
        <div className="codeWrapper" >
            <div className="codeLeft" style={{ lineHeight: '5px' }}>
                <div style={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontFamily: 'var(--Wittgenstein)', margin: '1rem 0rem 1.5rem 0rem', color: '#4a4a4a', fontSize: '1.2rem' }}>Title : <span style={{ fontWeight: "bold" }}>Algorithm Code</span></p>
                    <div>
                        <Dropdown.Button menu={{ items, onClick: onMenuClick }}>actions</Dropdown.Button>
                    </div>
                </div>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Course Code : <span style={{ fontWeight: "bold" }}>CSE332</span></p>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Language : <span style={{ fontWeight: "bold" }}>C++</span></p>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '1rem', color: '#4a4a4a' }}>Created At : <span style={{ fontWeight: "bold" }}>12 December 2024</span></p>
                <p style={{ fontFamily: 'var(--Wittgenstein)', marginBottom: '2rem', color: '#4a4a4a' }}>Updated At : <span style={{ fontWeight: "bold" }}>12 December 2024</span></p>
                <SingleCodeField code={codeX} />
            </div>
            <div className="codeRight">
                <AuthorDetails />
            </div>
        </div>
    )
}

export default SingleCodePage