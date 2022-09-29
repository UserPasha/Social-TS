import React, {ChangeEvent, FC, memo, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus: FC<ProfileStatusPropsType> = memo(({status, updateStatus}) => {

    const [mode, setMode] = useState(false)

    const [localStatus, setLocalStatus] = useState<string>(status)


    const valueChanger = (e: ChangeEvent<HTMLInputElement>) => {

        setLocalStatus(e.currentTarget.value)
    }
    const StatusSaver = () => {
        setMode(false)
        updateStatus(localStatus)
    }


    const StatusChanger = () => {
        setMode(true)
    }
    React.useEffect(() => {
        setLocalStatus(status)
    }, [status])

    return (
        <div>
            {!mode &&
                <div>
                        <span onDoubleClick={StatusChanger}>
                            {localStatus ? localStatus : "----"}
                        </span>
                </div>
            }
            {mode &&
                <div>
                    <input autoFocus={true}

                           value={localStatus}
                           onChange={valueChanger}
                    />
                    <button onClick={StatusSaver}>Save status</button>
                </div>

            }
        </div>
    );
});

export default ProfileStatus;