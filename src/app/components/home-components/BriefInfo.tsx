import { animateFadeUp } from '@/app/animation/animationVariants'
import { motion } from 'motion/react'

export const BriefInfo = () => {
    return (
        <motion.p
            variants={animateFadeUp}
            initial={"offscreen"}
            whileInView={"onscreen"}
            custom={0}

            className=' mx-auto text-center'>
            {"With a growing community of fashion-conscious individuals, we have expanded our impact beyond just selling shoes and Safaris—we are shaping lives through empowerment and skill development."}
        </motion.p>
    )
}
