import React, { useEffect, useState } from 'react';
import "./main-body.css"


const MainBody = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const openInNewTab = (url) => {
        if (login == "Денис") {
            if (password == 123) {
                window.open(url).focus();
            }
        } else {
            alert("Неправильный пароль")
        }
    }
    return (
        <div>
            <form>
                <div>
                    <label>
                        Логин:
                        <input type="text" value={login} className="input" onChange={(event) => setLogin(event.target.value)}>
                        </input>
                    </label>
                </div>
                <div>
                    <label>
                        Пароль:
                        <input type="text" value={password} className="input" onChange={(event) => setPassword(event.target.value)}></input>
                    </label>
                </div>
                <div>
                    <span>Запомнить меня?</span><input type="checkbox" id='checkbox' className='checkbox'></input>
                </div>
                <div>
                    <button type="button" className='submitButton' id='submitButton' onClick={() => openInNewTab("http://risovach.ru/upload/2018/09/mem/putin_187583883_orig_.jpg")}>Войти</button>
                </div>
            </form>
        </div>
    )
}

export default MainBody