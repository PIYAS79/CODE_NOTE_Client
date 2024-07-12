import { theme } from 'antd';
import { Content } from 'antd/es/layout/layout'
import RecentlyAdded from '../components/RecentlyAdded';
import AllCodes from '../components/AllCodes';

const ContentSection = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Content style={{ margin: '24px 16px 0',height:'100%'}}>
            <div
                style={{
                    padding: 24,
                    minHeight: '100%',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    overflowY:'scroll',
                    height:'100%'
                }}
            >
                <RecentlyAdded />
                <AllCodes />
            </div>
        </Content>
    )
}

export default ContentSection