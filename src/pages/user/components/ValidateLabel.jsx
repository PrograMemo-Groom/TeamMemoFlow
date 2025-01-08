import React, {useEffect} from 'react';
import styles from "../Login.module.scss";
import {validateLengthCheck} from "../../../utils/Validate";

const ValidateLabel = (props) => {
    const {value, label, pwCheck="", isChecked} = props;
    const [check, setCheck] = React.useState({success: true});
    useEffect(() => {
        pwCheck ? setCheck(validateLengthCheck(value, label, pwCheck)) : setCheck(validateLengthCheck(value, label));
    }, [value, label, pwCheck]);

    return (
        !check.success &&
        <label className={styles.invalidData}>{check?.messages}</label>
    );
};

export default ValidateLabel;
