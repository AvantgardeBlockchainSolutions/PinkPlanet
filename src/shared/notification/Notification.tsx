import { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { notificationClose } from 'logic/action/notification.action';
import { NotificationCont, NotificationCard, CloseSym, NotificationInfo, StatusSym, Title, Info, ChainLink } from './style'
import CrossIcon from 'assets/icons/white-cross.svg'
import SuccessIcon from 'assets/icons/success.png'
import FailedIcon from 'assets/icons/failed.png'

const dismissTime = 10000

const Notification = () => {
    const selector = useSelector((state: any) => state)
    const dispatch = useDispatch()
    const { isOpen, info } = selector.notification

    useEffect(() => {
        if (isOpen) {
            const interval = setInterval(() => {
                dispatch(notificationClose())
            }, dismissTime);

            return () => {
                clearInterval(interval);
            }
        }
    }, [dispatch, isOpen])

    const handleDelete = () => {
        dispatch(notificationClose())
    }

    const handleClickOutside = (e: any) => {
        if (e.target === e.currentTarget) {
            dispatch(notificationClose())
        }
    }

    return (
        <Fragment>
            {
                isOpen &&
                <NotificationCont onMouseDown={handleClickOutside}>
                    <NotificationCard >
                        <CloseSym src={CrossIcon} alt="" onClick={() => handleDelete()} />
                        <NotificationInfo>
                            <StatusSym src={info.type === 'success' ? SuccessIcon : FailedIcon} alt="" />
                            <div>
                                <Title>{info.type === 'success' ? 'Transaction Confirmed' : info.type === 'failed' ? 'Transaction Failed' : ''}</Title>
                                <Info> {info.message}</Info>
                                {!!info.link && <ChainLink href={info.link} target='_blank' type={info.type === 'success'}>View on chain</ChainLink>}
                            </div>
                        </NotificationInfo>
                    </NotificationCard>

                </NotificationCont>
            }
        </Fragment>
    );
};

export default Notification;
