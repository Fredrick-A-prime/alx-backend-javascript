export default function getFullResponseFromAPI(success){
    var success;
    const Mypromise = new Promise((resolve, reject) => {
        if (success === true){
            resolve({
                status : 200,
                body : 'Success'
            });
        } else {
            reject("The fake API is not working currently");
        }
    });
    return Mypromise;
};
