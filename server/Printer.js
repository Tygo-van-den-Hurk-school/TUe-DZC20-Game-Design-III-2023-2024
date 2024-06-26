"use strict"; //! @Eryk do not touch this file unless absolutely needed.

/**
 * Logs a line on the console for each parameter.
 * 
 * @param  {...any} things 
 */
export default function print(...things) {
    
    const now = new Date();

    const years      = (now.getFullYear() >= 10) ? (`${now.getFullYear()}`) : (`0${now.getFullYear()}`);
    const months     = (  now.getMonth() >= 10 ) ? (  `${now.getMonth()}` ) : (  `0${now.getMonth()}` );
    const days       = (   now.getDay() >= 10  ) ? (   `${now.getDay()}`  ) : (   `0${now.getDay()}`  );
    const dateString = (`\u001B[0m\u001B[36m${years}-${months}-${days}\u001B[0m`)
    
    const hours      = ( now.getHours() >= 10 ) ? ( `${now.getHours()}` ) : ( `0${now.getHours()}` );
    const minutes    = (now.getMinutes() >= 10) ? (`${now.getMinutes()}`) : (`0${now.getMinutes()}`);
    const seconds    = (now.getSeconds() >= 10) ? (`${now.getSeconds()}`) : (`0${now.getSeconds()}`);
    const timeString = (`\u001B[0m\u001B[36m${hours}:${minutes}:${seconds}\u001B[0m`);
    
    console.log(`[${dateString} @ ${timeString}] :`, ...things); 
}