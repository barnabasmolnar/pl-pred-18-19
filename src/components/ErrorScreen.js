import React from 'react'

const ErrorScreen = props => (
    <div>
        <div className="bg-purple-lightest p-4 text-grey-darker">
            <svg className="inline-block align-middle w-10 h-10 fill-current text-pink-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.343 6.35" height="23.999" width="16.415">
                <path className="fill-current text-pink-dark" d="M2.046 1.448l.16.69.69.16.902-.903-.85-.85zm.213-.53a.3.3 0 1 0-.425-.426.3.3 0 0 0 .425.425zM3.85 2.084a.3.3 0 1 0-.424.425.3.3 0 0 0 .424-.425zM2.661.512c.326-.06.66.044.893.278.23.229.334.558.28.879a.21.21 0 0 0 .414.07A1.427 1.427 0 0 0 2.585.098a.21.21 0 0 0 .076.413zm.35 1.98A1.008 1.008 0 0 1 1.853 1.32a.21.21 0 0 0-.414-.075 1.427 1.427 0 0 0 1.64 1.663.21.21 0 0 0-.07-.415z" fill="none" strokeWidth=".15"/>
                <path d="M.265 1.59h.529c.146 0 .264.118.264.264V6.35H0V1.854c0-.146.118-.265.265-.265zm1.587 1.587h.53c.145 0 .264.118.264.264V6.35H1.587V3.44c0-.146.119-.264.265-.264zM3.44 4.764h.529c.146 0 .264.119.264.265v1.32H3.175V5.03c0-.146.118-.265.265-.265z"/>
                <path className="fill-current text-white" d="M2.783 1.652l-.149-.149.02-.02q.034-.034.074-.046.04-.013.123-.01l.05.003q.045.002.075-.006t.049-.027q.029-.029.025-.064-.003-.037-.039-.072-.033-.033-.085-.058-.053-.025-.122-.04l.13-.129q.066.033.116.065.05.033.087.072.1.1.112.194.012.093-.066.172-.04.04-.089.056-.048.015-.123.013l-.05-.002q-.053-.003-.077.004t-.043.025zm-.21-.088l.149.149-.146.146-.149-.148z" aria-label="?" fontWeight="400" fontSize="1.191" fontFamily="sans-serif" letterSpacing="0" wordSpacing="0" strokeWidth=".03"/>
                <path d="M.145 1.26h.254V.536L.138.59V.394L.398.34h.274v.92h.255v.199H.145z" aria-label="1" fontWeight="400" fontSize="1.535" fontFamily="sans-serif" letterSpacing="0" wordSpacing="0" strokeWidth=".038"/>
                <path d="M3.906 4.031q.113.03.172.102.059.072.059.184 0 .166-.127.253-.128.086-.372.086-.086 0-.173-.014-.086-.013-.171-.041v-.223q.08.04.16.062.08.02.158.02.114 0 .175-.04.061-.04.061-.114 0-.076-.063-.115-.062-.04-.184-.04h-.115v-.186h.121q.109 0 .162-.033.053-.035.053-.104 0-.065-.051-.1-.052-.035-.147-.035-.07 0-.14.015-.072.016-.142.047v-.212q.085-.024.17-.036.083-.012.164-.012.218 0 .326.072.109.072.109.216 0 .098-.052.16-.052.063-.153.088z" aria-label="3" fontWeight="400" fontSize="1.535" fontFamily="sans-serif" letterSpacing="0" wordSpacing="0" strokeWidth=".038"/>
            </svg>
            <div className="inline-block align-middle p-2 uppercase text-pink font-semibold tracking-wide">
                An error occured. {props.msg}
            </div>
        </div>
    </div>
)

export default ErrorScreen;