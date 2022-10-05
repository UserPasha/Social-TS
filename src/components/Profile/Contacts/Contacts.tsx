import React, {FC} from 'react';
import c from './Contacts.module.css'

type ContactsType = {
    contactTitle: string
    contactValue: string
}
export const Contacts:FC<ContactsType> = ({contactTitle, contactValue}) => {
    return (
        <div>
            <span className={c.request}>{contactTitle}: </span>
            <span className={c.response}>{contactValue}</span>
        </div>
    );
};

