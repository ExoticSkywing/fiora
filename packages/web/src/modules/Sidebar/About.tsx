import React from 'react';

import Dialog from '../../components/Dialog';
import Style from './About.less';
import Common from './Common.less';

interface AboutProps {
    visible: boolean;
    onClose: () => void;
}

function About(props: AboutProps) {
    const { visible, onClose } = props;
    return (
        <Dialog
            className={Style.about}
            visible={visible}
            title="关于"
            onClose={onClose}
        >
            <div>
                
                <div className={Common.block}>
                    <p className={Common.title}>国际游乐场说明（可选）</p>
                    <ul>
                        <li>
                            点击地址栏最右边三个点按钮(或者地址栏末尾收藏前的按钮)
                        </li>
                        <li>选择&quot;安装 fiora&quot;</li>
                    </ul>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>用户发送消息</p>
                    <ul>
                        <li>若要发送消息，需要注册账号，即可开始聊天</li>
                        <li>注册账号可以保存你的会话记录</li>
                        <li>可以互加好友，WeChat私密聊天</li>
                        <li>账号和密码好好斟酌，不想斟酌就使用你常用喜爱的昵称和简单不会忘的密码。</li>
                        <li>为防止新注册用户，垃圾人疯狂刷屏，新用户24小时之内每分钟最大上限可发五条消息</li>
                    </ul>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>其他特点</p>
                    <ul>
                        <li>可发送内置表情</li>
                        <li>可发送你自己的表情包</li>
                        <li>右上角可邀请好友跟随你</li>
                        <li>下栏的设置，可自定义聊天风格界面</li>
                        <li>左上角可修改你自己的头像</li>
                        <li>若要分享文件，可以使用丰巢快递柜，当一次快递员</li>
                    </ul>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>友情链接</p>
                    <ul>
                        <li>
                            <a
                                href="https://spark.tsmoe.com"
                                target="_black"
                                rel="noopener noreferrer"
                            >
                                占位
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Dialog>
    );
}

export default About;
