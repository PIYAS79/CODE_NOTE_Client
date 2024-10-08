import React, { useState } from 'react';
import { Select, Input, Space, Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setSearchSelectValue } from '../redux/features/timeLineSlice';

const options = [
    {
        value: 'student',
        label: 'student',
    },
    {
        value: 'teacher',
        label: 'faculty',
    },
    {
        value: 'code',
        label: 'code',
    },
];

const TimeLine_Search = () => {
    const {inputval,selectVal} = useAppSelector(state => state.timeline);
    const dispatch = useAppDispatch();
    const [selectValue, setSelectValue] = useState(selectVal);
    const [inputValue, setInputValue] = useState(inputval);

    // for select value
    const handleSelectChange = (value: string) => {
        setSelectValue(value);
        dispatch(setSearchSelectValue({ selectVal:value, inputValue: '' }));
    };

    // for input value
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    // for hit the search
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setSearchSelectValue({ selectVal, inputValue }));
    };

    return (
        <form style={{ marginTop: '1rem' }} onSubmit={handleSubmit}>
            <Space.Compact>
                <Select defaultValue={selectValue} style={{ width: 120 }} onChange={handleSelectChange}>
                    {options.map(option => (
                        <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
                    ))}
                </Select>
                <Input
                    style={{ background: '#EFD9AC' }}
                    value={inputValue}
                    placeholder="Search..."
                    onChange={handleInputChange}
                />
                <Button type="primary" htmlType="submit">Submit</Button>
            </Space.Compact>
        </form>
    );
};

export default TimeLine_Search;
