import styles from "../style"
import { arrowUp } from "../assets"

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] aspect-square rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} w-full aspect-square bg-primary rounded-full`}>
        <div className={`${styles.flexStart} flex-col`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className='text-gradient'>Get</span>
            <img src={arrowUp} alt="arrow" className="inline-block m-1 w-[23px] aspect-square object-contain" />
          </p>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className='text-gradient'>Started</span>
          </p>
        </div>
      </div>
    </div>
)

export default GetStarted