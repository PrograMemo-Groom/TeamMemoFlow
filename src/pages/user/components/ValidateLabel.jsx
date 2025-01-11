import React, {useEffect} from 'react';
import styles from "../Login.module.scss";
import {validateLengthCheck} from "../../../utils/Validate";
import {useDispatch} from "react-redux";
import {setIsFormValid} from "../../../store/slice/CommonSlice";

const ValidateLabel = (props) => {
    const {value, label, pwCheck="", tag} = props;
    const dispatch = useDispatch();
    const [check, setCheck] = React.useState({success: true});
    useEffect(() => {
        const validateResult =
        pwCheck ? validateLengthCheck(value, label, pwCheck) : validateLengthCheck(value, label);

        setCheck(validateResult);
        dispatch(setIsFormValid({tag:tag, isValid: validateResult.success}));
    }, [value, label, pwCheck, dispatch, tag]);

    return (
        !check.success &&
        <label className={styles.invalidData}>{check?.messages}</label>
    );
};

export default ValidateLabel;
