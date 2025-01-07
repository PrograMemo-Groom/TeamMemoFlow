import styles from "./Social.module.scss"
import {FiArrowRight} from "react-icons/fi";


const Social = ()=>{
    const socialItem = [
        {
            email: '@gmail.com',
            sns: "구글"
        },{
            email: '@naver.com',
            sns: "네이버"
        },{
            email: '@kakao.com',
            sns: "카카오톡"
        }
    ]
    return(
        <fieldset className={styles.container}>
            <legend className={styles.title}>소셜</legend>
            {
                socialItem.map((item, index)=>(
                    <label key={`social_${index}`}>
                        <button>{`연동된 ${item.sns} 계정`}</button>
                        <span><FiArrowRight/></span>
                    </label>
                ))
            }

        </fieldset>
    )
}

export default Social;