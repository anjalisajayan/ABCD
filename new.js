// console.log('before');
// setTimeout(() =>
// {
//     console.log('inside');
// },2000);
// console.log('after');

function getUser(id)
{
    setTimeout(() => 
    {
        return({id:id,name:'Meera'});
    },2000);
}
console.log('before');
const user=getUser(1);
console.log(user);
console.log('after');
