import {USER_INFO_TYPES} from "../constants/ValidateTypes";

export const validateLengthCheck = (value, label, pwCheck="") => {
    if (value.trim().length === 0) {
        return {
            success: false,
            messages: `${label}의 값이 비어있습니다.`,
        };
    }
    // 비밀번호 처리
    if (value.trim().length < 6) {
        if (label === USER_INFO_TYPES.PW) {
            return {
                success: false,
                messages: `${label}는 6자리 이상이어야 합니다.`,
            };
        } else if (label === USER_INFO_TYPES.PWCK) {
            return {
                success: false,
                messages: `${label}은 6자리 이상이어야 합니다.`,
            };
        }
    }
    if (pwCheck)
        return validatePasswordCheck(value, pwCheck);

    if (label === USER_INFO_TYPES.PHONE) {
        if(!validatePhoneNumberForm(value)) {
            return {
                success: false,
                messages: `${label}은 숫자만 입력 가능합니다.`
            }
        }
    } else if (label === USER_INFO_TYPES.EMAIL) {
        if(!validateEmailForm(value)) {
            return {
                success: false,
                messages: `사용할 수 없는 ${label} 형식입니다.`,
            }
        }
    }
    return {success: true};
}
export const validatePasswordCheck = (value, pwCheck) => {
    if (value !== pwCheck) {
        return {
            success: false,
            messages: "비밀번호가 일치하지 않습니다."
        };
    }
    return {success: true};
}

const validateEmailForm = (value) => {
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regex.test(value);
}
const validatePhoneNumberForm = (value) => {
    const regex = /^[0-9]*$/;
    return regex.test(value);
}
