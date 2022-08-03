import React, {ChangeEvent, useState} from 'react';

type ProfileStatusPropsType = {
   status: string
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
debugger
    const [mode, setMode] = useState(false)

    const [status, setStatus] = useState<string>(props.status)


    const valueChanger = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    // const StatusSaver = () => {
    //     setMode(false)
    // }

    const escapeStatus = () => {
        setMode(false)
    }
    const StatusChanger = () => {
        setMode(true)
    }

    return (
        <div>
            {!mode &&
                <div>
                        <span onDoubleClick={StatusChanger}>
                            {status}
                        </span>
                </div>
            }
            {mode &&
                <div>
                    <input autoFocus={true}
                           onBlur={escapeStatus}
                           value={status}
                           onChange={valueChanger}
                    />
                    {/*<button onClick={StatusSaver}>Save status</button>*/}
                </div>

            }
        </div>
    );
};

export default ProfileStatus;