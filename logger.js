const text="TopLearn";

const sayHi=name=>{
    console.log(`Hello ${name}`);
}

// module.exports={
//     text,
//     sayHi,
// }
// module.exports.greeting=sayHi;
// module.exports.toplearn=text;

// module.exports={
//     greeting:sayHi,
//     toplearn:text
// };

exports.greeting=sayHi;
exports.toplearn=text;