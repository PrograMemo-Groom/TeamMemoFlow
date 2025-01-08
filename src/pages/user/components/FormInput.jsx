import React from 'react';
import styles from "../Login.module.scss";
import ValidateLabel from "./ValidateLabel";

const FormInput = ({id, value, type="text", label, pwCheck="", isChecked=true, onChange, tag}) => {
    return (
        <>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor={id}>{label}</label>
                <input className={styles.input}
                       id={id}
                       type={type}
                       placeholder={label}
                       value={value}
                       onChange={(e) => onChange(e.target.value, tag)}
                />
            </div>
            {isChecked && <ValidateLabel value={value} pwCheck={pwCheck} label={label} tag={tag}/>}
        </>
    );
};

export default FormInput;
