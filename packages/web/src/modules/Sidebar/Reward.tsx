import React from 'react';

import AlipayImage from '@fiora/assets/images/alipay.png';
import WxpayImage from '@fiora/assets/images/wxpay.png';
import Dialog from '../../components/Dialog';
import Style from './Reward.less';

interface RewardProps {
    visible: boolean;
    onClose: () => void;
}

function Reward(props: RewardProps) {
    const { visible, onClose } = props;
    const avatar1 = 'https://pan.tsmoe.com/d/%E4%B8%80%E5%88%BB%E7%9B%B8%E5%86%8C/%E5%96%9C%E7%88%B1/202311060258423.webp';
    const avatar2 = 'https://pan.tsmoe.com/d/%E4%B8%80%E5%88%BB%E7%9B%B8%E5%86%8C/%E5%96%9C%E7%88%B1/81272F04-6F0B-492E-BFFA-179233FAAC6B.png'
    return (
        <Dialog
            className={Style.reward}
            visible={visible}
            title="常驻加冰"
            onClose={onClose}
        >
            <div>
                <p className={Style.text}>
                    常驻榜一、榜二、榜三的大哥们
                </p>
                <div className={Style.imageContainer}>
                    <img
                        className={Style.image}
                        src={avatar1}
                        alt="头像1"
                    />
                    <img
                        className={Style.image}
                        src={avatar2}
                        alt="头像2"
                    />
                </div>
            </div>
        </Dialog>
    );
}

export default Reward;
