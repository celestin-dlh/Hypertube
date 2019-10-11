import React from 'react';

export default function ChangeLanguage() {

    const changeLang = (lang) => {
        localStorage.setItem('language', lang)
        window.location.reload();
    }

    return (
        <React.Fragment>
            <div align='right' >
                <button onClick={ () => changeLang('en') }>
                    <img 
                        src='/images/lang/englishflag.png'
                        alt='englishflag'
                    />
                </button> &nbsp;
                <button onClick={ () => changeLang('fr') }>
                    <img
                        src='/images/lang/frenchflag.png'
                        alt='frenchflag'
                    />
                </button> &nbsp;
                <button onClick={ () => changeLang('es') }>
                    <img 
                        src='/images/lang/spanishflag.png'
                        alt='spanishflag'
                    />
                </button>
            </div>
        </React.Fragment>
    )
}