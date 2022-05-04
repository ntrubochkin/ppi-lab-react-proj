import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';
import styles from '../filters/Filters.module.css';

const PostFilter = ({filter, setFilter}) => {
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
                defaultValue="Поле поиска"
                onChange={choise => setFilter({...filter, queryField: choise})}
                options={[
                    { value: 'title', name: 'название'},
                    { value: 'summary', name: 'описание'}
                ]}
            />
            <MySelect 
                style={customStyle.select}
                value={filter.sort}
                onChange={choise => setFilter({...filter, sort: choise})}
                defaultValue="Сортировка"
                options={[
                    { value: 'publishedAt', name: 'по дате добавления'},
                    { value: '', name: 'никак'},
                ]}
            />
            
      </div>
    );
};

export default PostFilter;