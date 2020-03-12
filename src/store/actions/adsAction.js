import * as actions from './actionTypes';


export const checkAdBlocks = () => {

    return async dispatch => {
        try {
            const res = await fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { 
                method: 'HEAD', 
                mode: 'no-cors'
              })

            console.log(res);
            
            dispatch({ type: actions.CHECK_AD_BLOCKS });
            
        } catch (err) {
            console.log(err);
            
            dispatch({ type: actions.ADS_FAIL, payload: err.message })
        }
    }
}