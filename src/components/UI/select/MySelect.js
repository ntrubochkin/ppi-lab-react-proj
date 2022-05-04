import React from 'react';
import styles from '../select/Select.module.css';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select className={styles.selectBox} value={value} onChange={e => onChange(e.target.value)}>
          <option disabled value="">{defaultValue}</option>
          {options.map(opt => 
            <option key={opt.value} value={opt.value}>{opt.name}</option>)
          }
        </select>
    );
};

export default MySelect;