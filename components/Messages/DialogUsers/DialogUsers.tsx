import React from 'react';

export type DialogsType = {
    name: string
    id: number
}


const DialogUsers = (props: DialogsType) => {
    return (
        <div>
            {props.name}
        </div>
    );
};

export default DialogUsers;