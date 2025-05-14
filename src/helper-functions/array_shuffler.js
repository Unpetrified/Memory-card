/**
 * Shuffles the elements of an array.
 * 
 * @param {Array} arr - The array to shuffle.
 * @returns {Array} A new shuffled array.
 * @throws {TypeError} If the input is not an array.
 */
export default function shuffle(arr) {
    if (Array.isArray(arr)) {
        const shuffled_arr = new Array(arr.length);
        while(arr.length > 0) {
            let index = Math.floor(Math.random()*arr.length);
            shuffled_arr[arr.length-1] = arr[index];
            arr.splice(index,1);
        }
        return shuffled_arr;
    } else {
        throw new Error(`${arr} is not an array! Please enter a valid array.`);
        
    }
}