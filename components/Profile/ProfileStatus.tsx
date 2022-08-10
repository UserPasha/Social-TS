import React, {ChangeEvent, useState} from 'react';

type ProfileStatusPropsType = {
   status: string
    updateStatus: (status: string)=>void
}

const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [mode, setMode] = useState(false)

    const [status, setStatus] = useState<string>(props.status)


    const valueChanger = (e: ChangeEvent<HTMLInputElement>) => {

        setStatus(e.currentTarget.value)
    }
    const StatusSaver = () => {
        setMode(false)
        props.updateStatus(status)
    }


    const StatusChanger = () => {
        setMode(true)
    }
    React.useEffect(() => { props.updateStatus(status)}, [status])

    return (
        <div>
            {!mode &&
                <div>
                        <span onDoubleClick={StatusChanger}>
                            {status? status: "----"}
                        </span>
                </div>
            }
            {mode &&
                <div>
                    <input autoFocus={true}

                           value={status}
                           onChange={valueChanger}
                    />
                    <button onClick={StatusSaver}>Save status</button>
                </div>

            }
        </div>
    );
};

export default ProfileStatus;