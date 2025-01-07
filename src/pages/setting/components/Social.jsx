import styles from "./Social.module.scss"


const Social = ()=>{
    const socialItem = [
        {
            email: '@gmail.com',
            placeholder: "구글"
        },{
            email: '@naver.com',
            placeholder: "네이버"
        },{
            email: '@kakao.com',
            placeholder: "카카오톡"
        }
    ]
    return(
        <fieldset className={styles.container}>
            <legend className={styles.title}>소셜</legend>
            {
                socialItem.map((item, index)=>(
                    <label id={`social_${index}`}>
                        <span>{item.email}</span>
                        <input placeholder={`${item.placeholder} 이메일을 입력해주세요`}/>
                    </label>
                ))
            }

        </fieldset>
    )
}

export default Social;