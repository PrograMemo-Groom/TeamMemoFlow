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
        return validatePasswordCheck(value, pwCheck, label);
    return {success: true};
}
export const validatePasswordCheck = (value, pwCheck, label) => {
    if (value !== pwCheck) {
        return {
            success: false,
            messages: "비밀번호가 일치하지 않습니다."
        };
    }
    return {success: true};
}
