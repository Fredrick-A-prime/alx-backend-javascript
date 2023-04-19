export default function getResponseFromAPI(){
    let count = true
    const Mypromise = new Promise((resolve, reject) => {
        if(count){
            resolve();
        } else {
            reject();
        }
    })
    return Mypromise
}
