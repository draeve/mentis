// axios.<method> will now provide autocomplete and parameter typings
const axios = require('axios').default;

const interact = async (name, input) => {
    const response = await fetch(`https://general-runtime.voiceflow.com/state/610311b018d08e00078f1181/user/${name}/interact`, {
        method: 'POST',
        headers: {
            Authorization: process.env.VF_APIKEY,
        },
        body: JSON.stringify({
            request: { type: 'text', payload: input },
        }),
    });

    console.log(response.json());
};

$(document.ready( () => {
    interact('steve', 'hello');
}))



//
// $(document).ready(() => {
//     const requestOptions = {
//         method: 'post',
//         url: `https://general-runtime.voiceflow.com/state/${process.env.VF_PROJECTID}/user/steve/interact`,
//         headers: {
//             Authorization: process.env.VF_APIKEY
//         },
//         data: {
//             request: {
//                 type: "text",
//                 payload: "hello there"
//             }
//         }
//     };
//
//     console.log(getUser())
//
//
// // Make a request for a user with a given ID
//     axios.get('/user?ID=12345')
//         .then(function (response) {
//             // handle success
//             console.log(response);
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//         .then(function () {
//             // always executed
//         });
//
// // Optionally the request above could also be done as
//     axios.get('/user', {
//         params: {
//             ID: 12345
//         }
//     })
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
//         .then(function () {
//             // always executed
//         });
//
// // Want to use async/await? Add the `async` keyword to your outer function/method.
//     async function getUser() {
//         try {
//             const response = await axios(requestOptions);
//
//             console.log('API call response:', response.data);
//         } catch (error) {
//             console.error('API call error:', error);
//         }
//     }
// })
