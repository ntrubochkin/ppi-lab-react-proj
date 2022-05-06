import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';
import styles from '../filters/Filters.module.css';

const NewsFilter = ({filter, setFilter}) => {
    var customStyle = {
        input: {
            width: '50%'
        }
    };

    return (
        <div className={styles.filtersWrapper}>
            <MyInput 
                style={customStyle.input}
                placeholder='Your text'
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                style={customStyle.select}
                value={filter.queryField}
                defaultValue="Search field"
                onChange={choise => setFilter({...filter, queryField: choise})}
                options={[
                    { value: 'title', name: 'news title'},
                    { value: 'summary', name: 'news summary'}
                ]}
            />
            <MySelect 
                style={customStyle.select}
                value={filter.sort}
                onChange={choise => setFilter({...filter, sort: choise})}
                defaultValue="Sort"
                options={[
                    { value: 'publishedAt', name: 'by date added'},
                    { value: '', name: 'do not sort'},
                ]}
            />
            
      </div>
    );
};

export default NewsFilter;